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
                        v-model.number="formDetail.phone"
                        
                        placeholder="Телефон"
                    >
                    </input-text>
                    <custom-button class="btn-form-desktop">
                        Отправить
                    </custom-button>
                    <div>
                        {{error}}
                    </div>
                    <div v-show="respost">
                        {{ respost }}
                    </div>
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
import axios from 'axios'

export default {
 
    data(){
        return {
            formDetail:{
                type: 'sendform',
                name:'',
                phone:'',
                sitetype:'',
                description:'',
            },
            error:'',
            respost:'',
        }
       
    },
     methods:{
            sendForm(){
                let data = this.formDetail;
                if(this.validateForm(data)){
                    axios.post(`http://api.chelnokov.site/sendform`,data)
                    .then(response => {
                        this.respost = response.data.message
                        this.clearForm();
                        })
                    .catch(error => this.error = error.message)
                }
                

                    
            },
            validateForm(data){
                if(data.phone == ''){
                    this.respost = 'Заполните номер телефона'
                    return false
                }else if(!this.validatePhone(data.phone)){
                    this.respost = 'Номер телефона некорректен'
                    return false
                }else{
                    return true
                }
            },
            validatePhone(phone){
                if(phone == '888'){
                    return true
                }else{
                    return false
                }
            },
            clearForm(){
                this.formDetail.name = '';
                this.formDetail.phone ='';
                this.formDetail.sitetype = '';
                this.formDetail.description ='';
            }
        },
    
    
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
    .btn-form-desktop{
        display: block;
    }
}
</style>