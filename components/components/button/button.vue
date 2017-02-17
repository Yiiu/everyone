<template>
    <button class="y-btn" :class="[style, clicked ? 'y-btn-clicked': null]" @click="click" :disabled="disabled">
        <y-svg v-if="loading" :width="14" color="#fff" type="loading"></y-svg>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'y-button',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    data () {
        return {
            clicked: false
        }
    },
    methods: {
        click () {
            this.clicked = !this.clicked
            this.$el.addEventListener('animationend', () => {
                this.clicked = false
            })
        }
    },
    computed: {
        'style': function () {
            let style = ``

            style += `btn-${this.type} ${this.color}`

            if (this.size !== '') {
                style += ` ${this.size}`
            }
            if (this.disabled) {
                style += ` disabled`
            }
            if (this.loading) {
                style += ` loading`
            }
            return style
        }
    }
}
</script>
<style lang="less">
@import "./button";
</style>
