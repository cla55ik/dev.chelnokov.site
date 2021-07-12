<template>
<div class="wrapper">
<AdvantageItem
  v-for="(advant, index) in advantages"
    :key="index"
    v-bind:advant="advant"
    v-bind:i="index"
  >

  </AdvantageItem>
</div>
  
</template>

<script>
import AdvantageItem from '@/components/sections/AdvantageItem.vue'
export default {
  components: { 
    AdvantageItem 
    },
  props:{
      advantages:{
          type:Array,
          required: true,
      }
  }

}
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>