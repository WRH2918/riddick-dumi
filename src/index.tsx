// import {
//   requireNativeComponent,
//   UIManager,
//   Platform,
//   ViewStyle,
// } from 'react-native';

// const LINKING_ERROR =
//   `The package 'riddick-react-native' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// type RiddickReactNativeProps = {
//   color: string;
//   style: ViewStyle;
// };

// const ComponentName = 'RiddickReactNativeView';

// export const RiddickReactNativeView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<RiddickReactNativeProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };

export * from './utils/test';
export { default as RDButton } from './components/RDButton';
export { default as RNTextInput } from './components/Input/RNTextInput';
export { default as RNTextInput2 } from './components/Input/RNText';
