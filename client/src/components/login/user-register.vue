<template lang="jade">
  h1 用户注册{{title}}
  v-grid
</template>

<script>

import VGrid from '../common/v-grid.vue'
export default {
  data () {
    return {
      title:'步步高集团B2B事业部1'
    }
  },
  components: {
    VGrid
  }
}
</script>