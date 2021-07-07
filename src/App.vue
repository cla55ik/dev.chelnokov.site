<template>
    <div>
        sss
    </div>
    <proj-form
        @create="createProject"
    />
    <proj-list
        v-bind:projects="projects"
        
    />
</template>

<script>

import ProjList from "@/components/ProjList"
import ProjForm from '@/components/ProjForm';

export default {
    components: {
        ProjForm,ProjList
    },
    data() {
        return{
            projects:[
                {id:1, title:'Resume', body:'Сайт резюме'},
                {id:2, title:'Resume2', body:'Сайт резюме'},
                {id:3, title:'Resume3', body:'Сайт резюме'},
                {id:4, title:'Resume4', body:'Сайт резюме'},
            ],
            
        }
    },

    methods:{
        createProject(project){
            this.projects.push(project) 
        },
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