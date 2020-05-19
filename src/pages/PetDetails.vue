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
        <q-btn icon="fa fa-circle" round size="6px" color="primary" flat />
        <q-btn icon="fa fa-circle" round size="6px" color="white" flat />
        <q-btn icon="fa fa-circle" round size="6px" color="white" flat />
        <q-btn icon="fa fa-circle" round size="6px" color="white" flat />
      </div>
    </div>

    <q-card class="vx-shadow card-info">
      <q-card-section>
        test card
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PetDetailsPage',

  data () {
    return {
      slide: 1,
      slides: 4
    }
  }
}
</script>
<style lang="scss">
.card-info {
  position: absolute;
  width: 100%;
  height: 482px;
  top: 280px;
  background: #f2f2f2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.position-navigation {
  position: absolute;
  bottom: 30px;
  left: 15px;
}
</style>
