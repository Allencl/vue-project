<style lang="scss">

    .register-html{
        position: relative;
        padding: 100px 64px 64px 64px;
        display: block;

        .head{
            background: #fff;
            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 1;
            width: 100%;
            // height: 200px;
            // height: ;
        }

        .content-box{

            .table-FormItem{
                margin-bottom: 0px;

                .ivu-form-item-content{
                    margin-left: 0px !important;
                    margin-bottom: 0px;
                }

                .ivu-form-item-error-tip{
                    display: none;
                }
            }

            .table-btn{
                margin: 16px 0px;
                button{
                    margin-right: 8px;
                }
            }

            .btn-box{
                text-align: right;
                margin: 16px 0px;
                // padding: 10px;

                button{
                    margin-left: 16px;
                }
            }

            .ivu-radio-wrapper{
                margin-right: 12px;

                .ivu-radio{
                    margin-right: 6px;
                }
            }

            .ivu-checkbox-wrapper{
                margin-right: 12px;

                .ivu-checkbox{
                    margin-right: 3px;
                }
            }
        }
    }
</style>

<template>
    <span class="register-html">
        <div class="head">
            <h2 style="text-align:center">供应商申请注册</h2>
            <Steps :current="1">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>


            <!-- <Divider /> -->

        </div>
        <div class="content-box">
            <Register1 v-if="currentPage==1" @lastStep="lastStep" @nextStep="nextStep" />
            <Register2 v-if="currentPage==2" @lastStep="lastStep" @nextStep="nextStep" />
            <Register3 v-if="currentPage==3" @lastStep="lastStep" @nextStep="nextStep" />


        </div>
    </span>
</template>

<script>

    import Register1 from './Register1.vue';   // 供应商声明
    import Register2 from './Register2.vue';   // 基本信息
    import Register3 from './Register3.vue';   // 供应商资质信息


    export default {
        components:{
            Register1,
            Register2,
            Register3
        },
        data () {
            return {
                currentPage:3,   // 当前页面
            }
        },
        methods: {
            /**
             * 上一步
             */
            lastStep(){
                this.currentPage=this.currentPage-1;
            },
            /**
             * 下一步
             */
            nextStep(){
                this.currentPage=this.currentPage+1;
            }            
        }        
    }
</script>


