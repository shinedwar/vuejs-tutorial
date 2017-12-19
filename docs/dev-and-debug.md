## Vue Devtools

为了更方便的调试和观察 Vue 应用，我们可以使用 Vue 官方开发的一个浏览器插件：[Vue Devtools](https://github.com/vuejs/vue-devtools) 来辅助调试。

### 安装

- [Get the Chrome Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Get the Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Workaround for Safari](https://github.com/vuejs/vue-devtools/blob/master/docs/workaround-for-safari.md)

### 手动安装

Make sure you are using Node 6+ and NPM 3+

1. Clone this repo
2. npm install (Or yarn install if you are using yarn as the package manager)
3. npm run build
4. Open Chrome extension page
5. Check "developer mode"
6. Click "load unpacked extension", and choose shells/chrome.


### 使用

- 在 Web 服务器中打开你要调试的 Vue 应用
- 打开开发人员工具，切换到 `Vue` 面板

![](dev-and-debug/dev-and-debug0.png)

---

## JSON Server

> 用不到 30 秒的时间获取一个完整的模拟 REST API 接口服务。

- [json-server](https://github.com/typicode/json-server)

### 安装

```shell
npm install -g json-server
```

查看是否安装成功

```shell
json-server --version
```

查看使用帮助

```shell
json-server --help
```

```
C:\Users\lpz>json-server --help
index.js [options] <source>

Options:
  --config, -c               Path to config file   [default: "json-server.json"]
  --port, -p                 Set port                            [default: 3000]
  --host, -H                 Set host                       [default: "0.0.0.0"]
  --watch, -w                Watch file(s)                             [boolean]
  --routes, -r               Path to routes file
  --middlewares, -m          Paths to middleware files                   [array]
  --static, -s               Set static files directory
  --read-only, --ro          Allow only GET requests                   [boolean]
  --no-cors, --nc            Disable Cross-Origin Resource Sharing     [boolean]
  --no-gzip, --ng            Disable GZIP Content-Encoding             [boolean]
  --snapshots, -S            Set snapshots directory              [default: "."]
  --delay, -d                Add delay to responses (ms)
  --id, -i                   Set database id property (e.g. _id) [default: "id"]
  --foreignKeySuffix, --fks  Set foreign key suffix (e.g. _id as in post_id)
                                                                 [default: "Id"]
  --quiet, -q                Suppress log messages from output         [boolean]
  --help, -h                 Show help                                 [boolean]
  --version, -v              Show version number                       [boolean]

Examples:
  index.js db.json
  index.js file.js
  index.js http://example.com/db.json

https://github.com/typicode/json-server

```

### Example

创建一个 `db.json` 文件并写入以下内容：

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

启动 JSON Server

```shell
json-server --watch db.json
```

打开 Postman 接口测试工具进行测试。

---

## Postman

> 参考文档：https://www.getpostman.com/

---

## Vue CLI

> 参考文档：https://github.com/vuejs/vue-cli

---

## webpack 模板

> 参考文档：https://vuejs-templates.github.io/webpack/

---

## yarn

> 参考文档：https://yarnpkg.com/

---

## browser-sync

> 参考文档：https://browsersync.io/
