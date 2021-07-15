<template>
    <div class="wrapper">
        <form @submit.prevent="sendForm">
            <div class="form-inner">
                <div class="form-col">
                    <input-text
                        v-model="formDetail.name"
                        
                        placeholder="Имя"
                    >
                    </input-text>
                    <input-text
                        v-model="formDetail.phone"
                        
                        placeholder="Телефон"
                    >
                    </input-text>
                    <custom-button class="btn-form-desktop">
                        Отправить
                    </custom-button>
                </div>
                <div class="form-col">
                    <input-text
                        v-model="formDetail.sitetype"
                        
                        placeholder="Тип сайта"
                    >
                    </input-text>
                    <input-area
                        v-model="formDetail.description"
                        
                        placeholder="Описание"
                    >
                    </input-area>
                    <custom-button class="btn-form-mobile">
                        Отправить
                    </custom-button>
                </div>
            </div>
            
            
        </form>
    </div>
</template>

<script>

export default {
 
    data(){
        return {
            formDetail:{
                name:'',
                phone:'',
                sitetype:'',
                description:'',
            },
        }
       
    },
     methods:{
        sendForm(){

        }
        }
    
    
}
</script>

<style lang="scss" scoped>

.wrapper{
    background: #FFFFFF;
    border: 1px solid #606060;
    box-sizing: border-box;
    box-shadow: 2px 4px 15px #1A1D23;
    border-radius: 30px;
    padding: 30px 25px;
}

.btn-form-desktop{
    display: none;
}


@media screen and (min-width:1200px) {
    .form-inner{
        display: flex;
        flex-wrap: wrap;
    }

    .form-col{
        width: 48%;
    }

    .btn-form-mobile{
        display: none;
    }
}
</style>