import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../scss/_header.scss";

const HeaderNav = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Saisie de l'utilisateur
  const [results, setResults] = useState([]); // Résultats de la recherche
  const [suggestedName, setSuggestedName] = useState(""); // Nom suggéré à afficher
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans/search?name=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          setResults(data);

          // Définir le premier artisan comme suggestion
          setSuggestedName(data.length > 0 ? data[0].name : "");
        }
      } catch (err) {
        console.error("Erreur lors de la recherche :", err);
      }
    } else {
      setResults([]);
      setSuggestedName(""); // Réinitialiser les suggestions
    }
  };

  const handleResultClick = (id) => {
    setSearchQuery(""); // Réinitialiser la recherche
    setResults([]);
    setSuggestedName(""); // Effacer le placeholder
    navigate(`/artisans/${id}`); // Redirection vers la fiche artisan
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
            style={{
              maxHeight: "80px",
              width: "auto",
            }}
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              {[
                { path: "/category/batiment", label: "Bâtiment" },
                { path: "/category/services", label: "Services" },
                { path: "/category/fabrication", label: "Fabrication" },
                { path: "/category/alimentation", label: "Alimentation" },
              ].map((item, index) => (
                <Nav.Link key={index} href={item.path} className="px-3">
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            <Form className="d-flex search-bar">
              <Form.Control
                type="search"
                placeholder={suggestedName || "Rechercher un artisan..."}
                value={searchQuery}
                onChange={handleSearch}
                className="form-control"
              />
              {results.length > 0 && (
                <ul className="search-results">
                  {results.map((artisan) => (
                    <li
                      key={artisan.id}
                      onClick={() => handleResultClick(artisan.id)}
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
