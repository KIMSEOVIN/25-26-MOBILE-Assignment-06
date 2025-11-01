
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// 텍스트를 prop을 받눈다
const ButtonComponent = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: 'blue', 
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20, 
  },
  text: {
    color: 'white', 
    textAlign: 'center',
    fontSize: 16,
 
  }
});

export default ButtonComponent;