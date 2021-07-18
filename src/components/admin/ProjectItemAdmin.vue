<template>
  <div class="wrapper">
      <div class="content">
          <div class="title">
              {{ proj.title }}
          </div>
          <div class="">

          </div>
      </div>
      <div class="control">
        <admin-button
            @click="$emit('delete', proj, index)"    
        >
            Удалить  {{proj.id}}
        </admin-button>
          <admin-button>
            Обновить
        </admin-button>

      </div>
      
  </div>
</template>

<script>
export default {
    
    props:{
        proj:{
            type: Object,
            required: true
        }
    },
    

}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    padding:25px;
    border-radius: 50px;
    border: 1px solid #000;
    margin-bottom: 30px;
}
.content{
    width: 70%;
}

</style>