<template>
  <div class="section">
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
  </div>
  
  
  
  <div class="prjects full-width">
    <div class="section">
      <jumbotrone-dark>
      Примеры наших сайтов.
    </jumbotrone-dark>
    <h2>К каждому сайту мы относимся <br>с особым вниманием</h2>
    <div class="project-list">
      <ProjectsView>
        
      </ProjectsView>
    </div>
    <custom-button @click="$router.push('/projects')">
      Смотреть еще
    </custom-button>
    </div>
    
  </div>

  <div class="advantages section">
    <div class="advantages-title">
      <jumbotrone-dark>
        Сайт под ключ.
      </jumbotrone-dark>
      <h2>Особенности нашей работы</h2>
    </div>
    
    <advantages-list
      v-bind:advantages="advantages"
    >

    </advantages-list>
  </div>

  <div class="services">
      <div class="section">
        <h2>Какие сайты я делаю</h2>
      </div>
      <div class="section services-list">
        <services-list
        v-bind:services="services"
        >
        </services-list>
      </div>
  </div>

  <div class="footer">

  </div>
</template>

<script>
  import PriceList from "@/components/PriceList"
  import ProjectsView from '@/components/sections/ProjectsView';
  import Header from '@/components/sections/Header'
  import AdvantagesList from '@/components/sections/AdvantagesList'
  import ServicesList from '@/components/sections/ServicesList'



  //import axios from 'axios';

export default {
  components: {
        Header, PriceList, ProjectsView, AdvantagesList, ServicesList
    
       
    },

    data(){
      return{
        prices:[
        {title:'Интернет-магазин', p:'50 000', description:'Разработка сайта с каталогом, корзиной, онлайн-оплатой и рассылкой информации об акциях'},   
        {title:'Сайт компании', p:'30 000', description:'Разработка полноценного сайта, рассказывающего о Вашей компании, услугах и товарах'},
        {title:'Лендинг', p:'15 000', description:'Разработка сайта-одностраничника, рассказывающего о конкретной услуги или товаре'}, 
        ],
        advantages:[
          {title:'Официальный договор', description:'Заключаю официальный договор, в котором подробно описаны этапы и сроки разработки. Оплата на расчетный счет ИП, или как вам удобно'},
          {title:'Быстрые сайты', description:'Создаю сайты с применением современных технологий, ориентированных на скорость и бесперебойность работы'},
          {title:'Адаптивная верстка', description:'Делаю адаптивные сайты. Ваш сайт будет одинаково красив и удобен как на компьютере так и на мобильном'},
          {title:'Тестирование проекта', description:'После завершения разработки я провожу тестирование и исправляю выявленные ошибки. Только после тестирования я отдаю проект заказчику'},
          {title:'Кастомный функционал', description:'Подключу и настрою только те функции, которые нужны вам'},
          {title:'Тестирование проекта', description:'После завершения разработки я провожу тестирование и исправляю выявленные ошибки. Только после тестирования я отдаю проект заказчику'},
        ],
        services:[
          {title:'Сайт-визитка', description:'Такой сайт обычно содержит основную информацию об организации или частном лице, товарах или услугах, прейскуранты, контактные данные и адреса.', status:true},
          {title:'Landing page', description:'Одностраничный сайт, который состоит из нескольких блоков и разрабатывается под конкретную услугу и товар, которые нужно продать.', status:true},
          {title:'Сайт-каталог', description:'Он предназначается для ознакомления потенциальных клиентов с ассортиментом товаров из каталога, но этот сайт не продает: там отсутствует корзина для моментальной покупки в режиме онлайн', status:true},
          {title:'Интернет-магазин', description:'Сайт такого вида обязательно должен содержать каталог с товарами, его подробным описанием, фотографиями и ценами, корзину, выбор «любимых» товаров, систему онлайн-оплаты, часто личный кабинет. ', status:true},
          {title:'Корпоративный сайт', description:'Качественная и полноценная презентация компании в Интернете. Основная цель — привлечь не только новых клиентов, но и партнеров.', status:true},
          {title:'Веб-сервис', description:'Может быть чем угодно: от новстного портала до CRM-системы организации. Функционал определяется исходя из ваших целей и задач.', status:true},
          {title:'Информационный сайт', description:'На нем можно найти всю необходимую информацию, касающуюся темы или компании, которой он посвящен. ',status:false}
        ],
      }

    },
    
}
</script>

<style lang="scss" scoped>
  .main, .price, .project-list{
    margin: 0px 20px;
  }

  .projects{
    padding-left: 20px;
    padding-right: 20px;
  }
  
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
    margin-top: 70px;
  }


  .prjects{
    text-align: center;
    padding-top:70px;
    padding-bottom: 50px;
    margin-top:60px;

    background: #F0EDF6;
  }

  .projects h2{
    margin-top:30px;
    margin-bottom: 35px;
  }

  .advantages{
    padding: 50px 0;
  }

  .advantages-title{
    text-align: center;
  }

  .services{
    padding-bottom: 50px;
  }

@media screen and (min-width:1200px) {

    .main, .price{
      margin: 0px 0px;
    }

  .projects{
    padding-left: 0px;
    padding-right: 0px;
  }


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


  
  .prjects{
    
    padding-top:70px;
    padding-bottom: 70px;
    margin-top:50px;
  }

  .projects h2{
    margin-top:30px;
    margin-bottom: 60px;
  }

  .advantages{
    padding: 80px 70px;
  }

  .advantages-title h2{
    margin-top: 30px;
    margin-bottom: 55px;
  }

  .services{
      background-position: center right;
      background-repeat: no-repeat;
      background-image: url("../assets/img/services-back.jpg");
  }

}
  
</style>