<template>
  <q-layout view="lHh Lpr lFf">
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
    FooterMenu: () => import('components/layout/footer/FooterMenu')
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
