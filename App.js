import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


import SearchComponent from './src/components/SearchComponent';
import WeatherDisplay from './src/components/WeatherDisplay';
import NewsList from './src/components/NewsList';
import NewsFilter from './src/components/NewsFilter';


import useWeather from './src/hooks/useWeather';
import useNews from './src/hooks/useNews';

const App = () => {
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');

  const { weather, loading: weatherLoading, error: weatherError } = useWeather(city);
  const { news, loading: newsLoading, error: newsError } = useNews(category);

  const handleSearch = (searchedCity) => {
    console.log("Buscando clima para la ciudad:", searchedCity);
    setCity(searchedCity);  
  };

  const handleCategoryChange = (newCategory) => {
    console.log("Categoría seleccionada:", newCategory);
    setCategory(newCategory);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard del Clima y Noticias</Text>
      <SearchComponent onSearch={handleSearch} />
      {weatherError ? <Text>Error cargando el clima: {weatherError}</Text> : null}
      {weatherLoading ? <Text>Cargando datos del clima...</Text> : <WeatherDisplay weather={weather} />}
      <NewsFilter onCategoryChange={handleCategoryChange} />
      {newsError ? <Text>Error cargando las noticias: {newsError}</Text> : null}
      {newsLoading ? <Text>Cargando noticias...</Text> : <NewsList category={category} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
