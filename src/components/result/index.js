import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc(props) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.message}>{props.messageResultImc}</Text>
      {props.resultImc && (
        <Text style={styles.result}>{props.resultImc}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#666',
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 10,
  },
});