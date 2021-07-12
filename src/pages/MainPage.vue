<template>
  
  <div class="main">
    <div class="cta-main">
         <jumbotrone-light>
            Эффективные сайты с любым функционалом.
          </jumbotrone-light>
          <h1>Разработка сайтов и&nbsp;онлайн-сервисов</h1>
          <p>Ваш сайт будет соответствовать всем требованиям для&nbsp;дальнейших маркетинговых&nbsp;работ</p>
          <custom-button>Рассчитать стоимость</custom-button>
    </div>
    <div class="img-main">
      <img src="@/assets/img/webdev.jpg" alt="">
    </div>
   
  </div>
  <div class="price">
    <jumbotrone-light>
      Стоимость
    </jumbotrone-light>
    <h2>
      Сайт - это надёжная инвестиция,<br>если инвестировать куда надо
    </h2>
    <price-list
      v-bind:prices="prices"
    ></price-list>
    
  </div>
</template>

<script>
  import PriceList from "@/components/PriceList"
  //import ProjForm from '@/components/ProjForm';
  import Header from '@/components/sections/Header'



  //import axios from 'axios';

export default {
  components: {
        Header, PriceList
       
    },

    data(){
      return{
        prices:[
        {title:'Интернет-магазин', p:'50 000', description:'Разработка сайта с каталогом, корзиной, онлайн-оплатой и рассылкой информации об акциях'},   
        {title:'Сайт компании', p:'30 000', description:'Разработка полноценного сайта, рассказывающего о Вашей компании, услугах и товарах'},
        {title:'Лендинг', p:'15 000', description:'Разработка сайта-одностраничника, рассказывающего о конкретной услуги или товаре'}, 
        ]
      }

    },
    
}
</script>

<style lang="scss" scoped>
  .main{
    text-align: center;
    margin-top:15px;
  }
  .img-main{
    display: none;
  }

  h1{
    font-size: 36px;
    line-height: 36px;
    /* or 100% */
    margin: 30px 0;
    text-align: center;
  }

  h2{
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  p{
    margin-bottom: 30px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }

  .price{
    text-align: center;
    margin-top: 50px;
  }

@media screen and (min-width:1200px) {
  .main{
    display: flex;
    margin-top:0;
  }
  .img-main, .cta-main{
    
    width: 50%;
  }

  .img-main{
    display: block;
  }

  .cta-main{
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }

  .img-main img{
    width: 100%;
    height: auto;
    object-fit: contain;
  }

    h1{
      margin: 35px 0;
      font-size: 52px;
      line-height: 48px;
      /* or 100% */

      text-align: left;
    }

     h2{
        font-size: 32px;
        line-height: 37px;
        margin-top: 30px;
        margin-bottom: 50px;
        
      }

  p{
    margin-bottom: 25px;
    margin-right: 30%;
    text-align: left;
  }

  .price{
    
    margin-top: 90px;
  }

}
  
</style>