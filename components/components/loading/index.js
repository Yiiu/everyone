import loading from './loading'

const install = (Vue) => {
    let instance

    let LoadingCtr = Vue.extend(loading)

    let Loading = function () {}

    instance = new LoadingCtr()

    instance.vm = instance.$mount()

    document.body.appendChild(instance.vm.$el)

    Loading.open = () => {
        instance.open()
    }

    Loading.success = () => {
        instance.success()
    }
    Loading.err = () => {
        instance.err()
    }
    Vue.prototype.$loading = Loading
}
export default {
    install,
    loading
}
