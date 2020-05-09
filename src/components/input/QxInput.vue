<template>
  <div>
    <label @input="emit" class="text-grey-7 pl-5">{{ label }}</label>
    <q-input
      v-bind="$attrs"
      borderless
      class="bg-white round-9 qx-shadow custom-input"
      v-model="model"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'QxInput',

  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      model: ''
    }
  },
  methods: {
    emit () {
      this.$emit('input', this.model)
    }
  }
}
</script>

<style lang="scss">
.custom-input {
  padding-left: 15px;
}
.q-placeholder {
  color: $grey-5;
}
</style>
