const SibApiV3Sdk = require("sib-api-v3-sdk");

// Initialisation de l’API Brevo avec la clé d'environnement
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.BREVO_API_KEY;

const sendMail = async (req, res) => {
  try {
    const { to, userName, userEmail, subject, message } = req.body;

    if (![to, userName, userEmail, subject, message].every(Boolean)) {
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoires." });
    }

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const response = await apiInstance.sendTransacEmail({
      sender: { name: userName, email: userEmail },
      to: [{ email: to }],
      subject,
      htmlContent: `<p>${message}</p>`,
    });

    res
      .status(200)
      .json({ success: true, message: "Mail envoyé avec succès !" });
  } catch (error) {
    res.status(500).json({
      error:
        error.response?.data?.message || "Erreur lors de l'envoi du message.",
    });
  }
};

module.exports = { sendMail };
