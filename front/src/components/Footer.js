import React from "react";
import { Link } from "react-router-dom";
import "../scss/_footer.scss";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container fluid">
        {/* Section avec logo et adresse */}
        <div className="row align-items-center">
          {/* Logo */}
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

          {/* Adresse */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="footer-address">
              <p>
                <strong>Antenne de Lyon :</strong>
              </p>
              <p>101 cours Charlemagne</p>
              <p>CS 20033</p>
              <p>69269 Lyon Cedex 02</p>
              <p>France</p>
              <p className="d-flex justify-content-center justify-content-md-end align-items-center">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
              </p>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="my-4" />

        {/* Menu des pages légales */}
        <div className="footer-menu text-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/cgu">Conditions générales d'utilisation</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/politique-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright text-center mt-3">
        <p>&copy; 2025 Région Auvergne-Rhône-Alpes. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
