<template>
  <div class="pet-box">
    <q-card class="round-28 overflow-hidden" flat>
      <q-img
        src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
        :ratio="1"
      />
      <div class="info">
        <span class="text-weight-normal block namePet">Gato</span>
        <span class="text-weight-light">Um gato de rua</span>
      </div>
      <div class="footer-card flex justify-between">
        <span>2 anos de idade</span>
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
  width: 95%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 5% 0% 5% 0%;
}

.footer-card {
  background: #000000;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  color: white;
  font-size: 15px;
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
  padding: 20px 10px 10px 10px;
  line-height: 35px;
  color: white;
  font-size: 18px;
}

.namePet {
  font-size: 40px;
}

.arrow-right {
  margin-left: 5px;
}

.arrow-right:hover {
  color: $primary;
}

@media all and (min-width: 700px) {
  .pet-box {
    width: 80%;
  }

  .info {
    padding: 20px 35px 0px 32px;
  }

  .footer-card {
    padding: 10px 35px 10px 35px;
  }
}

@media all and (min-width: 1024px) {
  .pet-box {
    width: 60%;
    left: 2.5%;
    transform: translateX(0);
  }

  .info {
    padding: 40px 65px 40px 20px;
    font-size: 22px;
  }

  .namePet {
    font-size: 55px;
  }

  .footer-card {
    padding: 20px 65px 20px 22px;
    font-size: 20px;
  }

  .arrow-right {
    padding-left: 10.5px;
  }
}
</style>
