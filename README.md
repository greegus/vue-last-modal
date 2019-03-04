
# Last Modal
Minimalistic promise-based, programmatically-open, stackable and responsive component modals.

## Installation
Install the package

`yarn add vue-last-modal`

And add use it in your app's main file

```javascript
import Vue from Vue
import LastModal from 'vue-last-modal'

Vue.use(LastModal, options)
```
### Options
- `cancelLabel` (String) - Used in dialogs. Cancel button label. Default: `Cancel`
- `confirmLabel` (String) - Used in dialogs. Submit button label. Default: `OK`
- `buttonClassName` (String) - Used in dialogs. Generated button style class. Default: `btn btn-secondary`
- `primaryButtonClassName` (String) - Used in dialogs. Generated primary button style class. Default: `btn btn-primary`
- `backdropTransitionName` (String) - Name of a transition used by a `<transition>` component wrapping backdrop element
- `modalTransitionName` (String) - Name of a transition used by a `<transition>` component wrapping every open modal element.


## Opening a custom modal
You can open your modal component, and provide it with custom props, by calling `_vm.$modal(component[, options])` within your App context.

```javascript
import ReleaseTheKrakenModal from './ReleaseTheKrakenModal.vue'

export default {
  methods: {
    async releaseTheKraken() {
      const hasKrakenBeenReleased = await this.$modal(ReleaseTheKrakenModal, {
        krakenName: 'Booboo'
      })

      if (hasKrakenBeenReleased) {
        console.log('The Kraken has been released!')
      }
    }
  }
}
```
Your modal component then needs to be wrapped by provided `modal-layout` component, that provides the basic functionality and template for your layout.

```jsx
// ReleaseTheKrakenModal.vue

<template>
  <modal-layout title="Kraken releaser">
    Should the mighty Kraken, named {{ krakenName }}, be released?

    <template slot="footer">
      <button @click="cancel()">Nay!</button>
      <button @click="submit()">Aye!</button>
    </template>
  </modal-layout>
</template>

<script>
export default {
  props: {
    krakenName: String
  },
  methods: {
    cancel() {
      this.$emit('close', false)
    },
    submit() {
      this.$emit('close', true)
    }
  }
}
</script>
```
You can then close the modal by emitting the `close` event, with `$event` object as the **return value** of your modal. The default return value is `undefined`.

## `<modal-layout>` component
This component provides basic functionality and template for your modals.

### Props
- `title` (String) - The title of the modal. Override by `header` slot, if specified. Default: `undefined`.
- `width` (Number) - (Maximum) width of the the modal.
- `scroll` (Boolean) - If present, the maximum height of the modal would be the height of current viewport and content would become scrollable. `header` (title) and `footer` slots are kept static.
- `hide-close` (Boolean) - If present, modal-closing cross icon won't be visible.
- `plain` (Boolean) - If present, no default styles are applied for the modals content.

### Events
- `before-close` - If present, this event is fired when closing. A callback method `close` is provided as an `$event` object and the modal won't be closed util it is called. This could be used for handling validations and waiting for some async events to be completed before closing, etc.
```jsx
<template>
  <modal-layout @before-close="waitForSomePromise">
    ...
  </modal-layout>
</template>

<script>
export default {
  methods: {
    waitForSomePromise(close) {
      this.somePromise.then(close)
    }
  }
}
</script>
```

### Template slots
- `default` - Default content is rendered without any styling.
- `header` - Custom header of the template. This overrides `title` prop.
- `content` - Main content of the modal
- `footer` - Footer of the modal, suitable for placing some buttons.

# Opening a dialog
As a shorthand for opening a simple confirmation modal, you can use build-in component opened by calling `_vm.$dialog(options)` within your App's context. Here is an full example:

```javascript
export default {
  methods:  {
    async releaseTheKraken()  {
      const hasKrakenBeenReleased = await this.$dialog({
        title: 'Kraken Releaser',
        message: 'Should the mighty Kraken, named BooBoo, be released?',
        buttons: [
          {
            label: 'Ney!',
            value: false,
            className: 'btn btn-secondary'
          },
          {
            label: 'Aye!'
            value: true,
            className: 'btn btn-primary'
          }
        ]
      })

      // ...
    }
  }
}
```

### Options
- `title` (String) - Title of the dialog. Default: `undefined`.
- `message` (String) - Text content of the dialog. Default: `undefined`.
- `buttons` (Array) - An array of button options, by which the dialog's buttons are rendered. Button options are:
  - `label` (String) - Label of the button.
  - `value` (Mixed) - Returning value of a dialog after clicking the button.
  - `className` (String) - Style class name applyed to this button.
