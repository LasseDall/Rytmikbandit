const fs = require("fs");
const path = require("path");

function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
}

function renderPage(page, config={}) {
    const navbarFilePath = path.join(process.cwd(), "/public/components/navbar/navbar.html");
    const footerFilePath = path.join(process.cwd(), "/public/components/footer/footer.html");
    const navbar = fs.readFileSync(navbarFilePath).toString().
    replace(config.id, `${config.id} class="nav-link active"`).
    replace("$STYLESHEET", config.stylesheet);

    const footer = fs.readFileSync(footerFilePath).toString();

    return navbar + page + footer;
}

module.exports = {readPage, renderPage}