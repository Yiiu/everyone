<template>
    <div class="y-date-picker">
        <div class="y-date-picker-input-wrap">
            <input placeholder="Select date" v-model="current.text">
        </div>
        <div class="y-date-picker-panel">
            <div class="y-date-picker-header">
                <a class="y-date-picker-prev-year-btn y-date-picker-btn"
                    @click="prevYear"
                >
                    <y-svg type="vv" :width="12"></y-svg>
                </a>
                <a class="y-date-picker-prev-month-btn y-date-picker-btn"
                    @click="prevMonth"
                >
                    <y-svg type="v" :width="12"></y-svg>
                </a>
                <a>
                    <a>{{monthText[present.month]}}</a>
                    <a>{{present.year}}</a>
                </a>
                <a class="y-date-picker-next-month-btn y-date-picker-btn"
                    @click="nextMonth"
                >
                    <y-svg type="v" :width="12"></y-svg>
                </a>
                <a class="y-date-picker-next-year-btn y-date-picker-btn"
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
                        :title="`${before[0]}-${before[1]}-${item}`" 
                        class="y-date-picker-tbody-before"
                        @click="clickDate(before[0], before[1] - 1, item)"
                    >
                        <div>{{item}}</div>
                    </li>
                    <li 
                        v-for="item in myDate.last"
                        :class="{
                            'y-date-picker-tbody-today' : present.year == now[0] && present.month == now[1] && item == now[2],
                            'y-date-picker-tbody-selected' : current.year == present.year && current.month == present.month && current.day == item
                        }" 
                        :title="`${oneYear}-${oneMonth + 1}-${item}`"
                        @click="clickDate(present.year, present.month, item)"
                    >
                        <div>{{item}}</div>
                    </li>
                    <li 
                        v-for="item in afterDate" 
                        :title="`${after[0]}-${after[1]}-${item}`" 
                        class="y-date-picker-tbody-before"
                        @click="clickDate(after[0], after[1] + 1, item)"
                    >
                        <div>{{item}}</div>
                    </li>
                </ul>
            </div>
            <div class="y-date-picker-footer">
                <span class="y-date-picker-today-btn" @click="clickDate(now[0], now[1] + 1, now[2])"><a v-text="today"></a></span>
            </div>
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
        present: {}
    },
    data () {
        return {
            dayText: this.en ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['日', '一', '二', '三', '四', '五', '六'],
            monthText: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            today: this.en ? 'Today' : '今天',
            current: {}
        }
    },
    methods: {
        // 获取月份的第一天和最后一天
        getDate (y, m) {
            return [1, new Date(y, m, 0).getDate()]
        },
        nextMonth () {
            if (this.present.month === 11) {
                this.$emit('year', this.present.year + 1)
                this.$emit('month', 0)
            } else {
                this.$emit('month', this.present.month + 1)
            }
        },
        clickDate (y, m, d) {
            this.current = {
                year: y,
                month: m,
                day: d,
                date: new Date(y, m, d),
                text: `${y}-${m + 1}-${d}`
            }
            this.present.year = this.current.year
            this.present.month = this.current.month
            this.$emit('close')
        },
        prevMonth () {
            if (this.present.month === 0) {
                this.$emit('year', this.present.year - 1)
                this.$emit('month', 11)
            } else {
                this.$emit('month', this.present.month - 1)
            }
        },
        nextYear () {
            this.$emit('year', this.present.year + 1)
        },
        prevYear () {
            this.$emit('year', this.present.year - 1)
        }
    },
    watch: {
        value: function (value) {
            this.current = value
        },
        current: function (value) {
            this.$emit('input', value)
        }
    },
    computed: {
        myDate: function () {
            return {
                first: this.getDate(this.present.year, this.present.month + 1)[0],
                last: this.getDate(this.present.year, this.present.month + 1)[1],
                date: new Date(this.present.year, this.present.month + 1)
            }
        },
        // 上个月
        before: function () {
            let year = this.present.year
            let month = this.present.month
            if (month === 0) {
                year--
                month = 11
            }
            return [year, month]
        },
        // 下个月
        after: function () {
            let year = this.present.year
            let month = this.present.month
            if (month === 11) {
                year++
                month = 0
            }
            return [year, month]
        },
        beforeDate: function () {
            let l = this.getDate(this.before[0], this.before[1])
            let before = new Date(this.present.year, this.present.month, 1).getDay()
            let m = []
            for (let i = l[1] - before + 1; i <= l[1]; i++) {
                m.push(i)
            }
            return m
        },
        afterDate: function () {
            let before = new Date(this.present.year, this.present.month + 1, 0).getDate()
            return 42 - before - this.beforeDate.length
        }
    }
}
</script>
<style lang="less">
@import "date";
</style>