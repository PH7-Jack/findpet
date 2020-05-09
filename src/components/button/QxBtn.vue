<template>
  <div>
    <q-btn
      class="round-38 full-width qx-shadow"
      color="primary"
      :label="label"
    />
  </div>
</template>

<script>
export default {
  name: 'QxBtn',

  props: {
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
