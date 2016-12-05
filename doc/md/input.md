# Input 输入框

<template>
	<coding
		title="标准"
		content="简单的输入框"
		:code="code"
	>
		<y-input placeholder="asdf"></y-input>
	</coding>
</template>
<script>
export default {
	data () {
		return {
			code: `<y-input placeholder="asdf"></y-input>`
		}
	}
}
</script>