<style lang="scss">

    .register-html{
        position: relative;
        // padding: 150px 64px 64px 64px;
        // padding: 0px 32px;
        display: block;
        padding-bottom: 50px;

        .head{
            background: #fff;
            // position: fixed;
            top: 0px;
            left: 0px;
            z-index: 991;
            width: 100%;
            padding: 6px 16px 0px 16px;
            // height: 200px;
            // height: ;

            h2{
                margin-top: 10px;
                margin-bottom: 30px;
            }

            .ivu-divider{
                margin: 0px;
            }

            ul{
                margin-bottom: 8px;

                li.action{
                    color: #fff;
                    background:url('./../../public/backg1.png');
                    background-repeat: no-repeat;   //不重复
                    background-size: 100% 100%;     // 满屏
                }

                li{
                    // position: relative;
                    display: inline-block;
                    width: 140px;
                    height: 36px;
                    text-align: center;
                    line-height: 38px;
                    // background: yellow;
                    padding: 0px 12px;
                    margin-right: 22px;
                    font-size: 16px;
                    
                    // border: 1px solid red;

                    // background:url('./../../public/arrows1.svg');


                    // img{
                    //     position: absolute;
                    //     top: 0px;
                    //     right: 0px;
                    //     width: 20px;
                    //     height: 20px;
                    // }

                    span{
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
            }
        }

        .content-box{
            padding: 32px 32px;
            overflow-y: auto;


            &::-webkit-scrollbar {
                width : 3px;  
                height: 1px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
                background   : #ccc;
            }
            &::-webkit-scrollbar-track {
                box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                background   : #fff;
            }


            .title-text{
                line-height: 36px;
            }

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
                position: absolute;
                bottom: 0px;
                right: 0px;
                text-align: right;
                padding: 16px 36px;
                padding-bottom: 0px;
                width: 100%;
                z-index: 911;
                background: #fff;
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

            .checkbox-box{
                .ivu-checkbox-checked .ivu-checkbox-inner {
                    border-color: #2d8cf0;
                    background-color: #2d8cf0;
                }

                .ivu-checkbox-disabled.ivu-checkbox-checked .ivu-checkbox-inner:after {
                    border-color: #fff;
                }
            }
        }

        .qualification-page{
            .ivu-row{
                .ivu-col{
                    text-align: center;
                    padding: 0px 16px;

                    &.checkbox-box{
                        text-align: left;
                    }
                }
            }
            
            .ivu-form-item-error-tip{
                // width: 100%;
            }
        }
    }
</style>

<template>
    <div class="register-html">
        <div class="head">
            <h2 style="text-align:center">供应商申请注册</h2>
            <ul>
                <li :class="currentPage>=1?'action':''">
                    <span>供应商声明</span>
                </li>
                <li :class="currentPage>=2?'action':''">
                    <span>基本信息</span>
                </li>
                <li :class="currentPage>=3?'action':''">
                    <span>供应商资质信息</span>
                </li>
                <li :class="currentPage>=4?'action':''">
                    <span>财务信息</span>
                </li>
                <li :class="currentPage>=5?'action':''">
                    <span>供应商联系人</span>
                </li>
                <li :class="currentPage>=6?'action':''">
                    <span>调研问卷</span>
                </li>                                                                                
            </ul>

            <Divider />

        </div>
        <div class="content-box" :style="{height:outerHeight+'px'}">
            <Register1 v-show="currentPage==1" @lastStep="lastStep" @nextStep="nextStep" />
            <Register2 v-show="currentPage==2" @lastStep="lastStep" @nextStep="nextStep" />
            <Register3 v-show="currentPage==3" @lastStep="lastStep" @nextStep="nextStep" />
            <Register4 v-show="currentPage==4" @lastStep="lastStep" @nextStep="nextStep" />
            <Register5 v-show="currentPage==5" @lastStep="lastStep" @nextStep="nextStep" />
            <Register6 v-show="currentPage==6" @lastStep="lastStep" @nextStep="nextStep" @saveHandle="saveHandle" />
        </div>
    </div>
</template>

<script>

    import Register1 from './Register1.vue';   // 供应商声明
    import Register2 from './Register2.vue';   // 基本信息
    import Register3 from './Register3.vue';   // 供应商资质信息
    import Register4 from './Register4.vue';   // 财务信息
    import Register5 from './Register5.vue';   // 供应商联系人
    import Register6 from './Register6.vue';   // 调研问卷


    import {GlobalBus} from './../common/GlobalBus.js';
    import img1 from './../../public/arrows1.svg';
    import img2 from './../../public/arrows2.svg';


    export default {
        components:{
            Register1,
            Register2,
            Register3,
            Register4,
            Register5,
            Register6
        },
        data () {
            return {
                outerHeight:window.innerHeight-240,
                img1:img1,
                img2:img2,

                currentPage:1,   // 当前页面
                
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
            },
            /**
             * 保存数据
             *  
             * */
            saveHandle(){
                var register1={};     // 供应商声明
                var register2={};    // 基本信息
                var register3={};    // 供应商资质信息
                var register4={};    // 财务信息
                var register5={};    // 供应商联系人
                var register6={};    // 调研问卷
  

                GlobalBus.$emit("register1_save",function(option){
                    register1=option;
                });

                GlobalBus.$emit("register2_save",function(option){
                    register2=option;
                });

                GlobalBus.$emit("register3_save",function(option){
                    register3=option;
                });

                GlobalBus.$emit("register4_save",function(option){
                    register4=option;
                });

                GlobalBus.$emit("register5_save",function(option){
                    register5=option;
                });

                GlobalBus.$emit("register6_save",function(option){
                    register6=option;
                });				

                
                // 最后保存的数据
                var params={
                   register1:register1,
                   register2:register2, 
                   register3:register3, 
                   register4:register4, 
                   register5:register5, 
                   register6:register6, 

                }

                console.log(params);
    
            }            
        }        
    }
</script>


