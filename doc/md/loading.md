# loading

<template>
    <coding
        :code="code"
        title="基本"
        content="基本使用"
    >
        <y-button type="primary" @click.native="test">加载</y-button>
        <y-button type="primary" @click.native="test1">成功</y-button>
        <y-button type="primary" @click.native="test2">失败</y-button>
    </coding>
</template>
<script>
export default {
    data(){
        return {
            code:
`this.$loading.open()
this.$loading.success()
this.$loading.err()
`
        }
    },
    methods:{
        test(){
            this.$loading.open()
        },
        test1(){
            this.$loading.success()
        },
        test2(){
            this.$loading.err()
        },
    }
}
</script>
