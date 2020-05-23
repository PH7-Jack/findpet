<template>
  <q-layout view="lHh Lpr lFf">
    <header-app />
    <q-page-container
      :class="{
        'padding-bottom': $q.screen.lt.md && $route.meta.paddingBottom
      }"
    >
      <router-view class="bg-color" />
    </q-page-container>
    <footer-menu v-if="$q.screen.lt.md" />
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
.bg-color {
  background: #f2f2f2 !important;
}
</style>
