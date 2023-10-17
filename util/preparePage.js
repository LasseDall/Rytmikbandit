import { readPage, renderPage } from "./templateEngine.js";

const frontpage = readPage("./public/pages/frontpage/frontpage.html");
export const frontpagePage = renderPage(frontpage);