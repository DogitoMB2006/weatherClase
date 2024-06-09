// Datos de noticias simulados
const newsData = [
    { id: 1, title: "Tecnología avanzando rápidamente en 2024", description: "El mundo de la tecnología está viendo cambios rápidos este año con innovaciones significativas en IA.", source: "Tech News", category: "Tecnología" },
    { id: 2, title: "Resultados electorales finales", description: "Los resultados de las elecciones han sido anunciados, marcando un cambio significativo en el liderazgo.", source: "Global News", category: "Política" },
    { id: 3, title: "El equipo nacional gana la copa mundial", description: "En un evento sorprendente, el equipo nacional ha ganado la copa mundial contra todos los pronósticos.", source: "Sports Daily", category: "Deportes" },
    { id: 4, title: "Economía global en una encrucijada", description: "Los expertos debaten sobre el futuro de la economía mundial en medio de una incertidumbre creciente.", source: "Economy Today", category: "Economía" }
  ];
  

  export const fetchNews = async (category) => {
    try {

      await new Promise(resolve => setTimeout(resolve, 500));
  
     
      const filteredNews = category ? newsData.filter(news => news.category === category) : newsData; 
  
      if (filteredNews.length) {
        return filteredNews;
      } else {
        throw new Error(`no hay noticias disponibles para esta categoria${category}`);
      }
    } catch (error) {
      console.error("Error al obtener datos de noticias:", error);
      throw error; 
    }
  };
  