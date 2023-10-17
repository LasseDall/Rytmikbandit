import fs from "fs";

export function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
}

export function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString().
    replace(
        `id="5"`, 
        `id="5" class="nav-link dropdown-toggle active"`
    );

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

    return navbar + page + footer;
}