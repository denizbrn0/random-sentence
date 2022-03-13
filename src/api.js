const express = require("express");
const app = express();
const routers = require("./router/routers.js");
const path = require("path");
const bodyParser = require("body-parser");
require("./db/dbConnect.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routers);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(process.env.PORT);
