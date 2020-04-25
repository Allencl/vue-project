<template>
    <span>
        <Card>
            <h3 slot="title">
                <!-- <Icon type="ios-film-outline"></Icon> -->
                调研问卷
            </h3>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" :label-colon="true">

                <br/>
                <h4>1、注册资本：</h4>
                <FormItem prop="question1">
                    <Input v-model="formValidate.question1" />
                </FormItem>

                <h4>2、前10大客户名称：</h4>
                <FormItem prop="question2">
                    <Input 
                        v-model="formValidate.question2" 
                        type="textarea" 
                        :autosize="{minRows: 2,maxRows: 5}"                        
                    />
                </FormItem>

                <h4>3、最大产能：</h4>
                <FormItem prop="question3">
                    <RadioGroup v-model="formValidate.question3">
                        <Radio label="100">100W 套 - 10W</Radio>
                        <Radio label="10">10W 套 - 1W套</Radio>
                        <Radio label="1">1W 套以下</Radio>

                    </RadioGroup>
                </FormItem>                  
            </Form>
        </Card>
        <div class="btn-box">
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            <Button type="info" @click="lastStep">上一步</Button>     
            <Button type="primary" @click="saveHandle">完成</Button>
        </div>
    </span>      
</template>
<script>
    import {GlobalBus} from './../common/GlobalBus.js';

    export default {
        data () {
            return {
                formValidate: {
                    question1: '',    // 问题一
                    question2: '',    // 问题二
                    question3:'',     // 问题三

                },
                ruleValidate: {
                    // gender: [
                    //     { required: true, message: '未勾选！', trigger: 'change' }
                    // ],
                    // desc: [
                    //     { required: true, message: '必选！', trigger: 'blur' },
                    //     // { type: 'string', min: 0, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    // ]
                }
            }
        },
		created() {
            var that=this;

			// 保存数据
			GlobalBus.$off("register6_save");
			GlobalBus.$on("register6_save", function (callBack){
                callBack(that.formValidate);
			});
		}, 	        
        methods: {
            /**
             * 上一步
             */
            lastStep(){
                this.$emit('lastStep');
            },            
            /**
             * 完成
             */
            saveHandle () {
                
                this.$refs['formValidate'].validate((valid) => {
                    if (valid) {
                        // 数据录入完成 跳转下一步
                        this.$Message.success({
                            "content":'完成了!',
                            "duration":2  
                        });
                        this.$emit('saveHandle');
                    } else {
                        this.$Message.error({
                            "content":'必填项，未填!',
                            "duration":2  
                        });
                    }
                })
            },
            /**
             * 重置
             */
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>