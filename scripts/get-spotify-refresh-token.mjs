const required = ["SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET", "SPOTIFY_REDIRECT_URI"];
for (const key of required) if (!process.env[key]) throw new Error("Missing " + key);
const scope = "user-read-currently-playing user-read-recently-played";
if (!process.env.SPOTIFY_AUTH_CODE) {
  const query = new URLSearchParams({ response_type: "code", client_id: process.env.SPOTIFY_CLIENT_ID, redirect_uri: process.env.SPOTIFY_REDIRECT_URI, scope });
  console.log("Open this URL, approve access, then run again with SPOTIFY_AUTH_CODE from the redirect URL:\nhttps://accounts.spotify.com/authorize?" + query);
} else {
  const body = new URLSearchParams({ grant_type: "authorization_code", code: process.env.SPOTIFY_AUTH_CODE, redirect_uri: process.env.SPOTIFY_REDIRECT_URI });
  const auth = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", { method: "POST", headers: { Authorization: "Basic " + auth, "Content-Type": "application/x-www-form-urlencoded" }, body });
  if (!response.ok) throw new Error(await response.text()); console.log("SPOTIFY_REFRESH_TOKEN=" + (await response.json()).refresh_token);
}
