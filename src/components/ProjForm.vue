<template>
    <form @submit.prevent> 
        <input 
            v-model="project.title"  
            class="input" 
            type="text" 
            placeholder="Название"
        >
        <input 
            v-model="project.body" 
            class="input" 
            type="text" 
            placeholder="Описание"
        >
        <button @click="createProject">Create</button>
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