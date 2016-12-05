import modal from './modal.vue'

const install = (Vue) => {
    let instance

    let ModalCtr = Vue.extend(modal)

    var Modal = (options) => {
        if (typeof options === 'string') {
            let content = options
            options = {}

            options.content = content

            options.backBtn = {
                'show': false
            }
        }

        instance = new ModalCtr({
            data: options
        })

        instance.vm = instance.$mount()

        document.body.appendChild(instance.vm.$el)

        instance.show = true

        return new Promise(function (resolve, reject) {
            instance.callback = function (value, is) {
                if (value === 'resolve') {
                    resolve(is)
                } else {
                    reject(is)
                }
            }
        })
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
