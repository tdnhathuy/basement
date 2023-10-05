import React from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { baseViewStyle } from '../helpers';
import { ViewBaseProps } from '../types';

export interface UCAScrollViewProps extends ScrollViewProps, ViewBaseProps {
  handleKeyboard?: boolean;
}

export const ScrollView = (props: UCAScrollViewProps) => {
  const { handleKeyboard = true } = props;
  const { defaultViewStyle, contentContainerStyle } = StyleSheet.create({
    defaultViewStyle: {
      ...baseViewStyle(props),
      justifyContent: undefined,
      alignItems: undefined,
    },
    contentContainerStyle: {
      justifyContent: props.justify,
      alignItems: props.align,
      flex: props.flex1 ? 1 : 0,
    },
  });

  const Component = handleKeyboard ? KeyboardAwareScrollView : RNScrollView;

  return (
    <Component
      {...props}
      style={[defaultViewStyle]}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      enableOnAndroid
      extraHeight={250}>
      {props.children}
    </Component>
  );
};
