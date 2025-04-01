import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/_categoryPage.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des artisans.");
        }
        const data = await response.json();
        setArtisans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [category]);

  // 🔹 Optimisation SEO : mise à jour du titre et de la description
  useEffect(() => {
    if (category) {
      document.title = `Artisans spécialisés en ${category} - Trouve Ton Artisan`;
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          `Découvrez les meilleurs artisans spécialisés en ${category}. Trouvez des experts près de chez vous et contactez-les directement via notre plateforme !`
        );
    }
  }, [category]);

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
    return <p>Aucun artisan trouvé pour cette catégorie.</p>;
  }

  return (
    <Container className="category-page">
      <h1 className="category-title">
        Artisans dans la catégorie : {category}
      </h1>
      <Row>
        {artisans.map((artisan) => (
          <Col key={artisan.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="artisan-card">
              <Card.Img
                variant="top"
                src={artisan.logo || "/assets/favicon-32.png"}
              />
              <Card.Body>
                <Card.Title>{artisan.name}</Card.Title>
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
                <Card.Text>
                  <strong>Spécialité :</strong> {artisan.specialty} <br />
                  <strong>Localisation :</strong> {artisan.location}
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
