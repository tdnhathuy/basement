import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import { View } from './view.component';
import { Text } from './text.component';
import { TextBaseProps, ViewBaseProps } from '../types';
import { baseTextStyle, baseViewStyle, isIOS } from '../helpers';
import { Colors } from '../configs/style.config';

export interface UCATextInputType {
  getText: () => string;
  setText: (text: string) => void;
  clear: () => void;
}

export interface UCATextInputProps extends TextInputProps {
  value?: TextInputProps['value'];
  onChangeText?: TextInputProps['onChangeText'];
  placeholder?: string;
  ctnStyle?: StyleProp<ViewStyle>;
  ctnProps?: ViewBaseProps;
  inputProps?: TextBaseProps;
}

export const TextInput = forwardRef<UCATextInputType, UCATextInputProps>(
  (props, ref) => {
    const {
      ctnStyle = {},
      ctnProps = {},
      inputProps = {},
      placeholder = '',
      value: initText = '',
    } = props;

    const [text, setText] = useState(initText);
    const defaultStyle = StyleSheet.create({
      text: {
        ...baseTextStyle(inputProps),
        flex: 1,
      },
      ctn: {
        ...baseViewStyle(ctnProps),
      },
    });
    useImperativeHandle(ref, () => ({
      clear: () => setText(''),
      getText: () => text,
      setText: text => setText(text),
    }));

    const value = props.value || text;
    const onChangeText = props.onChangeText || setText;

    return (
      <View
        row
        w={'100%'}
        h={45}
        align="center"
        px={18}
        border
        style={[ctnStyle]}
        radius={4}
        {...ctnProps}>
        <View row flex1 bg="transparent" align="center">
          {!!!value && (
            <Text px={isIOS ? 0 : 6} style={styles.placeholder}>
              {placeholder}
            </Text>
          )}

          <RNTextInput
            underlineColorAndroid={Colors.trans}
            clearButtonMode="while-editing"
            value={value}
            onChangeText={onChangeText}
            placeholder={''}
            style={[defaultStyle.text]}
            {...props}
            {...inputProps}
          />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
  },
});
