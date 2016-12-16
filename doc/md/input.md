# Input 输入框

<template>
    <div class="inputs">
        <coding
            title="标准"
            content="简单的输入框。"
            :code="code"
        >
            <y-input placeholder="asdf" v-model="test"></y-input>
            {{test}}
        </coding>
        <coding
            title="大小"
            content="有三种大小，默认、lg、sm。"
            :code="code1"
        >
            <y-input placeholder="default"></y-input>
            <y-input placeholder="lg" size="lg"></y-input>
            <y-input placeholder="sm" size="sm"></y-input>
        </coding>
        <coding
            title="标签"
            content="用于配置一些固定组合。"
            :code="code2"
        >
            <y-input placeholder="default" addon-before="asdf"></y-input>
            <y-input placeholder="default" addon-before="asdf" addon-after="asdf"></y-input>
        </coding>
        <coding
            title="icon"
            content="带有图标的输入框，@icon触发点击事件"
            :code="code2"
        >
            <y-input placeholder="asdf" v-model="test1" icon icon-type="x" @icon="icons"></y-input>
        </coding>
    </div>
</template>
<script>
export default {
    data () {
        return {
            code: 
`<y-input placeholder="asdf" v-model="test"></y-input>`,
            code1:
`<y-input placeholder="default"></y-input>
<y-input placeholder="lg" size="lg"></y-input>
<y-input placeholder="sm" size="sm"></y-input>`,
            code2:
`<y-input placeholder="default" addon-before="asdf"></y-input>
<y-input placeholder="default" addon-before="asdf" addon-after="asdf"></y-input>`,
            code3: 
`<y-input placeholder="asdf" v-model="test1" icon icon-type="x" @icon="icons"></y-input>`,
            test: '',
            test1: ''
        }
    },
    methods: {
        icons (e) {
            this.test1 = ''
        }
    }
}
</script>
<style lang="less">
.inputs {
    .y-input-wrapper {
        margin-bottom: 16px;
    }
}
</style>

## 参数设置

|     属性     |     说明    |   类型   | 默认值 | 可选值 |
| ------------ | ----------- | -------- | ------ | ------ |
| placeholder  | placeholder | `String` | -      | -      |
| addon-before | 前标签      | `String` | -      | -      |
| addon-after  | 后标签      | `String` | -      | -      |