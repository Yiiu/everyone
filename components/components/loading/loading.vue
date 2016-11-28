<template>
    <transition name="opacity">
        <div class="y-loading" v-if="show">
            <div class="y-loading-content"
                :style="{
                    'width': width+'%',
                    'background': bg
                }"
            ></div>
            <y-svg type="loading" class="ion-load-c" :color="bg"></y-svg>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'y-loading',
    data () {
        return {
            width: 0,
            bg: '#77b6ff',
            show: false
        }
    },
    methods: {
        open () {
            this.show = true
            this.init()
            this.timer = setInterval(() => {
                this.increase()
            }, 400)
        },
        init () {
            clearInterval(this.timer)
            this.timer = null
            this.width = 0
            this.bg = '#77b6ff'
        },
        success () {
            this.width = 100
            this.bg = '#67D5B5'
            setTimeout(() => {
                this.init()
                this.show = false
            }, 600)
        },
        err () {
            this.width = 100
            this.bg = '#ff7473'
            setTimeout(() => {
                this.init()
                this.show = false
            }, 600)
        },
        increase () {
            if (this.width >= 80) {
                if (this.width >= 92) {
                    clearInterval(this.timer)
                } else {
                    this.width += 2
                }
            } else {
                this.width += 4
            }
        }
    }
}
</script>
<style lang="less">
@import "./loading";
</style>
