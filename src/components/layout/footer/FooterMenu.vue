<template>
  <div>
    <div class="footer-menu-container shadow-10">
      <div class="row">
        <div class="col row">
          <div class="col-6 text-center">
            <q-btn
              :size="size"
              color="grey-8"
              flat
              round
              icon="eva-bell-outline"
            />
          </div>
          <div class="col-6 text-center">
            <q-btn
              :size="size"
              color="grey-8"
              flat
              round
              icon="eva-heart-outline"
            />
          </div>
        </div>
        <div class="col-4 flex flex-center">
          <q-btn
            class="action-btn shadow-5"
            color="primary"
            round
            icon="fa fa-paw"
          />
        </div>
        <div class="col row">
          <div class="col-6 text-center">
            <q-btn
              :size="size"
              color="grey-8"
              flat
              round
              icon="eva-message-circle-outline"
            />
          </div>
          <div class="col-6 text-center">
            <q-btn
              :size="size"
              color="grey-8"
              flat
              round
              icon="eva-person-outline"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  data () {
    return {
      size: '17px'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-menu-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
}

.action-btn {
  position: absolute;
  bottom: 10px;
  padding: 6px;
}
</style>
