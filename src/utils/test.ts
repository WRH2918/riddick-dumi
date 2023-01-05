import { Dimensions, ScaledSize } from 'react-native';

/*
 * @Author: Ronny Wu
 * @Date: 2023-01-05 10:07:31
 * @LastEditors: Ronny Wu
 * @LastEditTime: 2023-01-05 10:23:56
 */
export const test = () => {
  console.log('aaa');
};

export const getWindow = (): ScaledSize => {
  return Dimensions.get('window');
};
