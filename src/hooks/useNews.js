import { useState, useEffect, useCallback } from 'react';
import { fetchNews } from '../api/newsApi';  

const useNews = (category) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const newsData = await fetchNews(category);
      setNews(newsData);
    } catch (error) {
      setError('No se pudo cargar las noticias');
      console.error(error);
    }
    setLoading(false);
  }, [category]);


  useEffect(() => {
    loadNews();
  }, [category, loadNews]);

  return { news, loading, error };
};

export default useNews;
    