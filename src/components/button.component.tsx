import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { View } from './view.component';
import { Text } from './text.component';
import { ViewBaseProps } from '../types';
import { Colors } from '../configs/style.config';

export type ButtonType = 'primary' | 'secondary' | 'outline' | 'warn';

export interface ButtonProps extends ViewBaseProps {
  title?: string;
  titleSize?: number;
  titleStyle?: StyleProp<TextStyle>;

  disabled?: boolean;
  rounded?: boolean;
  onPress?: () => void;
  type?: ButtonType;
  testID?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    title,
    onPress,
    bg = '#267C47',
    rounded = false,
    disabled = false,
    h: height = 50,
    w: width,
    type = 'primary',
    titleSize = 16,
    show = true,
    titleStyle,
  } = props;

  const styles = StyleSheet.create({
    defaultButtonStyle: {
      backgroundColor: bg,
      borderRadius: rounded ? 100 : 6,
      justifyContent: 'center',
      alignItems: 'center',
      flex: props.flex1 ? 1 : 0,
      height: height,
      width: width,
      paddingHorizontal: 24,
    },
    defaultTitleStyle: {
      color: '#FFF',
      fontWeight: '500',
      fontSize: titleSize,
    },

    outlineButtonStyle: {
      backgroundColor: '#f1f1f1',
    },
    outlineTitleStyle: {
      backgroundColor: '#f1f1f1',
      color: Colors.black,
    },

    secondaryButtonStyle: {},
    secondaryTitleStyle: {},

    warnButtonStyle: {
      backgroundColor: '#A02026',
    },
    warnTitleStyle: {},
  });

  const isOutline = type === 'outline';
  const isSecondary = type === 'secondary';
  const isWarn = type === 'warn';

  const ctnStyle = {
    ...styles.defaultButtonStyle,
    ...(isOutline && styles.outlineButtonStyle),
    ...(isSecondary && styles.secondaryButtonStyle),
    ...(isWarn && styles.warnButtonStyle),
  };

  const defaultTitleStyle = {
    ...styles.defaultTitleStyle,
    ...(isOutline && styles.outlineTitleStyle),
    ...(isSecondary && styles.secondaryTitleStyle),
    ...(isWarn && styles.warnTitleStyle),
  };

  return (
    <View
      testID={props.testID}
      style={[ctnStyle]}
      {...(!disabled && { onPress })}
      show={show}>
      <Text
        color={isOutline ? Colors.black : Colors.white}
        style={[defaultTitleStyle, titleStyle]}>
        {title}
      </Text>
    </View>
  );
};
