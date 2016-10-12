<template>
    <transition name="alert-op">
        <div class="y-alert" :class="[Class]" v-if="show">
            <i class=" alert-icon"
                :class="{
                    'ion-information-circled': type == 'info',
                    'ion-checkmark-circled': type == 'success',
                    'ion-alert-circled': type == 'warning',
                    'ion-close-circled': type == 'danger',
                }"

            ></i>
            <div class="alert-c" ref="contents">
                <h1 class="title" v-text="title"></h1>
                <div class="content" v-text="content"></div>
            </div>
            <i class="alert-close ion-close-round alert-icon" @click="close"></i>
        </div>
    </transition>
</template>
<style lang="less">
@import "alert";
</style>
<script>
export default {
    name:"y-alert",
    props:{
        type:{
            type: String,
            default: "info",
        },
        title:{
            type: String,
            default:"",
            required: true
        },
        content:{
            type:String,
            default:"",
        },
        Close:{
            type: Boolean,
            default:true,
        },
        CloseText:{
            type:String,
            default:"",
        },
        Icon:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            show:true,
        }
    },
    methods:{
        close(){
            this.show = false
        }
    },
    computed:{
        "Class":function(){
            return `alert-${this.type}`
        }
    }
}
</script>
