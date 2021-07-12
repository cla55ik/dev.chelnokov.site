<template>
<div class="price-list">
<PriceItem
    v-for="(price, index) in prices"
    :key="index"
    v-bind:price="price"
  >
  </PriceItem> 
</div>
    
</template>

<script>
import PriceItem from '@/components/PriceItem';
export default {
    components:{
        PriceItem
    },
    props:{
        prices:{
            type: Array,
            required: true,
        }
    }

}
</script>

<style lang="scss" scoped>
    .price-list{
        display: block;
    }

    @media screen and (min-width:1200px) {
        .price-list{
            display: flex;
            justify-content: space-between;
        }
    }
</style>