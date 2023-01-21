import {useState, useRef} from 'react';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('100');

  const lastOperation = useRef<Operators>();

  const resetNumber = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (numberAsText: string) => {
    if (number.includes('.') && numberAsText === '.') return;

    if (numberAsText.startsWith('0') || numberAsText.startsWith('-0')) {
      if (numberAsText === '.') {
        setNumber(number + numberAsText);
      } else if (numberAsText === '0' && number.includes('.')) {
        setNumber(number + numberAsText);
      } else if (numberAsText !== '0' && !number.includes('.')) {
        setNumber(numberAsText);
      } else if (numberAsText === '0' && number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberAsText);
      }
    }
  };

  const appendNumber = (numberAsText: string) => {
    buildNumber(numberAsText);
  };

  const togglePositive = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const eraseLastInput = () => {
    if (number.includes('-') && number.length >= 2) {
      let lastChar = number[-1];
      setNumber(number.replace(lastChar, ''));
    } else if (number.length == 1 && number.includes('-')) {
      setNumber('0');
    } else {
      let lastChar = number[-1];
      setNumber(number.replace(lastChar, ''));
    }
  };

  const changeCurrentToPreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setNumber('0');
    }
    setNumber('0');
  };

  const divideButton = () => {
    changeCurrentToPreviousNumber();
    lastOperation.current = Operators.divide;
  };

  const multiplyButton = () => {
    changeCurrentToPreviousNumber();
    lastOperation.current = Operators.multiply;
  };

  const substractButton = () => {
    changeCurrentToPreviousNumber();
    lastOperation.current = Operators.substract;
  };

  const sumButton = () => {
    changeCurrentToPreviousNumber();
    lastOperation.current = Operators.sum;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
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
  };
};
