<template>
    <div class="y-collapse">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'y-collapse',
    data () {
        return {
            activeKey: this.accordion ? [this.defaultActiveKey[0]] : this.defaultActiveKey
        }
    },
    props: {
        defaultActiveKey: {
            type: Array
        },
        accordion: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        activeKey (value) {
            this.$emit('changes', value)
        }
    }
}
</script>
<style lang="less">
@import 'collapse';
</style>