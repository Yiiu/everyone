<template>
    <span class="y-input-wrapper" :class="{'y-input-group': addonAfter !== undefined || addonBefore !== undefined}">
	    <span class="y-input-group-addon-before" v-if="addonBefore">{{addonBefore}}</span>
        <input type="" name="" class="y-input" :placeholder="placeholder" :class="size ? `y-input-${size}` : ''">
	    <span class="y-input-group-addon-after" v-if="addonAfter">{{addonAfter}}</span>
    </span>
</template>
<script>
export default {
    name: 'y-input',
    props: {
        placeholder: {},
        size: String,
        addonAfter: {},
        addonBefore: {}
    }
}
</script>
<style lang="less">
@import "./input";
</style>