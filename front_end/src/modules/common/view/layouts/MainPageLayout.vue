<template lang="pug">
  .main_page_layout
    .left
      slot(name="side_bar")
        side-bar    
    .right
      .nav_bar_wrap
        slot(name="nav_bar")
          nav-bar
      .content_wrap   
        slot(name="content")
      
    
</template>

<script>
import NavBar from "../partials/NavBar.vue"
import SideBar from "../partials/SideBar.vue"

export default {
  name: 'main-page-layout',
  components: {
    NavBar,
    SideBar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.main_page_layout{

  display: flex;
  flex-direction: row;
  flex-grow: 1;

  .left{ 
     position: relative;
     display: flex;
     width: 132px;
  }

  .right{ 
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .nav_bar_wrap{
      position: relative;
      height: 120px;
    }

    .content_wrap{   
      position: relative;
      flex-grow: 1;
    }
  }


}
</style>
