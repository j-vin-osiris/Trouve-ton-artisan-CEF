import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "../scss/_header.scss";

const HeaderNav = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 📌 Gestion de la recherche
  const [results, setResults] = useState([]); // 🔍 Stockage des résultats
  const [openCategory, setOpenCategory] = useState(null); // 📌 Gestion du menu spécialités
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // 🔥 Liste statique des catégories et spécialités
  const categories = [
    {
      name: "Bâtiment",
      specialties: ["Électricien", "Menuisier", "Plombier", "Chauffagiste"],
    },
    {
      name: "Services",
      specialties: ["Coiffeur", "Fleuriste", "Toiletteur", "Webdesign"],
    },
    {
      name: "Fabrication",
      specialties: ["Bijoutier", "Couturier", "Ferronnier"],
    },
    {
      name: "Alimentation",
      specialties: ["Boucher", "Boulanger", "Chocolatier", "Traiteur"],
    },
  ];

  // 📌 Gère l'affichage du sous-menu des spécialités
  const handleCategoryClick = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  // 🔥 Fermer le menu en cas de clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenCategory(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setResults([]); // 🔥 Ferme les résultats de recherche
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // 📌 Gestion de la recherche d’artisans
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
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setResults([]);
    }
  };

  // 📌 Rediriger vers la page d’un artisan
  const handleResultClick = (artisan) => {
    setSearchQuery("");
    setResults([]);
    navigate(`/artisans/${encodeURIComponent(artisan.name)}`);
  };

  return (
    <header>
      <Navbar expand="lg" className="bg-body justify-content-around">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <img
            src="/assets/Logo.png"
            alt="Logo Trouve ton artisan"
            className="d-inline-block align-top img-fluid"
            style={{ maxHeight: "80px", width: "auto" }}
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="end"
          onHide={() => setOpenCategory(null)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* 📍 Menu des catégories avec spécialités */}
            <Nav
              className="justify-content-center flex-grow-1 pe-3"
              ref={menuRef}
            >
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`category-item ${
                    openCategory === category.name ? "open" : ""
                  }`}
                >
                  <Nav.Link
                    onClick={(e) => {
                      e.stopPropagation(); // 🔥 Empêche la propagation
                      handleCategoryClick(category.name);
                    }}
                    className="category-link"
                  >
                    {category.name}{" "}
                    <span className="dropdown-icon">
                      {openCategory === category.name ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </Nav.Link>

                  {/* 📌 Affichage des spécialités sous chaque catégorie */}
                  {openCategory === category.name && (
                    <ul className="specialty-dropdown">
                      {category.specialties.map((specialty) => (
                        <li key={specialty} className="specialty-item">
                          <Nav.Link
                            onClick={() => {
                              console.log(
                                `🛠️ Navigation vers : /specialite/${encodeURIComponent(
                                  specialty
                                )}`
                              );
                              navigate(
                                `/specialite/${encodeURIComponent(specialty)}`
                              );
                              setOpenCategory(null); // 🔥 Ferme le menu après sélection
                            }}
                          >
                            {specialty}
                          </Nav.Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </Nav>

            {/* 📍 Barre de recherche */}
            <Form className="d-flex search-bar" ref={searchRef}>
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
                      {artisan.name}{" "}
                      {artisan.specialite ? `- ${artisan.specialite}` : ""}
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
