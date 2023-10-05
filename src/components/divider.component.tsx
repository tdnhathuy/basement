import React from 'react';
import { View } from './view.component';
import { Colors, WIDTH } from '../configs/style.config';

export interface DividerProps {
  color?: string;
  width?: any;
  spacing?: number;
  thickness?: number;
}

export const Divider = (props: DividerProps) => {
  const {
    color = Colors.divider,
    width = WIDTH - 40,
    spacing = 6,
    thickness = 0.5,
  } = props;

  return (
    <View w={width} self="center" py={spacing}>
      <View style={{ borderTopWidth: thickness, backgroundColor: color }} />
    </View>
  );
};
