var path = require("path");
var express = require("express");

module.exports = function (app) {
    app.use(express.static(__dirname + '/public'));

    app.use("/survey", function (req,res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"))
    });

    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });

    app.use(express.static(__dirname + "../public/assets/"));
};