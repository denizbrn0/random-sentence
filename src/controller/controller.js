const express = require("express");
const path = require("path");
const schema = require("../schema/sozSchema.js");

const sozEkleGet = (req, res) => {
  res.render("soz-ekle");
};

const sozEklePost = (req, res) => {
  const soz = req.body.soz;
  schema.find().count(function (err, count) {
    if (err) console.log(err);
    else schema({ soz: soz, count: count + 1 }).save();
  });
  res.redirect("/");
};

const mainPageGet = (req, res) => {
  schema.find().count(function (err, count) {
    if (err) console.log(err);
    else var randomNumber = Math.floor(Math.random() * count) + 1;
    schema.findOne({ count: randomNumber }, (err, data) => {
      const soz = data.soz;
      res.render("index", { soz: soz });
    });
  });
};

module.exports = { sozEkleGet, sozEklePost, mainPageGet };
