const fs = require("fs");

function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
}

function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString().
    replace(config.id, `${config.id} class="nav-link dropdown-toggle active"`).
    replace("$STYLESHEET", config.stylesheet);

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

    return navbar + page + footer;
}

module.exports = {readPage, renderPage}