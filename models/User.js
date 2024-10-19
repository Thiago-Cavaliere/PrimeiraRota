// models/userModel.js
const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", newUserSchema);
module.exports = User;
