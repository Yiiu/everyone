import Vue from 'vue'
import Router from 'vue-router'

import button from './md/button.md'
import modal from './md/modal.md'
import notification from './md/notification.md'
import alert from './md/alert.md'
import message from './md/message.md'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
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
          path: '/message',
          component: message
        }
    ]
})
