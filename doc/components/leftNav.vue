<template>
    <div class="left-nav">
        <ul class="menu">
            <li v-for="data in components">
                <router-link :to="data.path">{{data.name}}</router-link>
                <div class="child" v-if="data.path == ''">
                    <ul v-for="child in data.child">
                        <div class="title">
                            {{child.title}}
                        </div>
                        <li v-for="component in child.components">
                            <router-link :to="component.path">
                                {{component.name}}
                                <span class="cn">{{component.cn}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    {{a}}
</template>
<script>
let a = [
    {
        name:"首页",
        path:"/"
    },
    {
        name:"颜色",
        path:"/color"
    },
    {
        name:"字体",
        path:"/font",
    },
    {
        name:"Components",
        path:"",
        child:[
            {
                title:"Basic",
                components:[
                    {
                        name:"Button",
                        cn:"按钮",
                        path:"/button"
                    }
                ]
            },
            {
                title:"Form Controls",
                components:[
                    {
                        name:"Checkbox",
                        cn:"多选框",
                        path:"/checkbox"
                    },
                    {
                        name:"Radio",
                        cn:"单选框",
                        path:"/radio"
                    }
                ]
            },
            {
                title:"Views",
                components:[
                    {
                        name:"Alert",
                        cn:"警告提示",
                        path:"/alert"
                    },
                    {
                        name:"Dropdown",
                        cn:"下拉菜单",
                        path:"/dropdown"
                    },
                    {
                        name:"Message",
                        cn:"全局提醒",
                        path:"/message"
                    },
                    {
                        name:"Modal",
                        cn:"对话框",
                        path:"/modal"
                    },
                    {
                        name:"Notification",
                        cn:"通知提醒框",
                        path:"/notification"
                    },
                    {
                        name:"Popconfirm",
                        cn:"气泡确认框",
                        path:"/popconfirm"
                    },
                    {
                        name:"Popover",
                        cn:"气泡卡片",
                        path:"/popover"
                    },
                    {
                        name:"Tooltip",
                        cn:"文字提醒",
                        path:"/tooltips"
                    }
                ]
            },
            {
                title:"Other",
                components:[
                    {
                        name:"Loading",
                        cn:"加载条",
                        path:"/loading"
                    }
                ]
            }
        ]
    }
]
export default {
    data(){
        return {
            components:a,
        }
    }
}
</script>
<style lang="less">
.left-nav {
    width: 15%;
    min-width: 230px;
    padding: 12px 0;
    .left-nav-title {
        p.title {
            padding: 22px 0;
            padding-left: 22px;
            margin: 0
        }
    }
    ul {
        margin: 0;
        li {
            margin: 0;
            padding: 0;
            ul {
                .title {
                    margin-left: 40px;
                    font-size: 14px;
                    padding: 8px 0;
                    color: #99a9bf;
                }
                li {
                    a {
                        padding-left: 52px;
                        font-size: 14px;
                        .cn {
                            font-size: 10px;
                            color: #99a9bf;
                            margin-left: 6px;
                        }
                    }
                }
            }
            a {
                transition: .3s all;
                display: block;
                width: 100%;
                padding: 12px 32px;
                color: #666;
                text-decoration: none;
                &:hover {
                    background: #eaf8fe;
                }
                box-sizing: border-box;
            }
        }
    }
}
</style>
