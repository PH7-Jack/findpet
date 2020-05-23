<template>
  <q-page class="bg-color" padding>
    <q-toolbar class="bg-white round-8">
      <q-btn
        class="relative"
        style="left: -5px"
        color="grey-8"
        icon="eva-funnel-outline"
        flat
        round
      >
        <q-menu content-class="p-3 vx-shadow round-10">
          <q-card
            :style="`width: ${$q.screen.gt.xs ? 350 : 285}px`"
            class="vx-shadow round-10 text-grey-9"
          >
            <q-toolbar>
              <q-toolbar-title class="fs-19 text-weight-medium">
                Filtros
              </q-toolbar-title>
              <q-btn flat round dense v-close-popup icon="eva-close-outline" />
            </q-toolbar>
            <q-separator inset />
            <q-card-section class="q-gutter-sm">
              <q-select
                dense
                filled
                v-model="filter.pets"
                option-label="name"
                option-value="id"
                use-chips
                multiple
                :options="pets"
                label="Estou procurando por"
              />
              <q-select
                dense
                filled
                use-chips
                v-model="filter.years"
                multiple
                :options="years"
                label="Com a idade"
              />
              <q-select
                dense
                filled
                use-chips
                v-model="filter.colors"
                multiple
                :options="colors"
                label="Com a Cor"
              />
              <div>
                <span>
                  Procurar em
                  <b>{{ filter.proximity }}</b>
                  Km
                </span>
                <q-slider
                  v-model="filter.proximity"
                  :min="0"
                  :max="30"
                  :step="1"
                  label
                />
              </div>
              <qx-btn
                dense
                push
                color="primary"
                class="full-width"
                label="Salvar"
                v-close-popup
              />
            </q-card-section>
          </q-card>
        </q-menu>
      </q-btn>
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
    QxSearch: () => import('components/input/QxSearch'),
    QxBtn: () => import('components/button/QxBtn')
  },
  data () {
    return {
      filter: {
        pets: [
          { id: 1, name: 'Gato' },
          { id: 2, name: 'Cachorro' }
        ],
        years: [
          { label: '1 ano', value: 1 },
          { label: '2 anos', value: 2 },
          { label: '3 anos', value: 3 }
        ],
        colors: [],
        proximity: 3
      },
      pets: [
        { id: 1, name: 'Gato' },
        { id: 2, name: 'Cachorro' }
      ],
      years: [1, 2, 3],
      colors: ['Preto', 'Pardo', 'Branco', 'Amarelo', 'Malhado']
    }
  },
  created () {
    this.filter.colors = this.colors
  }
}
</script>
<style lang="scss" scoped>
.bg-color {
  background: #f2f2f2 !important;
}
</style>
