<template>
     <div class="project" >
         <div class="project-content">
             <div>
                title: {{proj.title}} 
            </div>
            <div>
                body: {{proj.body}} 
            </div>
         </div>
         <div class="project-btns">
             <custom-button @click="$emit('remove', proj)">Скрыть</custom-button>
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