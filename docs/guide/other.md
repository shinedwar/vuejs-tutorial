# 其它

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

![](../media/dev-and-debug0.png)
