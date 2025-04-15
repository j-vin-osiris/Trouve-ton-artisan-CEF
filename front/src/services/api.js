const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://trouve-ton-artisan-api.onrender.com";

export async function getArtisans() {
  try {
    const response = await fetch(`${API_URL}/api/artisans`);
    if (!response.ok)
      throw new Error("Erreur lors de la récupération des artisans.");
    return await response.json();
  } catch (error) {
    console.error("❌ Erreur API :", error);
    return [];
  }
}
