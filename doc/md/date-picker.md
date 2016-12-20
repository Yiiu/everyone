# DataPicker 日期选择框

<template>
	<coding
		title="基本"
		content="最简单的用法"
		:code="code1"
		lang="html"
	>
		<y-date-picker placement="bottom-left" :offset="-22"></y-date-picker>	
		<y-month-picker placement="bottom-left" :offset="-22"></y-month-picker>	
	</coding>
	<coding
		title="限制"
		content="限制日期"
		:code="code2"
		lang="html"
	>
		<y-date-picker 
			placement="bottom-left" 
			:offset="-22"
			:disabled-date="{
				star: [2016,12,20],
				end: [2017,2,1]
			}"
		></y-date-picker>	
	</coding>
	<coding
		title="国际"
		content="国际化"
		lang="html"
		:code="code3"
	>
		<y-date-picker 
			placement="bottom-left" 
			:offset="-22"
			en
		></y-date-picker>	
	</coding>
</template>
<script>
export default {
	data () {
		return {
			code1: 
`<y-date-picker placement="bottom-left" :offset="-22"></y-date-picker>	
<y-month-picker placement="bottom-left" :offset="-22"></y-month-picker>	`,
			code2: 
`<y-date-picker 
	placement="bottom-left" 
	:offset="-22"
	:disabled-date="{
		star: [2016,12,20],
		end: [2017,2,1]
	}"
	:code="code1"
	lang="html"
></y-date-picker>`,
			code3:
`<y-date-picker 
	placement="bottom-left" 
	:offset="-22"
	en
></y-date-picker>`
		}
	}
}
</script>

## 参数设置

|       属性       |       说明      |    类型   | 默认值  | 可选值 |
| ---------------- | --------------- | --------- | ------- | ------ |
| disabledDate | 选择区间 | `Object`   | -       | -      |
| en        | 英文          | `Boolean` | `false` | -      |