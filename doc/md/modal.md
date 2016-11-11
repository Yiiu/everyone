# modal

#### 弹出框组件

<template>
    <coding
        :code="code1"
        title="基本"
        content="不带回调"
    >
        <y-button type="primary" @click.native="test1">一个基本的弹出框</y-button>
    </coding>
    <coding
        :code="code2"
        title="带回调"
        content="$modal返回的是一个promises，可以用then,catch来设置回调"
    >
        <y-button type="primary" @click.native="test2">带有回调的弹出框</y-button>
    </coding>
    <coding
        :code="code3"
        title="按钮"
        content="设置按钮文本和是否显示"
    >
        <y-button type="primary" @click.native="test3">我的确认取消跟别人的不一样</y-button>
    </coding>
    <coding
        :code="code4"
        title="提示"
        content="假如你只需要提示客户信息，那么这样会很好"
    >
        <y-button type="primary" @click.native="test4">一条信息</y-button>
    </coding>
</template>

<script>
export default {
    data(){
        return {
            code1:
`this.$modal({
    "title":"我是一个弹出框",
    "content":"hello world!",
})
`,
            code2:
`this.$modal({
    "title":"我是一个弹出框",
    "content":"我是一个带有回调函数的弹出框",
}).then((value)=>{
    this.$notify("我是确认的回调函数")
}).catch((value)=>{
    this.$notify("我是取消的回调函数")
})
`,
            code3:
`this.$modal({
    "title":"我是一个弹出框",
    "content":"我是一个带有回调函数的弹出框",
    "okBtn":{
        "show": true,
        "text": "yes"
    },
    "backBtn": {
        "show": true,
        "text": "no"
    }
})
`,
            code4:
`this.$modal("不要在上班的时候直播！")
.then(()=>{
    this.$notify("我偏不！")
})
`
        }
    },
    methods:{
        test1(){
            this.$modal({
                "title":"我是一个弹出框",
                "content":"hello world!",
            })
        },
        test2(){
            this.$modal({
                "title":"我是一个弹出框",
                "content":"我是一个带有回调函数的弹出框",
            }).then((value)=>{
                this.$notify("我是确认的回调函数")
            }).catch((value)=>{
                this.$notify.warning("我是取消的回调函数")
            })
        },
        test3(){
            this.$modal({
                "title":"我是一个弹出框",
                "content":"我是一个带有回调函数的弹出框",
                "okBtn":{
                    "show": true,
                    "text": "yes"
                },
                "backBtn": {
                    "show": true,
                    "text": "no"
                }
            })
        },
        test4(){
            this.$modal("不要在上班的时候直播！")
            .then(()=>{
                this.$notify("我偏不！")
            })
        }

    }
}
</script>

## 参数设置


|   属性  |         说明         |    类型    |          默认值           | 可选值 |
| ------- | -------------------- | ---------- | ------------------------- | ------ |
| title   | 标题                 | `String`   | -                         | -      |
| content | 内容                 | `String`   | -                         | -      |
| vis     | 按钮事件是否默认关闭 | `Boolean`  | `true`                    | -      |
| okBtn   | 右边按钮选项         | `Object`   | `{show:true,text:"确认"}` | -      |
| backBtn | 左边按钮选项         | `Object`   | `{show:true,text:"取消"}` | -      |
| .then   | 右边按钮回调事件     | `Function` | -                         | -      |
| .catch  | 右边按钮回调时间     | `Function` | -                         | -      |
