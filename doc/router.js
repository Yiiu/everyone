import Vue from 'vue'
import Router from 'vue-router'

import index from './components/index'

import button from './md/button.md'
import modal from './md/modal.md'
import notification from './md/notification.md'
import alert from './md/alert.md'
import message from './md/message.md'
import loading from './md/loading.md'
import radio from './md/radio.md'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
          path: '/',
          component: index
        },
        {
          path: '/button',
          component: button
        },
        {
          path: '/notification',
          component: notification
        },
        {
          path: '/modal',
          component: modal
        },
        {
          path: '/alert',
          component: alert
        },
        {
          path: '/loading',
          component: loading
        },
        {
          path: '/message',
          component: message
        },
        {
          path: '/radio',
          component: radio
        }
    ]
})
