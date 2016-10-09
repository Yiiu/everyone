<template>
	<div class="y-checkbox-group">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name:"y-checkbox-group",
	props:{
		value:{}
	},
    watch: {
      value(value) {
      	console.log(value)
        this.$emit('input', value);
      }
    }
}
</script>