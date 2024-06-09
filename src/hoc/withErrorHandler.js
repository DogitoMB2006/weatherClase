import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const withErrorHandler = (WrappedComponent) => {
  return function ErrorHandler(props) {
    const [error, setError] = useState(null);

   
    const handleError = (errorMessage) => {
      setError(errorMessage);
     
    };

    useEffect(() => {
      if (error) {
        
        console.log('Error registrado:', error);
      }
    }, [error]);

   
    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Ha ocurrido un error: {error}</Text>
        </View>
      );
    }


    return <WrappedComponent {...props} onError={handleError} />;
  };
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default withErrorHandler;
