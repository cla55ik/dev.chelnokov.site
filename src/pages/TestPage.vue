<template>
  <div class="wrapper section">
      <custom-button @click='testGet'>
          test GET
      </custom-button>
      <custom-button @click='testPost'>
          test POST
      </custom-button>
       <custom-button @click='testDelete'>
          test DELETE
      </custom-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        testGet(){
            axios.get(`api.chelnokov.site/test`)
                .then(response =>{
                    console.log(response);
                })
                .catch(e=> console.log(e))
        },
        testPost(){
            let data = {name:'i'}
            axios.post(`api.chelnokov.site/test/id`, data)
                 .then(response =>{
                    console.log(response);
                })
                .catch(e=> console.log(e))
        },
        testDelete(){
            axios.delete(`api.chelnokov.site/test/id`)
                 .then(response =>{
                    console.log(response);
                })
                .catch(e=> console.log(e))
        },
        testPut(){

        }
    }
  

}
</script>

<style scoped>

</style>