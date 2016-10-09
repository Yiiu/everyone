# checkbox  

<template>
    <y-checkbox v-model="test" label="523" :disabled="true">asd</y-checkbox>
    <y-checkbox v-model="test" label="2351">asd</y-checkbox>
    <y-checkbox v-model="test2">asd</y-checkbox>
    <y-checkbox v-model="test1" true="test" false="aaa"></y-checkbox>
    <y-checkbox-group v-model="test3">
	    <y-checkbox label="523">asd</y-checkbox>
	    <y-checkbox label="2351">asd</y-checkbox>
    </y-checkbox-group>
</template>
<script>
export default {
	data(){
		return {
			test:"523",
			test1:"aaa",
			test2:"",
			test3:[]
		}
	}
}
</script>