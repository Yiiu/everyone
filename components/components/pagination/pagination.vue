<template>
    <ul class="y-pagination">

        <li 
            class="prev page" 
            :class="{disabled: current === 1}" 
            @click="onPagerPrev"
        >
            <y-svg type="v" :width="14"></y-svg>
        </li>

        <li 
            class="dd page" 
            @mouseenter="hoverddOn('prev')" 
            @mouseleave="hoverddClose('prev')" 
            v-if="pageCount > 1"
        >
            <y-svg 
                type="more" 
                :width="16" 
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
        >{{i}}</li>

        <li class="dd page" 
            @mouseover="hoverddOn('next')" 
            @mouseout="hoverddClose('next')" 
            v-if="pageCount !== pageAll"
        >
            <y-svg 
                type="more" 
                :width="16" 
                v-if="!hoverddnext"
            ></y-svg>
            <y-svg 
            type="vv" 
                :width="14" 
                v-else 
                class="next"
            ></y-svg>
        </li>

        <li class="next page" 
            :class="{disabled: current === total}" 
            @click="onPagerNext"
        >
            <y-svg 
                type="v" 
                :width="14"
            ></y-svg>
            
        </li>
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
            current: this.defaultCurrent
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
        onPagerClick (e) {
            this.current = e
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
            if (value === this.total) {
                return
            } else {
                let valueCount = value / this.pageSize
                if (valueCount % 1) {
                    console.log(0)
                } else {
                    this.pageCount = valueCount + 1
                }
            }
        }
    },
    computed: {
        pageArr: function () {
            let pages = []
            let num = 0
            for (let i = this.pageSize * (this.pageCount - 1) + 1; i <= this.pageCount * this.pageSize; i++) {
                pages[num] = i
                num++
            }
            return pages
        },
        pageAll: function () {
            return Math.ceil(this.total / this.pageSize)
        }
    }
}
</script>
<style lang="less">
.y-pagination {
    display: flex;
    li {
        cursor: pointer;
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-style: solid;
        border-width: 1px;
        border-color: #d9d9d9;
        margin-right: 6px;
        border-radius: 4px;
        font-size: 14px;
        transition: all .3s;
        user-select:none;
        &:hover {
            border-color: #108ee9;
            color: #108ee9;
            svg {
                path {
                    fill: #108ee9;
                }
            }
        }
        &.disabled {
            cursor: not-allowed;
            border-color: lighten(#d9d9d9, 3%);
            color: lighten(#d9d9d9, 3%);
            svg {
                path {
                    fill: lighten(#d9d9d9, 3%);
                }
            }
        }
        &.prev {
            svg {
                transform: rotateZ(90deg);
            }
        }
        &.next {
            svg {
                transform: rotateZ(-90deg);
            }
        }
        &.dd {
            transition: none;
            border: none;
            svg {
                path {
                    fill: #d9d9d9;
                }
            }
            .next {
                transform: rotateZ(-180deg);
            }
            .prev {
                transform: rotateZ(0deg);
            }
        }
        &.page {
            display: flex;
            algin-item: center;
            justify-content: center;
        }
        &.active {
            background: #108ee9;
            border-color: #108ee9;
            color: #fff;
        }
    }
}
</style>