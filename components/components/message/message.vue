<template>
    <transition name="message">
        <div class="message" v-if="show">
            <div class="message-content" :class="type">
                <y-svg :type="svgClass" class="message-info"></y-svg>
                <p v-text="content"></p>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'y-message',
    data () {
        return {
            content: '',
            type: 'info',
            time: 1500,
            show: false
        }
    },
    methods: {
        close () {
            this.show = false
        }
    },
    mounted () {
        setTimeout(this.close, this.time)
    },
    watch: {
        show: function (value) {
            if (!value) {
                this.$el.addEventListener('transitionend', () => {
                    this.$destroy(true)
                    if (this.$el.parentNode) {
                        this.$el.parentNode.removeChild(this.$el)
                    }
                })
            }
        }
    },
    computed: {
        'svgClass': function () {
            if (this.type === 'info') {
                return 'info'
            }
            if (this.type === 'success') {
                return 'checkmark'
            }
            if (this.type === 'warning') {
                return 'help'
            }
            if (this.type === 'danger') {
                return 'close'
            }
        }
    }
}
</script>
<style lang="less">
@import "./message.less";
</style>