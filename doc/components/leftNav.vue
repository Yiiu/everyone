<template>
    <div class="left-nav">
        <ul class="menu">
            <li><router-link to="/alert">alert</router-link></li>
            <li><router-link to="/alert">button</router-link></li>
            <li><router-link to="/alert">alert</router-link></li>
            <li><router-link to="/alert">button</router-link></li>
            <li><router-link to="/alert">alert</router-link></li>
            <li><router-link to="/alert">button</router-link></li>
            <li><router-link to="/alert">alert</router-link></li>
            <li><router-link to="/alert">button</router-link></li>
            <li><router-link to="/alert">alert</router-link></li>
            <li><router-link to="/alert">button</router-link></li>
        </ul>
    </div>
</template>
<style lang="less">
.left-nav {
    width: 15%;
    ul {
        margin: 0;
        padding: 22px 0;
        li {
            margin: 0;
            padding: 0;
            a {
                transition: .3s all;
                display: block;
                width: 100%;
                padding: 12px 22px;
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
