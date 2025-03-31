import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/_fonctionnementsite.scss";

const Fonctionnement = () => {
  const steps = [
    {
      number: 1,
      icon: "bi-list-ul", // Bootstrap Icon for list
      title: "Secteur d'activité",
      description: "Choisissez la catégorie de l'artisanat dans le menu.",
    },
    {
      number: 2,
      icon: "bi-person", // Bootstrap Icon for person
      title: "Artisan",
      description: "Choisissez votre artisan parmi la liste proposée.",
    },
    {
      number: 3,
      icon: "bi-envelope", // Bootstrap Icon for envelope
      title: "Contacter",
      description: "Remplissez et envoyez le formulaire de contact.",
    },
    {
      number: 4,
      icon: "bi-clock", // Bootstrap Icon for clock
      title: "Réponse sous 48h",
      description: "L'artisan vous apporte une réponse sous 48h.",
    },
  ];

  return (
    <section className="how-to-section">
      <h2 className="section-title text-center mb-4">
        Comment trouver mon artisan ?
      </h2>
      <Row className="g-4">
        {steps.map((step, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <Card className="text-center h-100 shadow-sm">
              <Card.Body>
                <div className="number-container mb-3">
                  <span className="number">{step.number}</span>
                </div>
                <div className="icon-container mb-3">
                  <i className={`bi ${step.icon} icon-style`}></i>
                </div>
                <Card.Title className="step-title">{step.title}</Card.Title>
                <Card.Text className="step-description">
                  {step.description}
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
