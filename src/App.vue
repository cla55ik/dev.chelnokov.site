<template>
    <div>
        Страница с проектами
        <custom-button @click="fetchProject">
            Загрузить проекты
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
import CustomButton from './components/UI/CustomButton.vue';

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
        createProject(project){
            this.projects.push(project)
            this.modalVisible = false 
        },
        removeProject(project){
            this.projects = this.projects.filter( p => p.id !== project.id)
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