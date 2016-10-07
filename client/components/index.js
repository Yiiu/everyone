import Modal from "./modal"
import Notification from "./notification"
import Message from "./message"


import Alert from "./alert"
import Button from "./button"

const install = (Vue) => {
    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)
    Vue.prototype.$notify = Notification
    Vue.prototype.$modal = Modal
    Vue.prototype.$message = Message
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