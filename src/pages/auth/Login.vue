<template>
  <div>
    <q-card flat class="bg-transparent">
      <q-card-section>
        <q-form class="q-gutter-sm">
          <qx-input label="Email" v-model="email" />
          <qx-password label="Senha" v-model="password" />
        </q-form>
      </q-card-section>

      <q-card-actions class="px-40" align="center">
        <qx-btn label="Login" class="full-width" />
        <q-btn
          to="/auth/signup"
          class="mt-20 fs-14 text-weight-light"
          flat
          color="grey"
          label="Criar nova conta"
        />
        <q-btn
          flat
          color="grey"
          label="Esqueci minha senha"
          class="fs-14 text-weight-light m-0"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',

  components: {
    QxInput: () => import('components/input/QxInput'),
    QxPassword: () => import('components/input/QxPassword'),
    QxBtn: () => import('components/button/QxBtn')
  },
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
