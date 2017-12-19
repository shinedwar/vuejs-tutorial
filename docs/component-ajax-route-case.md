> 案例目标：结合组件、服务端交互、路由完成一个单页版的 CRUD

## 起步

---

## 拆分组件

---

## 加入路由

0. 安装：`npm i vue-router`
1. 在 index.html 页面中把 vue-router.js 引入，引入之后它就会为你提供一个构造函数：`VueRouter`
2. new 出 VueRouter 实例，通过构造函数选项 `routes` 配置路由表（请求 xx 路径导航到 xx 组件）
3. 在启动实例的入口中，配置实例的 `router` 选项让你的应用程序的路由生效
4. 在组件中通过 `router-view` 告诉路由当匹配到具体的路由的时候玩哪儿渲染指定的组件

```javascript
;(function (Home, HeroList) {
  window.router = new VueRouter({
    routes: [{
        path: '/',
        component: Home
      },
      {
        path: '/foo',
        component: {
          template: '<div>foo component</div>'
        }
      },
      {
        path: '/bar',
        component: {
          template: '<div>bar component</div>'
        }
      },
      {
        path: '/heros',
        component: HeroList
      }
    ]
  })
})(Home, HeroList)

```

### 使用 `router-link` 配置侧边栏导航高亮

> router-link 参考文档：https://router.vuejs.org/zh-cn/api/router-link.html

- to
- tag
- active-class
- exact

```html
<router-link to="/" tag="li" active-class="active" exact>
  <a>首页</a>
</router-link>
<router-link to="/heros" tag="li" active-class="active">
  <a>英雄管理</a>
</router-link>
<router-link to="/foo" tag="li" active-class="active">
  <a>Foo</a>
</router-link>
<router-link to="/bar" tag="li" active-class="active">
  <a>Bar</a>
</router-link>
```

## API Server

启动 API Server 访问

```shell
# 在项目根目录下执行
npm run api
```

### 可用资源

```
http://localhost:3000/heros
http://localhost:3000/hero_types
```

### 英雄资源

获取英雄列表

- GET
- http://localhost:3000/heros

添加英雄

- POST
- http://localhost:3000/heros

修改英雄

- PATCH
- http://localhost:3000/heros/:heroId

删除英雄

- DELETE
- http://localhost:3000/heros/:heroId

#### 英雄定位资源

获取英雄定位列表

- GET
- http://localhost:3000/hero_types

---

## 展示英雄列表

---

## 添加英雄

---

## 修改英雄

---

## 删除英雄
