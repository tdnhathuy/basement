import { TextStyle, ViewStyle } from 'react-native';

export type ShadowType = 'light' | 'bold';
export interface ViewBaseProps {
  shadow?: ShadowType;
  row?: boolean;
  flex1?: boolean;
  red?: boolean;
  bg?: string;

  w?: ViewStyle['width'];
  h?: ViewStyle['height'];

  justify?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];

  border?: boolean;
  radius?: ViewStyle['borderRadius'];

  p?: ViewStyle['padding'];
  px?: ViewStyle['paddingHorizontal'];
  py?: ViewStyle['paddingVertical'];
  pt?: ViewStyle['paddingTop'];
  pb?: ViewStyle['paddingBottom'];
  pl?: ViewStyle['paddingLeft'];
  pr?: ViewStyle['paddingRight'];

  m?: ViewStyle['margin'];
  mx?: ViewStyle['marginHorizontal'];
  my?: ViewStyle['marginVertical'];
  mt?: ViewStyle['marginTop'];
  mb?: ViewStyle['marginBottom'];
  ml?: ViewStyle['marginLeft'];
  mr?: ViewStyle['marginRight'];
  self?: ViewStyle['alignSelf'];
  absolute?: boolean;

  show?: boolean;
  hiddenOverflow?: boolean;
}

export interface TextBaseProps {
  weight?: TextStyle['fontWeight'];
  border?: boolean;
  color?: string;

  justify?: TextStyle['justifyContent'];
  align?: TextStyle['textAlign'];
  radius?: TextStyle['borderRadius'];

  p?: TextStyle['padding'];
  px?: TextStyle['paddingHorizontal'];
  py?: TextStyle['paddingVertical'];
  pt?: TextStyle['paddingTop'];
  pb?: TextStyle['paddingBottom'];

  m?: TextStyle['margin'];
  mx?: TextStyle['marginHorizontal'];
  my?: TextStyle['marginVertical'];
  mt?: TextStyle['marginTop'];
  mb?: TextStyle['marginBottom'];

  size?: keyof typeof EnumTextSize | number;
  flex1?: boolean;

  w?: ViewStyle['width'];
  h?: ViewStyle['height'];
}

export enum EnumTextSize {
  lg = 18,
  md = 14,
  sm = 12,
}
