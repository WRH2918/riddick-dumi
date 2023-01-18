import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface Props {
  /**
   * @description 背景颜色
   * @default
   */
  backgroundColor?: string;
}

const RDButton: FC<Props> = ({ backgroundColor = '#FF0' }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Text>button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default RDButton;
