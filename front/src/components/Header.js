import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import "../scss/_header.scss";

const HeaderNav = () => {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <header>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body justify-content-around"
        >
          <NavbarBrand href="/" className="d-flex align-items-center">
            <img
              src="/assets/Logo.png" // Chemin vers le logo dans `public/assets`
              alt="Logo Trouve ton artisan"
              className="d-inline-block align-top img-fluid"
              style={{
                maxHeight: "80px",
                width: "auto",
              }}
            />
          </NavbarBrand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                {/* Menu dynamique basé sur les catégories */}
                {[
                  { path: "/category/batiment", label: "Bâtiment" },
                  { path: "/category/services", label: "Services" },
                  { path: "/category/fabrication", label: "Fabrication" },
                  { path: "/category/alimentation", label: "Alimentation" },
                ].map((item, index) => (
                  <Nav.Link
                    key={index}
                    href={item.path}
                    className={`px-3 ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
              <Form className="d-flex search-bar">
                <div className="search-container">
                  <Form.Control
                    type="search"
                    placeholder="Rechercher un artisan..."
                    className="form-control"
                    aria-label="Search"
                  />
                  <span className="input-icon">
                    <i className="bi bi-search"></i> {/* Icône Bootstrap */}
                  </span>
                </div>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </header>
  );
};

export default HeaderNav;
