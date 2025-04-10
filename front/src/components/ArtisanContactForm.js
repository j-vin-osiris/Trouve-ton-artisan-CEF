import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../scss/_artisanContactForm.scss"; // ✅ Import du fichier SCSS dédié

const ArtisanContactForm = ({ artisanName, artisanEmail, sendMail }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!artisanEmail) {
      setError("L'email de l'artisan est introuvable.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: artisanEmail,
          userName: formData.name,
          userEmail: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message.");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsMessageSent(true);
      setError(null);
    } catch (error) {
      console.error("❌ Erreur d'envoi :", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="form-body">
      <h3 className="form-title">
        Contacter <span>{artisanName}</span>
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Votre adresse mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Objet</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Sujet de votre message"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Envoyer
        </Button>

        {isMessageSent && (
          <p className="confirmation-message">
            ✅ Votre message a bien été envoyé !
          </p>
        )}
        {error && <p className="error-message">❌ {error}</p>}
      </Form>
    </div>
  );
};

export default ArtisanContactForm;
