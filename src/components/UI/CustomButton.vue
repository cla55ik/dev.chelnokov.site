<template>
    <button class="custom">
        <slot></slot>

    </button>
</template>

<script>
export default {
    name:'custom-button'
}
</script>

<style scoped>
    .custom{
        padding: 10px 25px;
        font-size: 18px;
        font-weight: 600;
        color: #1A1D23;
        background-color: transparent;
        border-radius: 0px;
        border: 1px solid #1A1D23 ;
        
    }

</style>