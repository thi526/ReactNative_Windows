import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  function calcularArea() {
    // Fecha o teclado virtual
    Keyboard.dismiss();
    
    if (base > 0 && altura > 0) {
      setArea((parseFloat(base) * parseFloat(altura)) / 2);
    } else {
      setArea('');
      alert('Por favor, insira valores válidos para base e altura!');
    }
  }

  function limparCampos() {
    setBase('');
    setAltura('');
    setArea('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora de Área do Triângulo</Text>
        <Text style={styles.subtitle}>Insira os valores da base e altura</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Base do triângulo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor da base"
          keyboardType="numeric"
          value={base}
          onChangeText={setBase}
        />

        <Text style={styles.label}>Altura do triângulo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor da altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.calcularButton} 
          onPress={calcularArea}
        >
          <Text style={styles.buttonText}>Calcular Área</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.limparButton} 
          onPress={limparCampos}
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {area ? `Área do triângulo: ${area}` : ''}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  calcularButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  limparButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});