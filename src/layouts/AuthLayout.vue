<template>
  <q-layout view="lHh Lpr lFf" class="flex flex-center bg-auth">
    <q-page-container class="pt-20 pb-20">
      <div class="text-center">
        <q-img width="150px" src="/statics/images/logo.svg" />
        <div>
          <p class="fs-15 text-grey-6 mt-10">
            Encontre seu novo pet <br />
            ou dõe um novo amiguinho <br />
            para alguém
          </p>
        </div>
      </div>
      <router-view />
      <o-auth class="mt-10"></o-auth>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout',

  components: {
    OAuth: () => import('components/button/OAuth')
  },
  data () {
    return {
    }
  }
}
</script>
<style >
.bg-auth {
  background: #dddddd;
}
</style>
