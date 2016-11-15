<template>
    <transition appear name="y-tag" @before-enter="beforeEnter">
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
        },
        close:Function,
    },
    data(){
        return {
            show: true,
        }
    },
    methods:{
        del(){
            let that = this
            if(this.close !== undefined){
                this.close()
            }else {
                this.show = false
            }
        },
        beforeEnter(){
            if(this.$el){
                this.$el.style.width = this.$el.clientWidth + "px"
            }
        }
    },
}
</script>
<style lang="less">
@import "tag";
</style>