<template>
  <div>
    <label @input="emit" class="text-grey-7 pl-5">{{ label }}</label>
    <q-input
      v-bind="$attrs"
      :type="isPwd ? 'password' : 'text'"
      borderless
      class="bg-white round-9 qx-shadow custom-input"
      v-model="model"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer mr-15"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'QxInput',

  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      model: '',
      isPwd: true
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
</style>
