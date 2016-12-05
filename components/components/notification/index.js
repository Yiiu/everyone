import notify from './notification.vue'

const install = (Vue) => {
    let NotifyCtr = Vue.extend(notify)

    let instance

    function info (options, type) {
        if (typeof options === 'string') {
            let title = options
            options = {}
            options.content = title
            options.type = type
        } else {
            options.type = type
        }

        if (!options.time) {
            options.time = 0
        }

        Notification(options)
    }

    var Notification = (options) => {
        options = options || {}

        if (typeof options === 'string') {
            let title = options
            options = {}
            options.content = title
        }

        if (options.time === null) {
            options.time = 1000
        }

        if (!instance || instance.$data.data.length === 0) {
            instance = new NotifyCtr()
            instance.vm = instance.$mount()
            document.body.appendChild(instance.vm.$el)
            instance.dom = instance.vm.$el
            instance.ids = 0
            options.id = instance.ids
            instance.data.push(options)
        } else {
            instance.ids++
            options.id = instance.ids
            instance.data.push(options)
        }
    }

    Notification.success = (options) => {
        info(options, 'success')
    }
    Notification.info = (options) => {
        info(options, 'info')
    }
    Notification.warning = (options) => {
        info(options, 'warning')
    }
    Notification.danger = (options) => {
        info(options, 'danger')
    }

    Vue.prototype.$notify = Notification
}
export default {
    install,
    notify
}
