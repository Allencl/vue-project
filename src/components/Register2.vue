<template>
    <span>
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

            <div class="table-btn">
                <Button type="primary" size="small">新增</Button>
                <Button type="error" size="small">删除</Button>
            </div>
            <Table 
                :columns="columns" 
                :data="formValidate.dataTable"
               
            ></Table>

            <div class="btn-box">
                <FormItem>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                </FormItem>            
            </div> 
        </Form>        
       
    </span>
</template>
<script>
    export default {
        data () {
            return {
                // 表单
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

                                    
                    dataTable: []   // table 数据

                },
                // 表单 验证
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
                    ],

                    address: [
                        { required: true, message: '必选！', trigger: 'change' }
                    ],
                },

 
                // table 列配置
                columns: [],

             
            }
        },
        created(){

            let that=this;

            // 配置列
            this.columns = [
                {
                    title: '地址标签',
                    key: 'address',
                    renderHeader:(h, params) => {
                        return h('div', [
                            h('span', {
                                style:{
                                    color:"#ed4014"
                                }
                            },'*'),
                            h('span', params.column.title)
                        ]);
                    },
                    render: (h, params) => {
                        var key= params.column['key'];
                        var index= params.index;
                        var row = params.row;

                        console.log(params);


                        return h('FormItem',{
                            props:{
                                label:'',
                                prop: 'dataTable[index].address.value', 
                            }
                        },[
                            h('Select',{
                                props:{
                                    transfer:true,
                                    vModel:row[key]['value'],
                                    placeholder:"Select your city"
                                }
                            },[
                                row[key]['children'].map((o)=>{
                                    return h('Option',{
                                    props:{
                                        value:o['value']
                                    }
                                },o['label'])
                                })
                            ])
                        ]);


                        // return h('span','ewe');
                        // return h('Form',{
                        //     props:{
                        //         // ref:`${key}_${index}`, 
                        //         ref:`allenccc`, 
                        //         model: row, 
                        //         rules:this.ruleValidate, 
                        //         labelWidth:0
                        //     }
                        //     },[
                        //        h('FormItem',{
                        //             props:{
                        //               label:'',
                        //               prop:row[key]['value'], 
                        //             }
                        //        },[
                        //            h('Select',{
                        //                 props:{
                        //                     transfer:true,
                        //                     vModel:row[key]['value'],
                        //                     placeholder:"Select your city"
                        //                 }
                        //            },[
                        //                 row[key]['children'].map((o)=>{
                        //                     return h('Option',{
                        //                     props:{
                        //                         value:o['value']
                        //                     }
                        //                 },o['label'])
                        //                 })
                        //            ])
                        //        ]) 
                        //     ]
                        // );

        // <FormItem label="City" prop="city">
        //     <Select v-model="formValidate.city" placeholder="Select your city">
        //         <Option value="beijing">New York</Option>
        //         <Option value="shanghai">London</Option>
        //         <Option value="shenzhen">Sydney</Option>
        //     </Select>
        // </FormItem>


                        // <FormItem label="Name" prop="name">
                        //     <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                        // </FormItem>


                        // return h('span','加载中...');
                        // return h('div', [
                        //     h('Button', {
                        //         props: {
                        //             type: 'error',
                        //             size: 'small'
                        //         },
                        //         on: {
                        //             click: () => {
                        //                 this.removeRow(params.index);
                        //             }
                        //         }
                        //     }, 'Delete')
                        // ]);
                    }                    
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.removeRow(params.index);
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }                
            ];


            // table 数据
            setTimeout(()=>{
                this.tableInit();
            },1000);
        },
        methods: {
            /**
             * 下一步
             */            
            handleSubmit (name) {
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('Success!');
                //     } else {
                //         this.$Message.error('Fail!');
                //     }
                // });

                console.log( this.$refs );
                this.$refs['allenccc'].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
                
            },
            /**
             * 重置
             */
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            /**
             * 删除行
             */
            removeRow (index){
                 this.formValidate.dataTable.splice(index, 1);
            },
            /**
             * table 初始化 
            */
            tableInit(){

                // 地址 list
                var addrList=[
                    {
                        value: 'register',
                        label: '注册'
                    },
                    {
                        value: 'office',
                        label: '办公'
                    }
                ];

                this.formValidate.dataTable=[
                    {
                        address:{
                            formName:'address',
                            value: '',
                            children:addrList
                        } 
                    }
                ];
            }
        }
    }
</script>