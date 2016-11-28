<template>
    <div class="y-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'y-radio-group',
    props: {
        value: [String, Number]
    },
    watch: {
        value (newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>