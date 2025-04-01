import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../scss/_header.scss";

const HeaderNav = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Gestion de la recherche
  const [results, setResults] = useState([]); // Stockage des résultats de recherche
  const navigate = useNavigate();

  // Fonction pour effectuer la recherche
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans/search?name=${query}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la recherche.");
        }
        const data = await response.json();
        setResults(data); // Met à jour les résultats
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setResults([]); // Réinitialise les résultats
    }
  };

  // Fonction pour rediriger vers la page de l'artisan sélectionné
  const handleResultClick = (artisan) => {
    setSearchQuery(""); // Réinitialise la recherche
    setResults([]); // Vide les résultats
    navigate(`/artisans/${artisan.id}`); // Redirige vers la fiche artisan
  };

  // Fonction pour rediriger vers une catégorie
  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`); // Redirige vers la page catégorie correspondante
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body justify-content-around"
        role="navigation"
      >
        <NavbarBrand href="/" className="d-flex align-items-center">
          <img
            src="/assets/Logo.png"
            alt="Logo Trouve ton artisan"
            className="d-inline-block align-top img-fluid"
            style={{ maxHeight: "80px", width: "auto" }}
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Menu des catégories */}
            <Nav className="justify-content-center flex-grow-1 pe-3">
              {[
                { name: "Bâtiment" },
                { name: "Services" },
                { name: "Fabrication" },
                { name: "Alimentation" },
              ].map((category, index) => (
                <Nav.Link
                  key={index}
                  onClick={() => handleCategoryClick(category.name)}
                  className="px-3"
                >
                  {category.name}
                </Nav.Link>
              ))}
            </Nav>

            {/* Barre de recherche */}
            <Form className="d-flex search-bar">
              <Form.Control
                type="search"
                placeholder="Rechercher un artisan..."
                value={searchQuery}
                onChange={handleSearch}
                className="form-control"
              />
              {results.length > 0 && (
                <ul className="search-results">
                  {results.map((artisan) => (
                    <li
                      key={artisan.id}
                      onClick={() => handleResultClick(artisan)}
                      className="search-result-item"
                    >
                      {artisan.name} - {artisan.specialty}
                    </li>
                  ))}
                </ul>
              )}
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </header>
  );
};

export default HeaderNav;
