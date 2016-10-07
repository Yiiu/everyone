import Modal from "./components/modal"
import Notification from "./components/notification"
import Message from "./components/message"
import loading from "./components/loading"


import Alert from "./components/alert"
import Button from "./components/button"

const install = (Vue) => {
    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)

    Vue.prototype.$notify = Notification
    Vue.prototype.$modal = Modal
    Vue.prototype.$message = Message
    Vue.prototype.$loading = loading
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
    install,
    Alert,
    Modal,
    Button,
    Message
}