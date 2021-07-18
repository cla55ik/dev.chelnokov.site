<template>
  <div class="wrapper">
      List
  </div>
  <ProjectItemAdmin
  v-for="(proj, index) in projects"
  :key="proj.id"
  v-bind:proj="proj"
  @delete="$emit('delete', proj, index)"
  >
  </ProjectItemAdmin>
</template>

<script>
import ProjectItemAdmin from '@/components/admin/ProjectItemAdmin'
//import axios from 'axios'
export default {
    components:{
        ProjectItemAdmin
    },
    props:{
        projects:{
            type: Array,
            required: true
        }
    },
    


}
</script>

<style>

</style>