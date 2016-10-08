# radio

<template>
	<y-radio label="1" v-model="test">test</y-radio>
	<y-radio label="2" v-model="test">test1</y-radio>
	<y-radio label="1" v-model="test1" :checked="true" :disabled="true">disabled</y-radio>
	<y-radio label="2" v-model="test1" :disabled="true">disabled</y-radio>
</template>
<script>
export default {
	data(){
		return {
			test:"",
			test1:""
		}
	}
}
</script>

## 用法
```javascript
<y-radio label="1" v-model="test">test</y-radio>
<y-radio label="2" v-model="test">test1</y-radio>
<y-radio label="1" v-model="test1" :checked="true" :disabled="true">disabled</y-radio>
<y-radio label="2" v-model="test1" :disabled="true">disabled</y-radio>
```
