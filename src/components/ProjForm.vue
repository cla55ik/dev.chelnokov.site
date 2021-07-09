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
        <custom-button >Create</custom-button>
    </form>
</template>

<script>

export default {
    
    data(){
        return{
            project:{
                title:'',
                description:'',
            }
        }
    },
    methods:{
        createProject(){
            //this.project.id = Date.now();
            this.$emit('create', this.project);
            this.project = {
                description: '',
                title: ''
            }
             
        }
    }
}
</script>

<style lang="sass" scoped>

.input
    width:100% 


</style>