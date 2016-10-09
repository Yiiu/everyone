# radio

<template>
	<y-radio label="1" v-model="test">test</y-radio>
	<y-radio label="2" v-model="test">test1</y-radio>
	<y-radio label="1" v-model="test1" :checked="true" :disabled="true">disabled</y-radio>
	<y-radio label="2" v-model="test1" :disabled="true">disabled</y-radio>
</template>

## 用法

```javascript
<y-radio label="1" v-model="test">test</y-radio>
<y-radio label="2" v-model="test">test1</y-radio>
<y-radio label="1" v-model="test1" :checked="true" :disabled="true">disabled</y-radio>
<y-radio label="2" v-model="test1" :disabled="true">disabled</y-radio>
```

## y-radio-group

<template>
	<y-radio-group v-model="test2">
		<y-radio label="1" >disabled</y-radio>
		<y-radio label="2" >disabled</y-radio>
	</y-radio-group>
</template>

## 用法

```javascript
<y-radio-group v-model="test2">
	<y-radio label="1" >disabled</y-radio>
	<y-radio label="2" >disabled</y-radio>
</y-radio-group>
```

## y-radio-button

<template>
	<y-radio-group v-model="test2">
		<y-radio-button label="1" >disabled</y-radio-button>
		<y-radio-button label="2" :disabled="true">disabled</y-radio-button>
		<y-radio-button label="3" >disabled</y-radio-button>
	</y-radio-group>
</template>

## 用法

```javascript
<y-radio-group v-model="test2">
	<y-radio label="1" >disabled</y-radio>
	<y-radio label="2" >disabled</y-radio>
</y-radio-group>
```

<script>
export default {
	data(){
		return {
			test:"1",
			test1:"1",
			test2:""
		}
	}
}
</script>

