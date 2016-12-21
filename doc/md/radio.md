# radio

<template>
    <coding
        :code="init"
        title="简单的radio"
        content="跟原生的radio一样，只需要在组件上绑定v-model。"
        lang="html"
    >
        <y-radio label="你是智障" v-model="test">你是智障</y-radio>
        <y-radio label="你不是智障" v-model="test">你不是智障</y-radio>
        <span class="data">data:{{test}}</span>
    </coding>
    <coding
        :code="disabled"
        title="禁用，默认"
        content="可以使用checked来指定默认选项，使用disabled来禁用radio"
        lang="html"
    >
        <y-radio label="1" v-model="test1" checked :disabled="disableds">disabled</y-radio>
        <y-radio label="2" v-model="test1" :disabled="disableds">disabled</y-radio>
        <y-button @click.native="disableds = !disableds">disabled</y-button>
    </coding>
    <coding
        :code="group"
        title="group"
        content="使用group"
        lang="html"
    >
        <y-radio-group v-model="test2">
            <y-radio label="1" >1</y-radio>
            <y-radio label="2" >2</y-radio>
            <y-radio label="3" >3</y-radio>
            <y-radio label="4" >4</y-radio>
        </y-radio-group>
    </coding>
    <coding
        :code="btn"
        title="单选按钮"
        content="单选按钮，跟radio一样，也可以禁用，设置默认。"
        lang="html"
    >
        <y-radio-group v-model="test3">
            <y-radio-button label="1" checked>disabled</y-radio-button>
            <y-radio-button label="2" disabled>disabled</y-radio-button>
            <y-radio-button label="4">disabled</y-radio-button>
            <y-radio-button label="3" >disabled</y-radio-button>
        </y-radio-group>
    </coding>
</template>
<script>
let init =
`<template>
    <y-radio label="你是智障" v-model="test">你是智障</y-radio>
    <y-radio label="你不是智障" v-model="test">你不是智障</y-radio>
</template>
`
let disabled =
`<template>
    <y-radio label="1" v-model="test1" checked disabled>disabled</y-radio>
    <y-radio label="2" v-model="test1" disabled>disabled</y-radio>
</template>`
let group =
`<template>
    <y-radio-group v-model="test2">
        <y-radio label="1" >1</y-radio>
        <y-radio label="2" >2</y-radio>
        <y-radio label="3" >3</y-radio>
        <y-radio label="4" >4</y-radio>
    </y-radio-group>
</template>
`
let btn =
`<template>
    <y-radio-group v-model="test3">
        <y-radio-button label="1" checked>disabled</y-radio-button>
        <y-radio-button label="2" disabled>disabled</y-radio-button>
        <y-radio-button label="4">disabled</y-radio-button>
        <y-radio-button label="3" >disabled</y-radio-button>
    </y-radio-group>
</template>
`
export default {
    data(){
        return {
            test:"你不是智障",
            test1:"1",
            test2:"",
            test3:"",
            disableds: false,
            init:init,
            group:group,
            btn:btn
        }
    }
}
</script>

## 参数设置

|   属性   |   说明   | 类型 | 默认值 | 可选值 |
| -------- | -------- | ---- | ------ | ------ |
| checked  | 默认选项 | -    | -      | -      |
| disabled | 禁用     | -    | -      | -      |
