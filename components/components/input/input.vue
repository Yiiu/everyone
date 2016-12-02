<template>
    <span class="y-input-wrapper">
        <input type="" name="" class="y-input" :placeholder="placeholder">
    </span>
</template>
<script>
export default {
    name: 'y-input',
    props: {
        placeholder: {}
    }
}
</script>
<style lang="less">
@import "./input";
</style>