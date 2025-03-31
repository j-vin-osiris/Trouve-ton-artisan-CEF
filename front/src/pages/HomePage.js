import React from "react";
import HeroSection from "../components/HeroSection"; // Chemin du fichier HeroSection
import Fonctionnement from "../components/Fonctionnement";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection /> {/* Intégration de la section Hero */}
      <main>
        <section className="how-to-section">
          {/* Section "Comment trouver mon artisan ?" */}
          <Fonctionnement />
        </section>
        <section className="featured-artisans">
          {/* Section "Artisans du mois" */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
