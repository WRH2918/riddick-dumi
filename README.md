<!--
 * @Author: Ronny Wu
 * @Date: 2023-01-04 17:15:54
 * @LastEditors: Ronny Wu
 * @LastEditTime: 2023-01-05 16:15:33
-->

# riddick-react-native

component

## Installation

```sh
npm install riddick-react-native
```

## Usage

```js
import { RiddickReactNativeView } from 'riddick-react-native';

// ...

<RiddickReactNativeView color="tomato" />;
```

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

## react-native 如何发布用户需要使用的相关文件呢？

### 方法一：使用 .gitignore 设置忽略哪些文件

.gitignore 设置的忽略文件，在 git 代码管理和 npm publish 都会被忽略

### 方法二：使用 .npmignore 设置忽略哪些文件

.npmignore 的写法跟**.gitignore** 的规则完全一样。若同时使用了**.npmignore 和.gitignore**，只有**.npmignore**会生效，优先级比较高

### 方法三：使用 package.json 的 files 字段选择发布哪些文件

在 package.json 中 files 字段设置发布哪些文件或目录。这个优先级高于 .npmignore 和 .gitignore

## 添加编译后 src 文件源代码

在 package.json 中 files 字段前添加 "react-native": "src/index",

---

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
