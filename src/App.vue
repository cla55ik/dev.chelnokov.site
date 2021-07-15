<template>
    <Header>
    </Header>
  <router-view></router-view>
  <Footer>
  </Footer>
</template>

<script>
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
export default {
components:{
    Header, Footer
}
}
</script>

<style>

  *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'RobotoCondensed';
  }    
/*
  body{
      max-width: 1220px;
     
      margin: 0 auto;
     
  }
*/
  @media screen and (min-width:1200px) {
     *{
         margin:0;
        padding:0;
     }

     body{
         margin: 0 auto;
     }
  }
</style>