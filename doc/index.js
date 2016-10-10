import Vue from 'vue'
import App from './App'
import router from './router.js'

import commonent from '../components/'

Vue.use(commonent)



const app = new Vue({
    router,
    ...App
}).$mount('#app')

