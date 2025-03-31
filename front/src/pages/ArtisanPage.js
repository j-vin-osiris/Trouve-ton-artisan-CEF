import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtisanPage = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [artisan, setArtisan] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = `http://localhost:3000/api/artisans/${id}`;

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données de l'artisan !"
          );
        }
        const data = await response.json();
        setArtisan(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArtisan();
  }, [id]);

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!artisan) {
    return <p className="text-center">Chargement...</p>;
  }

  return (
    <div className="artisan-page">
      <h1>{artisan.name}</h1>
      <p>Spécialité : {artisan.specialty}</p>
      <p>Localisation : {artisan.location}</p>
      <p>Note : {artisan.rating} / 5</p>
      <p>À propos : {artisan.about}</p>
      <form>{/* Formulaire de contact */}</form>
    </div>
  );
};

export default ArtisanPage;
