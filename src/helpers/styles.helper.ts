import { StyleSheet } from 'react-native';

import { ShadowType, TextBaseProps, ViewBaseProps } from '../types';
import { Colors, boldShadow, lightShadow } from '../configs/style.config';

export const genShadow = (shadow?: ShadowType) => {
  if (!shadow) return {};
  if (shadow === 'light') return lightShadow;
  if (shadow === 'bold') return boldShadow;
};

export const baseViewStyle = (props: ViewBaseProps) => {
  return StyleSheet.create({
    view: {
      padding: props.p,
      paddingTop: props.pt,
      paddingBottom: props.pb,
      paddingVertical: props.py,
      paddingHorizontal: props.px,
      paddingRight: props.pr,
      paddingLeft: props.pl,

      margin: props.m,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginVertical: props.my,
      marginHorizontal: props.mx,
      marginRight: props.mr,
      marginLeft: props.ml,

      width: props.w,
      height: props.h,

      borderWidth: props.border ? 1 : 0,
      borderColor: Colors.border,
      borderRadius: props.radius ? props.radius : 0,
      flex: props.flex1 ? 1 : 0,

      justifyContent: props.justify,
      alignItems: props.align,
      alignSelf: props.self,

      backgroundColor: props.red ? 'red' : undefined,

      position: props.absolute ? 'absolute' : 'relative',

      ...genShadow(props.shadow),
    },
  }).view;
};

export const baseTextStyle = (props: TextBaseProps) => {
  return StyleSheet.create({
    text: {
      padding: props.p,
      paddingTop: props.pt,
      paddingBottom: props.pb,
      paddingVertical: props.py,
      paddingHorizontal: props.px,

      margin: props.m,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginVertical: props.my,
      marginHorizontal: props.mx,

      width: props.w,
      height: props.h,
      color: props.color ? props.color : Colors.black,
      flex: props.flex1 ? 1 : 0,
    },
  }).text;
};
