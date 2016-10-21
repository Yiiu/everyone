# dialog

更为复杂的弹出框

<template>
	<coding
		:code="datas"
		title="dialog"
		content="跟modal相似，但是扩展性更强，适用于稍复杂的。可以使用v-model绑定来自行控制dialog的弹出消失。"
	>
		<y-button @click.native="test = true">啦啦啦</y-button>
	</coding>
	<y-dialog 
		v-model="test"
		title="hello world"
	>
		<template slot="content">
			<input v-model="input1">
		</template>
		<template slot="footer">
            <y-button type="ghost" @click.native="test = false">取消</y-button>
            <y-button type="primary" @click.native="close1">确认</y-button>
		</template>
	</y-dialog>
</template>
<script>
export default {
	data(){
		return {
			test:false,
			input1:"",
datas:
`<y-button @click.native="test = true">啦啦啦</y-button>
<y-dialog 
	v-model="test"
	title="hello world"
>
	<template slot="content">
		<input v-model="input1">
	</template>
	<template slot="footer">
        <y-button type="ghost" @click.native="test = false">取消</y-button>
        <y-button type="primary" @click.native="close1">确认</y-button>
	</template>
</y-dialog>
`
		}
	},
	methods:{
		close1(){
			this.$notify(`您输入的是${this.input1}`)
			this.test = false
		}
	}
}
</script>

|      属性     |    说明    |   类型   | 默认值 | 可选值 |
| ------------- | ---------- | -------- | ------ | ------ |
| slot::content | 弹出框内容 | `slot`   | -      | -      |
| slot::footer  | 底部内容   | `slot`   | -      | -      |
| title         | 标题       | `String` | -      | -      |