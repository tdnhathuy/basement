import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../configs/style.config';

export interface LoadingSpinnerProps {
  white?: boolean;
}

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { white = false } = props;

  return (
    <ActivityIndicator
      size={'large'}
      color={white ? Colors.white : Colors.black}
    />
  );
};
