<template lang="jade">
  div#page-container
    top-nav
    menu-nav
    router-view
</template>

<script>

import TopNav from './components/main//top-nav.vue'
import MenuNav from './components/main//menu-nav.vue'

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    TopNav,
    MenuNav
  },
  created:function(){
    console.log("starting app......");
  }
}
</script>