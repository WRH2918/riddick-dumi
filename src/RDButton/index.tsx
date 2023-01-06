import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const RDButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default RDButton;
