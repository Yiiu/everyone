<template>
    <span>
        <span ref="slot">
            <y-input v-model="current.text"></y-input>
        </span>
        <transition @before-enter="enter" @after-leave="after" name="y-slide-up">
            <div ref="pop" class="y-date-picker-container" v-show="show">
                <div class="y-date-picker">
                    <div class="y-date-picker-input-wrap">
                        <input placeholder="Select date" v-model="current.text">
                    </div>
                    <y-month 
                        v-show="component === 'month'"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                    ></y-month>
                    <y-year
                        v-show="component === 'year'"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                    ></y-year>
                </div>
            </div>
        </transition>
    </span>
</template>
<script>
import mixin from '../minxins/popover'
import yMonth from './picker/month.vue'
import yYear from './picker/year.vue'
export default {
    mixins: [mixin],
    name: 'y-month-picker',
    data () {
        return {
            // 选择的
            current: {
                year: null,
                month: null,
                text: ''
            },
            component: 'month',
            // 现在的月份和年份
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            onStage: 'date',
            // 本地事件
            now: [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]
        }
    },
    methods: {
        close () {
            this.show = false
            this.current = {
                year: this.year,
                month: this.month
            }
        },
        setMonth (value) {
            this.month = value
        },
        setYear (value) {
            this.year = value
        },
        setComponent (value) {
            this.component = value
        },
        after () {
            this.component = 'month'
        }
    },
    components: {
        yMonth,
        yYear
    },
    watch: {
        current: function (value) {
            if (value.year !== null && value.month !== null) {
                this.current.text = `${value.year}-${value.month + 1}`
            }
        }
    }
}
</script>
<style lang="less">
@import "picker";
</style>