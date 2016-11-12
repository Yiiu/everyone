<template>
	<div id="app">
        <navs></navs>
		<div class="main">
			<left-nav></left-nav>
			<div class="container md">
				<transition name="opacity" mode="out-in">
				<router-view></router-view>
				</tranisition>
			</div>
		</div>
	</div>
</template>
<script>
import navs from "./components/nav"
import leftNav from "./components/leftNav"
export default {
    components:{
        navs,
		leftNav
    }
}
</script>
<style lang="less">
@import "../components/style/init";
ol,ul {list-style: none;}
html {
}
body {
    margin: 0;
    padding: 0;
    background: #ececec;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft Yahei", "WenQuanYi Micro Hei", "\5FAE\8F6F\96C5\9ED1", Arial, Verdana, sans-serif !important;
    overflow-y: scroll;
}
.main {
	margin: 0 auto;
	width: 90%;
	background: #fff;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
    margin-bottom: 32px;
	.container {
		width: 75%;
		padding: 22px 42px;
		box-sizing: border-box;
        border-left: 1px #e9e9e9 solid;
	}
}
.md {
	span.data {
		background: #e9e9e9;
		padding: 2px 6px;
		border-radius: 4px;
		margin-left: 22px;
	}
}
@media screen and (max-width:768px) {
	.main {
		flex-direction: column;
		width: 100%;
		border-radius: 0;
		.container {
			width: 100%;
		}
	}

}
</style>
