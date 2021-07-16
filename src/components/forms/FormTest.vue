<template>
    <div class="wrapper">
        <form @submit.prevent="sendForm">
            <div class="form-inner">
                <div class="form-col">
                    <input-text
                        v-model="form.name"
                        
                        placeholder="Имя"
                    >
                    </input-text>
                    <input-text
                        v-model="form.phone"
                        
                        placeholder="Телефон"
                    >
                    </input-text>
                    <custom-button class="btn-form-desktop">
                        Отправить
                    </custom-button>
                    <div v-for="(err, index) in error" :key="index">
                        {{err}}
                    </div>
                    <div>
                        {{ respost }}
                    </div>
                </div>
                <div class="form-col">
                    <input-text
                        v-model="form.sitetype"
                        
                        placeholder="Тип сайта"
                    >
                    </input-text>
                    <input-area
                        v-model="form.description"
                        
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
            form:{
                type: 'sendform',
                name:'',
                phone:'',
                sitetype:'',
                description:'',
            },
            formt:{
                type: 'sendform',
                name:'Ivan',
                phone:'888888',
                sitetype:'site',
                description:'desc',
            },
            error:'',
            respost:[],
        }
       
    },
     methods:{
        sendForm(){
            console.log('btn');
            let data = this.form
           
            
           // console.log(arr);
            //arr = JSON.stringify(arr)
            //console.log('type arr ' + typeof arr);
            axios.post(`http://api.chelnokov.site`, data)
            .then(response => {
                this.respost = response.data
                console.log(this.respost);
                })
            .catch(error => {
                this.error = error.message;

            })
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
    .btn-form-desktop{
        display: block;
    }
}
</style>