import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <Text>No hay datos de clima disponibles.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weather.city}</Text>
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/w/${weather.icon}.png` }}
      />
      <Text style={styles.description}>{weather.description}</Text>
      <Text style={styles.info}>Temperatura: {weather.temperature}°C</Text>
      <Text style={styles.info}>Humedad: {weather.humidity}%</Text>
      <Text style={styles.info}>Viento: {weather.windSpeed} km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  description: {
    fontSize: 18,
    color: '#555',
  },
  info: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default WeatherDisplay;
