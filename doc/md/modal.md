# modal

#### 弹出框组件

<template>
    <coding
        :code="code1"
        title="基本"
        content="基本的modal，使用v-model控制状态。"
    >
        <y-modal v-model="testa" center @on-ok="$notify('你点击的确认')">
            <template slot="title">asdfasdf</template>
            <template slot="center">asdfadf</template>
        </y-modal>
        <y-button type="primary" @click.native="testa = true">一个基本的弹出框</y-button>
    </coding>
    <coding
        :code="code2"
        title="$confirm"
        content="不带回调。"
    >   
        <y-button type="primary" @click.native="test1">一个基本的弹出框</y-button>
    </coding>
    <coding
        :code="code3"
        title="信息提示"
        content="假如你只需要提示客户信息，那么这样会很好。"
    >
        <y-button type="primary" @click.native="alert('info')">一条信息</y-button>
        <y-button type="primary" @click.native="alert('success')">一条信息</y-button>
        <y-button type="primary" @click.native="alert('error')">一条信息</y-button>
        <y-button type="primary" @click.native="alert('warning')">一条信息</y-button>
    </coding>
    <coding
        :code="code3"
        title="自定义位置"
        content="自定义modal的位置。"
    >
        <y-modal v-model="testb" center>
            <template slot="title">asdfasdf</template>
            <template slot="center">asdfadf</template>
        </y-modal>
        <y-modal v-model="testc" :top="100">
            <template slot="title">asdfasdf</template>
            <template slot="center">asdfadf</template>
        </y-modal>
        <y-button type="primary" @click.native="testb = true">center</y-button>
        <y-button type="primary" @click.native="testc = true">top：100</y-button>
    </coding>
</template>

<script>
export default {
    data(){
        return {
            code1:
`<y-modal v-model="testa" center @on-ok="$notify('你点击的确认')">
    <template slot="title">asdfasdf</template>
    <template slot="center">asdfadf</template>
</y-modal>
<y-button type="primary" @click.native="testa = true">一个基本的弹出框</y-button>
`,
            code2:
`<y-button type="primary" @click.native="test1">一个基本的弹出框</y-button>

this.$confirm({
    title: "我是一个弹出框",
    content: "hello world!",
    top: 123,
    onOk: () => {
        this.$notify("你点击的确认")
    },
    onCancel: () => {
        this.$notify("你点击的取消")
    }
})
`,
            code3:
`<y-button type="primary" @click.native="alert('info')">一条信息</y-button>
<y-button type="primary" @click.native="alert('success')">一条信息</y-button>
<y-button type="primary" @click.native="alert('error')">一条信息</y-button>
<y-button type="primary" @click.native="alert('warning')">一条信息</y-button>

alert(type){
    this.$modal[type]({
        "title":"我是一个弹出框",
        "content":"我是一个带有回调函数的弹出框",
        center: true
    })
}
`,
            code3:
`<y-modal v-model="testb" center>
    <template slot="title">asdfasdf</template>
    <template slot="center">asdfadf</template>
</y-modal>
<y-modal v-model="testc" :top="100">
    <template slot="title">asdfasdf</template>
    <template slot="center">asdfadf</template>
</y-modal>
<y-button type="primary" @click.native="testb = true">center</y-button>
<y-button type="primary" @click.native="testc = true">top：100</y-button>
`,
            testa: false,
            testb: false,
            testc: false
        }
    },
    methods:{
        test1(){
            this.$confirm({
                title: "我是一个弹出框",
                content: "hello world!",
                top: 123,
                onOk: () => {
                    this.$notify("你点击的确认")
                },
                onCancel: () => {
                    this.$notify("你点击的取消")
                }
            })
        },
        alert(type){
            this.$modal[type]({
                "title":"我是一个弹出框",
                "content":"我是一个带有回调函数的弹出框",
                center: true
            })
        },
    }
}
</script>

## 参数设置

|    属性    |               说明              |    类型    | 默认值  | 可选值 |
| ---------- | ------------------------------- | ---------- | ------- | ------ |
| title      | 标题                            | `String`   | -       | -      |
| content    | 内容                            | `String`   | -       | -      |
| center     | 居中显示modal                   | `Boolean`  | `false` | -      |
| top        | modal距离浏览器顶部             | `Number`   | `40`    | -      |
| okText     | 确认按钮文本                    | `String`   | `确认`  | -      |
| cancelText | 取消按钮文本                    | `String`   | `取消`  | -      |
| onOk       | 确认按钮回调事件（同@on-ok）    | `Function` | -       | -      |
| onCancel   | 取消按钮回调事件（同@on-cancel) | `Function` | -       | -      |

## Events

|  事件名称 |       说明       | 回调参数 |
| --------- | ---------------- | -------- |
| on-ok     | 确认按钮回调事件 | -        |
| on-cancel | 取消按钮回调事件 | -        |

## slot

| slot名称 | 说明 |
| -------- | ---- |
| title    | 标题 |
| center   | 内容 |
