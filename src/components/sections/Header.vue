<template>
<div class="section">
<div class="wrapper">
    <div class="logo">
      <div class="img">
        <a href="/"><img src="@/assets/img/logo.svg" alt="IvanChelnokov"></a>
        
      </div>
      <div class="name">
        Ivan Chelnokov
      </div>
    </div>
    <div class="phone">
      <a href="tel:+79102814760">+7 910 281 47 60</a>
    
    </div>
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
    margin-top:30px;
    margin-bottom: 30px;
  }

  .img{
    width: 50px;
    height: auto;
    object-fit: contain;
  }

  .logo{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .name{
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-left: 25px;
    
  }

  .phone{
    margin-top: 20px;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }

  a{
    color:$primary-c;
    text-decoration: none;
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
      font-weight: 400;
    }

    .wrapper{
      min-height: 70px;
      padding: 25px 0px 60px 0px;
      margin: 0;
    }

    .phone{
      margin: 0;
      padding: 10px 0;
    }
    
  }
</style>
