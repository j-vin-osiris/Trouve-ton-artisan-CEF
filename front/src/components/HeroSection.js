import React from "react";
import Card from "react-bootstrap/Card";
import "../scss/_herosection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Card className="text-white">
        <Card.Img
          src="/assets/herosection.png"
          alt="Artisan au travail"
          className="hero-image"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
          <Card.Title className="hero-title">
            Trouvez l'artisan idéal pour votre projet
          </Card.Title>
          <Card.Text className="hero-text">
            Avec "Trouve Ton Artisan !", explorez les talents locaux
            d'Auvergne-Rhône-Alpes et contactez facilement des experts
            qualifiés.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </section>
  );
};

export default HeroSection;
