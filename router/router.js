// router/router.js
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");

// Página de login
router.get("/login", loginController.paginaInicial);

// Lidar com o login
router.post("/login", loginController.handleLogin);

// Página do home
router.get("/home", homeController.paginaInicial);

// Rota para a raiz do aplicativo
router.get("/", (req, res) => {
  res.redirect("/login"); // Redireciona para a página de login
});

module.exports = router;
