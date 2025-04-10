import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../scss/_artisanPage.scss";
import ArtisanContactForm from "../components/ArtisanContactForm"; // ✅ Import du formulaire

const ArtisanPage = () => {
  const { name } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans/artisan/${encodeURIComponent(
            name
          )}`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de l'artisan.");
        }

        const data = await response.json();
        if (!data || !data.email || !data.id) {
          throw new Error("Les informations de l'artisan sont incomplètes.");
        }

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
      <h1 className="artisan-title">
        Votre Artisan {artisan.specialite?.name} :{" "}
        <span className="artisan-name">{artisan.name}</span>
      </h1>

      <div className="artisan-layout">
        {/* 🔹 Logo de l'artisan */}
        <div className="artisan-logo">
          <img
            src={artisan.logo || "/assets/logo artisans defaut.png"}
            alt={`Logo de ${artisan.name}`}
            className="profile-logo"
          />
        </div>

        {/* 🔹 Informations sur l'artisan */}
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
                <strong>Spécialité :</strong> {artisan.specialite?.name} <br />
                <strong>Email :</strong> {artisan.email} <br />
                <strong>Localisation :</strong> {artisan.location} <br />
                {artisan.website && (
                  <p>
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

        {/* 🔹 Formulaire de contact via `ArtisanContactForm` */}
        <div className="artisan-contact">
          <ArtisanContactForm
            artisanName={artisan.name}
            artisanEmail={artisan.email}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtisanPage;
