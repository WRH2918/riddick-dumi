import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RNTextInput = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={startAnimate}>
        <Text>Start Animated</Text>
      </TouchableOpacity>
      <Animated.View style={{ opacity: animatedValue }}>
        <Text>RNTextInput</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RNTextInput;
