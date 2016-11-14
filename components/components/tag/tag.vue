<template>
    <transition name="tag" v-on:before-enter="beforeEnter">
        <span class="y-tag" :class="type ? 'y-tag-' + type : ''" v-if="show"><slot></slot><i class="ion-android-close" v-if="closable" @click="del"></i></span>
    </transition>
</template>
<script>
export default {
    name:"y-tag",
    props:{
        type:String,
        closable: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            show:true
        }
    },
    methods:{
        del(){
            this.show = false
        },
        beforeEnter(){
            this.$el.style.width = this.$el.clientWidth + "px"
        }
    },
    mounted(){
    }
}
</script>
<style lang="less">
@import "tag";
</style>