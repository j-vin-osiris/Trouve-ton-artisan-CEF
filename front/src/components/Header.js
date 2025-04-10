import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../scss/_header.scss";

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

const HeaderNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // 📌 Gestion de l'affichage des spécialités
  const handleCategoryClick = (categoryName) => {
    setOpenCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  // 📌 Gestion du clic extérieur pour fermer le menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setOpenCategory(null);
      if (searchRef.current && !searchRef.current.contains(event.target))
        setResults([]);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 📌 Gestion de la recherche d’artisans
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.length) return setResults([]);

    try {
      const response = await fetch(
        `http://localhost:3000/api/artisans/search?name=${query}`
      );
      if (!response.ok) throw new Error("Erreur lors de la recherche.");
      setResults(await response.json());
    } catch {
      setResults([]);
    }
  };

  return (
    <header>
      <Navbar expand="lg" className="bg-body justify-content-around">
        <NavbarBrand href="/">
          <img
            src="/assets/Logo.png"
            alt="Logo Trouve ton artisan"
            className="img-fluid"
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
            <Nav
              className="justify-content-center flex-grow-1 pe-3"
              ref={menuRef}
            >
              {categories.map(({ name, specialties }) => (
                <div
                  key={name}
                  className={`category-item ${
                    openCategory === name ? "open" : ""
                  }`}
                >
                  <Nav.Link
                    onClick={() => handleCategoryClick(name)}
                    className="category-link"
                  >
                    {name}
                    <span
                      className="dropdown-icon"
                      onClick={(e) => {
                        e.stopPropagation(); // 🔥 Empêche la propagation
                        handleCategoryClick(name);
                      }}
                    >
                      {openCategory === name ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </Nav.Link>
                  {openCategory === name && (
                    <ul className="specialty-dropdown">
                      {specialties.map((specialty) => (
                        <li key={specialty} className="specialty-item">
                          <Nav.Link
                            onClick={() => {
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
                  {results.map(({ id, name, specialite }) => (
                    <li
                      key={id}
                      onClick={() =>
                        navigate(`/artisans/${encodeURIComponent(name)}`)
                      }
                      className="search-result-item"
                    >
                      {name} {specialite ? `- ${specialite}` : ""}
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
