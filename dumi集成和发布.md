## dumi version 1.1.0

集成 dumi https://www.jianshu.com/p/67fc0a587c62
https://juejin.cn/post/6919044146095357959

# dumi集成
## 1.dumi 依赖

```sh
"devDependencies": {
    "dumi-theme-mobile": "1.0.10",
    "core-js": "^3.8.2",
    "dotenv-cli": "^4.0.0",
    "umi-plugin-react-native": "^0.1.1"
    "dumi": "1.1.10"
}
```

## 2.目录结构

```
  root
  ├─ docs
  │  ├─ index.md
  │  └─ guide
  │       ├─ index.md
  │       └─ sample.md
  └─ src
  │   ├─ button   # 单个组件
  │   │   ├─ index.md    # 组件文档
  │   │   └─ index.tsx   # 组件源码
  │   └─ index.tsx   # 组件入口文件
  └─ .umirc.ts
```

## 配置 dumi 文件.umirc.ts

```
import { defineConfig } from 'dumi';

export default defineConfig({
  title: '舟谱大金刚',
  favicon: './assets/logo.jpg',
  logo: './assets/logo.jpg',
  outputPath: 'docs-dist',
  mode: 'site',
  locales:[['zh-CN', '中文']],
});
```

## 3.配置.gitignore 文件

```
# umi
.umi
.umi-production
.umi-test
.env.local
```

## 4.配置 docs 文件夹

```
---
title: 舟谱大金刚 - 基于 dumi 和 TypeScript 实现的移动端组件库
hero:
  title: 舟谱大金刚
  desc: 移动端组件库
  actions:
    - text: 开始使用
      link: /guide
features:
  - title: 开箱即用
    desc: 使用方式简单
  - title: React 进阶必备
    desc: 使用 React 函数式编程
  - title: TypeScript
    desc: 代码全部使用 TypeScript 开发，提供完整的组件和 API 类型定义
---
```

## 5.配置 package.json 文件

```
"scripts": {
    "start": "dumi dev",
    "docs:build": "dumi build",
}
```

# 部署
```
1、登录GitLab
2、点击右上角头像选择setting
3、在左边导航列表中选择Access token
4、输入Name(随便输入)和过期时间。
5、勾选read_repository和write_repository
6、点击生成
```
###  CI.yml 文件
```
name: CI
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
        
  build-and-deploy:
      runs-on: ubuntu-latest # 运行环境

      steps:
        # 拉代码
        - name: Checkout code
          uses: actions/checkout@v1

        # 下载node，我这里指定了16.x，这个版本可随意，高于dumi规定的node版本即可
        - name: Use Node.js
          uses: actions/setup-node@v1
          with:
            node-version: 16.x

        # 打包代码
        - name: Build Project
          run: |
            yarn install
            yarn run docs:build

        # 部署到github
        - name: Deploy to Github
          uses: JamesIves/github-pages-deploy-action@4.0.0
          with:
            ACCESS_TOKEN: ${{ secrets.RIDDICK_DUMI }}
            branch: build # 打包的内容放到build分支下
            folder: docs-dist
```
### 2. 部署方法 https://juejin.cn/post/7103871313492017159
# dumi 注意事项

### 1. dumi docs-dist 无法本地运行，在 github 上部署可以正常运行




