<template>
    <div class="y-month-picker-panel y-date-picker-panel">
        <div class="y-date-picker-header y-month-picker-header">
            <a role="button" class="y-date-picker-prev-year-btn y-date-picker-btn"
                @click="prevYear"
            >
                <y-svg type="vv" :width="12"></y-svg>
            </a>
            <a>
                <a @click="yearOn" class="y-date-year-select">{{year}}</a>
            </a>
            <a role="button" class="y-date-picker-next-year-btn y-date-picker-btn"
                @click="nextYear"
            >
                <y-svg type="vv" :width="12"></y-svg>
            </a>
        </div>
        <div class="y-date-picker-body y-month-picker-body">
            <ul class="y-date-picker-tbody y-month-picker-tbody">
                <li v-for="item of 12" 
                    :class="{'y-month-picker-tbody-selected': month === item - 1}"
                    @click="set(item - 1)"
                >
                    <div>{{en ? monthText[item - 1].substr(0, 3) : monthText[item - 1]}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
@import "month";
</style>
<script>
export default {
    props: {
        en: {
            type: Boolean,
            default: false
        },
        month: {},
        year: {},
        now: {}
    },
    data () {
        return {
            dayText: this.en ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['日', '一', '二', '三', '四', '五', '六'],
            monthText: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    },
    methods: {
        set (value) {
            this.$emit('setmonth', value)
            this.$emit('setyear', this.year)
            if (this.$parent.$options._componentTag === 'y-date-picker') {
                this.$emit('component', 'date')
            } else {
                this.$emit('close')
            }
        },
        nextYear (value) {
            this.$emit('setyear', this.year + 1)
        },
        prevYear (value) {
            this.$emit('setyear', this.year - 1)
        },
        yearOn () {
            this.$emit('component', 'year')
        }
    }
}
</script>