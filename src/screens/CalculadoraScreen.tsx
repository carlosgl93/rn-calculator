import React from 'react';
import {View, Text} from 'react-native/types';
import CalcButton from '../components/CalcButton';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

const CalculadoraScreen = () => {
  const {
    previousNumber,
    number,
    resetNumber,
    togglePositive,
    eraseLastInput,
    divideButton,
    multiplyButton,
    substractButton,
    sumButton,
    calculate,
    appendNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <CalcButton text="C" action={resetNumber} />
        <CalcButton text="+/-" action={togglePositive} />
        <CalcButton text="del" action={eraseLastInput} />
        <CalcButton
          text="/"
          _backgroundColor="#FF94227"
          action={divideButton}
        />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" action={appendNumber} />
        <CalcButton text="8" action={appendNumber} />
        <CalcButton text="9" action={appendNumber} />
        <CalcButton
          text="*"
          _backgroundColor="#FF94227"
          action={multiplyButton}
        />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" action={appendNumber} />
        <CalcButton text="5" action={appendNumber} />
        <CalcButton text="6" action={appendNumber} />
        <CalcButton
          text="-"
          _backgroundColor="#FF94227"
          action={substractButton}
        />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" action={appendNumber} />
        <CalcButton text="2" action={appendNumber} />
        <CalcButton text="3" action={appendNumber} />
        <CalcButton text="+" _backgroundColor="#FF94227" action={sumButton} />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" widder action={appendNumber} />
        <CalcButton text="." action={appendNumber} />
        <CalcButton text="=" _backgroundColor="#FF94227" action={calculate} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
