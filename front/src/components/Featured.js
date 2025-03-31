import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/_featuredArtisans.scss";

const FeaturedArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:3000/api/artisans/featured";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des artisans !");
        }
        const data = await response.json();
        setArtisans(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArtisans();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/artisans/${id}`); // Redirige vers la page ArtisanPage avec l'ID
  };

  return (
    <section className="featured-artisans">
      <h2 className="section-title text-center mb-4">
        Découvrez nos artisans du mois
      </h2>
      <p className="section-subtitle text-center mb-4">
        Chaque mois, nous mettons en avant 3 artisans exceptionnels qui se
        distinguent par leur savoir-faire.
      </p>
      {error ? (
        <p className="error-message text-center">{error}</p>
      ) : (
        <Row className="g-4">
          {artisans.map((artisan) => (
            <Col key={artisan.id} sm={12} md={6} lg={4}>
              <Card
                className="h-100 shadow-sm"
                onClick={() => handleCardClick(artisan.id)} // Ajout du clic pour rediriger
                style={{ cursor: "pointer" }} // Change le curseur pour indiquer la cliquabilité
              >
                <Card.Body className="text-center">
                  <Card.Title className="artisan-name">
                    {artisan.name}
                  </Card.Title>
                  <Card.Text>
                    <span className="artisan-specialty">
                      {artisan.specialty}
                    </span>
                    <br />
                    <span className="artisan-location">
                      <i
                        className="bi bi-geo-alt-fill"
                        style={{ color: "#0074c7" }}
                      ></i>{" "}
                      {artisan.location}
                    </span>
                  </Card.Text>
                  <div className="artisan-rating mt-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`bi bi-star${
                          i < Math.round(artisan.rating) ? "-fill" : ""
                        }`}
                        style={{ color: "#f1c40f" }}
                      ></i>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default FeaturedArtisans;
