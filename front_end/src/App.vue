<template lang="pug">
  #app
    router-view(name="header")
    router-view(name="side_bar")
    router-view(name="content")
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
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
