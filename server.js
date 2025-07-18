require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const firstYearBooks = require("./data/1st-year-books.json");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/1st-year-books", (req, res) => {
  res.json(firstYearBooks);
});

app.get("/test", (req, res) => {
  res.render("index", { data: firstYearBooks });
  // console.log(typeof(firstYearBooks))
});

app.use((req, res) => {
  res.send("Invalid path request!");
});

let PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
