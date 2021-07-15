<template>
<div class="wrapper">
    <service-item
        v-for="(service, index) in services"
        :key="index"
        v-bind:service="service"
    >

    </service-item>
</div>
  
</template>

<script>
import ServiceItem from '@/components/sections/ServiceItem.vue'
export default {
  components: { ServiceItem },
  props:{
      services:{
          type: Array,
          required: true,
      }
  },

}
</script>

<style lang="scss" scoped>
    .wrapper{
        
        margin: 0 20px;
    }

    @media screen and (min-width:1200px) {
        .wrapper{
            display: flex;
            flex-wrap: wrap;
            margin:65px 0px 0px 0px;
            
        }
    }

</style>