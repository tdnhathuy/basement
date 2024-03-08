import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewProps } from 'react-native';
import { useDebounce } from 'rooks';
import { Colors } from '../configs/style.config';
import { ViewBaseProps } from '../types';
import { Text } from './text.component';
import { View } from './view.component';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'warn'
  | 'disable';

export interface ButtonProps extends ViewBaseProps {
  title?: string;
  titleSize?: number;
  titleStyle?: StyleProp<TextStyle>;

  disabled?: boolean;
  rounded?: boolean;
  onPress?: () => void;
  type?: ButtonType;
  testID?: string;

  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  debounce?: number;
  ctnStyle?: ViewProps['style'];
  adjustsFontSizeToFit?: boolean;
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
    rightIcon,
    leftIcon,
    ctnStyle: btnStyle,
    adjustsFontSizeToFit = false,
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
      paddingHorizontal: 8,
      flexDirection: 'row',
      columnGap: 8,
    },
    defaultTitleStyle: {
      color: '#FFF',
      fontWeight: '500',
      fontSize: titleSize,
      textAlign: 'center',
    },

    outlineButtonStyle: {
      borderWidth: 1,
      backgroundColor: '#FFF',
      borderColor: '#267C47',
    },
    outlineTitleStyle: {
      color: Colors.heneiken_green,
      backgroundColor: '#FFF',
    },

    secondaryButtonStyle: {},
    secondaryTitleStyle: {},

    warnButtonStyle: {
      backgroundColor: '#A02026',
    },
    warnTitleStyle: {},

    disabledButtonStyle: {
      backgroundColor: '#D5D5D5',
    },
    disabledTitleStyle: {
      color: '#9E9E9E',
    },
  });

  const isOutline = type === 'outline';
  const isSecondary = type === 'secondary';
  const isWarn = type === 'warn';
  const isDisable = type === 'disable' || disabled;

  const ctnStyle = {
    ...styles.defaultButtonStyle,
    ...(isOutline && styles.outlineButtonStyle),
    ...(isSecondary && styles.secondaryButtonStyle),
    ...(isWarn && styles.warnButtonStyle),
    ...(isDisable && styles.disabledButtonStyle),
  };

  const defaultTitleStyle = {
    ...styles.defaultTitleStyle,
    ...(isOutline && styles.outlineTitleStyle),
    ...(isSecondary && styles.secondaryTitleStyle),
    ...(isWarn && styles.warnTitleStyle),
    ...(isDisable && styles.disabledTitleStyle),
  };

  const debouncePress = useDebounce(() => onPress?.(), 0);

  return (
    <View
      testID={props.testID}
      style={[ctnStyle, btnStyle]}
      {...(!isDisable && { onPress: debouncePress })}
      show={show}>
      {leftIcon}
      <Text
        color={isOutline ? Colors.black : Colors.white}
        style={[defaultTitleStyle, titleStyle]}
        numberOfLines={1}
        adjustsFontSizeToFit={adjustsFontSizeToFit}>
        {title}
      </Text>
      {rightIcon}
    </View>
  );
};
