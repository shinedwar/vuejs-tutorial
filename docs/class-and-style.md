## class

直接绑定一个变量：

```html
<div v-bind:class="className"></div>
```

### 对象

```html
<div v-bind:class="{ active: isActive }"></div>
```

v-bind:class 指令也可以与普通的 class 属性共存。当有如下模板:

```html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```

和如下 data：

```javascript
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为：

```html
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。
例如，如果 `hasError` 的值为 `true`，class 列表将变为 `"static active text-danger"`。

## style

