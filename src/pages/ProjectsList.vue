<template>
   
    <div>
        Страница с проектами
       <custom-button
        @click="updateProject"
       >


       Обновить
       </custom-button>
        <custom-button
            @click="showModal"
        >
            Создать новый
        </custom-button>
    </div>
    
    <custom-modal v-model:show="modalVisible">
        <proj-form
        @create="createProject"
    />
    </custom-modal>

    <proj-list
        v-bind:projects="projects"
        @remove="removeProject"
        
    />
</template>

<script>

import ProjList from "@/components/ProjList"
import ProjForm from '@/components/ProjForm';
import Header from '@/components/sections/Header'
import axios from 'axios';


export default {
    components: {
        ProjForm,ProjList, Header
    
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
        /*createProject(project){
            this.projects.push(project)
            this.modalVisible = false 
        },*/

        createProject(project){
            let data = project
            console.log(project);
            console.log('status = ' + project.status);
            //console.log(project.title);
           const response = axios.post('http://api.chelnokov.site/projects', data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e);
                });
            console.log(response);
            this.modalVisible = false;
        },
        removeProject(project){
            axios.delete('http://api.chelnokov.site/projects/' + project.id)
            .then(response => {
                this.projects.splice(project.id, 1)
                console.log(this.result);
            });

           // this.fetchAllProjects();
        },
        updateProject(project){
            axios.patch('http://api.chelnokov.site/projects/' + project.id)
            .then(response => {
                
            });

           // this.fetchAllProjects();
        },
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