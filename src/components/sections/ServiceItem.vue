<template>
<div class="service-item-wrapper" v-show="service.status">
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
</div>
  
</template>

<script>
export default {
    props:{
        service:{
            type: Object,
            required: true,
        }
    }

}
</script>

<style lang="scss" scoped>
    .service-item-wrapper{
        margin-bottom: 30px;
    }

    .service-item-wrapper h3{
        margin-bottom: 10px;
    }

    p{
        font-size: 16px;
        font-weight: 300;
        line-height: 1.3em;
    }
    h3{
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
    }

    @media screen and (min-width: 1200px){

        .service-item-wrapper{
            width: 35%;
            margin-right: 10%;
            margin-bottom: 35px;
        }

        h3{
            font-size: 24px;
            line-height: 28px;
        }

        p{
            font-weight: 300;
            font-size: 18px;
            line-height: 24px;
        }
    }
</style>