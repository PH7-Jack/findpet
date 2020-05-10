<template>
  <q-page padding>
    <adopt-card />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  components: {
    AdoptCard: () => import('components/card/AdoptCard')
  }
}
</script>
