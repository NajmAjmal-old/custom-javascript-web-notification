import { createBanner } from "./banner.js";

const title = "Welcome to My Website";
const description = "Explore my Github";

const banner = createBanner(title, description);
document.body.appendChild(banner);
