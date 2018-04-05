<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        login
      </h1>
      <form @submit.prevent="onLoginSubmit">

        <input v-model="email" type="text" placeholder="login">
        <input v-model="password" type="password" placeholder="password">
        <button type="submit">login</button>
      </form>

    </div>
  </section>
</template>

<script>
import AppLogo from "../components/layout/AppLogo"

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },

  methods: {
    onLoginSubmit(e) {
      e.preventDefault()

      const { email, password } = this

      this.$store.dispatch("user/login", { email, password })
    }
  }
}
</script>
