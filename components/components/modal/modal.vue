<template>
    <transition name="mdc">
        <div class="modal-box" v-if="show" @click.self="del">
            <div class="modal-content">
                <div class="m-header">
                    <h2 v-text="title"></h2>
                </div>
                <div class="m-body">
                    <p v-if="content" v-text="content"></p>
                </div>
                <div class="m-footer">

                    <y-button

                        type="ghost"

                        v-if="backBtn.show"

                        @click.native="next('reject')"

                        v-text="backBtn.text"

                    ></y-button>

                    <y-button

                        type="primary"

                        v-if="okBtn.show"

                        @click.native="next('resolve')"

                        v-text="okBtn.text"

                    ></y-button>

                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "y-modal",
    data(){
        return {
            show:false,
            title:"",
            content:"",
            okBtn:{
                show:true,
                text:"确认"
            },
            backBtn:{
                show:true,
                text:"取消"
            },
            vis:true,
            callback:()=>{},
        }
    },
    mounted(){
        document.body.appendChild(this.$el)
    },
    methods:{
        next(value){
            if(this.vis){
                this.show = false
            }
            let callback = this.callback;
            callback(value, this)
        },
        del(){
            this.show = false
        }
    },
    watch:{
        show:function(value){
            if(!value){
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
@import "./modal.less";
</style>
