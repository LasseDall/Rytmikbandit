import { readPage, renderPage } from "./templateEngine.mjs";
import { rootPath } from "../rootPath.mjs";

const frontpage = readPage(`file://${rootPath}/public/pages/frontpage/frontpage.html`);
export const frontpagePage = renderPage(frontpage);

const leg = readPage(`file://${rootPath}/public/pages/leg/leg.html`);
export const legPage = renderPage(leg, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const bevægelse = readPage(`file://${rootPath}/public/pages/bevægelse/bevægelse.html`);
export const bevægelsePage = renderPage(bevægelse, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const musik = readPage(`file://${rootPath}/public/pages/musik/musik.html`);
export const musikPage = renderPage(musik, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const sprog = readPage(`file://${rootPath}/public/pages/sprog/sprog.html`);
export const sprogPage = renderPage(sprog, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});

const fællesskab = readPage(`file://${rootPath}/public/pages/fællesskab/fællesskab.html`);
export const fællesskabPage = renderPage(fællesskab, {
    id: 'id="5"',
    stylesheet:  '<link rel="stylesheet" href="/assets/css/pejlemærke.css"></link>'
});