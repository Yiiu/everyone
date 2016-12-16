<template>
    <span class="y-input-wrapper" :class="{'y-input-group': addonAfter !== undefined || addonBefore !== undefined}">
	    <span class="y-input-group-addon-before" v-if="addonBefore">{{addonBefore}}</span>
        <input type="" name="" class="y-input" v-model="newValue" :placeholder="placeholder" :class="size ? `y-input-${size}` : ''">
        <y-svg class="y-input-icon" :type="iconType" :width="16" v-if="icon" @click.native="iconCbk"></y-svg>
	    <span class="y-input-group-addon-after" v-if="addonAfter">{{addonAfter}}</span>
    </span>
</template>
<script>
export default {
    name: 'y-input',
    data () {
        return {
            newValue: ''
        }
    },
    props: {
        value: {},
        placeholder: {},
        size: String,
        addonAfter: {},
        addonBefore: {},
        icon: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String,
            default: 'x'
        }
    },
    methods: {
        iconCbk () {
            this.$emit('icon', this.newValue)
        }
    },
    watch: {
        newValue: function (value) {
            this.$emit('input', value)
        },
        value: function (value) {
            this.newValue = value
        }
    }
}
</script>
<style lang="less">
@import "./input";
</style>