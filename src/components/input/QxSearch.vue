<template>
  <div class="bg-grey-2 round-7 overflow-hidden pl-10">
    <q-input
      @input="emit"
      borderless
      placeholder="Pesquisar"
      dense
      :debounce="debounce"
      v-model="model"
    />
  </div>
</template>

<script>
export default {
  name: 'QxSearch',

  props: {
    debounce: {
      type: Number,
      default: 1000
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

<style lang="scss" scoped>
.q-field--focused {
  background: transparent !important;
}
</style>
