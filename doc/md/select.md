# Select

<template>
	<div>
		<y-select v-model="value">
			<y-option value="a">a</y-option>
			<y-option value="b">b</y-option>
			<y-option value="c" disabled>c</y-option>
		</y-select>
	</div>
</template>
<script>
export default {
	data(){
		return {
			value:"dfad"
		}
	}
}
</script>