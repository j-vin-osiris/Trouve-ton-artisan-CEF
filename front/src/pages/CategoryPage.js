import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/_categoryPage.scss";

const CategoryPage = () => {
  const { specialiteId } = useParams(); // ✅ Correct !
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans/specialite/${specialiteId}`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des artisans.");
        }

        const data = await response.json();
        console.log("🔍 Données reçues :", JSON.stringify(data, null, 2));
        setArtisans(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("❌ Erreur API :", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (specialiteId) fetchArtisans();
  }, [specialiteId]); // 🔥 Recharge les données à chaque changement de spécialité

  // 🔹 SEO : Mise à jour du titre et de la description
  useEffect(() => {
    if (specialiteId) {
      document.title = `Artisans spécialisés en ${specialiteId} - Trouve Ton Artisan`;
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          `Trouvez les meilleurs artisans spécialisés en ${specialiteId}, près de chez vous.`
        );
    }
  }, [specialiteId]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return (
      <Container className="error">
        <p>{error}</p>
        <Button variant="primary" onClick={() => navigate("/")}>
          Retour à l'accueil
        </Button>
      </Container>
    );
  }

  if (artisans.length === 0) {
    return (
      <p className="text-center">Aucun artisan trouvé pour cette spécialité.</p>
    );
  }

  return (
    <Container className="category-page">
      <h1 className="category-title">Artisans: {specialiteId}</h1>
      <Row className="artisan-list">
        {artisans.map((artisan) => (
          <Col key={artisan.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="artisan-card">
              <Card.Img
                variant="top"
                src={artisan.logo || "/assets/logo artisans defaut.png"} // ✅ Image par défaut si artisan n'a pas de logo
              />
              <Card.Body>
                <Card.Title>{artisan.name || "Nom inconnu"}</Card.Title>
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
                  <span className="review-count">
                    ({artisan.reviews ?? "0"} avis)
                  </span>
                </div>
                <Card.Text>
                  <strong>Localisation :</strong>{" "}
                  {artisan.location || "Non renseigné"}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate(`/artisans/${encodeURIComponent(artisan.name)}`)
                  }
                >
                  Voir le profil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
