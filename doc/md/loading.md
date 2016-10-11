# modal

<template>
    <y-button type="primary" @click.native="test">info</y-button>
    <y-button type="primary" @click.native="test1">success</y-button>
    <y-button type="primary" @click.native="test2">warning</y-button>
</template>
<script>
export default {
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

## 用法

```html
<y-button type="primary" @click.native="test">info</y-button>
<y-button type="primary" @click.native="test1">success</y-button>
<y-button type="primary" @click.native="test2">warning</y-button>
<script>
export default {
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
```
