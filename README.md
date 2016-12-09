# everyone

> Ant Design UI library for Vuejs 2.0

[![build](https://img.shields.io/wercker/ci/wercker/docs.svg?style=flat-square)](https://www.npmjs.com/package/everyone)
[![build](https://img.shields.io/badge/npm-v1.2.4-blue.svg?style=flat-square)](https://www.npmjs.com/package/everyone)
[![build](https://img.shields.io/badge/Vue-2.0-blue.svg?style=flat-square)](https://www.npmjs.com/package/everyone)
[![build](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://www.npmjs.com/package/everyone)

# Install

```bash
$ npm install -save everyone
```

## Links

- [Home Page](https://yiiu.github.io/everyone/#/)

## Usage

### Use all component

```js
import Vue from 'vue'
import everyone from 'everyone'	// 引入组件
Vue.use(everyone)
```
And import style manually:

```js
import 'everyone/dist/everyone.css'	// 引入css文件
```

### Use one component

### 引入单个组件

- webpack.base.conf.js

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

- Manually import

```js
import Vue from 'vue'
import 'muse-components/styles/base.less' // 加载基础的样式
import button from 'everyone-ui/button'
// ..
Vue.component(button.name, button)
```


### happy use

```html
<y-button type="dashed">一个按钮</y-button>
```

updating:)......
