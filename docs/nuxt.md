## Nuxt.js 是什么

## 开始

### 新手模板

为了便于大家快速使用，Nuxt.js提供了一个 [starter 模板](https://github.com/nuxt-community/starter-template)。

[下载模板的压缩包](https://github.com/nuxt-community/starter-template/archive/master.zip) 或利用 `vue-cli` 安装使用：

```bash
$ vue init nuxt-community/starter-template <project-name>
```

如果 [vue-cli](https://github.com/vuejs/vue-cli) 没有安装, 需先通过 `npm install -g vue-cli` 来安装。

然后安装依赖包：

```shell
$ cd <project-name>
$ npm install
```

接着通过以下命令启动项目：

```shell
$ npm run dev
```

应用现在运行在 [http://localhost:3000](http://localhost:3000/)

> 注意：Nuxt.js 会监听 `pages` 目录中的文件变更并自动重启， 当添加新页面时没有必要手工重启应用。

### 从头开始新建项目

如果不使用 Nuxt.js 提供的 starter 模板，我们也可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 *1个文件和1个目录*。如下所示：

```shell
$ mkdir <项目名>
$ cd <项目名>
$ npm init -y
$ npm install nuxt
```

配置 `package.json` 文件中的 `scripts`：

```json
{
  ...
  "scripts": {
    "dev": "nuxt"
  },
  ...
}
```

Nuxt.js 会依据 `pages` 目录中的所有 `*.vue` 文件生成应用的路由配置。

创建 `pages` 目录：

```shell
$ mkdir pages
```

创建我们的第一个页面 `pages/index.vue`：

```vue
<template>
  <h1>Hello world!</h1>
</template>
```

然后启动项目：

```shell
$ npm run dev
```

Bingo！现在我们的应用运行在 [http://localhost:3000](http://localhost:3000/)

> 注意：Nuxt.js 会监听 `pages` 目录中的文件变更并自动重启， 当添加新页面时没有必要手工重启应用。

了解更多关于Nuxt.js应用的目录结构： [目录结构](https://zh.nuxtjs.org/guide/directory-structure)。

---

## 项目目录结构

Nuxt.js 的应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用。 当然，你也可以根据自己的偏好组织应用代码。

