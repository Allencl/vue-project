<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <FormItem label="公司" prop="company">
            <Input v-model="formValidate.company" placeholder="请输入公司名称..." />
        </FormItem>
        <FormItem label="简称" prop="companyLogogram">
            <Input v-model="formValidate.companyLogogram" placeholder="请输入公司简称..." />
        </FormItem>        
        <FormItem label="境内/境外" prop="state">
            <RadioGroup v-model="formValidate.state">
                <Radio label="inland">境内</Radio>
                <Radio label="foreign">境外</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="业务线" prop="business">
            <Select v-model="formValidate.business" placeholder="请选择">
                <Option value="car">商用车</Option>
                <Option value="bus">公交车</Option>
            </Select>
        </FormItem>
        <FormItem label="企业性质" prop="companyType">
            <Select v-model="formValidate.companyType" placeholder="请选择">
                <Option value="stockholdingSystem">股份制</Option>
                <Option value="prOivateOwnership">私有制</Option>
            </Select>
        </FormItem>
        <FormItem label="供应商类型" prop="supplierType">
            <CheckboxGroup v-model="formValidate.supplierType">
                <Checkbox label="轻卡" name="s"></Checkbox>
                <Checkbox label="重卡" name="2"></Checkbox>
                <Checkbox label="电动车" name="sdd"></Checkbox>
                <Checkbox label="摩托车" name="ggs"></Checkbox>
            </CheckboxGroup>
        </FormItem>        
        <FormItem label="合作意向" prop="intention">
            <Input v-model="formValidate.intention" placeholder="请输入合作意向..." />
        </FormItem>
        <FormItem label="统一社会信用代码" prop="code">
            <Input v-model="formValidate.code" placeholder="请输入统一社会信用代码..." />
        </FormItem>
        <FormItem label="备注" prop="remark">
            <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入备注..." />
        </FormItem>

        <div class="btn-box">
            <FormItem>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            </FormItem>            
        </div>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    company: '',            // 公司
                    companyLogogram: '',    // 简称
                    state: '',             // 境内 境外
                    business: '',           // 业务线
                    companyType: '',        // 企业性质
                    supplierType: [],      //  供应商类型
                    intention:'',          // 合作意向
                    code:'',                // 统一社会信用代码
                    remark: '',             // 备注

                },
                ruleValidate: {
                    company: [
                        { required: true, message: '必填！', trigger: 'blur' }
                    ],
                    companyLogogram: [
                        { required: true, message: '必填！', trigger: 'blur' }
                    ],                    
                    state: [
                        { required: true, message: '必选！', trigger: 'change' }
                    ],
                    business: [
                        { required: true, message: '必选！', trigger: 'change' }
                    ],
                    companyType: [
                        { required: true, message: '必选！', trigger: 'change' }
                    ],
                    supplierType: [
                        { required: true, type: 'array', min: 1, message: '必选！', trigger: 'change' },
                        // { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    intention: [
                        { required: true, message: '必填！', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '必填！', trigger: 'blur' }
                    ],
                    remark: [
                        // { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        // { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>