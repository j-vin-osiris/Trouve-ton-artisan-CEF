import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../scss/_artisanPage.scss";

const ArtisanPage = () => {
  const { name } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        // 🔍 Correction de l’encodage des caractères spéciaux
        const formattedName = encodeURIComponent(name.replace(/&/g, "and"));

        console.log(`🔍 Requête envoyée pour : ${formattedName}`);

        const response = await fetch(
          `http://localhost:3000/api/artisans/artisan/${formattedName}`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de l'artisan.");
        }

        const data = await response.json();
        console.log("✅ Artisan récupéré :", data);

        setArtisan(data);
      } catch (err) {
        console.error("❌ Erreur API :", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [name]);

  // 🔹 SEO : Mise à jour du titre et de la description
  useEffect(() => {
    if (artisan) {
      document.title = `${artisan.name} - Artisan en ${artisan.specialite?.name} à ${artisan.location}`;
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          `Découvrez ${artisan.name}, expert en ${artisan.specialite?.name} situé à ${artisan.location}. Consultez ses avis et contactez-le directement via notre plateforme !`
        );
    }
  }, [artisan]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsMessageSent(true);
  };

  if (loading) return <p>Chargement...</p>;
  if (error)
    return (
      <Container className="error">
        <p>{error}</p>
        <Button variant="primary" onClick={() => navigate("/")}>
          Retour à l'accueil
        </Button>
      </Container>
    );
  if (!artisan) return <p>Aucun artisan trouvé.</p>;

  return (
    <Container className="artisan-page">
      {artisan && (
        <h1 className="artisan-title">
          Votre Artisan {artisan.specialite?.name} :{" "}
          <span className="artisan-name">{artisan.name}</span>
        </h1>
      )}

      <div className="artisan-layout">
        {/* 🔹 Section Logo */}
        <div className="artisan-logo">
          <img
            src={artisan.logo || "/assets/logo artisans defaut.png"}
            alt={`Logo de ${artisan.name}`}
            className="profile-logo"
          />
        </div>

        {/* 🔹 Section Infos Artisan + À propos */}
        <div className="artisan-info">
          <Card className="artisan-profile">
            <Card.Body>
              <Card.Title className="artisan-name">{artisan.name}</Card.Title>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`bi bi-star${
                      i < Math.round(artisan.rating) ? "-fill" : ""
                    }`}
                    style={{ color: "#f1c40f" }}
                  ></i>
                ))}
                <span className="review-count">({artisan.reviews} avis)</span>
              </div>
              <Card.Text className="artisan-details">
                <i className="bi bi-tools" style={{ color: "#0074c7" }}></i>{" "}
                <strong>Spécialité :</strong> {artisan.specialite?.name} <br />
                <i
                  className="bi bi-envelope-fill"
                  style={{ color: "#0074c7" }}
                ></i>{" "}
                <strong>Email :</strong> {artisan.email} <br />
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: "#0074c7" }}
                ></i>{" "}
                <strong>Localisation :</strong> {artisan.location} <br />
                {/* 🔹 Ajout du site internet avec une icône */}
                {artisan.website && (
                  <p>
                    <i className="bi bi-globe" style={{ color: "#0074c7" }}></i>{" "}
                    <strong>Site internet :</strong>{" "}
                    <a
                      href={artisan.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {artisan.website}
                    </a>
                  </p>
                )}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="artisan-about">
            <Card.Body>
              <Card.Title>À propos</Card.Title>
              <Card.Text>{artisan.about}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* 🔹 Section Formulaire à droite */}
        <div className="artisan-contact">
          <Card className="contact-form">
            <Card.Body className="form-body">
              {" "}
              {/* 🔥 Nouvelle classe ici */}
              <Card.Title className="form-title">
                Contacter {artisan.name}
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Votre nom" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Votre adresse mail"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Objet</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sujet de votre message"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Votre message..."
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Envoyer
                </Button>

                {/* ✅ Message de confirmation */}
                {isMessageSent && (
                  <p className="confirmation-message">
                    ✅ Votre message a bien été envoyé ! {artisan.name} vous
                    répondra sous 24h.
                  </p>
                )}
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ArtisanPage;
