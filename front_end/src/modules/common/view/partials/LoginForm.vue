<i18n>
{
  "en-US": {
    "login": "Login"
  },
  "pt-BR": {
    "login": "Entrar"
  }
}
</i18n>


<template lang="pug" >
  .login_form
    input(type="text" v-model="email")
    input(type="password" v-model="password")
    button(@click="login()") {{$t('login')}}
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'login-form',
  computed: {
      email: {
          get () {
            return this.$store.state.common.loginParams.email
          },
          set (value) {
            this.$store.commit('common/setEmail', value)
          }
      },
      password: {
          get () {
            return this.$store.state.common.loginParams.password
          },
          set (value) {
            this.$store.commit('common/setPassword', value)
          }
      }
  },
  data () {
    return {
      
    }
  },
  methods: {
    login (){
      this.$store.dispatch('common/login').then(()=>{
        this.$router.push({name : "product"})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_form{
  
}
</style>
