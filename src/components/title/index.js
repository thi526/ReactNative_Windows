import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});