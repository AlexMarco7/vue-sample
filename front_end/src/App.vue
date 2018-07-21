<template lang="pug">
  #app
    p {{msg}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Teste'
    }
  },
  created () {
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
