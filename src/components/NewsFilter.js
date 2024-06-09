import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const NewsFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedCategory(itemValue);
          onCategoryChange(itemValue);  
        }}
      >
        <Picker.Item label="Todos" value="" />  
        <Picker.Item label="Tecnología" value="Tecnología" />
        <Picker.Item label="Política" value="Política" />
        <Picker.Item label="Deportes" value="Deportes" />
        <Picker.Item label="Economía" value="Economía" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
  },
  picker: {
    width: '100%',
  },
});

export default NewsFilter;
