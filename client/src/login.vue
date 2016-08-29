<template lang="jade">
  router-view
</template>

<script>

import UserLogin from './components/login/user-login.vue'
import UserRegister from './components/login/user-register.vue'

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    UserLogin,
    UserRegister
  }
}
</script>