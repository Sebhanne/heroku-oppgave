const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;

express()
  .use(express.static(path.join(__dirname, "stylesheets")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
