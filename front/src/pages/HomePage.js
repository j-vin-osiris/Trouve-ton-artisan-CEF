import React from "react";
import HeroSection from "../components/HeroSection";
import Fonctionnement from "../components/Fonctionnement";
import FeaturedArtisans from "../components/Featured";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <main>
        <section className="how-to-section">
          <Fonctionnement />
        </section>
        <section className="featured-artisans">
          <FeaturedArtisans />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
