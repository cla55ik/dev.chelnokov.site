<template>
  <div class="wrapper">
      <div class="title">
          {{ price.title }}
      </div>
      <div class="p">
          {{ price.p }}
      </div>
      <div class="desc">
          {{ price.description }}
      </div>
      
  </div>
</template>

<script>
export default {
     props:{
        price:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper{
    display: blok;
    background: #606060;
    box-shadow: inset 0px 0px 35px #1A1D23;
    border-radius: 50px;
    padding: 45px 25px;
    margin-bottom: 30px;
    
    
}

.title{
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;

    color: #fff;
}

.p{
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #FFFFFF;

    margin-top: 25px;
    margin-bottom: 10px;
}

 .p::before{
    content: "от ";
  }

.p::after{
    content: " ₽";
    color:#00D0E2;
}
  
.desc{
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;
}

@media screen and (min-width: 1200px) {
    .wrapper{
        padding:50px;
        width: 31%;
    }

    .title{
        font-size: 36px;
        line-height: 42px;
    }

    .p{
        font-size: 42px;
        line-height: 49px;
        margin-top: 25px;
        margin-bottom: 40px;
    }

    .desc{
        font-size: 18px;
        line-height: 21px;
    }
}
</style>