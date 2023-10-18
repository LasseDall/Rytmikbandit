const { readPage, renderPage } = require("./templateEngine.js");
const { rootPath } = require("../rootPath.js");
const { path } = require("path");


const frontpage = readPage(`${rootPath}/public/pages/frontpage/frontpage.html`);
exports.frontpagePage = renderPage(frontpage);


const leg = readPage(`${rootPath}/public/pages/leg/leg.html`);
exports.legPage = renderPage(leg, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const bevægelse = readPage(`${rootPath}/public/pages/bevægelse/bevægelse.html`);
exports.bevægelsePage = renderPage(bevægelse, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const musik = readPage(`${rootPath}/public/pages/musik/musik.html`);
exports.musikPage = renderPage(musik, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const sprog = readPage(`${rootPath}/public/pages/sprog/sprog.html`);
exports.sprogPage = renderPage(sprog, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const fællesskab = readPage(`${rootPath}/public/pages/fællesskab/fællesskab.html`);
exports.fællesskabPage = renderPage(fællesskab, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});