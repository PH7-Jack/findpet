<template>
  <div>
    <q-card flat class="bg-transparent">
      <q-card-section>
        <q-form class="q-gutter-sm">
          <qx-input label="Nome Completo" v-model="name" />
          <qx-input label="Email" v-model="email" />
          <qx-input label="Username" v-model="username" />
          <qx-password label="Senha" v-model="password" />
          <qx-password label="Confirme sua Senha" v-model="password" />
        </q-form>
      </q-card-section>

      <q-card-actions class="px-40" align="center">
        <qx-btn label="Criar Conta" class="full-width" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PageSignup',

  components: {
    QxInput: () => import('components/input/QxInput'),
    QxPassword: () => import('components/input/QxPassword'),
    QxBtn: () => import('components/button/QxBtn')
  },
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: ''
    }
  }
}
</script>
