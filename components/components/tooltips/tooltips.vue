<template>
    <span>
        <slot name="slot"></slot>
        <transition name="tooltips" @before-enter="enter" @after-enter="test">
            <div class="y-tooltips"
                ref="pop"
                :class="[classNames, className]"
                v-show="show"
            >
                <div class="y-tooltips-delta" v-if="!delta"></div>
                <div class="y-tooltips-box">
                    <span v-text="content" v-if="!$slots.content"></span>
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </span>
</template>
<script>
import mixin from '../minxins/popover'
export default {
    name: 'y-tooltips',
    mixins: [mixin],
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
    methods: {
        test () {
            console.log(1)
        }
    }
}
</script>
<style lang="less">
@import "tooltips";
</style>
