const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    soz: { required: true, type: "String" },
    count: { required: true, type: "Number" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sozlers", schema);
