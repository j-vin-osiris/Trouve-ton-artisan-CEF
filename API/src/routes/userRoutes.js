const express = require("express");
const { sendMail } = require("../controllers/userController");

const router = express.Router();

//Route pour envoyer un email à un artisan
router.post("/send-mail", sendMail);

module.exports = router;
