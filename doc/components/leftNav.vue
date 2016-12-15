<template>
    <div class="left-nav">
        <ul class="menu">
            <li v-for="data in components">
                <router-link :to="data.path" exact>{{data.name}}</router-link>
                <div class="child" v-if="data.child !== ''">
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
import nav from '../nav.config.json'
console.log(nav)
export default {
    data () {
        return {
            components: nav.leftnav
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
    a.router-link-active {
        color: #47b8e0;
        background: #eaf8fe;
        position: relative;
        &:before {
            content: "";
            position: absolute;
            right: -1px;
            top: 0;
            width: 2px;
            height: 100%;
            background: #47b8e0;
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

@media screen and (max-width:768px) {
	.left-nav {
		width: 100%;
	}
    .left-nav a.router-link-active:before {
        right: 0;
    }
}
</style>
