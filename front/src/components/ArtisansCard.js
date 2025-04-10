import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../scss/_artisansCard.scss";

const ArtisanCard = ({ artisan }) => {
  const navigate = useNavigate();

  return (
    <Card className="artisan-card">
      <Card.Img
        variant="top"
        src={artisan.logo || "/assets/logo artisans defaut.png"}
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
          <span className="review-count">({artisan.reviews ?? "0"} avis)</span>
        </div>
        <Card.Text>
          <strong>Localisation :</strong> {artisan.location || "Non renseigné"}
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
  );
};

export default ArtisanCard;
