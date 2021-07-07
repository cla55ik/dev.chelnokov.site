<template>
    <form @submit.prevent> 
        <custom-input 
            v-model="project.title"  
            
            type="text" 
            placeholder="Название"
        />
        <custom-input 
            v-model="project.body" 
            
            type="text" 
            placeholder="Описание"
        />
        <custom-button @click="createProject">Create</custom-button>
    </form>
</template>

<script>

export default {
    
    data(){
        return{
            project:{
                title:'',
                body:'',
            }
        }
    },
    methods:{
        createProject(){
            this.project.id = Date.now();
            this.$emit('create', this.project);
            this.project = {
                body: '',
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