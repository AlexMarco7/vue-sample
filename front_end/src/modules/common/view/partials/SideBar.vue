<i18n>
{
  "en-US": {
    "product": "Products"
  },
  "pt-BR": {
    "product": "Produtos"
  }
}
</i18n>

<template lang="pug">
  .side_bar
    .logo
    ul.menu
      li        
        font-awesome-icon(icon="coffee")
        router-link(:to="{ path: 'product' }") {{$t('product')}}
    
</template>

<script>

export default {
  name: 'side-bar',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.side_bar{
  background-color: #303b43;
  position: absolute;
  display: flex;
  flex-direction: column;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;

  .logo{
    width: 100%;
    height: 120px;
    background-color: #fff;
  }

  ul{
    line-height: 1.4rem;
    padding: 0;
    list-style: none;
    width: 100%;
  }

  li{
    cursor: pointer;
    padding: 1.8rem 0;
    color: #66737f;
    border-bottom: 1px solid #86949e;
    text-align: center;
    font-family: "Open Sans",sans-serif;
    font-weight: 400;

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: #fff;
    }
  }
}
</style>
