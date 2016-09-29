<template>
    <div class="modal-box" v-if="data.isshow" transition="mdc" @click.self="b">
        <div class="modal-content">
            <div class="m-header">
                <h2>{{data.title}}</h2>
            </div>
            <div class="m-body">
                <p v-if="data.content">{{data.content}}</p>
                {{{data.html}}}
            </div>
            <div class="m-footer">

                <button class="btn" 
                    :class="{
                        'btn-default' : data.backBtn.type == '',
                        'btn-primary': data.backBtn.type == 'primary',
                        'btn-success': data.backBtn.type == 'success',
                        'btn-warning': data.backBtn.type == 'warning',
                        'btn-danger': data.backBtn.type == 'danger',
                    }"

                    v-if="data.backBtn.show"

                    @click="back"

                >{{data.backBtn.text}}</button>

                <button class="btn" 
                    :class="{
                        'btn-default' : data.okBtn.type == '',
                        'btn-primary': data.okBtn.type == 'primary',
                        'btn-success': data.okBtn.type == 'success',
                        'btn-warning': data.okBtn.type == 'warning',
                        'btn-danger': data.okBtn.type == 'danger',
                    }"

                    v-if="data.okBtn.show"

                    @click="ok"

                >{{data.okBtn.text}}</button>

            </div>
        </div>
    </div>
</template>
<script>
export default {
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