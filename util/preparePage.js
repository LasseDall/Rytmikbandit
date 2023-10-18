const { readPage, renderPage } = require("./templateEngine.js");
const path = require("path");

const frontFilePath = path.join(process.cwd(), "/public/pages/frontpage/frontpage.html");
const frontpage = readPage(frontFilePath);
exports.frontpagePage = renderPage(frontpage, {
    stylesheet: `<link rel="stylesheet" href="/public/assets/css/pejlemærke.css"></link>`
});

const legFilePath = path.join(process.cwd(), "/public/pages/leg/leg.html");
const leg = readPage(legFilePath);
exports.legPage = renderPage(leg, {
    id: 'id="5"',
    stylesheet:  `<link rel="stylesheet" href="/public/assets/css/pejlemærke.css></link>`
});

const bevægelseFilePath = path.join(process.cwd(), "/public/pages/bevægelse/bevægelse.html");
const bevægelse = readPage(bevægelseFilePath);
exports.bevægelsePage = renderPage(bevægelse, {
    id: 'id="5"',
    stylesheet:  `<link rel="stylesheet" href="/public/assets/css/pejlemærke.css></link>`
});

const musikFilePath = path.join(process.cwd(), "/public/pages/musik/musik.html");
const musik = readPage(musikFilePath);
exports.musikPage = renderPage(musik, {
    id: 'id="5"',
    stylesheet:  `<link rel="stylesheet" href="/public/assets/css/pejlemærke.css></link>`
});

const sprogFilePath = path.join(process.cwd(), "/public/pages/sprog/sprog.html");
const sprog = readPage(sprogFilePath);
exports.sprogPage = renderPage(sprog, {
    id: 'id="5"',
    stylesheet:  `<link rel="stylesheet" href="/public/assets/css/pejlemærke.css></link>`
});

const fællesskabFilePath = path.join(process.cwd(), "/public/pages/fællesskab/fællesskab.html");
const fællesskab = readPage(fællesskabFilePath);
exports.fællesskabPage = renderPage(fællesskab, {
    id: 'id="5"',
    stylesheet:  `<link rel="stylesheet" href="/public/assets/css/pejlemærke.css></link>`
});