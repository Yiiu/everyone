import modal from './modal.vue'

const install = (Vue) => {
    let instance

    let ModalCtr = Vue.extend(modal)

    function type (options, types) {
        instance = new ModalCtr()

        options.type = 'alert'
        options.icon = types

        for (let i in options) {
            instance[i] = options[i]
        }

        instance.vm = instance.$mount()

        document.body.appendChild(instance.vm.$el)

        instance.show = true
    }

    let Modal = {
        info (options) {
            type(options, 'info')
        },
        success (options) {
            type(options, 'checkmark')
        },
        error (options) {
            type(options, 'close')
        },
        warning (options) {
            type(options, 'help')
        }
    }
    let confirm = (options) => {
        options.type = 'confirm'
        instance = new ModalCtr()

        for (let i in options) {
            instance[i] = options[i]
        }

        instance.global = true

        instance.vm = instance.$mount()

        document.body.appendChild(instance.vm.$el)

        instance.show = true
    }
    Vue.prototype.$confirm = confirm
    Vue.prototype.$modal = Modal
}

export default {
    install,
    modal
}
