// NewsList.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchNews } from '../api/newsApi';

const NewsList = ({ category }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("categoria recibida en NewsList:", category);  // esto era una depuracion ya quet enia un problema al recibir la categoria elegida
    const loadNews = async () => {
      setLoading(true);
      try {
        const news = await fetchNews(category);
        setNewsItems(news);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
      setLoading(false);
    };

    loadNews();
  }, [category]); // esto lo que hace es que se ejecuta este efecto cuando cambia la categoria

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.source}>Source: {item.source}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando noticias...</Text>
      ) : (
        <FlatList
          data={newsItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  source: {
    fontSize: 12,
    color: 'gray',
  },
});

export default NewsList;
