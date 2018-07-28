<template lang="pug">
  .login_page
    login-form
</template>

<script>

import LoginForm from "../partials/LoginForm.vue"

export default {
  name: 'login-page',
  components:{
    LoginForm
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.login_page{
  
}
</style>
