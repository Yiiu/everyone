<template>
    <transition name="message">
        <div class="message" v-if="show">
            <div class="message-content" :class="type">
                <i class="message-info" 
                    :class="{
                        'ion-checkmark-circled': type == 'success',
                        'ion-information-circled': type == 'info',
                        'ion-alert-circled': type == 'warning',
                        'ion-close-circled': type == 'danger',
                    }"></i>
                <p v-text="content"></p>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:"y-message",
    data(){
        return {
            content: "",
            type: "info",
            time: 1500,
            show:false
        }
    },
    methods:{
        close(){
            this.show = false
        }
    },
    mounted(){
        setTimeout(this.close, this.time)
    },
    watch:{
        show:function(value){
            if(!value) {
                this.$el.addEventListener('transitionend', () => {
                    this.$destroy(true);
                    if(this.$el.parentNode){
                        this.$el.parentNode.removeChild(this.$el);
                    }
                });
            }
        }
    }
}
</script>
<style lang="less">
@import "./message.less";
</style>