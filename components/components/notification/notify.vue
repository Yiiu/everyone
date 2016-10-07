<template>
    <div class="notification" :class="type">
        <i class="notification-info" 
            :class="{
                'ion-checkmark-circled': type == 'success',
                'ion-information-circled': type == 'info',
                'ion-alert-circled': type == 'warning',
                'ion-close-circled': type == 'danger',
            }"
            v-if="icon"
        ></i>
        <div class="notification-c">
            <h2 slot="title">{{title}}</h2>
            <p slot="description">{{content}}</p>
        </div>
        <i class="ion-close-round notification-del" @click="close"></i>
    </div>
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default:"success"
        },
        title:{
            type:String,
            default:""
        },
        content:{
            type:String,
            default:""
        },
        onClose:Function,
        icon:{
            type:Boolean,
            default:false,
        },
        time:{
            type:Number,
            default: 0
        },
        index:Number,
        id:Number
    },
    mounted(){
        if(this.time != 0){
            this.$el.addEventListener('transitionend', () => {
                setTimeout(this.close, this.time)
            });
        }
    },
    methods:{
        close(){
            if(typeof this.onClose === "function"){
                this.onClose()
            }
            this.$emit('close', this.index)
        }
    },
}
</script>