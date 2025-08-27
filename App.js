import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumberPress = (number) => {
    if (waitingForSecondValue) {
      setDisplay(String(number));
      setWaitingForSecondValue(false);
    } else {
      setDisplay(display === '0' ? String(number) : display + number);
    }
  };

  const handleOperatorPress = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstValue(result);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);
    
    switch (operator) {
      case '+':
        return firstValue + inputValue;
      case '-':
        return firstValue - inputValue;
      case '×':
        return firstValue * inputValue;
      case '÷':
        return inputValue !== 0 ? firstValue / inputValue : 0;
      default:
        return inputValue;
    }
  };

  const handleEqual = () => {
    const inputValue = parseFloat(display);

    if (firstValue !== null && operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstValue(result);
      setOperator(null);
      setWaitingForSecondValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleDecimal = () => {
    if (waitingForSecondValue) {
      setDisplay('0.');
      setWaitingForSecondValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const Button = ({ title, onPress, style, textStyle }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button title="C" onPress={handleClear} style={styles.clearButton} />
          <Button title="÷" onPress={() => handleOperatorPress('÷')} style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button title="7" onPress={() => handleNumberPress(7)} />
          <Button title="8" onPress={() => handleNumberPress(8)} />
          <Button title="9" onPress={() => handleNumberPress(9)} />
          <Button title="×" onPress={() => handleOperatorPress('×')} style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button title="4" onPress={() => handleNumberPress(4)} />
          <Button title="5" onPress={() => handleNumberPress(5)} />
          <Button title="6" onPress={() => handleNumberPress(6)} />
          <Button title="-" onPress={() => handleOperatorPress('-')} style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button title="1" onPress={() => handleNumberPress(1)} />
          <Button title="2" onPress={() => handleNumberPress(2)} />
          <Button title="3" onPress={() => handleNumberPress(3)} />
          <Button title="+" onPress={() => handleOperatorPress('+')} style={styles.operatorButton} />
        </View>

        <View style={styles.row}>
          <Button title="0" onPress={() => handleNumberPress(0)} style={styles.zeroButton} />
          <Button title="." onPress={handleDecimal} />
          <Button title="=" onPress={handleEqual} style={styles.equalsButton} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    color: 'white',
    fontWeight: '300',
  },
  buttonsContainer: {
    flex: 2,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#505050',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
  clearButton: {
    backgroundColor: '#d4d4d2',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  equalsButton: {
    backgroundColor: '#ff9500',
  },
  zeroButton: {
    width: 150,
    borderRadius: 35,
  },
});