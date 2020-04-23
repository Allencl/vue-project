<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">

        <FormItem label="供应商申明" prop="desc">
            <Input 
                v-model="formValidate.desc" 
                type="textarea" 
                :autosize="{minRows: 12,maxRows: 15}" 
                readonly
            />
        </FormItem>
        <FormItem>
        <FormItem label="" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="agree">已经查看申明类型，并同意</Radio>
            </RadioGroup>
        </FormItem>
        <div class="btn-box">
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            <Button type="primary" @click="handleSubmit('formValidate')">下一步</Button>
        </div>
        </FormItem>
    </Form>
</template>
<script>
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
        methods: {
            /**
             * 下一步
             */
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('必填项，未填!');
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