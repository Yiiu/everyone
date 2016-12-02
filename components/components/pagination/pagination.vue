<template>
    <ul class="y-pagination" :class="{simple:simple}" :title="`${current} / ${total}`">
        <template v-if="!simple">
            <li 
                class="prev page" 
                :class="{disabled: current === 1}" 
                @click="onPagerPrev"
                :title="1"
            >
                <y-svg type="v" :width="14"></y-svg>
            </li>

            <li
                @click="onPagerClick(1)"
                v-if="pageMin"
            >1</li>

            <li 
                class="dd page" 
                @mouseenter="hoverddOn('prev')" 
                @mouseleave="hoverddClose('prev')" 
                v-if="pageMin"
                @click="onPagerClick(current-5)"
            >
                <y-svg 
                    type="more" 
                    :width="18" 
                    v-if="!hoverddprev"
                ></y-svg>
                <y-svg 
                    type="vv" 
                    :width="14" 
                    v-else class="prev"
                ></y-svg>
            </li>

            <li
                v-for="i in pageArr" 
                :class="{active: i === current}" 
                @click="onPagerClick(i)"
                :key="i"
                :title="i"
            >{{i}}</li>

            <li class="dd page" 
                @mouseover="hoverddOn('next')" 
                @mouseout="hoverddClose('next')" 
                @click="onPagerClick(current+5)"
                v-if="pageMax"
            >
                <y-svg 
                    type="more" 
                    :width="18" 
                    v-if="!hoverddnext"
                ></y-svg>
                <y-svg 
                type="vv" 
                    :width="14" 
                    v-else 
                    class="next"
                ></y-svg>
            </li>

            <li
                @click="onPagerClick(total)"
                v-if="pageMax"
                :title="total"
            >{{total}}</li>

            <li class="next page" 
                :class="{disabled: current === total}" 
                @click="onPagerNext"
            >
                <y-svg 
                    type="v" 
                    :width="14"
                ></y-svg>
                
            </li>
            <div class="y-pagination-options">
                <div class="y-pagination-jumper" v-if="showQuickJumper">
                    Goto
                    <input type="" name="" v-model="pages" @keyup.enter="onJumper">
                </div>
            </div>
        </template>
        <template v-else>
            <li 
                class="prev page" 
                :class="{disabled: current === 1}" 
                @click="onPagerPrev"
                :title="1"
            >
                <y-svg type="v" :width="14"></y-svg>
            </li>
            <div class="y-pagination-options">
                <div class="y-pagination-jumper">
                    <input type="" name="" v-model="pages" @keyup.enter="onJumper">
                </div>
            </div>
            <span class="y-pagination-slash">/</span>
            {{total}}
            <li
                @click="onPagerClick(total)"
                v-if="pageMax"
                :title="total"
            >{{total}}</li>

            <li class="next page" 
                :class="{disabled: current === total}" 
                @click="onPagerNext"
            >
                <y-svg 
                    type="v" 
                    :width="14"
                ></y-svg>
                
            </li>
        </template>
    </ul>
</template>
<script>
export default {
    name: 'y-pagination',
    data () {
        return {
            data: '',
            hoverddprev: false,
            hoverddnext: false,
            pageCount: 1,
            current: this.defaultCurrent,
            pages: this.defaultCurrent
        }
    },
    props: {
        total: {
            type: Number,
            default: 1
        },
        defaultCurrent: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 5
        },
        showQuickJumper: {
            type: Boolean,
            default: false
        },
        simple: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hoverddOn (e) {
            if (e === 'prev') {
                this.hoverddprev = true
            } else {
                this.hoverddnext = true
            }
        },
        hoverddClose (e) {
            if (e === 'prev') {
                this.hoverddprev = false
            } else {
                this.hoverddnext = false
            }
        },
        onJumper () {
            let result = /\d+/g
            if (result.test(this.pages)) {
                this.pages = parseInt(this.pages)
            } else {
                this.pages = 1
            }
            this.onPagerClick(this.pages)
        },
        onPagerClick (e) {
            if (e > this.total) {
                this.current = this.total
            } else if (e < 1) {
                this.current = 1
            } else {
                this.current = e
            }
        },
        onPagerPrev () {
            if (this.current > 1) {
                this.current--
            } else {
                return
            }
        },
        onPagerNext () {
            if (this.current < this.total) {
                this.current++
            } else {
                return
            }
        }
    },
    watch: {
        'current': function (value) {
            let valueCount = value / this.pageSize
            this.pageCount = Math.ceil(valueCount)
            if (this.pageAll !== 1) {
                if (this.current === this.pageSize) {
                    this.pageCount++
                }
            }
            this.$emit('current-change', value)
            this.pages = this.current
        },
        'pages': function (value, oldValue) {
            const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
            if ((!isNaN(value) && reg.test(value)) || value === null || value === '') {
                this.pages = value
            } else {
                this.pages = oldValue
                // this.pages = oldValue
            }
        }
    },
    computed: {
        pageArr: function () {
            let pages = []
            let num = 0
            for (let i = this.pageLeft; i <= this.pageRight; i++) {
                pages[num] = i
                num++
            }
            return pages
        },
        pageAll: function () {
            return Math.ceil(this.total / this.pageSize)
        },
        pageLeft: function () {
            let ban = parseInt(this.pageSize / 2)
            if (this.pageAll > 1) {
                if (this.pageCount === 1) {
                    return 1
                } else {
                    if (this.current + ban >= this.total) {
                        return this.total - 5
                    } else {
                        return this.current - ban
                    }
                }
            } else {
                return 1
            }
        },
        pageRight: function () {
            let ban = parseInt(this.pageSize / 2)
            if (this.pageAll > 1) {
                if (this.pageCount === 1) {
                    return this.pageSize
                } else {
                    if (this.current + ban >= this.total) {
                        return this.total
                    } else {
                        return this.current + ban
                    }
                }
            } else {
                return this.pageSize
            }
        },
        pageMin: function () {
            if (this.pageCount === 1) {
                return false
            } else {
                return true
            }
        },
        pageMax: function () {
            let ban = parseInt(this.pageSize / 2)
            if (this.pageAll > 1) {
                if (this.current + ban >= this.total) {
                    return false
                } else {
                    return true
                }
            } else {
                return false
            }
        }
    }
}
</script>
<style lang="less">
@import "./pagination";
</style>