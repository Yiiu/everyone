<template>
    <span class="y-input-wrapper" :class="{'y-input-group': addonAfter !== undefined || addonBefore !== undefined}">
	    <span class="y-input-group-addon-before" v-if="addonBefore">{{addonBefore}}</span>
        <input v-if="type == 'text' "type="text" :readonly="read" name="" class="y-input" autocomplete="off" v-model="newValue" :placeholder="placeholder" :class="size ? `y-input-${size}` : ''">
        <input v-else-if="type == 'password' "type="password" :readonly="read" name="" class="y-input" autocomplete="off" v-model="newValue" :placeholder="placeholder" :class="size ? `y-input-${size}` : ''">
        <textarea v-else class="y-input" v-model="newValue"></textarea>
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
        type: {
            type: String,
            default: 'text'
        },
        addonAfter: {},
        addonBefore: {},
        icon: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String,
            default: 'x'
        },
        read: {
            type: Boolean,
            default: false
        }
    },
    created () {
        this.newValue = this.value
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