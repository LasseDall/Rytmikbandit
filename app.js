import express from "express";
import { frontpagePage } from "./util/preparePage.js";

const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});