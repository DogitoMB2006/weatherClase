export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  export const capitalizeText = (text) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  export const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };
  
  export const convertKelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32;
  };
  
  export const validateCityInput = (input) => {
    // Regex para validar nombres de ciudades
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(input);
  };
  