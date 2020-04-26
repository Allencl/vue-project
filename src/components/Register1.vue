<template>
    <span>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" :label-colon="true">

            <br/>
            <h3 style="margin-bottom:16px">供应商申明</h3>
            <FormItem label="" prop="desc">
                <Input 
                    v-model="formValidate.desc" 
                    type="textarea" 
                    :autosize="{minRows: 12,maxRows: 15}" 
                    readonly
                />
            </FormItem>


            <FormItem label="" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="agree">已经查看申明类型，并同意</Radio>
                </RadioGroup>
            </FormItem>

        </Form> 
        <div class="btn-box">
            <!-- <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button> -->
            <Button type="primary" @click="nextStep">下一步</Button>
        </div>
    </span>           
</template>
<script>
    import {GlobalBus} from './../common/GlobalBus.js';

    export default {
        data () {
            return {
                formValidate: {
                    desc: '1、这里是一些规则'
                },
                ruleValidate: {
                    gender: [
                        { required: true, message: '未勾选！', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '必选！', trigger: 'blur' },
                        // { type: 'string', min: 0, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
		created() {
            var that=this;

			// 保存数据
			GlobalBus.$off("register1_save");
			GlobalBus.$on("register1_save", function (callBack){
                callBack(that.formValidate);
			});
		}, 	        
        methods: {
            /**
             * 下一步
             */
            nextStep () {
                
                this.$refs['formValidate'].validate((valid) => {
                    if (valid) {
                        // 数据录入完成 跳转下一步
                        this.$Message.success({
                            "content":'填写完成!',
                            "duration":2  
                        });
                        this.$emit('nextStep');
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