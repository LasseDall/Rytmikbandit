import express from "express";
import { frontpagePage, legPage, bevægelsePage, musikPage, sprogPage, fællesskabPage } from "./util/preparePage.js";

const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/leg", (req, res) => {
    res.send(legPage);
});

app.get("/bevaegelse", (req, res) => {
    res.send(bevægelsePage);
});

app.get("/musik", (req, res) => {
    res.send(musikPage);
});

app.get("/sprog", (req, res) => {
    res.send(sprogPage);
});

app.get("/faellesskab", (req, res) => {
    res.send(fællesskabPage);
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});

module.exports = app;