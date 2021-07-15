<template>
    <footer>
        <div class="section">
            <div class="title-wrapper">
                <jumbotrone-dark>
                    Обсудить проект
                </jumbotrone-dark>
                <h2>Обсудить детали будущего проекта</h2>
            </div>
            
            <div class="content">
                <div class="form-wrapper">
                    <FormProjectDetail
                        v-model="projectdetailform"
                    >
                    </FormProjectDetail>
                </div>
                <div class="contacts-wrapper">
                    <div class="ip-data">
                        <p>ИП Челноков Иван Александрович</p>
                        <p>ИНН:  366206262920 </p>
                    </div>
                    <div class="contacts-div">
                        <div class="contacts-data">
                            <div class="phone-mail">
                                <a href="tel:+79102814760">+7 910 281 47 60</a>
                                <br>
                                <a href="mailto:ivan5420@yandex.ru">ivan5420@yandex.ru</a>
                            </div>
                            <div class="social">
                               <a href="">
                                   <img src="@/assets/img/telegram.svg" alt="">
                               </a>
                               <a href="">
                                   <img src="@/assets/img/whatsupp.svg" alt="">
                               </a>
                               <a href="">
                                   <img src="@/assets/img/uslugi.svg" alt="">
                               </a>
                            </div>
                        </div>
                        <div class="logo">
                             <img src="@/assets/img/logo-footer.svg" alt="">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </footer>
</template>

<script>
import FormProjectDetail from '@/components/forms/FormProjectDetail'

export default {
    components:{
        FormProjectDetail
        
    }
    
}
</script>

<style lang="scss" scoped>

    .title-wrapper, .content{
        margin: 0 20px;
    }

    h2{
        margin-top: 25px;
    }

    footer{
        background: #F0EDF6;
        padding-bottom: 40px;
        padding-top: 60px;
        text-align: center;
    }

    .ip-data p{
        font-size: 22px;
        line-height: 26px;
        text-align: center;
    }


    .content{
        display: block;
        
        margin-top: 35px;
    }

    .contacts-wrapper{
        margin-top: 70px;
    }

    .ip-data{
        margin-bottom: 25px;
    }

    .phone-mail a{
        font-size: 24px;
        line-height: 28px;
        text-decoration: none;
    }

    .social{
        margin-top: 15px;
        margin-bottom: 35px;
    }

    .social img{
        margin-right: 25px;
        width: 35px;
        height: 35px;
    }

    

    @media screen and (min-width:1200px) {
        .form-wrapper, .contacts-wrapper {
            width: 50%;
        }

        .contacts-wrapper{
            margin: 0;
            padding-left: 10%;
        }
        
        .content{
            margin-top: 70px;
        }

        .ip-data p{
            font-size: 24px;
            line-height: 30px;
            text-align: left;
        }

        .contacts-div{
            display: flex;
            
        }

        .contacts-data{
            text-align: left;
            width: 70%;
        }

        .content{
            display: flex;
            flex-wrap: wrap;
        }

        .logo{
            width: 30%;
        }

        .logo img{
            width: 80px;
            height: auto;
        }

        .phone-mail a{
            font-size: 20px;
            line-height: 24px;
        }

        .social{
            margin-bottom: 0;
        }

        

    }

</style>