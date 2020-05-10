<template>
  <div>
    <q-card flat class="bg-transparent">
      <q-card-section>
        <q-form class="q-gutter-sm">
          <qx-input
            label="Nome Completo"
            placeholder="Digite seu nome"
            v-model="name"
          />
          <qx-input
            label="Email"
            placeholder="Use seu melhor email"
            v-model="email"
          />
          <qx-input
            label="Username"
            placeholder="Username da sua conta"
            v-model="username"
          />
          <qx-password
            label="Senha"
            placeholder="Escolha uma senha forte"
            v-model="password"
          />
          <qx-password
            label="Confirme sua Senha"
            placeholder="Repita sua senha"
            v-model="password"
          />
        </q-form>
      </q-card-section>

      <q-card-actions class="px-40" align="center">
        <qx-btn push label="Criar Conta" class="full-width" />
        <q-btn
          to="/auth/login"
          class="mt-10 text-weight-light"
          flat
          color="grey"
          label="Fazer Login"
        />
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
