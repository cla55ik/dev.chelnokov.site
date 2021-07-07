<template>
     <div class="project" >
        <div>
           title: {{proj.title}} 
        </div>
        <div>
           body: {{proj.body}} 
        </div>
    </div>
</template>

<script>
export default {
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