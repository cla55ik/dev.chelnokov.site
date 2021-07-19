<template>
<div class="section">
    <div >
        <admin-button
        @click="showModal">
            Создать новый
        </admin-button>
    </div>
    <ProjectsListAdmin
  
    v-bind:projects="projects"
    @delete="deleteProject"
    >
    </ProjectsListAdmin>
</div>
<custom-modal 
    v-model:show="modalVisible"
  
    >
    <project-create-form
        @create="createProject"
    >
    </project-create-form>
</custom-modal>

</template>

<script>
import ProjectCreateForm from '@/components/forms/ProjectCreateForm'
import ProjectsListAdmin from '@/components/admin/ProjectsListAdmin' 
import axios from 'axios'

export default {
    components:{
        ProjectsListAdmin, ProjectCreateForm
        
    },
    data(){
        return{
            projects:[],
            modalVisible: false,
        }
    },
    methods:{
        showModal(){
            this.modalVisible = true
        },
        
        async getAllProjects() {
            try{
                const response = await axios.get('http://api.chelnokov.site/admin/projects');
                
                this.projects = response.data;
            } catch(e){
                    alert('Error');
                }
            },
        createProject(project){
            let data = project;
            axios.post('http://api.chelnokov.site/projects', data)
            .then(response=> {
                console.log(response)
                this.getAllProjects
            })
            .catch(e=>console.log(e))
        },
        deleteProject(project, index){
            axios.delete(`http://api.chelnokov.site/projects/` + project.id)
                .then(response => {
                    let id = response.id;
                    this.projects.splice(index, 1);
                    console.log(response);
                    //this.getAllProjects;
                    })
                .catch(e => console.log(e))
        }

    },
    mounted(){
        this.getAllProjects()
    }

}
</script>

<style>

</style>