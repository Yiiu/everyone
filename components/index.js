import Modal from "./components/modal"
import Notification from "./components/notification"
import Message from "./components/message"
import loading from "./components/loading"


import Alert from "./components/alert"
import Button from "./components/button"
import Radio from "./components/radio"
import RadioGroup from "./components/radio-group"
import RadioButton from "./components/radio-button"
import Checkbox from "./components/checkbox"

const install = (Vue) => {
    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(Checkbox.name, Checkbox)

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