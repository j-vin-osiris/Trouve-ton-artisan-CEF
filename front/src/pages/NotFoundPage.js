import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../scss/_notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  // 🔹 Optimisation SEO : mise à jour du titre et de la description
  useEffect(() => {
    document.title = "Erreur 404 - Page introuvable | Trouve Ton Artisan";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "La page que vous cherchez est introuvable. Retournez à l'accueil pour explorer nos artisans qualifiés en Auvergne-Rhône-Alpes."
      );
  }, []);

  return (
    <Container className="not-found-page">
      <div className="not-found-content">
        <h1>Oups ! Page introuvable.</h1>
        <p>Il semble que cette page n'existe pas ou ait été déplacée.</p>
        <img src="/assets/404.png" alt="Erreur 404" className="error-image" />
        <div className="action-buttons">
          <Button variant="primary" onClick={() => navigate("/")}>
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
