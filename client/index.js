import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './App'
import router from './router.js'
import store from './store'

import alert from './components/alert'

Vue.component(alert.name, alert)

sync(store, router)

const app = new Vue({
    router,
    store,
    ...App
}).$mount('#app')

export {app, router, store}
