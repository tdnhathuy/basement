import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const Colors = {
  primary: '#016703',
  positive_text: '#4046DF',
  negative_text: '#C55244',
  heneiken_green: '#016703',
  text_dark: '#747474',

  black: '#000000',
  white: '#FFFFFF',

  border: '#C2C2C5',
  border_green: '#B2CCB8',
  mint: '#F3F9F3',
  trans: 'transparent',
  pink: '#E1B8FB',
  divider: '#c9c9c9',
  placeholder: 'grey',
  red_delete: '#DC676C',
  yellow: '#ffdf00',
};

export const lightShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

export const boldShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
};
