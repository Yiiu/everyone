<template>
    <div class="y-popconfirm">
        <y-tooltips
            theme="white y-popconfirm"
            :trigger="trigger"
            :placement="placement"
        >
        	<template slot="html">
                <slot name="html"></slot>
            </template>
            <template slot="content">
                <div class="y-tooltips-title"><i class="ion-information-circled ion"></i> {{title}}</div>
                <div class="y-tooltips-content">
                    <y-button type="ghost">取消</y-button>
                    <y-button>确认</y-button>
                </div>
            </template>
        </y-tooltips>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"y-popconfirm",
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
@import "popconfirm";
</style>
