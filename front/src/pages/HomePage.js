import React from "react";
import HeroSection from "../components/HeroSection"; // Chemin du fichier HeroSection

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection /> {/* Intégration de la section Hero */}
      {/* Ajoute d'autres sections ici */}
      <main>
        <section className="how-to-section">
          {/* Section "Comment trouver mon artisan ?" */}
        </section>
        <section className="featured-artisans">
          {/* Section "Artisans du mois" */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
