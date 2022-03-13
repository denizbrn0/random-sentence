const express = require("express");
const router = express.Router();
const {
  sozEkleGet,
  sozEklePost,
  mainPageGet,
} = require("../controller/controller.js");

router.get("/soz-ekle", sozEkleGet);

router.post("/soz-ekle", sozEklePost);

router.get("/", mainPageGet);

module.exports = router;
