import React from 'react';

import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps){
  return (
    <TouchableOpacity 
      key={skill}
      style={styles.buttonSkill}
      {...rest}
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