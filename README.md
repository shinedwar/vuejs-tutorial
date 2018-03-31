# Vue.js 入门

- git 版本控制
- 集中仓库
  + github
  + 码云
  + coding

- 服务器上线
  + 把项目从集中仓库中 done 到服务器上
  + done 下来的项目没有第三方包
  + 所以在服务器上执行 `npm install`
  + `browser-sync` 仅仅是用于辅助我们开发的一个工具而已
  + 在服务器计算机真生上线发布给普通用户访问的时候，不可能使用这种工具
  + 一般会选择 `apache` 这样稳定老牌 http 服务器软件

- 所以对于我们在项目中使用 `browser-sync` 这样的工具包
  + 我们在安装的时候，加上 `--save-dev` 选项
  + `npm install --save-dev browser-sync`
  + `--save-dev` 就是告诉 npm 你把这个包的依赖信息保存到 `devDependencies` 选项中

- 接下来我们在服务器上安装第三方包的时候：
  + `npm install` 安装所有依赖项，包括 `devDependencies`
  + 但是我们可以通过 `npm install --production` 告诉 npm 你只给我安装 `dependencies` 中的依赖，排除掉 `devDependencies` 中的依赖
