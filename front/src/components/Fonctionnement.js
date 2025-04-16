import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/_fonctionnementsite.scss";

//Définition des étapes du processus
const steps = [
  {
    number: 1,
    icon: "bi-list-ul",
    title: "Secteur d'activité",
    description: "Choisissez la catégorie de l'artisanat dans le menu.",
  },
  {
    number: 2,
    icon: "bi-person",
    title: "Artisan",
    description: "Choisissez votre artisan parmi la liste proposée.",
  },
  {
    number: 3,
    icon: "bi-envelope",
    title: "Contacter",
    description: "Remplissez et envoyez le formulaire de contact.",
  },
  {
    number: 4,
    icon: "bi-clock",
    title: "Réponse sous 48h",
    description: "L'artisan vous apporte une réponse sous 48h.",
  },
];

const Fonctionnement = () => {
  return (
    <section className="how-to-section">
      <h2 className="section-title text-center mb-4">
        Comment trouver mon artisan ?
      </h2>
      <Row className="g-4">
        {steps.map(({ number, icon, title, description }, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <Card className="text-center h-100 shadow-sm">
              <Card.Body>
                <div className="number-container mb-3">
                  <span className="number">{number}</span>
                </div>
                <div className="icon-container mb-3">
                  <i className={`bi ${icon} icon-style`}></i>
                </div>
                <Card.Title className="step-title">{title}</Card.Title>
                <Card.Text className="step-description">
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Fonctionnement;
