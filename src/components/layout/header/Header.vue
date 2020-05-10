<template>
  <div>
    <q-header class="bg-white text-grey" elevated>
      <q-toolbar>
        <q-btn flat dense round icon="eva-menu-2-outline" />
        <q-space />
        <q-img class="logo" src="/statics/images/logo.svg" alt />
        <q-space />
        <q-btn flat round>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 130px;
}
</style>
