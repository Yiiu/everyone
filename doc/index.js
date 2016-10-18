import Vue from 'vue'
import App from './App'
import router from './router.js'

import commonent from 'mint-ui'

import Coding from "./components/coding"


Vue.use(commonent)

Vue.component(Coding.name, Coding)

Vue.directive('scoped',{
	bind:function(el, binding, vnode){
	}
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
