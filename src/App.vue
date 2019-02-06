<template>
  <div id="app">
    <div class="container">
    <div class="py-3 mt-3 mb-5 border-bottom">
      <h1>Last Modal</h1>
    </div>

    <button class="btn btn-secondary" @click="open()">
      Open
    </button>

    <button class="btn btn-secondary" @click="openPlain()">
      Open plain
    </button>

    <button class="btn btn-secondary" @click="alert()">
      Alert
    </button>

    <button class="btn btn-secondary" @click="confirm()">
      Confirm
    </button>

    <button class="btn btn-secondary" @click="openScrollable()">
      Open scrollable
    </button>
  </div>

  <modal-stack />
  </div>
</template>

<script>
const MyModal = {
  template: `
    <modal-layout>
      Hello there!
    </modal-layout>
  `
}

export default {
  methods: {
    open() {
      this.$modal(MyModal)
    },

    alert() {
      this.$alert({title: 'Alert!', message: 'Now panic and freak out!'})
    },

    confirm() {
      this.$confirm('Do you want to confirm?')
    },

    openPlain() {
      this.$modal({
        template: `
          <modal-layout plain width="auto" hide-closer>
            Content with no paddings
          </modal-layout>
        `
      })
    },

    openScrollable() {
      this.$modal({
        template: `
          <modal-layout title="A modal with scrollable text" width="850" scroll closer>
            <span v-for="i in Array.from({length: 30})" :key="i">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </modal-layout>
        `
      })
    }
  }
};
</script>

<style lang="postcss" scoped>
  .btn + .btn {
    margin-left: .5rem;
  }
</style>

