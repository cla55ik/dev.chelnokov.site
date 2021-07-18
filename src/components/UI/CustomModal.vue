<template>
  <div class="modal" v-if="show === true" @click="hideModal" >
      <div class="modal-content" @click.stop>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'custom-modal',
    props:{
        show:{
            type: Boolean,
            default:false
        }
    },
    methods:{
        hideModal(){
            this.$emit('update:show', false)
        }
    }

}
</script>

<style scoped>
.modal{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    display: flex;
}

.modal-content{
    margin: auto;
    background: floralwhite;
    border-radius: 20px;
    padding: 20px;
}

</style>

