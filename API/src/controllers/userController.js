// utilisation de BREVO pour la gestion des mails utilisateurs

const SibApiV3Sdk = require("sib-api-v3-sdk");

// 🔥 Charge l'API avec la clé depuis `.env`
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.BREVO_API_KEY;

const sendMail = async (req, res) => {
  const { to, userName, userEmail, subject, message } = req.body;

  try {
    if (!to || !userName || !userEmail || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoires." });
    }

    const email = {
      sender: { name: userName, email: userEmail }, // 📩 Expéditeur (utilisateur)
      to: [{ email: to }], // 📩 Destinataire (artisan)
      subject,
      htmlContent: `<p>${message}</p>`, // ✉️ Contenu du message
    };

    // 📌 Envoi via Brevo
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const response = await apiInstance.sendTransacEmail(email);

    console.log("✅ Email envoyé avec succès :", response);
    return res
      .status(200)
      .json({ success: true, message: "Mail envoyé avec succès !" });
  } catch (error) {
    console.error(
      "❌ Erreur d'envoi du mail :",
      error.response ? error.response.data : error
    );
    return res.status(500).json({
      error:
        error.response?.data?.message || "Erreur lors de l'envoi du message.",
    });
  }
};

module.exports = { sendMail };
