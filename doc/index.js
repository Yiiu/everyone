import Vue from 'vue'
import App from './App'
import router from './router.js'

import commonent from 'everyone/dist/everyone.js'
require("everyone/dist/everyone.css")
import Coding from "./components/coding"


Vue.use(commonent)

Vue.component(Coding.name, Coding)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
