import { useState, useEffect, useCallback } from 'react';
import { fetchWeather } from '../api/weatherApi'; 

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadWeather = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      setError('No se pudo cargar los datos del clima');
      console.error(error);
    }
    setLoading(false);
  }, [city]);


  useEffect(() => {
    if (city) {
      loadWeather();
    } else {
      setWeather(null); // bueno en caso de qu Si no hay ciudad, estk lo que hace es limpiar los datos del clima
    }
  }, [city, loadWeather]);

  return { weather, loading, error };
};

export default useWeather;
