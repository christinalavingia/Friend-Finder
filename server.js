var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.app+json" }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
