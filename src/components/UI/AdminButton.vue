<template>
    <button class="custom">
        <slot></slot>

    </button>
</template>

<script>
export default {
    name:'admin-button'
}
</script>

<style scoped>

    .custom{
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;
        padding: 10px 25px;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #fff;
        background: #447AFE;
        
        
    }

</style>