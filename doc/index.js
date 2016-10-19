import Vue from 'vue'
import App from './App'
import router from './router.js'

import commonent from '../components'
import Coding from "./components/coding"


Vue.use(commonent)

Vue.component(Coding.name, Coding)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
