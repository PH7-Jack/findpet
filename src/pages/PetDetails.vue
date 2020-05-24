<template>
  <q-page>
    <div class="relative-position">
      <q-carousel height="300px" animated v-model="slide" swipeable infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
      <div class="position-navigation">
        <q-btn
          icon="fa fa-circle"
          round
          size="6px"
          :color="slide === 1 ? 'primary' : 'white'"
          flat
        />
        <q-btn
          icon="fa fa-circle"
          round
          size="6px"
          :color="slide === 2 ? 'primary' : 'white'"
          flat
        />
        <q-btn
          icon="fa fa-circle"
          round
          size="6px"
          :color="slide === 3 ? 'primary' : 'white'"
          flat
        />
        <q-btn
          icon="fa fa-circle"
          round
          size="6px"
          :color="slide === 4 ? 'primary' : 'white'"
          flat
        />
      </div>
      <q-btn
        @click="$router.back()"
        class="vx-shadow back-button"
        icon="fa fa-arrow-left"
        size="sm"
        text-color="grey-8"
        color="white"
        rounded
      />
    </div>

    <q-card class="vx-shadows shadow-0 card-info">
      <q-card-section>
        <div class="flex justify-between fs-15">
          <b>Nome do Pet</b>
          <b>
            <q-icon name="eva-pin-outline" />
            2 km
          </b>
        </div>
        <q-separator spaced />
        <p>
          O gato (felis catus) é um mamífero carnívoro e quadrúpede pertencente
          à família Felidae e à ordem carnívora. É um animal doméstico apreciado
          por caçar ratos e ratazanas.
        </p>

        <div class="pet-info">
          <b class="fs-17">Mais detalhes</b>
          <q-separator />
          <q-list>
            <q-item v-for="item in details" :key="item.label" class="p-0" dense>
              <q-item-section avatar>
                <b>{{ item.label }}:</b>
              </q-item-section>
              <q-item-section>{{ item.value }}</q-item-section>
            </q-item>
          </q-list>

          <q-item clickable class="p-0 mt-20 cursor-pointer">
            <span style="position:absolute; top: -12px; font-size:10px">
              Publicado por
            </span>
            <q-item-section side class="pr-5">
              <q-avatar>
                <img
                  class="avatar-border"
                  src="https://cdn.quasar.dev/img/boy-avatar.png"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section>@nickname</q-item-section>
          </q-item>

          <qx-btn class="mt-10" label="Quero Adotar" :shadow="false" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PetDetailsPage',

  components: {
    QxBtn: () => import('components/button/QxBtn')
  },
  data () {
    return {
      slide: 1,
      slides: 4,
      details: [
        { label: 'Cor', value: 'Preto' },
        { label: 'Raça', value: 'Siberiano' },
        { label: 'Peso', value: '3,5 KG' },
        { label: 'Sexo', value: 'Feminino' },
        { label: 'Idade', value: '2 anos' }
      ]
    }
  }
}
</script>
<style lang="scss">
.card-info {
  position: absolute;
  width: 100%;
  min-height: 300px;
  top: 280px;
  background: #f2f2f2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: $grey-8;
  margin-bottom: 80px;
}
.position-navigation {
  position: absolute;
  bottom: 30px;
  left: 15px;
}
.back-button {
  position: absolute;
  top: 5px;
  left: -10px;
}
.pet-info {
}
.avatar-border {
  border: $primary 2px solid;
}
</style>
