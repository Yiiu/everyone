# Notification

#### 提示栏组件

<template>
    <coding
        :code="test1Code"
        title="notification"
        content="简单的notify，不带内容，只有标题"
    >
        <y-button type="ghost" @click.native="test1">成功！</y-button>
        <y-button type="ghost" @click.native="test2">危险！</y-button>
        <y-button type="ghost" @click.native="test3">失败！</y-button>
        <y-button type="ghost" @click.native="test4">禁止！</y-button>
    </coding>
    <coding
        :code="test2Code"
        title="带icon大notify"
        content="带有icon和内容"
    >
        <y-button type="ghost" @click.native="test5">成功！</y-button>
        <y-button type="ghost" @click.native="test6">危险！</y-button>
        <y-button type="ghost" @click.native="test7">失败！</y-button>
        <y-button type="ghost" @click.native="test8">禁止！</y-button>
    </coding>
    <coding
        :code="test3Code"
        title="自动关闭"
        content="1秒后自动关闭"
    >
        <y-button type="ghost" @click.native="test9">自动关闭</y-button>
    </coding>
</template>

<script>
export default {
    data(){
        return {
            test1Code:
`this.$notify("成功！")
this.$notify.danger("危险！")
this.$notify.info("信息！")
this.$notify.warning("禁止！")
` ,
            test2Code:
`
this.$notify({
    "title":"test",
    "content":"sfafasdf",
    "icon":true
})
this.$notify.success({
    "title":"test",
    "content":"sfafasdf",
    "icon":true
})
this.$notify.info({
    "title":"test",
    "content":"sfafasdf",
    "icon":true
})
this.$notify.warning({
    "title":"test",
    "content":"sfafasdf",
    "icon":true
})
`,
            test3Code:
`
this.$notify({
    "title":"我会自动关闭",
    "content":"嘿嘿嘿哈哈哈",
    "icon":true,
    "time": 1000
})
`

        }
    },
    methods:{
        test1(){
            this.$notify("成功！")
        },
        test2(){
            this.$notify.danger("危险！")
        },
        test3(){
            this.$notify.info("信息！")
        },
        test4(){
            this.$notify.warning("禁止！")
        },
        test5(){
            this.$notify({
                "title":"成功！",
                "content":"嘿嘿嘿哈哈哈",
                "icon":true,
            })
        },
        test6(){
            this.$notify.danger({
                "title":"危险！",
                "content":"嘿嘿嘿哈哈哈",
                "icon":true,
            })
        },
        test7(){
            this.$notify.info({
                "title":"信息！",
                "content":"嘿嘿嘿哈哈哈",
                "icon":true,
            })
        },
        test8(){
            this.$notify.warning({
                "title":"禁止！",
                "content":"嘿嘿嘿哈哈哈",
                "icon":true,
            })
        },
        test9(){
            this.$notify({
                "title":"我会自动关闭",
                "content":"嘿嘿嘿哈哈哈",
                "icon":true,
                "time": 1000
            })
        }
    }
}
</script>

## 参数设置


|   属性  |     说明     |    类型    |        默认值        |          可选值           |
| ------- | ------------ | ---------- | -------------------- | ------------------------- |
| type    | 类型         | `String`   | `success`            | `info`,`warning`,`danger` |
| title   | 标题         | `String`   | -                    | -                         |
| content | 内容         | `String`   | -                    | -                         |
| onClose | 关闭时的回调 | `Function` | -                    | -                         |
| icon    | icon         | `Boolean`  | `false`              | -                         |
| time    | 延迟关闭时间 | `Number`   | `0(默认不关闭,毫秒)` | -                         |
