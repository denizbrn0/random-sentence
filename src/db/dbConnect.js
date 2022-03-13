const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/soz-sitesi")
  .then(console.log("bağlantı başarılı"))
  .catch((err) => {
    throw err;
  });
