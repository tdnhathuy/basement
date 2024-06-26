import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { baseTextStyle } from '../helpers';
import { EnumTextSize, TextBaseProps } from '../types';
export interface TextProps extends RNTextProps, TextBaseProps {
  color?: string;
  children?: any;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  underline?: boolean;
  font?: keyof typeof CustomFont;
}

export enum CustomFont {
  'regular' = 'Nunito-Regular',
  'bold' = 'Nunito-Bold',
  'semi-bold' = 'Nunito-SemiBold',
  'extra-bold' = 'Nunito-ExtraBold',
  'light' = 'Nunito-Light',
  'medium' = 'Nunito-Medium',
  'black' = 'Nunito-Black',
}

export const Text = (props: TextProps) => {
  const {
    children = '',
    size = 'md',
    style = {},
    underline = false,
    font = 'regular',
  } = props;

  const fontSize = typeof size === 'number' ? size : EnumTextSize[size];

  const fontFamily =
    font === 'bold'
      ? 'Roboto-Bold'
      : font === 'semi-bold'
      ? 'Roboto-Medium'
      : 'Roboto-Regular';

  const { defaultTextStyle } = StyleSheet.create({
    defaultTextStyle: {
      fontSize: fontSize,
      fontFamily,
      textAlign: props.align,
      textDecorationLine: underline ? 'underline' : 'none',
      ...baseTextStyle(props),
    },
  });

  return (
    <RNText
      allowFontScaling={false}
      onPress={props.onPress}
      style={[defaultTextStyle, style]}
      {...props}>
      {children}
    </RNText>
  );
};
