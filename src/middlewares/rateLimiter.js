const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Fenêtre de 15 minutes
  max: 100, // Limite de requêtes par IP
  message: "Trop de requêtes effectuées, veuillez réessayer plus tard.",
});

module.exports = limiter; // Exporte le limiter
