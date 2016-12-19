<template>
    <span>
        <span ref="slot">
            <y-input v-model="current.text"></y-input>
        </span>
        <transition name="y-slide-up" @before-enter="enter" @after-leave="after">
            <div ref="pop" class="y-date-picker-container" v-show="show">
                <div class="y-date-picker">
                    <div class="y-date-picker-input-wrap">
                        <input placeholder="Select date" v-model="current.text">
                    </div>
                    <y-date
                        v-show="component === 'date'"
                        v-model="current"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                    ></y-date>
                    <y-year
                        v-show="component === 'year'"
                        v-model="current"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
                    ></y-year>
                    <y-month 
                        v-show="component === 'month'"
                        v-model="current"
                        :now="now"
                        :year="year"
                        :month="month"
                        @close="close"
                        @setyear="setYear"
                        @setmonth="setMonth"
                        @component="setComponent"
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
    data () {
        return {
            // 选择的
            current: {},
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
        },
        setMonth (value) {
            this.month = value
        },
        setYear (value) {
            console.log(value)
            this.year = value
        },
        setComponent (value) {
            this.component = value
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
        }
    }
}
</script>
<style lang="less">
@import "picker";
</style>