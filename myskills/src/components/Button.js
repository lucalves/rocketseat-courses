import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button ({ title, onPress }){
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.button}
      activeOpacity={.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A148C',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
})