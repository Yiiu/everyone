import Notification from "./components/notification"
import Message from "./components/message"
import Loading from "./components/loading"


import Alert from "./components/alert"
import Button from "./components/button"
import Radio from "./components/radio"
import RadioGroup from "./components/radio-group"
import RadioButton from "./components/radio-button"
import Checkbox from "./components/checkbox"
import CheckboxGroup from "./components/checkbox-group"

import Modal from "./components/modal"
import Tooltips from "./components/tooltips"
import Popover from "./components/popover"
import Popconfirm from "./components/popconfirm"
import Dialog from "./components/dialog"
import Editor from "./components/editor"
import Preview from "./components/preview"

import Dropdown from "./components/dropdown"

// utils
// import click from "./components/utils/clickDel"

const install = (Vue) => {
    // Vue.use(click)

    Vue.use(Modal)
    Vue.use(Notification)
    Vue.use(Message)
    Vue.use(Loading)

    Vue.use(Preview)

    Vue.component(Alert.name, Alert)
    Vue.component(Button.name, Button)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Tooltips.name, Tooltips)
    Vue.component(Popover.name, Popover)
    Vue.component(Popconfirm.name, Popconfirm)
    Vue.component(Dropdown.name, Dropdown)
    Vue.component(Editor.name, Editor)
    Vue.component(Dialog.name, Dialog)

}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    install,
    Alert,
    Modal,
    Button,
    Message,
    Notification,
    Loading,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxGroup,
    Tooltips,
    Popover,
    Popconfirm,
    Dropdown
}
