# everyone

> 一个基于vue2的antd风组件库。

# 使用方法

## 安装

```bash
$ npm install -save everyone
```

### 全部引入

```js
import everyone from 'everyone' // 引入组件
Vue.use(everyone)
```

引入css文件:

```js
import 'everyone/dist/everyone.css' // 引入css文件
```
### 引入单个组件

> 更改webpack配置（vue-cli是在webpack.base.conf.js文件）

```js
{
    module: {
        loaders: [
            {
                test: /everyone.src.*?js$/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        alias: {
            'everyone-ui': 'everyone/components'
        }
    }
}
```

> 引入组件

```js
import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式
// ..
Vue.component(button.name, button)
```

### 愉快的使用

```html
<y-button type="dashed">一个按钮</y-button>
```