<template>
  <div class="wrapper">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'jumbotrone-light',
}
</script>

<style lang="scss" scoped>
    .wrapper{
        background: #F0EDF6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: center;

        color: #9A9A9C;

        padding: 10px 20px;

        display: inline-block;
        width: auto;
    }

    @media screen and (min-width:1200px) {
        .wrapper{
            font-size: 16px;
            line-height: 19px;
        }
        
    }
</style>