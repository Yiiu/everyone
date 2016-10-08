<template>
    <label>
        <span class="y-checkbox">
            <span class="y-checkbox-box"></span>
            <input type="checkbox">
            <slot></slot>
        </span>
    </label>
</template>
<script>
export default {
    name: "y-checkbox",
}
</script>