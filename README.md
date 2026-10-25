# Akshat Rai portfolio

Edit portfolio text, links, projects, and the Spotify endpoint in `src/site.config.js`.

## Set up Spotify

1. Create an app in the Spotify Developer Dashboard and add the redirect URI you will use, such as `http://localhost:5173/callback`.
2. Copy `.env.example` to `.env`, then set the client ID, secret, and redirect URI.
3. Run `node scripts/get-spotify-refresh-token.mjs`, authorize access in the printed URL, copy the `code` parameter from the redirect URL, and run again with `SPOTIFY_AUTH_CODE=... node scripts/get-spotify-refresh-token.mjs`.
4. Add `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN` to Vercel environment variables. `/api/now-playing` is Vercel-compatible and keeps them server-side.

The widget polls only while the tab is visible, caches for 25 seconds, and hides when Spotify is unavailable.

## TODO: info needed from Akshat

Run `npm run todo` to list unresolved fields.

### Links and contact

- [x] links.github: GitHub profile URL (nav GITHUB)
- [x] links.linkedin: LinkedIn profile URL (nav LINKEDIN)
- [x] links.resume: path or URL of the resume PDF, e.g. /resume.pdf (nav RESUME)
- [x] contact.email: email address (card 2 mail button)

### Landing page cards

- [x] building.name: project shown in card 1 (Building now)
- [x] building.repoUrl: that project's GitHub repo URL
- [x] building.thumbnail: optional image path (else the generated graph motif stays) - intentionally skipped
- [x] looking.startTerm: confirm Summer 2027 or give the right internship start

### About modal

- [x] about.photo: photo path (else the AR monogram shows) - intentionally skipped
- [x] about.bio: 3-4 sentence bio (else the hero subtext shows)
- [x] about.skills: confirm or edit the default skill groups

### Projects data

- [x] projects[]: confirm the real project list. Each needs name, one-line description, GitHub URL, tags.

### Spotify

- [ ] Choose host for the serverless function (Vercel or Netlify recommended; plain GitHub Pages cannot run it)
- [ ] Create the Spotify app in the developer dashboard and add the redirect URI
- [ ] SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET (env vars on the host)
- [ ] Run the token script once; save SPOTIFY_REFRESH_TOKEN (env var)

### Decisions the agent reports back

- [x] Background lettering: use the fitted AKSHAT option; it preserves the composition without clipping.
