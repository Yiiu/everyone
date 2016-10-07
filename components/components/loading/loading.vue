<template>
    <transition name="opacity">
    <div class="loading" v-if="show">
        <div class="loading-content"
            :style="{
                'width': width+'%',
                'background': bg 
            }"
        ></div>
        <i class="ion-load-c"
            :style="{
                'color': bg 
            }"
        ></i>
    </div>
    </transition>
</template>
<script>
export default {
    name:"y-loading",
    data(){
        return {
            width: 0,
            bg:"#77b6ff",
            success:false,
            err:false,
            show:true,
        }
    },
    mounted(){
        let that = this
        this.timer = setInterval(()=>{
            if(this.width >= 80){
                this.width+=2
                if(this.width == 92){
                    clearInterval(that.timer)
                }
            }else {
                this.width+=5
            }
        }, 600)
    },
    watch:{
        success:function(value){
            let that = this
            if(value) {
                if(this.timer){
                    clearInterval(this.timer)
                }
                this.width = 100
                this.bg = "#67D5B5"
                this.$el.firstChild.addEventListener('transitionend', () => {
                    setTimeout(()=>{
                        that.show = false
                    },200)
                })
            }
        },
        err:function(value){
            let that = this
            if(value) {
                if(this.timer){
                    clearInterval(this.timer)
                }
                this.width = 100
                this.bg = "#ff7473"
                this.$el.firstChild.addEventListener('transitionend', () => {
                    setTimeout(()=>{
                        that.show = false
                    },200)
                })
            }
        },
        show:function(value){
            if(!value) {
                this.$el.addEventListener('transitionend', () => {
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el);
                });
            }
        }
    }
}
</script>
<style lang="less">
@import "./loading";
</style>