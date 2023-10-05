// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIOS, isIphoneWithNotch } from '../helpers';

export const useStyle = () => {
  //   const { top, bottom } = useSafeAreaInsets();

  // const getPaddingHeader = (hasTitle = '') => {
  //   if (isIphoneWithNotch()) return top;
  //   if (!isIOS && hasTitle.length) return 4;
  //   return 16;
  // };

  // return {
  //   getPaddingHeader,
  //   safeTop: top,
  //   safeBottom: bottom,
  // };

  const getPaddingHeader = (hasTitle = '') => {
    if (isIphoneWithNotch()) return 59;
    if (!isIOS && hasTitle.length) return 4;
    return 16;
  };

  return {
    getPaddingHeader,
    safeTop: isIphoneWithNotch() ? 59 : 16,
    safeBottom: isIphoneWithNotch() ? 34 : 20,
  };
};
