import Dialog from "./components/dialog.vue"
import ModalLayout from "./components/modal-layout.vue"
import ModalStack from "./components/modal-stack.vue"

const defaultConfig = {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  buttonClassName: 'btn btn-secondary',
  primaryButtonClassName: 'btn btn-primary',
  backdropTransitionName: 'ModalStack__backdrop',
  modalTransitionName: 'ModalStack__modal'
}

const LastModal = {
  install(Vue, config = {}) {
    if (this.installed) {
      return
    }

    config = Object.assign({}, defaultConfig, config)

    this.installed = true
    this.bus = new Vue()

    Vue.component(ModalLayout.name, ModalLayout)

    const initModalStackContainer = (parent) => {
      if (!this.container) {
        this.container = document.createElement('div')
        document.body.appendChild(this.container)

        new Vue({
          parent,
          render: h => h(ModalStack, { props: { config } })
        }).$mount(this.container)
      }

      return this.container
    }

    Vue.prototype.$modal = function(component, props = {}, inline = false) {
      initModalStackContainer(this.$root)

      return new Promise(resolve => {
        LastModal.bus.$emit("open", {
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

// Auto-install
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
