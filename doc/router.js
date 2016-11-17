import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['./view/index'], resolve)
const font = resolve => require(['./view/font.md'], resolve)
const color = resolve => require(['./view/color.md'], resolve)

const button = resolve => require(['./md/button.md'], resolve)
const modal = resolve => require(['./md/modal.md'], resolve)
const notification = resolve => require(['./md/notification.md'], resolve)
const alert = resolve => require(['./md/alert.md'], resolve)
const message = resolve => require(['./md/message.md'], resolve)
const loading = resolve => require(['./md/loading.md'], resolve)
const radio = resolve => require(['./md/radio.md'], resolve)
const checkbox = resolve => require(['./md/checkbox.md'], resolve)
const tooltips = resolve => require(['./md/tooltips.md'], resolve)
const popover = resolve => require(['./md/popover.md'], resolve)
const popconfirm = resolve => require(['./md/popconfirm.md'], resolve)
const dropdown = resolve => require(['./md/dropdown.md'], resolve)
const dialog = resolve => require(['./md/dialog.md'], resolve)
const editor = resolve => require(['./md/editor.md'], resolve)
const preview = resolve => require(['./md/preview.md'], resolve)
const select = resolve => require(['./md/select.md'], resolve)
const tag = resolve => require(['./md/tag.md'], resolve)



Vue.use(Router)

let router = new Router({
    mode: 'hash',
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
          path: '/popover',
          component: popover
        },
        {
          path: '/popconfirm',
          component: popconfirm
        },
        {
          path: '/dropdown',
          component: dropdown
        },
        {
          path: '/dialog',
          component: dialog
        },
        {
          path: '/editor',
          component: editor
        },
        {
          path: '/preview',
          component: preview
        },
        {
          path: '/select',
          component: select
        },
        {
          path: '/tag',
          component: tag
        }
    ],
})

router.beforeEach((to, from, next) => {

	Vue.prototype.$loading.open()

	next()
})
router.afterEach(route => {

	Vue.prototype.$loading.success()

})
export default router
