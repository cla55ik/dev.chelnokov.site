<template>
    <div class="advant-wrapper">
        <div class="number">
            0{{ i +1}}
        </div>
        <div class="content">
            <div class="title">
                {{ advant.title }}
            </div>
            <div class="description">
                {{ advant.description }}
            </div>
        </div>
    </div>
   
  
</template>

<script>
export default {
    props:{
        advant:{
            type: Object,
            required:true,
        },
        i:{
            Number
        },
    }
}
</script>

<style lang="scss" scoped>

    .advant-wrapper{
        margin: 0 15%;
        //display: flex;
        width: 100%;
        margin-bottom: 30px;
    }
    .number{
        
        font-size: 42px;
        line-height: 49px;
        text-align: center;

        color: #00D0E2;
    }

    .title{
        text-align: center;
        font-size: 22px;
        line-height: 26px;
        /* identical to box height */
        margin-bottom: 15px;
        
    }

    .description{
        
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
    }

    .content{
        display: inline-block;
    }

    @media screen and (min-width:1200px) {

          .advant-wrapper{
                display: flex;
                width: 45%;
                margin:0;
                margin-bottom: 50px;
            }

        .description{
            text-align: left;
            font-weight: 300;
            font-size: 18px;
            line-height: 24px;
        }    

        .title{
            text-align: left ;
            font-size: 28px;
            line-height: 33px;
            /* identical to box height */
            margin-bottom: 10px;

            
        }

        .number{
            display: inline-block;
            font-size: 70px;
            line-height: 60px;
            margin-right: 15px;
            
        }
    }
</style>