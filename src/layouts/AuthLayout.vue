<template>
  <q-layout view="lHh Lpr lFf" class="flex flex-center">
    <q-page-container>
      <div class="text-center">
        <q-img width="200px" src="/statics/images/logo.svg" />
        <div>
          <p class="fs-16 text-grey-6 mt-10">
            Encontre seu novo pet <br />
            ou dõe um novo amiguinho <br />
            para alguém
          </p>
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'AuthLayout',

  data () {
    return {
    }
  }
}
</script>
