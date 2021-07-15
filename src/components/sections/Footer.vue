<template>
    <footer>
        <div class="section">
            <div class="title-wrapper">
                <jumbotrone-dark>
                    Обсудить проект
                </jumbotrone-dark>
                <h2>Обсудить детали будущего проекта</h2>
            </div>
            sss
            <div class="form-wrapper">
                <FormProjectDetail
                    v-model="projectdetailform"
                >
                </FormProjectDetail>
            </div>
        </div>
        
    </footer>
</template>

<script>
import FormProjectDetail from '@/components/forms/FormProjectDetail'

export default {
    components:{
        FormProjectDetail
        
    }
    
}
</script>

<style lang="scss" scoped>
    footer{
        background: #F0EDF6;
        padding-bottom: 40px;
        padding-top: 60px;
        text-align: center;
    }

</style>