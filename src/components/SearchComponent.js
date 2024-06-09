// SearchComponent.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchComponent = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city); 
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Ingrese una ciudad"
        value={city}
        onChangeText={setCity}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button
        title="Buscar"
        onPress={handleSearch}
      />
    </View>
  );
};

export default SearchComponent;
