import { PROJECTS, siteConfig } from "../src/site.config.js";
const values = {
  "links.github": siteConfig.links.github, "links.linkedin": siteConfig.links.linkedin,
  "links.resume": siteConfig.links.resume, "contact.email": siteConfig.contact.email,
  "building.name": siteConfig.building.name, "building.repoUrl": siteConfig.building.repoUrl,
  "building.thumbnail": siteConfig.building.thumbnail, "looking.startTerm": siteConfig.looking.startTerm,
  "about.photo": siteConfig.about.photo, "about.bio": siteConfig.about.bio,
  "projects[]": PROJECTS.length ? true : null,
};
for (const [key, value] of Object.entries(values)) if (value === null) console.log(key);
