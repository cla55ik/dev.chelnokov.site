<template>
  <div class="wrapper">
    <div class="logo">
      <div class="img">
        <img src="@/assets/img/logo.svg" alt="IvanChelnokov">
      </div>
      <div class="name">
        Ivan Chelnokov
      </div>
    </div>
    <div class="phone">
      <a href="tel:+79102814760">+7 910 281 47 60</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

  .wrapper{
    display: flex;
    flex-wrap: wrap;
  }

  .logo{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .phone{
    text-align: center;
    width: 100%;
    
  }

  a{
    color: red;
  }


  @media screen and (min-width:1200px) {
    .logo, .phone{
      
      width: 50%;
    }

    .logo{
      justify-content: start;
    }

    .phone{
      text-align: right;
    }

    .wrapper{
      min-height: 70px;
    }
    
  }
</style>
