<template>
  <input class="input-text" v-bind:value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
    name:'input-text',
    props:{
        modelValue:[String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }

}
</script>

<style lang="scss" scoped>
    .input-text{
        background: #FFFFFF;
        border: 1px solid #606060;
        box-sizing: border-box;
        border-radius: 10px;
        width: 95%;
        padding: 5px 10px;
        margin-bottom: 15px;
    }

    @media screen and (min-width:1200px) {
        
    }
</style>