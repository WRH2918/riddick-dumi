/*
 * @Author: Ronny Wu
 * @Date: 2023-01-04 17:15:54
 * @LastEditors: Ronny Wu
 * @LastEditTime: 2023-01-05 14:07:58
 */
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { test, getWindow, TestView } from 'riddick-react-native';

export default function App() {
  React.useEffect(() => {
    test();
    console.log(getWindow());
  }, []);

  return (
    <View style={styles.container}>
      {/* <RiddickReactNativeView color="#32a852" style={styles.box} /> */}
      <View>
        <Text>{getWindow().height}</Text>
        <TestView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
