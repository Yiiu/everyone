import Modal from "./modal"
import global from "./global"


import Alert from "./alert"
import Button from "./button"

const install = (Vue) => {
    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)
    Vue.use(global, {
        Modal:true
    })
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
    install,
    Alert,
    Modal,
    Button
}