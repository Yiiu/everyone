<template>
    <span>
        <span ref="slot">
            <y-input v-model="current.text" read></y-input>
        </span>
        <transition name="y-slide-up" @before-enter="enter" @after-leave="after">
            <div ref="pop" class="y-date-picker-container" v-show="show">
                <div class="y-date-picker">
                    <div class="y-date-picker-input-wrap">
                        <input placeholder="Select date" v-model="current.text">
                    </div>
                    <y-date
                        v-model="current"
                        v-show="component === 'date'"
                        :disabled="disabledDate"
                        :now="now"
                        :year="year"
                        :month="month"
                        :date="date"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                        :en="en"
                    ></y-date>
                    <y-year
                        v-show="component === 'year'"
                        :disabled="disabledDate"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                        :en="en"
                    ></y-year>
                    <y-month 
                        v-show="component === 'month'"
                        :disabled="disabledDate"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                        :en="en"
                    ></y-month>
                </div>
            </div>
        </transition>
    </span>
</template>
<script>
import mixin from '../minxins/popover'
import yDate from './picker/date.vue'
import yMonth from './picker/month.vue'
import yYear from './picker/year.vue'
export default {
    name: 'y-date-picker',
    mixins: [mixin],
    props: {
        disabledDate: {
            type: Object,
            validator: function (value) {
                if (!value.end) {
                    value.end = [9999, 9999, 9999]
                }
                if (!value.star) {
                    value.star = [0, 0, 0]
                }
                return value
            },
            default: function () {
                return {
                    star: [0, 0, 0],
                    end: [9999, 9999, 9999]
                }
            }
        },
        en: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            // 选择的
            current: {
                year: null,
                month: null,
                date: null,
                text: ''
            },
            // 现在的月份和年份
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            component: 'date',
            onStage: 'date',
            // 本地事件
            now: [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]
        }
    },
    methods: {
        close () {
            this.show = false
        },
        after () {
            this.component = 'date'
            this.onStage = 'date'
            this.text(this.current)
            if (this.current.year !== null) {
                this.year = this.current.year
            } else {
                this.year = new Date().getFullYear()
            }
            if (this.current.month !== null) {
                this.month = this.current.month
            } else {
                this.month = new Date().getMonth()
            }
        },
        setMonth (value) {
            this.month = value
        },
        setYear (value) {
            this.year = value
        },
        setDate (value) {
            this.date = value
        },
        setComponent (value) {
            this.component = value
        },
        text (value) {
            if (value.year !== null && value.month !== null && value.date !== null) {
                this.current.text = `${value.year}-${value.month + 1}-${value.date}`
            } else {
                this.current.text = ''
            }
        }
    },
    components: {
        yDate,
        yMonth,
        yYear
    },
    watch: {
        component: function (value, oldValue) {
            if (value === 'date') {
                this.onStage = 'date'
            }
            this.onStage = oldValue
        },
        current: function (value) {
            this.text(value)
        }
    }
}
</script>
<style lang="less">
@import "picker";
</style>