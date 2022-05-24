const mongoose = require("mongoose");

const CollectionPoint = mongoose.model("CollectionPoints", {
  active: Boolean,
  email: String,
  name: String,
  rua: String,
  bairro: String,
  numero: String,
  nomeEmpresa: String,
});

module.exports = CollectionPoint;
