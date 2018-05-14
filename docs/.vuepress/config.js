module.exports = {
  base: '/',
  title: 'Vue.js 入门教程',
  description: 'Vue.js - The Progressive JavaScript Framework',
  // host: '0.0.0.0',
  port: 8080,
  themeConfig: {
    repo: 'lipengzhou/vuejs-tutorial',
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: '基础', link: '/guide/' },
      { text: '综合案例', link: '/eshop-admin/' }
    ],
    sidebar: {
      '/guide/': [
        'getting-started',
        'template-syntax',
        'todomvc',
        'component',
        'vue-cli-example',
        'webpack',
        'ajax',
        'vue-router',
        'other',
      ]
    }
  }
}
