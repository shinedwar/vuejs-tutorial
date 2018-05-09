module.exports = {
  base: '/',
  title: 'Vue.js 入门教程',
  description: 'Vue.js 入门教程',
  host: '0.0.0.0',
  port: 8080,
  dest: '.vuepress/dist',
  themeConfig: {
    repo: 'lipengzhou/vuejs-tutorial',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      ['/introduction', '介绍'],
      ['/getting-started', '起步'],
      ['/template-syntax', '模板语法'],
      ['/todomvc', '基础案例：TodoMVC'],
      ['/component', '组件'],
      ['/ajax', '与服务端通信'],
      ['/vue-router', '路由系统'],
      ['/other', '其它']
    ]
  }
}
