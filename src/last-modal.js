import Dialog from "./components/dialog.vue"
import ModalLayout from "./components/modal-layout.vue"
import ModalStack from "./components/modal-stack.vue"

const defaultConfig = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  buttonClassName: 'btn btn-secondary',
  primaryButtonClassName: 'btn btn-primary'
}

const LastModal = {
  install(Vue, config = {}) {
    let sequence = 0

    config = Object.assign({}, defaultConfig, config)

    Vue.component(ModalStack.name, ModalStack)
    Vue.component(ModalLayout.name, ModalLayout)

    Vue.prototype.$modal = function(component, props = {}, inline = false) {
      return new Promise(resolve => {
        this.$root.$emit("lastModal.open", {
            id: ++sequence,
            component,
            props,
            resolve,
            inline
        })
      });
    };

    Vue.prototype.$dialog = function({title, message, buttons}) {
      return this.$modal(Dialog, {
        title, message, buttons
      })
    }

    Vue.prototype.$alert = function(options) {
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }

      return this.$dialog({
        title: options.title,
        message: options.message,
        buttons: [
          {
            className: config.buttonClassName,
            label: options.confirmLabel || config.confirmLabel
          }
        ]
      })
    }

    Vue.prototype.$confirm = function(options) {
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }

      return this.$dialog({
        title: options.title,
        message: options.message,
        buttons: [
          {
            className: config.buttonClassName,
            label: options.cancelLabel || config.cancelLabel,
            value: false
          },
          {
            className: config.primaryButtonClassName,
            label: options.confirmLabel || config.confirmLabel,
            value: true
          }
        ]
      })
    }
  }
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;

if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(LastModal);
}

export default LastModal
