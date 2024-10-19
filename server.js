// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const loginRoutes = require("./router/router");

// Carregar variáveis de ambiente
require('dotenv').config();

// Configurações do Express
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Conexão com o MongoDB usando variáveis de ambiente
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2bqq6.mongodb.net/Agenda?retryWrites=true&w=majority`
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB", err));

// Usar as rotas de login
app.use("/", loginRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando no link http://localhost:3000");
});
