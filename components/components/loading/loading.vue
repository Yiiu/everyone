<template>
    <div>

    <transition name="opacity">
    <div class="y-loading" v-if="show">
        <div class="y-loading-content"
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
</div>
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
            show: false,
            run:0,
        }
    },
    watch:{
        success:function(value){
            if(value) {
                if(this.timer){
                    clearInterval(this.timer)
                }
                this.width = 100
                this.bg = "#67D5B5"
                this.$el.firstChild.addEventListener('transitionend', () => {
                    setTimeout(()=>{
                        this.success = false
                    },200)
                })
            }else {
                // this.show = false
                this.width = 0
            }
        },
        test:function(value){
            console.log(value)
        },
        err:function(value){
            if(value) {
                if(this.timer){
                    clearInterval(this.timer)
                }
                this.width = 100
                this.bg = "#ff7473"
                this.$el.firstChild.addEventListener('transitionend', () => {
                    setTimeout(()=>{
                        this.show = false
                    },200)
                })
            }
        },
        show:function(value){
            if(value) {
                console.log(1)
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
            }
        }
    }
}
</script>
<style lang="less">
@import "./loading";
</style>
