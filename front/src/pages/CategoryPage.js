import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArtisanCard from "../components/ArtisansCard";
import "../scss/_categoryPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

const CategoryPage = () => {
  const { specialiteId } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtisans = async () => {
      if (!specialiteId) return;
      try {
        const response = await fetch(
          `${API_URL}/api/artisans/specialite/${specialiteId}`
        );
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des artisans.");
        setArtisans(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArtisans();
  }, [specialiteId]);

  return (
    <Container className="category-page">
      <h1 className="category-title">Artisans: {specialiteId}</h1>
      {error ? <p className="error-message">{error}</p> : null}
      <Row className="artisan-list">
        {artisans.map((artisan) => (
          <Col key={artisan.id} xs={12} sm={6} md={4} lg={3}>
            <ArtisanCard artisan={artisan} />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
