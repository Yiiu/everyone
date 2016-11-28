<template>
    <div class="notification" :class="[type, {'notification-bg':!icon}]">
        <y-svg :type="svgClass" v-if="icon" :width="38" class="notification-info"></y-svg>
        <div class="notification-c">
            <h2 slot="title">{{title}}</h2>
            <p slot="description">{{content}}</p>
        </div>
        <i class="ion-close-round notification-del" @click="close"></i>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'success'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        onClose: Function,
        icon: {
            type: Boolean,
            default: false
        },
        time: {
            type: Number,
            default: 0
        },
        index: Number,
        id: Number
    },
    mounted () {
        if (this.time !== 0) {
            this.$el.addEventListener('transitionend', () => {
                setTimeout(this.close, this.time)
            })
        }
    },
    methods: {
        close () {
            if (typeof this.onClose === 'function') {
                this.onClose()
            }
            this.$emit('close', this.index)
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
