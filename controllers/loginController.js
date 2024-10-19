// loginController.js
const User = require('../models/User'); // Certifique-se de importar o modelo

exports.paginaInicial = (req, res) => {
  res.render("login", { error: null });
};

exports.handleLogin = async (req, res) => {
  const { nome, senha } = req.body;

  try {
    const user = await User.findOne({ nome });

    // Aqui você pode usar bcrypt para comparar senhas, se estiver usando hashes
    if (user && user.senha === senha) {
      // Lógica de autenticação (iniciar sessão, etc.)
      res.redirect("/home");
    } else {
      res.render("error", { errorMessage: "Nome ou senha incorretos." }); // Renderiza a página de erro
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.render("error", { errorMessage: "Erro ao fazer login. Tente novamente." }); // Renderiza a página de erro
  }
};
