<template>
  <div class="pet-box">
    <q-card class="round-28 overflow-hidden" flat>
      <q-img
        src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
        :ratio="1"
      />
      <div class="info">
        <span class="fs-40 text-weight-normal block">Gato</span>
        <span class="fs-18 text-weight-light">Um gato de rua</span>
      </div>
      <div class="footer-card flex justify-between p-10">
        <span class="fs-15">2 anos de idade</span>
        <span class="flex flex-center">
          ver perfil <q-icon name="fa fa-arrow-right" class="arrow-right" />
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
.pet-box {
  width: 90%;
  position: relative;
  left: 50%;
  margin: 5% 0% 5% 0%;
  transform: translateX(-50%);
}
.footer-card {
  background: #000000;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
}
.info {
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2%,
    rgba(0, 0, 0, 0.5802696078431373) 37%,
    rgba(0, 0, 0, 1) 91%,
    rgba(0, 0, 0, 0.5802696078431373) 100%
  );
  position: absolute;
  bottom: 35px;
  left: 0px;
  padding-left: 10px;
  padding-top: 20px;
  line-height: 35px;
  color: white;
}

.arrow-right {
  margin-left: 5px;
}

.arrow-right:hover {
  color: $primary;
}
</style>
