# Button

<template>
    <coding
        :code="type"
        title="三种样式"
        content="button有三种样式:primary,ghost,dashed"
        lang="html"
    >
        <y-button type="primary">一个按钮</y-button>
        <y-button type="ghost">一个按钮</y-button>
        <y-button type="dashed">一个按钮</y-button>
    </coding>
    <coding
        :code="state"
        title="两种状态"
        content="可以添加disabled和loading选择按钮状态"
        lang="html"
    >
        <y-button type="primary" disabled>一个按钮</y-button>
        <y-button type="primary" loading>一个按钮</y-button>
    </coding>
    <coding
        :code="on"
        title="原生事件"
        content="可以给按钮添加原生事件。"
        lang="html"
    >
        <y-button type="ghost" @click.native="test">一个按钮</y-button>
    </coding>
    <coding
        :code="color"
        title="颜色"
        content="有四种颜色可选，默认蓝色。"
        lang="html"
    >
        <y-button type="primary">一个按钮</y-button>
        <y-button type="ghost">一个按钮</y-button>
        <y-button type="dashed">一个按钮</y-button>
        </br>
        </br>
        <y-button type="primary" color="green">一个按钮</y-button>
        <y-button type="ghost" color="green">一个按钮</y-button>
        <y-button type="dashed" color="green">一个按钮</y-button>
        </br>
        </br>
        <y-button type="primary" color="red">一个按钮</y-button>
        <y-button type="ghost" color="red">一个按钮</y-button>
        <y-button type="dashed" color="red">一个按钮</y-button>
        </br>
        </br>
        <y-button type="primary" color="yellow">一个按钮</y-button>
        <y-button type="ghost" color="yellow">一个按钮</y-button>
        <y-button type="dashed" color="yellow">一个按钮</y-button>
    </coding>
</template>
<script>
let type =
`<template>
    <y-button type="primary">一个按钮</y-button>
    <y-button type="ghost">一个按钮</y-button>
    <y-button type="dashed">一个按钮</y-button>
</template>
`
let state =
`<template>
    <y-button type="primary" disabled>一个按钮</y-button>
    <y-button type="primary" loading>一个按钮</y-button>
</template>
`
let on =
`<template>
    <y-button type="ghost" @click.native="test">一个按钮</y-button>
</template>
`
let color =
`<template>
    <y-button type="primary">一个按钮</y-button>
    <y-button type="ghost">一个按钮</y-button>
    <y-button type="dashed">一个按钮</y-button>
    <y-button type="primary" color="green">一个按钮</y-button>
    <y-button type="ghost" color="green">一个按钮</y-button>
    <y-button type="dashed" color="green">一个按钮</y-button>
    <y-button type="primary" color="red">一个按钮</y-button>
    <y-button type="ghost" color="red">一个按钮</y-button>
    <y-button type="dashed" color="red">一个按钮</y-button>
    <y-button type="primary" color="yellow">一个按钮</y-button>
    <y-button type="ghost" color="yellow">一个按钮</y-button>
    <y-button type="dashed" color="yellow">一个按钮</y-button>
</template>
`
export default {
    data(){
        return {
            type:type,
            state:state,
            on:on,
            color:color,
        }
    },
    methods:{
        test(){
            this.$notify({"title":"test","content":"sfafasdf","time":1000,"icon":true})
        }
    }
}
</script>

## 参数设置

|   属性   |    说明    |    类型   |  默认值   |            可选值             |
| -------- | ---------- | --------- | --------- | ----------------------------- |
| type     | 按钮的类型 | `String`  | `primary` | `ghosts`,`dashed`             |
| size     | 按钮的大小 | `String`  | -         | `lg`,`sm`                     |
| disabled | 可选状态   | `Boolean` | `false`   | -                             |
| loading  | 加载       | `Boolean` | `false`   | -                             |
| color    | 按钮的颜色 | `String`  | `blue`    | `green`,`yellow`,`red`,`gray` |
