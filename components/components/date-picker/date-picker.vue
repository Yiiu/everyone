<template>
    <span>
        <span ref="slot">
            <y-input></y-input>
        </span>
        <transition @before-enter="enter">
            <div ref="pop" class="y-date-picker-container" v-show="show">
                <div class="y-date-picker">
                    <div class="y-date-picker-input-wrap">
                        <input placeholder="Select date">
                    </div>
                    <div class="y-date-picker-panel">
                        <div class="y-date-picker-header">
                            <span class="y-date-picker-prev-year-btn y-date-picker-btn"><y-svg type="vv" :width="12"></y-svg></span>
                            <span class="y-date-picker-prev-month-btn y-date-picker-btn"><y-svg type="v" :width="12"></y-svg></span>
                            <span>
                                <a>{{monthText[oneMonth]}}</a>
                                <a>{{oneYear}}</a>
                            </span>
                            <span class="y-date-picker-next-month-btn y-date-picker-btn"><y-svg type="vv" :width="12"></y-svg></span>
                            <span class="y-date-picker-next-year-btn y-date-picker-btn"><y-svg type="v" :width="12"></y-svg></span>
                        </div>
                        <div class="y-date-picker-body">
                            <table class="y-date-picker-table">
                                <thead>
                                    <tr>
                                        <th v-for="day in dayText">
                                            {{day}}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in 6"></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </span>
</template>
<script>
import mixin from '../minxins/popover'
export default {
    mixins: [mixin],
    name: 'y-date-picker',
    props: {
        en: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            oneYear: new Date().getFullYear(),
            oneDay: new Date().getDay(),
            oneMonth: new Date().getMonth(),
            oneDate: new Date().getDate(),
            dayText: this.en ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['日', '一', '二', '三', '四', '五', '六'],
            monthText: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    },
    methods: {
        // 获取月份的第一天和最后一天
        getDate (y, m) {
            return [1, new Date(y, m, 0).getDate()]
        }
    },
    computed: {
        myDate: function () {
            let m = this.getDate(this.oneYear, this.oneMonth + 1)
            let date = []
            for (let i = 1; i <= m[1]; i++) {
                date.push(i)
            }
            return date
        }
    }
}
</script>
<style lang="less">
@import "date-picker";
</style>