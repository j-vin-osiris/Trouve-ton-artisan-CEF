import React from "react";
import { Link } from "react-router-dom";
import "../scss/_footer.scss";

const Footer = () => {
  const legalLinks = [
    { path: "/mentions-legales", label: "Mentions légales" },
    { path: "/contact", label: "Contact" },
    { path: "/cgu", label: "Conditions générales d'utilisation" },
    {
      path: "/politique-confidentialite",
      label: "Politique de confidentialité",
    },
  ];

  return (
    <footer className="py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="footer-logo">
              <Link to="/">
                <img
                  src="/assets/Logo.png"
                  alt="Logo Trouve ton artisan"
                  className="img-fluid"
                  style={{ maxHeight: "180px", width: "auto" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="footer-address text-center text-md-end">
              <p>
                <strong>Antenne de Lyon :</strong>
              </p>
              <p>
                101 cours Charlemagne, CS 20033, 69269 Lyon Cedex 02, France
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="footer-menu text-center">
          <ul className="list-inline">
            {legalLinks.map(({ path, label }, index) => (
              <li key={index} className="list-inline-item">
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-copyright text-center mt-3">
          <p>&copy; 2025 Région Auvergne-Rhône-Alpes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
