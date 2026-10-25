const unavailable = { isPlaying: false, unavailable: true };
const tokenUrl = "https://accounts.spotify.com/api/token";
async function token() {
  const body = new URLSearchParams({ grant_type: "refresh_token", refresh_token: process.env.SPOTIFY_REFRESH_TOKEN });
  const auth = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64");
  const response = await fetch(tokenUrl, { method: "POST", headers: { Authorization: "Basic " + auth, "Content-Type": "application/x-www-form-urlencoded" }, body });
  if (!response.ok) throw Error("token"); return (await response.json()).access_token;
}
function output(item, isPlaying) { const track = item?.track || item; return track ? { isPlaying, title: track.name, artist: track.artists.map((a) => a.name).join(", "), albumArt: track.album?.images?.[0]?.url || "", url: track.external_urls?.spotify || "" } : unavailable; }
export default async function handler(req, res) {
  try {
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) return res.status(200).json(unavailable);
    const access = await token(), headers = { Authorization: "Bearer " + access };
    let response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", { headers });
    if (response.status === 401 || response.status === 429) throw Error("spotify");
    let payload = response.ok && response.status !== 204 ? await response.json() : null, isPlaying = Boolean(payload);
    if (!payload) { response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", { headers }); if (!response.ok) throw Error("recent"); payload = (await response.json()).items?.[0]; isPlaying = false; }
    res.setHeader("Cache-Control", "s-maxage=25, stale-while-revalidate=30"); return res.status(200).json(output(payload, isPlaying));
  } catch { return res.status(200).json(unavailable); }
}
