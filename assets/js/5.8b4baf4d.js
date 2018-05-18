(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"模板语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 模板语法")]),s("h2",{attrs:{id:"vue-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-实例","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 实例")]),s("ul",[s("li",[t._v("每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的")]),s("li",[t._v("当创建一个 Vue 实例时，你可以传入一个选项对象")]),s("li",[t._v("el 选项\n"),s("ul",[s("li",[t._v("不能是 html、body 标签")])])]),s("li",[t._v("data 选项\n"),s("ul",[s("li",[t._v("data 中的数据就是我们平常使用模板引擎所常见的模板数据对象")]),s("li",[t._v("data 中的数据是响应式的，即数据改变之后随之驱动视图发生变化")]),s("li",[t._v("只有当实例被创建时 data 中存在的属性才是响应式的")]),s("li",[t._v("注意：动态为实例添加属性是无效的，所以我们要在实例初始化开始的时候初始化我们的 data 选项数据")])])]),s("li",[t._v("methods 选项")]),s("li",[t._v("...")]),s("li",[t._v("不同选项有不同功能作用，更多实例选项参考"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 API 文档")])])]),s("h2",{attrs:{id:"创建一个-vue-的实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-vue-的实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个 Vue 的实例")]),s("p",[t._v("每个 Vue 应用都是通过 "),s("code",[t._v("Vue")]),t._v(" 函数创建一个新的 "),s("strong",[t._v("Vue 实例")]),t._v("开始的：")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 选项")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("当创建一个 Vue 实例时，你可以传入一个"),s("strong",[t._v("选项对象")]),t._v("。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。作为参考，你也可以在 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 文档")]),t._v(" 中浏览完整的选项列表。")]),s("h2",{attrs:{id:"el-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#el-选项","aria-hidden":"true"}},[t._v("#")]),s("code",[t._v("el")]),t._v(" 选项")]),s("blockquote",[s("p",[t._v("参考文档：https://cn.vuejs.org/v2/api/#el")])]),s("p",[t._v("提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。")]),s("ul",[s("li",[t._v("不能作用到 "),s("code",[t._v("<html>")]),t._v(" 或者 "),s("code",[t._v("<body>")]),t._v(" 上")]),s("li",[t._v("也可以通过 "),s("code",[t._v("实例.$mount()")]),t._v(" 手动挂载")])]),s("h2",{attrs:{id:"data-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-选项","aria-hidden":"true"}},[t._v("#")]),s("code",[t._v("data")]),t._v(" 选项")]),s("blockquote",[s("p",[t._v("参考文档：https://cn.vuejs.org/v2/api/#data")])]),s("ul",[s("li",[t._v("响应式数据")]),s("li",[t._v("可以通过 "),s("code",[t._v("vm.$data")]),t._v(" 访问原始数据对象")]),s("li",[t._v("Vue 实例也代理了 data 对象上所有的属性，因此访问 "),s("code",[t._v("vm.a")]),t._v(" 等价于访问 "),s("code",[t._v("vm.$data.a")])]),s("li",[t._v("视图中绑定的数据必须显式的初始化到 data 中")])]),s("h2",{attrs:{id:"methods-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods-选项","aria-hidden":"true"}},[t._v("#")]),s("code",[t._v("methods")]),t._v(" 选项")]),s("blockquote",[s("p",[t._v("参考文档：https://cn.vuejs.org/v2/api/#methods")])]),s("p",[t._v("methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 "),s("code",[t._v("this")]),t._v(" 自动绑定为 Vue 实例。")]),s("p",[t._v("!> 注意，"),s("strong",[t._v("不应该使用箭头函数来定义 method 函数")]),t._v(" (例如 "),s("code",[t._v("plus: () => this.a++")]),t._v(")。理由是箭头函数绑定了父级作用域的上下文，所以 "),s("code",[t._v("this")]),t._v(" 将不会按照期望指向 Vue 实例，"),s("code",[t._v("this.a")]),t._v(" 将是 undefined。")]),s("p",[t._v("示例：")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plus"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("plus")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvm"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])]),s("hr"),s("h2",{attrs:{id:"实例生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例生命周期")]),s("p",[t._v("先来听一段延伸法师的人生感悟："),s("a",{attrs:{href:"https://www.youtube.com/watch?v=Ps1Er1BSWyA",target:"_blank",rel:"noopener noreferrer"}},[t._v("《绳命》")]),t._v("。")]),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Ps1Er1BSWyA?rel=0",frameborder:"0",gesture:"media",allow:"encrypted-media",allowfullscreen:""}}),s("blockquote",[s("p",[t._v("生命是如此的美丽，让我们祝福这所有，让我们祝福生命如此的精彩！")])]),s("hr"),s("hr"),s("p",[t._v("生命周期 这个词挺起来也是挺吓人的，在很多个编程领域都存在着这么一个说法。对于一个萌新来说，确实比较难懂。")]),s("blockquote",[s("p",[t._v("举个例子就好理解多了，人的一生呐，就是从肚子里钻出来，然后度过童年，青年，中年，老年，然后再钻回肚子，哦不，是钻到土地下，这就是一个人的生命周期，从出生到死亡，有着很多个阶段。")])]),s("p",[s("img",{attrs:{src:"https://ooo.0o0.ooo/2017/03/31/58dd2edfc6e95.png",alt:"生命周期"}})]),s("p",[t._v("同样的，实例，一开始我们说了，需要被 构造 出来，紧接着他也会经历它生命中的各个阶段，然后死掉。")]),s("p",[t._v("所以，要了解一个人，我们就要从他一生中的各个阶段去了解它，了解实例也一样！")]),s("blockquote",[s("p",[t._v("进入童年就要上学，青年就要上班，中年就要。。也要上班，老年要退休。")])]),s("p",[t._v("所以说，每进入一个阶段都可以干一件什么事情。Vue 中也是这样的。所以 Vue 提供了一些称之为 钩子(HOOK) 的东西，为我们提供了机会去操作某个阶段的行为。")]),s("p",[t._v("比如说 进入童年 就可以比喻为一个钩子，上学 就可以比喻为这个阶段要让他做的事情。")]),s("p",[s("img",{attrs:{src:"https://ooo.0o0.ooo/2017/03/31/58dd304f6c094.png",alt:"Vue实例生命周期"}})]),s("p",[t._v("好了，回过头来再看一下官方的生命周期图：")]),s("p",[s("img",{attrs:{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"Vue实例生命周期"}})]),s("p",[t._v("我们在里面可以看到几个钩子：")]),s("ul",[s("li",[t._v("beforeCreate\n"),s("ul",[s("li",[t._v("在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。")])])]),s("li",[t._v("created\n"),s("ul",[s("li",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。")])])]),s("li",[t._v("beforeMount\n"),s("ul",[s("li",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用。")])])]),s("li",[t._v("mounted\n"),s("ul",[s("li",[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。")])])]),s("li",[t._v("beforeUpdate\n"),s("ul",[s("li",[t._v("数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。")]),s("li",[t._v("你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。")])])]),s("li",[t._v("updated\n"),s("ul",[s("li",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")])])]),s("li",[t._v("activated")]),s("li",[t._v("deactivated")]),s("li",[t._v("beforeDestroy")]),s("li",[t._v("destroyed")]),s("li",[t._v("errorCaptured")])]),s("p",[t._v("参考文档：")]),s("ul",[s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 官网 - 实例生命周期")])]),s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期钩子函数 API 文档")])]),s("li")]),s("hr"),s("h2",{attrs:{id:"插值绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 插值绑定")]),s("hr"),s("h2",{attrs:{id:"计算属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 计算属性")]),s("hr"),s("h2",{attrs:{id:"class-与-style-绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-与-style-绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" Class 与 Style 绑定")]),s("hr"),s("h2",{attrs:{id:"条件渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 条件渲染")]),s("hr"),s("h2",{attrs:{id:"列表渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 列表渲染")]),s("hr"),s("h2",{attrs:{id:"事件处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件处理")]),s("hr"),s("h2",{attrs:{id:"表单输入绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单输入绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单输入绑定")])])}],!1,null,null,null);a.default=r.exports}}]);