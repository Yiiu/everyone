### demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。

<template>
    <y-button type="primary" :disabled="true" :loading="true">sss</y-button>
    <y-button type="ghost" @click.native="test">sss</y-button>
    <y-button type="dashed">sss</y-button>
    <y-button type="primary" color="green">sss</y-button>
    <y-button type="ghost" color="green">sss</y-button>
    <y-button type="dashed" color="green">sss</y-button>
    <y-button type="primary" color="red">sss</y-button>
    <y-button type="ghost" color="red">sss</y-button>
    <y-button type="dashed" color="red">sss</y-button>
    <y-button type="primary" color="yellow">sss</y-button>
    <y-button type="ghost" color="yellow">sss</y-button>
    <y-button type="dashed" color="yellow">sss</y-button>
</template>
<script>
export default {
    methods:{
        test(){
            this.$notify({"title":"test","content":"sfafasdf","time":1000,"icon":true})
        }
    }
}
</script>

|   属性   |    说明    |    类型   |  默认值   |            可选值             |
| -------- | ---------- | --------- | --------- | ----------------------------- |
| type     | 按钮的类型 | `String`  | `primary` | `ghosts`,`dashed`             |
| size     | 按钮的大小 | `String`  | -         | `lg`,`sm`                     |
| disabled | 可选状态   | `Boolean` | `false`   | -                             |
| loading  | 加载       | `Boolean` | `false`   | -                             |
| color    | 按钮的颜色 | `String`  | `blue`    | `green`,`yellow`,`red`,`gray` |