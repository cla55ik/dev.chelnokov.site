<template>
    <div v-if="projects.length > 0" class="wrapper"> 
        
         <proj-item 
            v-for="proj in projects" 
            :key="proj.id"
            v-bind:proj="proj"
            
            @remove="$emit('remove', proj)"
            @update="$emit('update', proj)"
            />
        
        
    </div>
    <div v-else>
        <h2>Раздел не заполнен</h2>
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

<style lang="scss" scoped>
@media screen and (min-width:1200px) {
    .wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

}
</style>