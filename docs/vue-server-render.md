与传统 SPA（Single-Page Application - 单页应用程序）相比，服务器端渲染(SSR)的优势主要在于：

- 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。

也就是说，如果 SEO 对你的站点至关重要，而你的页面又是异步获取内容，则你可能需要服务器端渲染(SSR)解决此问题。



普通情况下 Vue 开发的单页应用对 SEO 不友好，因为数据都是通过 ajax 异步交互加载。
爬虫抓取不到异步加载的数据。

这个时候如果还想使用 Vue 而且还想解决 SEO 问题，那么可以使用 Vue 官方开发的 Vue-Server-Render 插件来解决。

`vue-server-render` 插件支持在服务端渲染 Vue 组件。
而且这个服务端必须是 Node。


- vue-server-render 就是支持你在 Node 中使用 Vue 作为模板引擎
- 但是 vue-server-render 其实也很麻烦
- 社区中有个公司基于 vue-server-render 搞了一个上层框架：nuxt
- nuxt 帮你把 vsr 的使用成本降低到了极致

