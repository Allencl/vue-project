<style lang="scss">

    .register-html{
        .content-box{
            .btn-box{
                text-align: right;
                // padding: 10px;

                button{
                    margin-left: 15px;
                }
            }
        }
    }
</style>

<template>
    <span class="register-html">
        <div>
            <Steps :current="1">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>
        </div>
        <div class="content-box">
            <Register1 v-if="currentPage==1" />
            <Register2 v-if="currentPage==2" />

        </div>
    </span>
</template>

<script>

    import Register1 from './Register1.vue';   // 供应商声明
    import Register2 from './Register2.vue';   // 基本信息


    export default {
        components:{
            Register1,
            Register2
        },
        data () {
            return {
                currentPage:2,   // 当前页面
            }
        },
        methods: {

        }        
    }
</script>


