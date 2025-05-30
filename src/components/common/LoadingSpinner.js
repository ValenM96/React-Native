import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const LoadingSpinner = ({ 
  size = 'large', 
  color = COLORS.primary, 
  text = 'Cargando...',
  showText = true 
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {showText && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: COLORS.text.secondary,
    textAlign: 'center',
  },
});

export default LoadingSpinner;