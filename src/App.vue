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
import axios from 'axios';


export default {
    components: {
        ProjForm,ProjList
    
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
            console.log(project);
            console.log(project.title);
           const response = axios.post('http://api.chelnokov.site/projects', {
                title: project.title,
                description: project.description,
            })
                .then(response => {})
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
  *{
        margin:0;
        padding:0;
        box-sizing: border-box;
  }

</style>