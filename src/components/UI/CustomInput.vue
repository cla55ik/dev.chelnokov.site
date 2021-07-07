<template>
    <input v-bind:value="modelValue" @input="updateInput" class="custom" type="text">
</template>

<script>
export default {
    name:'custom-input',
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

<style scoped>
.custom{
    border-radius: 0px;
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;   
    border-bottom: 1px solid #1A1D23 ;
    width: 70%;
    margin-top: 20px;
}

</style>