import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Récupérer le nom depuis l'URL
import "../scss/_artisanPage.scss";

const ArtisanPage = () => {
  const { name } = useParams(); // Récupère le nom de l'artisan via l'URL
  const [artisan, setArtisan] = useState(null); // Stockage des données d'un artisan
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // Gestion des erreurs
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans/search?name=${encodeURIComponent(
            name
          )}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de l'artisan.");
        }
        const data = await response.json();

        if (data.length > 0) {
          setArtisan(data[0]); // Prend le premier artisan correspondant
        } else {
          setError("Aucun artisan trouvé.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    fetchArtisan();
  }, [name]);

  if (loading) {
    return <p>Chargement...</p>; // Affichage pendant le chargement
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Retour à l'accueil</button>
      </div>
    );
  }

  if (!artisan) {
    return <p>Aucun artisan correspondant à ce nom.</p>;
  }

  return (
    <div className="artisan-page">
      <div className="artisan-profile">
        <div className="profile-logo-container">
          <img
            src={artisan.logo || "/assets/default-logo.png"}
            alt={`Logo de ${artisan.name}`}
            className="profile-logo"
          />
        </div>
        <h1 className="artisan-name">{artisan.name}</h1>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`bi bi-star${
                i < Math.round(artisan.rating) ? "-fill" : ""
              }`}
              style={{ color: "#f1c40f" }}
            ></i>
          ))}
          <span className="review-count">({artisan.reviews} avis)</span>
        </div>
        <div className="artisan-info">
          <p>
            <strong>Spécialité :</strong> {artisan.specialty}
          </p>
          <p>
            <strong>Téléphone :</strong> {artisan.phone}
          </p>
          <p>
            <strong>Email :</strong> {artisan.email}
          </p>
          <p>
            <strong>Localisation :</strong> {artisan.location}
          </p>
        </div>
      </div>

      <div className="artisan-about">
        <h2>À propos</h2>
        <p>{artisan.about}</p>
      </div>

      <div className="contact-form">
        <h2>Contactez {artisan.name}</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Objet</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtisanPage;
