<template>
    <form @submit.prevent="createProject"> 
        <custom-input 
            v-model="project.title"  
            
            type="text" 
            placeholder="Название"
        />
        <custom-input 
            v-model="project.description" 
            
            type="text" 
            placeholder="Описание"
        />
        <custom-input 
            v-model="project.img" 
            
            type="text" 
            placeholder="Изображение"
        />
        <custom-input 
            v-model="project.stack" 
            
            type="text" 
            placeholder="Стек технологий"
        />
        <custom-input 
            v-model="project.url_site" 
            
            type="text" 
            placeholder="Ссылка на сайт"
        />
        <input 
        type="checkbox" 
        v-model="project.status"
        true-value=1
        false-value=0
        
        />
        <div>ps = {{project.status}}</div>
        <custom-button >Create</custom-button>
    </form>
</template>

<script>

export default {
    
    data(){
        return{
            project:{
                type:'project',
                title:'',
                description:'',
                img:'',
                stack:'',
                url_site:'',
                url_git:'',
                status:''
            }
        }
    },
    methods:{
        createProject(){
            //this.project.id = Date.now();
            this.$emit('create', this.project);
            this.project = {
                description: '',
                title: '',
                img:'',
                stack:'',
                url_site:'',
                url_git:'',
                status:''

            };
            
             
        }
    }
}
</script>

<style lang="sass" scoped>

.input
    width:100% 


</style>