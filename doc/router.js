import Vue from 'vue'
import Router from 'vue-router'

import index from './view/index'
import font from './view/font.md'
import color from './view/color.md'

import button from './md/button.md'
import modal from './md/modal.md'
import notification from './md/notification.md'
import alert from './md/alert.md'
import message from './md/message.md'
import loading from './md/loading.md'
import radio from './md/radio.md'
import checkbox from './md/checkbox.md'
import tooltips from './md/tooltips.md'
import popover from './md/popover.md'
import dropdown from './md/dropdown.md'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          component: index
        },
        {
          path: '/font',
          component: font
        },
        {
          path: '/color',
          component: color
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
        },
        {
          path: '/checkbox',
          component: checkbox
        },
        {
          path: '/tooltips',
          component: tooltips
        },
        {
          path: '/dropdown',
          component: dropdown
        },
        {
          path: '/popover',
          component: popover
        }
    ]
})
