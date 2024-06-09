const weatherDataByCity = {
    'Ciudad de Mexico': {
      temperature: 22,
      humidity: 30,
      windSpeed: 5,
      description: 'nublado',
      icon: '03d'
    },
    'New York': {
      temperature: 16,
      humidity: 65,
      windSpeed: 3,
      description: 'lluvioso',
      icon: '09d'
    },
    'Tokio': {
      temperature: 28,
      humidity: 70,
      windSpeed: 2,
      description: 'soleado',
      icon: '01d'
    },
    'Londres': {
      temperature: 15,
      humidity: 75,
      windSpeed: 4,
      description: 'nevado',
      icon: '13d'
    },
    'Republica Dominicana': {
      temperature: 27,
      humidity: 70,
      windSpeed: 2,
      description: 'Soleado',
      icon: '01d',
    }
  };

  export const fetchWeather = async (city) => {
    try {

      await new Promise(resolve => setTimeout(resolve, 500));
  
      //bueno esto  lo que hace es deovlver los datos segun la ciudad o un error si la ciudad no existe
      if (weatherDataByCity[city]) {
        return {
          city,
          ...weatherDataByCity[city]
        };
      } else {
        throw new Error(`No weather data available for ${city}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error; 
    }
  };
  