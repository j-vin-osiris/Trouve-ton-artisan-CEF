import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArtisanCard from "../components/ArtisansCard"; // ✅ Import du composant
import "../scss/_featuredArtisans.scss";

const FeaturedArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/artisans/featured"
        );
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des artisans !");
        setArtisans(await response.json());
      } catch (err) {
        setError(err.message);
      }
    };
    fetchArtisans();
  }, []);

  return (
    <Container className="featured-artisans">
      <h2 className="section-title text-center mb-4">Artisans mis en avant</h2>
      <p className="section-subtitle text-center mb-4">
        Chaque mois, nous mettons en avant 3 artisans exceptionnels qui se
        distinguent par leur savoir-faire.
      </p>
      {error ? <p className="error-message text-center">{error}</p> : null}
      <Row className="g-4">
        {artisans.map((artisan) => (
          <Col key={artisan.id} sm={12} md={6} lg={4}>
            <ArtisanCard artisan={artisan} />{" "}
            {/* 🔥 Utilisation du composant */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedArtisans;
