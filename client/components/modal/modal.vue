<template>
    <transition>
        <div class="modal-box" v-if="data.show" transition="mdc" @click.self="b">
            <div class="modal-content">
                <div class="m-header">
                    <h2>{{data.title}}</h2>
                </div>
                <div class="m-body">
                    <p v-if="data.content">{{data.content}}</p>
                </div>
                <div class="m-footer">

                    <button class="btn" :class="[]"

                        v-if="data.backBtn.show"

                        @click="back"

                    >{{data.backBtn.text}}</button>

                    <button class="btn" :class="[]"
                        v-if="data.okBtn.show"

                        @click="ok"

                    >{{data.okBtn.text}}</button>

                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "y-modal",
    methods:{
        ok: function(){
            if(this.data.ok){
                this.data.ok(this);
            }
            this.$Modal.del()
        },
        back:function(){
            if(this.data.back){
                this.data.back();
            }
            this.$Modal.del()
        },
        b:function(){
            this.$Modal.del()
        }
    },
    computed:{
        data(){
            return this.$root.GLOBAL_MODAL
        }
    },
}
</script>
<style lang="less">
@import "./modal.less";
</style>