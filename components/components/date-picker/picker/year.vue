<template>
    <div class="y-month-picker-panel y-date-picker-panel">
        <div class="y-date-picker-header y-month-picker-header">
            <a role="button" class="y-date-picker-prev-year-btn y-date-picker-btn"
                @click="prevYearO"
            >
                <y-svg type="vv" :width="12"></y-svg>
            </a>
            <a>
                <a @click="range = true" :class="{'y-date-year-select': !range}">{{minYear}}-{{maxYear}}</a>
            </a>
            <a role="button" class="y-date-picker-next-year-btn y-date-picker-btn"
                @click="nextYearO"
            >
                <y-svg type="vv" :width="12"></y-svg>
            </a>
        </div>
        <div class="y-date-picker-body y-month-picker-body">
            <ul class="y-date-picker-tbody y-month-picker-tbody">
                <li @click="prevYearO"><div><y-svg type="v" :width="12" style="transform: rotateZ(90deg);"></y-svg></div></li>
                <template v-if="!range">
                    <li v-for="item of 10" 
                        :class="{'y-month-picker-tbody-selected': year === minYear + item - 1}"
                        @click="set(minYear + item - 1)"
                    >
                        <div>{{minYear + item - 1}}</div>
                    </li>
                </template>
                <template v-else>
                    <li v-for="item of 10" 
                        :class="{'y-month-picker-tbody-selected': years === rangeMinYear + ((item - 1) * 10)}"
                        @click="rangeSet(rangeMinYear + ((item - 1) * 10))"
                        class="y-year-picker-tbody-range"
                    >
                        <div>{{`${rangeMinYear + ((item - 1) * 10)}-${rangeMinYear + ((item - 1) * 10) + 9}`}}</div>
                    </li>
                </template>
                <li @click="nextYearO"><div><y-svg type="v" :width="12" style="transform: rotateZ(-90deg);"></y-svg></div></li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
@import "year";
</style>
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
        month: {}
    },
    data () {
        return {
            dayText: this.en ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['日', '一', '二', '三', '四', '五', '六'],
            monthText: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            years: Number(this.year.toString().slice(0, this.year.toString().length - 1) + '0'),
            current: this.year,
            range: false
        }
    },
    methods: {
        set (value) {
            this.$emit('setyear', value)
            if (this.$parent.onStage) {
                if (this.$parent.$options._componentTag === 'y-date-picker') {
                    this.$emit('component', 'date')
                } else {
                    this.$emit('component', 'month')
                }
            } else {
                this.$emit('component', this.$parent.onStage)
            }
        },
        rangeSet (value) {
            this.years = value
            this.range = false
        },
        nextYearO (value) {
            this.years += 10
        },
        prevYearO (value) {
            this.years -= 10
        }
    },
    computed: {
        minYear: function () {
            let length = this.years.toString().length - 1
            return Number(this.years.toString().slice(0, length) + '0')
        },
        maxYear: function () {
            let length = this.years.toString().length - 1
            return Number(this.years.toString().slice(0, length) + '9')
        },
        rangeMinYear: function () {
            let length = this.minYear.toString().length - 2
            return Number(this.years.toString().slice(0, length) + '00')
        },
        rangeMaxYear: function () {
            let length = this.minYear.toString().length - 2
            return Number(this.years.toString().slice(0, length) + '99')
        }
    },
    watch: {
        '$parent.component': function (value) {
            if (value !== 'year') {
                this.years = Number(this.year.toString().slice(0, this.year.toString().length - 1) + '0')
            }
        }
    }
}
</script>