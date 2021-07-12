<template>
     <div class="project" >
        <div class="img">
            <img :src="require(`../assets/img/${proj.img}-min.jpg`)" alt="">
        </div>
        <div class="title">
            <h3>{{ proj.title }}</h3>
            <p> {{ proj.description }} </p>
        </div>
        <div class="content">
            <div class="stack">
                <div class="title-stack">Стек технологий</div>
                <div class="list">{{ proj.stack }}</div>
            </div>
            <div class="link">
                <a :href="proj.url_site" target="_blank">
                    <span>Перейти на сайт</span>
                    <span><img src="@/assets/img/arrow.svg" alt=""></span>
                </a>
                
                
            </div>
        </div>
        
    </div>
</template>

<script>
import CustomButton from './UI/CustomButton.vue'
export default {
  components: { CustomButton },
    props:{
        proj:{
            type: Object,
            required: true
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .project{
        background: #FFFFFF;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        padding:15px 15px 25px 15px; 
        widows: 100%;
        margin-bottom: 30px;
        color: #353C47;
    }

    .img img{
        border-radius: 30px 30px 0px 0px;
        height: 170px;
        width: 100%;
        object-fit: cover;

        
    }

    .img{
         border-radius: 30px 30px 0px 0px;
        box-shadow:  0px 0px 3px rgba(0, 0, 0, 0.25);
    }

    .title{
        text-align: left;
        margin:15px 0px;
        color: #353C47;
    }

    .title h3{
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #353C47;
    }

    .title p{
        color: #353C47;
        font-size: 14px;
        line-height: 16px;

    }

    .content{
        display: flex;

    }

    .stack{
        
        text-align: left;
        font-size: 16px;
        line-height: 19px;
    }

    .link {
        display: flex;
        justify-content:flex-end;
        align-items: flex-end;
    }

    .link, .stack{
        width: 50%;
    }

    .list{
        color:#353C47;
    }

    .title-stack{
        color: #353C47;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
    }

    .link a{
        color: #353C47;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;

        text-decoration: none;
    }

    

    

    @media screen and (min-width:1200px) {
        .project{
            width: 48%;
            padding: 25px 25px 35px 25px;
            margin-bottom:45px;
        }

        .img img{
            height: 285px;
        }

        .title h3{
            
            font-size: 24px;
            line-height: 33px;
        }

        .title p{
            min-height: 50px;
            font-size: 18px;
            line-height: 25px;

        }

        .title-stack{
            font-size: 18px;
            line-height: 25px;
        }

        .list{
            font-size: 18px;
            line-height: 25px;
        }

        .link a{
            font-size: 20px;
            line-height: 27px;
        }
    }
</style>