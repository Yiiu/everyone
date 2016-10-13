<template>
    <div class="ss">
        <y-tooltips
            theme="white y-popover"
            :trigger="trigger"
            :placement="placement"
        >
        	<template slot="html">
                <slot name="html"></slot>
            </template>
            <template slot="content">
                <div class="y-tooltips-title" v-text="title"></div>
                <div class="y-tooltips-content">
                    <slot name="content"></slot>
                </div>
            </template>
        </y-tooltips>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"y-popover",
    props:{
        title:{
            type: String,
            required:true
        },
        trigger:{
            type:String,
            default:"click"
        },
        placement:{
            type:String,
            default:"top"
        }
    }
}
</script>
<style lang="less">
@import "popover";
</style>
