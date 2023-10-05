import { Colors } from '@app/configs';
import { isIOS } from '@app/helpers';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import AppBar, { AppBarProps } from '../AppBar';
import { LoadingSpinner } from './loading-spinner.component';
import { View } from './view.component';

export interface UCAScreenProps extends AppBarProps {
  children?: any | JSX.Element | JSX.Element[];
  paddingTop?: number;
  hideHeader?: boolean;
  bg?: string;
  loading?: boolean;
  keyboardAvoid?: boolean;
  keyboardVerticalOffset?: number;
}

export const Screen = (props: UCAScreenProps) => {
  const {
    paddingTop = 0,
    hideHeader = false,
    bg = Colors.white,
    loading = false,
    keyboardAvoid = false,
    keyboardVerticalOffset = 0,
  } = props;

  if (keyboardAvoid) {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled={isIOS}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View bg={bg} flex1>
          {hideHeader ? null : <AppBar title="" {...props} />}
          {loading ? (
            <View flex1 justify="center" align="center">
              <LoadingSpinner />
            </View>
          ) : (
            <View flex1 pt={paddingTop}>
              {props.children}
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    );
  }
  return (
    <View bg={bg} flex1>
      {hideHeader ? null : <AppBar title="" {...props} />}
      {loading ? (
        <View flex1 justify="center" align="center">
          <LoadingSpinner />
        </View>
      ) : (
        <View flex1 pt={paddingTop}>
          {props.children}
        </View>
      )}
    </View>
  );
};
