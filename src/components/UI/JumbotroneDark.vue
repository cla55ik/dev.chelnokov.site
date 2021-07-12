<template>
  <span class="wrapper">
      <slot></slot>
  </span>
</template>

<script>
export default {
    name:'jumbotrone-dark',
}
</script>

<style lang="scss" scoped>
    .wrapper{
        background: #484E5B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: center;

        color: #9A9A9C;

        padding: 10px 20px;
    }

    @media screen and (min-width:1200px) {
        .wrapper{
            font-size: 16px;
            line-height: 19px;
        }
        
    }
</style>