import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./src/components/title";
import MainComponent from "./src/components/main"; // Renomeado para evitar conflito

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <MainComponent/> {/* Usando o nome alterado */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});