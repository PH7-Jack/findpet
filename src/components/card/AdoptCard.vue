<template>
  <div>
    <q-card class="round-28 overflow-hidden" flat>
      <q-img
        src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
        :ratio="1"
      />
      <div class="info">
        <span class="fs-48 text-weight-light block">Gato</span>
        <span class="fs-20">Um gato de rua</span>
      </div>
      <div class="footer-card flex justify-between p-10">
        <span class="fs-20">2 anos de idade</span>
        <span class="flex flex-center">
          ver perfil <q-icon name="fa fa-arrow-right" />
        </span>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'AdoptCard'
}
</script>

<style lang="scss" scoped>
.footer-card {
  background: rgba(19, 19, 19, 0.62);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
}
.info {
  position: absolute;
  color: white;
  bottom: 60px;
  left: 10px;
  line-height: 35px;
}
</style>
