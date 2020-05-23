<template>
  <q-btn
    v-bind="$attrs"
    :class="{ 'qx-shadow': shadow, 'overflow-hidden': !shadow }"
    class="round-38 full-width"
    :color="color"
  >
    <img
      v-if="dog"
      class="absolute"
      style="left: -2px; bottom: -1px; width: 30px"
      src="statics/images/dog-head.png"
    />
    {{ label }}
  </q-btn>
</template>

<script>
export default {
  name: 'QxBtn',

  props: {
    label: {
      type: String,
      default: 'Button'
    },
    dog: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
