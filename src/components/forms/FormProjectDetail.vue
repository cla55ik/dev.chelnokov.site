<template>
    <div class="wrapper">
        <form @submit.prevent="sendForm3">
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
                    <div v-for="(err, index) in error" :key="index">
                        {{err[index]}}
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
            error:[],
            respost:[],
        }
       
    },
     methods:{
        sendForm3(){
            const article = ['sendform'];
            axios.post(`http://api.chelnokov.site`, article)
                .then(response => {
                    this.respost = response.data;
                    console.log(response);
                    console.log(typeof article);
                    })
                .catch(error => {
                    this.error = error.message;
                    alert(this.error)
                })

        },
        sendForm2(){
            const str = JSON.stringify(this.formDetail);
            console.log('btnclick');
            let data = {type: 'send'}
            let string = JSON.stringify(data)

            console.log(string);
            console.log(data);

            let obj = this.formDetail
            const resultArray = Object.keys(obj).map(function(key) {
            return [Number(key), obj[key]];
            });
            //console.log(resultArray);
            axios.post(`http://api.chelnokov.site`,{
                body:JSON.stringify(data)
            })
            .then(response=>{
                this.respost = response.data
                console.log('response = ' + response);
                console.log('this.formDetail = ' + this.formDetail.type);
            })
            .catch(e => {
                this.error.push(e)
            })
        },
        async sendForm() {
            try{
                //const str = JSON.stringify(this.formDetail);
                //const str2 = this.formDetail;
                const response = await axios.post('http://api.chelnokov.site',{
                    body:this.formDetail
                })
                console.log('formDetail str = ' + str);
                console.log(`Server response = ${response.data}`);
                this.respost = response;
                console.log(`Server say = ${this.respost}`);
            } catch(e){
                    alert('POST error');
                }
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