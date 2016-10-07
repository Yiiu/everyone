<template>
    <div class="notification-box">
    <transition-group name="notification-list" tag="div">
        <notify 
            v-for="(item, index) in data" 
            :key="item.id"
            :type="item.type"
            :title="item.title"
            :content="item.content"
            :onClose="item.onClose"
            :icon="item.icon"
            :index="index"
            :time="item.time"
            v-on:close="closes"
        ></notify>
    </transition-group>
    </div>
</template>
<script>
import notify from "./notify"

export default {
    data(){
        return {
            show:false,
            data:[]
        }
    },
    methods:{
        closes(id){
            this.data.splice(id, 1)
        }
    },
    components:{
        notify
    },
    watch:{
        data: function(vaule) {
            if(vaule.length == 0){
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
@import "./notification";
</style>