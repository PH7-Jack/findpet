<template>
  <q-layout view="lHh Lpr lFf">
    <header-app />
    <q-page-container :class="$q.platform.is.mobile ? 'padding-bottom' : ''">
      <router-view />
    </q-page-container>
    <footer-menu />
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
    FooterMenu: () => import('components/layout/footer/FooterMenu'),
    HeaderApp: () => import('components/layout/header/Header')
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.padding-bottom {
  padding-bottom: 80px;
}
</style>
