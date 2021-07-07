<template>
    <div>
        <h3>Projects</h3>
         <proj-item 
            v-for="proj in projects" 
            :key="proj.id"
            v-bind:proj="proj"
            
            @remove="$emit('remove', proj)"
            />
        
        
    </div>
   
</template>

<script>
import ProjItem from '@/components/ProjItem.vue'
export default {
  components: { ProjItem },
    
    props:{
        projects:{
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>