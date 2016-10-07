import alert from "./alert"

alert.install = function(Vue) {
    Vue.component(alert.name, alert)
}

export default alert