<template>
    <Header>
    </Header>
  <router-view></router-view>
</template>

<script>
import Header from '@/components/sections/Header'
export default {
components:{
    Header
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

  body{
      max-width: 1220px;
     
      margin: 0 20px;
     
  }

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