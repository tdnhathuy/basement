import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useDidUpdate } from 'rooks';
import { Text } from './text.component';

export interface SegmentProps {
  segments: string[];
  onChangeTab?: (index: number) => void;
  ctnStyle?: StyleProp<ViewStyle>;
}

const SEGMENT_HEIGHT = 45;
const SEGMENT_RADIUS = 6;
const SEGMENT_OFFSET = 6;

export const Segment = (props: SegmentProps) => {
  const { segments = [], ctnStyle, onChangeTab = () => {} } = props;

  const [index, setIndex] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);

  const refAniValue = useRef(new Animated.Value(0)).current;

  const onPressTab = (idx: number) => {
    setIndex(idx);
    onChangeTab(idx)
  };

  useDidUpdate(() => {
    Animated.timing(refAniValue, {
      toValue: index,
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [index]);

  return (
    <View style={[styles.ctn, ctnStyle]}>
      <Animated.View
        style={[
          styles.bar,
          {
            width: tabWidth,
            transform: [
              {
                translateX: refAniValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, tabWidth + 2 * SEGMENT_OFFSET],
                }),
              },
            ],
          },
        ]}
      />

      {segments.map((segment, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            onLayout={e => {
              setTabWidth(e.nativeEvent.layout.width - SEGMENT_OFFSET * 2);
            }}
            onPress={() => onPressTab(idx)}
            style={styles.ctnBtn}>
            <Text font={idx === index ? 'bold' : 'semi-bold'} style={{}}>
              {segment}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ctnBtn: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    height: SEGMENT_HEIGHT - 12,
    backgroundColor: 'white',
    position: 'absolute',
    margin: SEGMENT_OFFSET,
    borderRadius: SEGMENT_RADIUS / 2,
    left: 0,
  },
  ctn: {
    height: SEGMENT_HEIGHT,
    borderRadius: SEGMENT_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#F4f4f4',
  },
});
