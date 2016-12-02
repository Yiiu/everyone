# Checkbox

<template>
    <coding
        :code="disabled"
        title="禁止"
        content="可以禁止checkbox的默认事件"
        lang="html"
    >
        <y-checkbox v-model="test" label="523" :disabled="true">disabled</y-checkbox>
        <y-checkbox v-model="test" label="1" :disabled="true">disabled</y-checkbox>
    </coding>
    <coding
        :code="label"
        title="label"
        content="可以指定checkbox的label"
        lang="html"
    >
        <y-checkbox v-model="test1" true-label="可用" false-label="不可用"></y-checkbox>
    </coding>
    <coding
        :code="group"
        title="checkbox-group"
        content="多个checkbox可以使用checkbox-group"
        lang="html"
    >
        <y-checkbox-group v-model="test3">
    	    <y-checkbox label="523">asd</y-checkbox>
    	    <y-checkbox label="2351" content>asd</y-checkbox>
        </y-checkbox-group>
        {{test3}}
    </coding>
</template>
<script>
let disabled =
`<template>
    <y-checkbox v-model="test1" true-label="可用" false-label="不可用"></y-checkbox>
</template>
`
let label =
`<template>
    <y-checkbox v-model="test" label="523" :disabled="true">一个小小的checkbox</y-checkbox>
    <y-checkbox v-model="test" label="1" :disabled="true">一个小小的checkbox</y-checkbox>
</template>
`
let group =
`<temlate>
    <y-checkbox-group v-model="test3">
        <y-checkbox label="523">asd</y-checkbox>
        <y-checkbox label="2351" content>asd</y-checkbox>
    </y-checkbox-group>
</template>
`
export default {
	data(){
		return {
			test:"523",
			test1:"可用",
			test2:"",
			test3:['523'],
            disabled:disabled,
            label:label,
            group:group
		}
	}
}
</script>

## 参数设置

|    属性    |     说明    |             类型            | 默认值  | 可选值 |
| ---------- | ----------- | --------------------------- | ------- | ------ |
| slot       | 文字        | slot                        | -       | -      |
| label      | value       | `String`,`Number`,`Boolean` | Boolean | -      |
| trueLabel  | 选中value   | `String`,`Number`,`Boolean` | -       | -      |
| falseLabel | 未选中value | `String`,`Number`,`Boolean` | -       | -      |
| disable    | 禁用状态    | -                           | false   | -      |
| content    | 不显示value | `Boolean`                   | false   | -      |
