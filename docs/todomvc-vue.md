> 案例目标：掌握 Vue 基础语法，强化 MVVM（数据驱动视图） 思想

## 案例介绍

- [TodoMVC](http://todomvc.com/)

![](todomvc-vue/todomvc-vue0.png)

---

## 需求说明

- [TodoMVC 需求说明](https://github.com/tastejs/todomvc/blob/master/app-spec.md)
- [脑图整理的需求说明](http://naotu.baidu.com/file/b935b732b2dbf1b2ff12a3291d7f24e5?token=f1973a115e68f4e1)

---

## 开始

- [TodoMVC 模板仓库](https://github.com/tastejs/todomvc-app-template)

```shell
# 下载模板到本地，重命名为 todomvc-vue
# --depth=1 表示只下载最后一次的 commit，其它历史记录不要，这样可以提高下载速度
git clone https://github.com/tastejs/todomvc-app-template.git todomvc-vue --depth=1

# 切换到 todomvc-vue 目录中，安装依赖项
cd todomvc-vue
npm install

# 打开 todomvc-vue 中的 index.html 预览模板
```

### 配置 [browser-sync](https://browsersync.io/) 浏览器同步测试工具

1. 安装依赖

  ```shell
  # 也可以 npm i -D browser-sync
  npm install --save-dev browser-sync
  ```

2. 配置 scripts

  ```json
  "scripts": {
    "dev": "browser-sync start --server --files \"*.html, css/*.css, js/*.js\"",
    "start": "npm run dev"
  }
  ```

3. 启动开发服务

  ```shell
  # 或者 npm start
  npm run dev
  ```
---

## 功能开发

### 列表渲染

### 添加任务

### 标记所有完成

### 任务项

### 编辑任务

### 数量显示

### 删除单个任务

### 删除所有已完成任务

### 持久化存储

### 路由切换过滤数据列表展示

