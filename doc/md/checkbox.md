# checkbox  

<template>
    <y-checkbox v-model="test" label="523" :disabled="true">asd</y-checkbox>
    <y-checkbox v-model="test" label="asd">asd</y-checkbox>
    <y-checkbox v-model="test1" true-label="可用" false-label="不可用"></y-checkbox>
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
			test1:"可用",
			test2:"",
			test3:['523']
		}
	}
}
</script>