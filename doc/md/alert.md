# alert

<template>
    <coding
        :code="def"
        title="简单的"
        content="有4种样式"
        lang="html"
    >
        <y-alert content="一个小小的alert"></y-alert>
        <y-alert content="一个小小的alert" type="success"></y-alert>
        <y-alert content="一个小小的alert" type="warning"></y-alert>
        <y-alert content="一个小小的alert" type="danger"></y-alert>
    </coding>
    <coding
        :code="def"
        title="内容"
        content="内容多的可以这样使用"
        lang="html"
    >
        <y-alert title="一个小小的alert" type="danger" content="一个小小的alert"></y-alert>
        <y-alert title="一个小小的alert" type="danger" content="一个小小的alert" close-text="删除"></y-alert>
    </coding>
</template>
<script>
let def =
`<template>
    <y-alert content="一个小小的alert"></y-alert>
    <y-alert content="一个小小的alert" type="success"></y-alert>
    <y-alert content="一个小小的alert" type="warning"></y-alert>
    <y-alert content="一个小小的alert" type="danger"></y-alert>
</template>`
let cont =
`<template>
    <y-alert content="一个小小的alert" type="danger" content="一个小小的alert"></y-alert>
    <y-alert content="一个小小的alert" type="danger" content="一个小小的alert" close-text="删除"></y-alert>
</template`
export default {
    data(){
        return {
            def:def
        }
    }
}
</script>

## 参数设置

|    属性   |            说明            |    类型   | 默认值 |            可选值            |
| --------- | -------------------------- | --------- | ------ | ---------------------------- |
| type      | 样式                       | `String`  | `info` | `success`,`warning`,`danger` |
| title     | 标题                       | `String`  | -      | -                            |
| content   | 内容                       | `String`  | -      | -                            |
| close     | 是否显示关闭               | `Boolean` | `true` | -                            |
| CloseText | 关闭键内容(关闭按钮将隐藏) | `String`  | -      | -                             |
