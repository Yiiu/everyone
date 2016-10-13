# modal

<template>
    <coding
        :code="code"
        title="基本"
        content="只需要传入2个参数，一个是文本，一个是消失时间"
    >
        <y-button type="primary" @click.native="test">info</y-button>
        <y-button type="primary" @click.native="test1">success</y-button>
        <y-button type="primary" @click.native="test2">warning</y-button>
        <y-button type="primary" @click.native="test3">danger</y-button>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            code:
`this.$message.info("info", 2000)
this.$message.success("success", 2000)
this.$message.warning("warning", 2000)
this.$message.danger("danger", 2000)
`
        }
    },
    methods:{
        test(){
            this.$message.info("info", 2000)
        },
        test1(){
            this.$message.success("success", 2000)
        },
        test2(){
            this.$message.warning("warning", 2000)
        },
        test3(){
            this.$message.danger("danger", 2000)
        }
    }
}
</script>

## 参数设置


|   属性  |   说明   |   类型   | 默认值 | 可选值 |
| ------- | -------- | -------- | ------ | ------ |
| content | 内容     | `String` | -      | -      |
| time    | 消失时间 | `Number` | 1500   | -      |
