<template>
   

    <proj-list
        v-bind:projects="projects"
        
        
    />
</template>

<script>

import ProjList from "@/components/ProjList"


import axios from 'axios';


export default {
    components: {
        ProjList
    
    },
    data() {
        return{
            projects:[],
            modalVisible: false,
            
        }
    },

    mounted(){
        this.fetchAllProjects();
    },

    methods:{
       
        showModal(){
            this.modalVisible = true;
        },
        async fetchAllProjects() {
            try{
                const response = await axios.get('http://api.chelnokov.site/projects');
                console.log(response);
                this.projects = response.data;
            } catch(e){
                    alert('Error');
                }
            }
        },
        async fetchOneProject(id){

            try{
            const response = await axios.get('http://api.chelnokov.site/projects/' + id);
            console.log(response);
                this.projects = response.data;
            }catch(e){
                alert('error');
            }
        },
    
}
</script>

<style>




</style>