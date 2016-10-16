import Vue from 'vue'
import App from './App'
import router from './router.js'

import commonent from '../components/'

import Coding from "./components/coding"


Vue.use(commonent)

router.beforeEach((to, from, next) => {

	Vue.prototype.$loading.open()

	next()
})
router.afterEach(route => {

	Vue.prototype.$loading.success()

})

Vue.component(Coding.name, Coding)

Vue.directive('scoped',{
	bind:function(el, binding, vnode){
	}
});
const app = new Vue({
    router,
    ...App
}).$mount('#app')
