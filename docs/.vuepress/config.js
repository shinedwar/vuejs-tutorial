module.exports = {
  base: '/',
  title: 'Vue.js 入门教程',
  description: 'Vue.js - The Progressive JavaScript Framework',
  host: '0.0.0.0',
  port: 8080,
  themeConfig: {
    repo: 'lipengzhou/vuejs-tutorial',
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      ['/introduction', '介绍'],
      ['/getting-started', '起步'],
      ['/template-syntax', '模板语法'],
      ['/todomvc', '基础案例：TodoMVC'],
      ['/component', '组件'],
      ['/vue-cli-example', 'Vue CLI 案例：CRUD'],
      ['/webpack', 'webpack'],
      ['/ajax', '与服务端通信'],
      ['/vue-router', '路由系统'],
      ['/other', '其它']
    ]
  }
}
