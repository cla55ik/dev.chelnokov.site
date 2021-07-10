<template>
     <div class="project" >
         <div class="project-content">
             <div>
                title: {{proj.title}} 
            </div>
            <div>
                id: {{proj.id}} 
            </div>
         </div>
         <div class="project-btns">
             <custom-button @click="$emit('remove', proj)">Скрыть</custom-button>
         </div>
         <div class="project-btns">
             <custom-button @click="$emit('update', proj)">Обновить</custom-button>
         </div>
        
    </div>
</template>

<script>
import CustomButton from './UI/CustomButton.vue'
export default {
  components: { CustomButton },
    props:{
        proj:{
            type: Object,
            required: true
        }
    }
    
}
</script>

<style lang="sass" scoped>

</style>