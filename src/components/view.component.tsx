import React, { useEffect, useState } from 'react';
import {
  View as RNView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewProps as RNViewProps,
  ViewStyle,
} from 'react-native';
import { ViewBaseProps } from '../types';
import { Colors } from '../configs/style.config';
import { useStyle } from '../hooks/common.hook';
import { baseViewStyle } from '../helpers';

export interface ViewProps extends RNViewProps, ViewBaseProps {
  style: StyleProp<ViewStyle>;
  spacing?: number;
  onPress?: () => void;
  debounceTime?: number;

  bottomContainer?: boolean;
  testID?: string;
  getHeight?: (height: number) => void;
}

export const View = (props: Partial<ViewProps>) => {
  const {
    spacing = 0,
    row = false,
    style,
    red = false,
    bg = Colors.trans,
    onPress,
    bottomContainer = false,
    show = true,
    getHeight,
    hiddenOverflow = false,
  } = props;

  const { safeBottom } = useStyle();
  const [paddingBottom, setPaddingBottom] = useState(safeBottom);

  const { defaultViewStyle } = StyleSheet.create({
    defaultViewStyle: {
      ...baseViewStyle(props),

      backgroundColor: red ? 'red' : bg,
      flexDirection: row ? 'row' : 'column',
      justifyContent: props.justify,
      alignItems: props.align,

      rowGap: row ? 0 : spacing,
      columnGap: row ? spacing : 0,

      display: show ? 'flex' : 'none',
      overflow: hiddenOverflow ? 'hidden' : 'visible',

      ...(bottomContainer
        ? {
            paddingBottom: paddingBottom,
            paddingHorizontal: 20,
            paddingTop: 10,
          }
        : {}),
    },
  });

  const defaultStyle: StyleProp<ViewStyle> = [defaultViewStyle, style];

  if (onPress)
    return (
      <TouchableOpacity
        testID={props.testID}
        style={defaultStyle}
        onPress={onPress}
        hitSlop={props.hitSlop}
        onLayout={props.onLayout}>
        {props.children}
      </TouchableOpacity>
    );
  return (
    <RNView
      testID={props.testID}
      style={defaultStyle}
      onLayout={e => {
        getHeight?.(e.nativeEvent.layout.height);
        props.onLayout?.(e);
      }}>
      {props.children}
    </RNView>
  );
};
