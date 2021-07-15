<template>
    <div>
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


@media screen and (min-width:1200px) {
    .form-inner{
        display: flex;
        flex-wrap: wrap;
    }

    .form-col{
        width: 48%;
    }
}
</style>