const express = require("express");
const { sendMail } = require("../controllers/userController"); // 🔥 Vérifie que l'import est correct

const router = express.Router();

// 📍 Route pour envoyer un email à un artisan
router.post("/send-mail", sendMail);

module.exports = router;
