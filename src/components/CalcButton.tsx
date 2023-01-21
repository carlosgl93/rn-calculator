import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native/types';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  _backgroundColor?: string;
  action: (numberAsText: string) => void;
  widder?: boolean;
}

const CalcButton = ({
  text,
  _backgroundColor = '#2d2d2d',
  widder = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: _backgroundColor,
          width: widder === true ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: _backgroundColor === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalcButton;
