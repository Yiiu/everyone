<template>
    <span>
        <span ref="slot">
            <y-input v-model="current.text"></y-input>
        </span>
        <transition @before-enter="enter" name="y-slide-up">
            <div ref="pop" class="y-date-picker-container" v-show="show">
                <y-month @close="close" v-model="current"></y-date>
            </div>
        </transition>
    </span>
</template>
<script>
import mixin from '../minxins/popover'
import yMonth from './picker/month.vue'
export default {
    mixins: [mixin],
    name: 'y-month-picker',
    data () {
        return {
            // 选择的
            current: {},
            // 现在的月份和年份
            present: {
                year: new Date().getFullYear(),
                month: new Date().getMonth()
            },
            now: [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]
        }
    },
    method: {
        close () {
            this.show = false
        }
    },
    components: {
        yMonth
    }
}
</script>
<style lang="less">
@import "picker";
</style>