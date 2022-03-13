const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB_URL)
  .then(console.log("bağlantı başarılı"))
  .catch((err) => {
    throw err;
  });
