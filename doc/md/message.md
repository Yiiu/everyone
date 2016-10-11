# modal

<template>
    <y-button type="primary" @click.native="test">info</y-button>
    <y-button type="primary" @click.native="test1">success</y-button>
    <y-button type="primary" @click.native="test2">warning</y-button>
    <y-button type="primary" @click.native="test3">danger</y-button>
</template>
<script>
export default {
    methods:{
        test(){
            this.$message.info("tests", 2000)
        },
        test1(){
            this.$message.success("tests", 2000)
        },
        test2(){
            this.$message.warning("tests", 2000)
        },
        test3(){
            this.$message.danger("tests", 2000)
        }
    }
}
</script>

## 用法

```js
this.$message.info("tests", 2000)
this.$message.warning("tests", 2000)
this.$message.warning("tests", 2000)
this.$message.danger("tests", 2000)
```

|   属性  |   说明   |   类型   | 默认值 | 可选值 |
| ------- | -------- | -------- | ------ | ------ |
| content | 内容     | `String` | -      | -      |
| time    | 消失时间 | `Number` | 1500   | -      |
