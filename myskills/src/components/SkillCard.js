import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SkillCard({ skill }){
  return (
    <TouchableOpacity 
      key={skill}
      style={styles.buttonSkill}
      activeOpacity={.7}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    marginTop: 10,
    borderRadius: 50, 
    alignItems: 'center'
  }
})