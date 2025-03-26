import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container fluid">
        {/* Section avec logo et adresse */}
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="footer-logo">
              <a href="/">
                <img
                  src="/assets/Logo.png" // Chemin vers le logo
                  alt="Logo Trouve ton artisan"
                  className="img-fluid"
                  style={{ maxHeight: "180px", width: "auto" }}
                />
              </a>
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
                <i className="bi bi-telephone-fill me-2"></i>{" "}
                {/* Icône téléphone */}
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
              <a href="/mentions-legales">Mentions légales</a>
            </li>
            <li className="list-inline-item">
              <a href="/donnees-personnelles">Données personnelles</a>
            </li>
            <li className="list-inline-item">
              <a href="/accessibilite">Accessibilité</a>
            </li>
            <li className="list-inline-item">
              <a href="/cookies">Cookies</a>
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
