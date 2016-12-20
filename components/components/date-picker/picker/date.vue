<template>
    <div class="y-date-picker-panel">
        <div class="y-date-picker-header">
            <a role="button" class="y-date-picker-prev-year-btn y-date-picker-btn"
                @click="prevYear"
            >
                <y-svg type="vv" :width="12"></y-svg>
            </a>
            <a role="button" class="y-date-picker-prev-month-btn y-date-picker-btn"
                @click="prevMonth"
            >
                <y-svg type="v" :width="12"></y-svg>
            </a>
            <a>
                <a @click="monthComponent" class="y-date-month-select">{{monthText[month]}}</a>
                <a @click="yearComponent" class="y-date-year-select">{{year}}</a>
            </a>
            <a role="button" class="y-date-picker-next-month-btn y-date-picker-btn"
                @click="nextMonth"
            >
                <y-svg type="v" :width="12"></y-svg>
            </a>
            <a role="button" class="y-date-picker-next-year-btn y-date-picker-btn"
                @click="nextYear"
            >
                <y-svg type="vv" :width="12"></y-svg>
            </a>
        </div>
        <div class="y-date-picker-body">
            <ul class="y-date-picker-thead">
                <li v-for="day in dayText" v-text="day"></li>
            </ul>
            <ul class="y-date-picker-tbody">
                <li 
                    v-for="item in beforeDate" 
                    :title="`${before[0]}-${before[1] + 1}-${item}`" 
                    class="y-date-picker-tbody-before"
                    @click="clickDate(before[0], before[1], item)"
                    :class="{
                        'y-date-picker-tbody-disabled' : 
                            before[0] < disabled.star[0] || 
                            before[0] <= disabled.star[0] && before[1] < disabled.star[1] - 1 ||
                            before[0] <= disabled.star[0] && before[1] <= disabled.star[1] - 1 && item < disabled.star[2] ||
                            before[0] > disabled.end[0] ||
                            before[0] >= disabled.end[0] && before[1] > disabled.end[1] - 1 ||
                            before[0] >= disabled.end[0] && before[1] >= disabled.end[1] - 1 && item > disabled.end[2]
                    }"
                >
                    <div>{{item}}</div>
                </li>
                <li 
                    v-for="item in myDate.last"
                    :class="{
                        'y-date-picker-tbody-today' : year == now[0] && month == now[1] && item == now[2],
                        'y-date-picker-tbody-selected' : year == current.year && month == current.month && current.date == item,
                        'y-date-picker-tbody-disabled' : 
                            year < disabled.star[0] || 
                            year <= disabled.star[0] && month < disabled.star[1] - 1 ||
                            year <= disabled.star[0] && month <= disabled.star[1] - 1 && item < disabled.star[2] ||
                            year > disabled.end[0] ||
                            year >= disabled.end[0] && month > disabled.end[1] - 1 ||
                            year >= disabled.end[0] && month >= disabled.end[1] - 1 && item > disabled.end[2]
                    }" 
                    :title="`${year}-${month + 1}-${item}`"
                    @click="clickDate(year, month, item)"
                >
                    <div>{{item}}</div>
                </li>
                <li 
                    v-for="item in afterDate" 
                    :title="`${after[0]}-${after[1] + 1}-${item}`" 
                    class="y-date-picker-tbody-before"
                    @click="clickDate(after[0], after[1], item)"
                    :class="{
                        'y-date-picker-tbody-disabled' :
                            after[0] < disabled.star[0] || 
                            after[0] <= disabled.star[0] && after[1] < disabled.star[1] - 1 ||
                            after[0] <= disabled.star[0] && after[1] <= disabled.star[1] - 1 && item < disabled.star[2] ||
                            after[0] > disabled.end[0] ||
                            after[0] >= disabled.end[0] && after[1] > disabled.end[1] - 1 ||
                            after[0] >= disabled.end[0] && after[1] >= disabled.end[1] - 1 && item > disabled.end[2]
                    }"
                >
                    <div>{{item}}</div>
                </li>
            </ul>
        </div>
        <div class="y-date-picker-footer">
            <span class="y-date-picker-today-btn" @click="clickDate(now[0], now[1], now[2])" :title="`${now[0]}-${now[1]}-${now[2]}`"><a v-text="today"></a></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {},
        en: {
            type: Boolean,
            default: false
        },
        now: {},
        year: {},
        month: {},
        disabled: {}
    },
    data () {
        return {
            dayText: this.en ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['日', '一', '二', '三', '四', '五', '六'],
            monthText: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            today: this.en ? 'Today' : '今天',
            current: this.value
        }
    },
    methods: {
        // 获取月份的第一天和最后一天
        getDate (y, m) {
            return [1, new Date(y, m, 0).getDate()]
        },
        clickDate (y, m, d) {
            if (this.d(y, m, d)) {
                this.current = {
                    year: y,
                    month: m,
                    date: d
                }
                this.$emit('setyear', y)
                this.$emit('setmonth', m)
                this.$emit('setdate', d)
                this.$emit('close')
            } else {
                return
            }
        },
        d (y, m, d) {
            if (
                y < this.disabled.star[0] ||
                y <= this.disabled.star[0] && m < this.disabled.star[1] - 1 ||
                y <= this.disabled.star[0] && m <= this.disabled.star[1] - 1 && d < this.disabled.star[2] ||
                y > this.disabled.end[0] ||
                y >= this.disabled.end[0] && m > this.disabled.end[1] - 1 ||
                y >= this.disabled.end[0] && m >= this.disabled.end[1] - 1 && d > this.disabled.end[2]
            ) {
                return false
            } else {
                return true
            }
        },
        nextMonth () {
            if (this.month === 11) {
                this.$emit('setyear', this.year + 1)
                this.$emit('setmonth', 0)
            } else {
                this.$emit('setmonth', this.month + 1)
            }
        },
        prevMonth () {
            if (this.month === 0) {
                this.$emit('setyear', this.year - 1)
                this.$emit('setmonth', 11)
            } else {
                this.$emit('setmonth', this.month - 1)
            }
        },
        nextYear () {
            this.$emit('setyear', this.year + 1)
        },
        prevYear () {
            this.$emit('setyear', this.year - 1)
        },
        monthComponent () {
            this.$parent.component = 'month'
        },
        yearComponent () {
            this.$parent.component = 'year'
        }
    },
    computed: {
        myDate: function () {
            return {
                first: this.getDate(this.year, this.month + 1)[0],
                last: this.getDate(this.year, this.month + 1)[1],
                date: new Date(this.year, this.month + 1)
            }
        },
        // 上个月
        before: function () {
            let year = this.year
            let month = this.month - 1
            if (month < 0) {
                year--
                month = 11
            }
            return [year, month]
        },
        // 下个月
        after: function () {
            let year = this.year
            let month = this.month + 1
            if (month > 11) {
                year++
                month = 0
            }
            return [year, month]
        },
        beforeDate: function () {
            let l = this.getDate(this.before[0], this.before[1] + 1)
            let before = new Date(this.year, this.month, 1).getDay()
            let m = []
            for (let i = l[1] - before + 1; i <= l[1]; i++) {
                m.push(i)
            }
            return m
        },
        afterDate: function () {
            let before = new Date(this.year, this.month + 1, 0).getDate()
            return 42 - before - this.beforeDate.length
        }
    },
    watch: {
        current: function (value) {
            this.$emit('input', value)
        },
        value: function (value) {
            this.current = value
        }
    }
}
</script>
<style lang="less">
@import "date";
</style>