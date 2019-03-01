<template>
    <div class="ModalStack">
      <transition name="backdrop">
        <div class="ModalStack__backdrop" v-if="modals.length"/>
      </transition>

      <transition-group name="modal">
        <div v-for="modal in modals" class="ModalStack__modalWrapper" :key="modal.id" @click="closeByBackdropClick($event, modal)">
          <component
            class="ModalStack__modal"
            v-bind="modal.props"
            :is="modal.component"
            :class="{isTop: topModal.id === modal.id}"
            :ref="`modal_${modal.id}`"
            @close="close(modal, $event)"
          />
        </div>
      </transition-group>
    </div>
</template>

<script>
import LastModal from '../last-modal'

export default {
  name: "modal-stack",

  data() {
    return {
      sequence: 1,
      modals: []
    }
  },

  computed: {
    topModal() {
      return this.modals.length ? this.modals[this.modals.length - 1] : null
    }
  },

  methods: {
    open(modal) {
      document.activeElement && document.activeElement.blur()

      this.modals.push({
        ...modal, id: this.sequence++
      })
    },

    close(modal, result = undefined) {
      if (!this.modals.find(({id}) => id === modal.id)) {
        return
      }

      const closingRoutine = () => {
        this.modals = this.modals.filter(({id}) => id !== modal.id)
        modal.resolve(result)
      }

      const modalInstance = this._getModalInstance(modal)

      if ('before-close' in modalInstance.$listeners) {
        modalInstance.$emit('before-close', closingRoutine)
      } else {
        closingRoutine()
      }
    },

    closeTop() {
      this.close(this.topModal)
    },

    closeByEscKey(e) {
      if (this.topModal && e.key === "Escape" && !e.defaultPrevented) {
        e.preventDefault()
        this.closeTop()
      }
    },

    closeByBackdropClick(e, modal) {
      if (e.target === e.currentTarget) {
        this.close(modal)
      }
    },

    _getModalInstance(modal) {
      return this.$refs[`modal_${modal.id}`][0].$children[0]
    }
  },

  mounted() {
    document.body.appendChild(this.$el)
    document.addEventListener("keydown", this.closeByEscKey)

    LastModal.bus.$on("open", this.open)
    LastModal.bus.$on("close", this.close)
    LastModal.bus.$on("closeTop", this.closeTop)
  },

  destroyed() {
    document.body.removeChild(this.$el)
    document.removeEventListener("keydown", this.closeByEscKey)

    LastModal.bus.$off("open", this.open)
    LastModal.bus.$off("close", this.close)
    LastModal.bus.$off("closeTop", this.closeTop)
  }
}
</script>

<style lang="postcss" scoped>
.ModalStack {
  position: fixed;
  z-index: 1050;
}

.ModalStack__backdrop {
  background: rgba(0, 0, 0, 0.35);

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ModalStack__modalWrapper {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1.5rem;

  overflow: auto;
}

.ModalStack__modalScroller {
  overflow: auto;
  position: relative;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  width: 100%;
}

.ModalStack__modal {
  transition: filter .15s;

  &:not(.isTop) {
    filter: brightness(80%);
  }
}

/* animations */

.ModalStack__modal-enter-active,
.ModalStack__modal-leave-active {
  transition: opacity 0.25s;
}

.ModalStack__modal-enter,
.ModalStack__modal-leave-to {
  opacity: 0;
}

.ModalStack__backdrop-enter-active,
.ModalStack__backdrop-leave-active {
  transition: opacity 0.25s;
}

.ModalStack__backdrop-enter,
.ModalStack__backdrop-leave-to {
  opacity: 0;
}
</style>
