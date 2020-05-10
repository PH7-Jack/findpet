<template>
  <q-page padding>
    <q-toolbar class="bg-white round-8">
      <q-btn
        class="relative"
        style="left: -5px"
        color="grey-8"
        icon="eva-funnel-outline"
        flat
        round
      />
      <qx-search class="full-width" />
    </q-toolbar>

    <adopt-card v-for="n in 10" :key="n" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  components: {
    AdoptCard: () => import('components/card/AdoptCard'),
    QxSearch: () => import('components/input/QxSearch')
  }
}
</script>
