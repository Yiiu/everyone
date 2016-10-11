### demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。

<template>
    <y-button type="ghost" @click.native="test1">test</y-button>
    <y-button type="ghost" @click.native="test2">带有icon</y-button>
    <y-button type="ghost" @click.native="test3">带有icon，自动消失</y-button>
    <y-button type="ghost" @click.native="test4">带有icon</y-button>
    <y-button type="ghost" @click.native="test5">带有icon</y-button>
    <y-button type="ghost" @click.native="test6">带有icon</y-button>
    <y-button type="ghost" @click.native="test7">带有icon,关闭回调</y-button>
</template>
<script>
export default {
    methods:{
        test1(){
            this.$notify("test")
        },
        test2(){
            this.$notify({
                "title":"test",
                "content":"sfafasdf",
                "icon":true
            })
        },
        test3(){
            this.$notify({
                "title":"test",
                "content":"sfafasdf",
                "icon":true,
                "time":1000
            })
        },
        test4(){
            this.$notify({
                "type": "success",
                "title":"test",
                "content":"sfafasdf",
                "icon":true
            })
        },
        test5(){
            this.$notify({
                "type": "info",
                "title":"test",
                "content":"sfafasdf",
                "icon":true
            })
        },
        test6(){
            this.$notify({
                "type": "warning",
                "title":"test",
                "content":"sfafasdf",
                "icon":true
            })
        },
        test7(){
            this.$notify({
                "type": "danger",
                "title":"test",
                "content":"sfafasdf",
                "icon":true
            })
        },
        test7(){
            this.$notify({
                "type": "danger",
                "title":"test",
                "content":"sfafasdf",
                "icon":true,
                "onClose":()=>{
                    console.log(1)
                }
            })
        }
    }
}
</script>  

## 用法

```js
this.$notify({
    "type": "danger",
    "title":"test",
    "content":"sfafasdf",
    "icon":true,
    "onClose":()=>{
        console.log(1)
    }
})
```

|   属性  |     说明     |    类型    |        默认值        |          可选值           |
| ------- | ------------ | ---------- | -------------------- | ------------------------- |
| type    | 类型         | `String`   | `success`            | `info`,`warning`,`danger` |
| title   | 标题         | `String`   | -                    | -                         |
| content | 内容         | `String`   | -                    | -                         |
| onClose | 关闭时的回调 | `Function` | -                    | -                         |
| icon    | icon         | `Boolean`  | `false`              | -                         |
| time    | 延迟关闭时间 | `Number`   | `0(默认不关闭,毫秒)` | -                         |
