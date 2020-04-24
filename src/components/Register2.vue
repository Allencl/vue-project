<template>
    <span>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
            <Row>
                <Col span="12">
                    <FormItem label="公司" prop="company">
                        <Input v-model="formValidate.company" placeholder="请输入公司名称..." />
                    </FormItem>                
                </Col>
                <Col span="12">
                    <FormItem label="简称" prop="companyLogogram">
                        <Input v-model="formValidate.companyLogogram" placeholder="请输入公司简称..." />
                    </FormItem>               
                </Col>                
            </Row>
            <Row>
                <Col span="12">
                    <FormItem label="企业性质" prop="companyType">
                        <Select v-model="formValidate.companyType" placeholder="请选择">
                            <Option value="stockholdingSystem">股份制</Option>
                            <Option value="prOivateOwnership">私有制</Option>
                        </Select>
                    </FormItem>              
                </Col>                
                <Col span="12">
                    <FormItem label="境内/境外" prop="state">
                        <RadioGroup v-model="formValidate.state">
                            <Radio label="inland">境内</Radio>
                            <Radio label="foreign">境外</Radio>
                        </RadioGroup>
                    </FormItem>              
                </Col>
            </Row>
            <Row>
                <Col span="12">
                    <FormItem label="业务线" prop="business">
                        <Select v-model="formValidate.business" placeholder="请选择">
                            <Option value="car">商用车</Option>
                            <Option value="bus">公交车</Option>
                        </Select>
                    </FormItem>              
                </Col>
                <Col span="12">
                    <FormItem label="供应商类型" prop="supplierType">
                        <CheckboxGroup v-model="formValidate.supplierType">
                            <Checkbox label="轻卡" name="s"></Checkbox>
                            <Checkbox label="重卡" name="2"></Checkbox>
                            <Checkbox label="电动车" name="sdd"></Checkbox>
                            <Checkbox label="摩托车" name="ggs"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>             
                </Col>                
            </Row>                               
            <Row>
                <Col span="12">
                    <FormItem label="统一社会信用代码" prop="code">
                        <Input v-model="formValidate.code" placeholder="请输入统一社会信用代码..." />
                    </FormItem>            
                </Col>
                <Col span="12">
                    <FormItem label="合作意向" prop="intention">
                        <Input v-model="formValidate.intention" placeholder="请输入合作意向..." />
                    </FormItem>            
                </Col>                
            </Row> 
            <Row>
                <Col span="24">
                    <FormItem label="备注" prop="remark">
                        <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入备注..." />
                    </FormItem>            
                </Col>
            </Row> 

            <br/>
            <Divider />
            
            <div class="table-btn">
                <Button type="primary" size="small" icon="md-add" @click="addRow">新增</Button>
                <Button type="error" size="small" icon="md-trash" @click="deleteAll">全部删除</Button>
            </div>
            <div>
                <mark>注：每种地址标签如有多条，可维护多列。</mark>
                <span></span>
            </div>
            <Table 
                :columns="columns" 
                :data="formValidate.dataTable"
               
            ></Table>

            <div class="btn-box">
                <FormItem>
                    <Button type="warning" @click="handleReset">重置</Button>
                    <Button type="info" @click="lastStep">上一步</Button>
                    <Button type="primary" @click="nextStep">下一步</Button>
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

                },

 
                // table 列配置
                columns: [],
                rowData:[],   // 行数据

             
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

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Select',{
                                props:{
                                    transfer:true,
                                    placeholder:"请选择地址标签..."
                                },
                                on: {  
                                    'on-change':(value) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:value});
                                            return Object.assign({},o,{[key]:json});
                                        });
                                    }  
                                },  
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
                    }                    
                },
                {
                    title: '国家',
                    key: 'country',
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

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Select',{
                                props:{
                                    transfer:true,
                                    placeholder:"请选择国家..."
                                },
                                on: {  
                                    'on-change':(value) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:value});
                                            return Object.assign({},o,{[key]:json});
                                        });
                                    }  
                                },  
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
                    }                    
                }, 
                {
                    title: '省',
                    key: 'provincial',
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

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error: ( (row[key]['required']) && (row[key]['value']))?'':'必填！'
                            }
                        },[
                            h('Select',{
                                props:{
                                    transfer:true,
                                    placeholder:"请选择省..."
                                },
                                on: {  
                                    'on-change':(value) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:value});
                                            return Object.assign({},o,{[key]:json});
                                        });
                                    }  
                                },  
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
                    }                    
                },   
                {
                    title: '市',
                    key: 'city',
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

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Select',{
                                props:{
                                    transfer:true,
                                    placeholder:"请选择市..."
                                },
                                on: {  
                                    'on-change':(value) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:value});
                                            return Object.assign({},o,{[key]:json});
                                        });
                                    }  
                                },  
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
                    }                    
                }, 
                {
                    title: '县/区',
                    key: 'county',
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

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Select',{
                                props:{
                                    transfer:true,
                                    placeholder:"请选择县/区..."
                                },
                                on: {  
                                    'on-change':(value) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:value});
                                            return Object.assign({},o,{[key]:json});
                                        });
                                    }  
                                },  
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
                    }                    
                },  
                {
                    title: '街道',
                    key: 'street',
                    minWidth:180,
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

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Input',{
                                props:{
                                    placeholder:"请输入详细街道地址..."   
                                },
                                on: {  
                                    'on-change':(event) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:event.target.value});
                                            return Object.assign({},o,{[key]:json});
                                        });                                        
                                    }  
                                },   
                            })
                        ]);
                    }                    
                },  
                {
                    title: '邮政编码',
                    key: 'postalCode',
                    width:180,
                    renderHeader:(h, params) => {
                        return h('div', [
                            // h('span', {
                            //     style:{
                            //         color:"#ed4014"
                            //     }
                            // },'*'),
                            h('span', params.column.title)
                        ]);
                    },
                    render: (h, params) => {
                        var key= params.column['key'];
                        var index= params.index;
                        var row = params.row;

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Input',{
                                props:{
                                    placeholder:"请输入邮政编码..."   
                                },
                                on: {  
                                    'on-change':(event) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index) json=Object.assign({},json,{value:event.target.value});
                                            return Object.assign({},o,{[key]:json});
                                        });                                         
                                    }  
                                },   
                            })
                        ]);
                    }                    
                },
                {
                    title: '主地址',
                    key: 'main',
                    width:120,
                    renderHeader:(h, params) => {
                        return h('div', [
                            // h('span', {
                            //     style:{
                            //         color:"#ed4014"
                            //     }
                            // },'*'),
                            h('span', params.column.title)
                        ]);
                    },
                    render: (h, params) => {
                        var key= params.column['key'];
                        var index= params.index;
                        var row = params.row;

                        return h('FormItem',{
                            class:"table-FormItem",
                            props:{
                                error:  (row[key]['value'])?'':( (row[key]['required'])?'必填！':'')
                            }
                        },[
                            h('Checkbox',{
                                props:{
                                    value:row[key]['value']
                                },
                                on: {  
                                    'on-change':(value) => { 
                                        that.formValidate.dataTable=that.formValidate.dataTable.map((o,i)=>{
                                            var json=o[key];
                                            if(i==index){
                                                json=Object.assign({},json,{value:value});
                                            } else{
                                                json=Object.assign({},json,{value:false});
                                            }
                                            return Object.assign({},o,{[key]:json});
                                        });                                         
                                    }  
                                }, 
                            },(row[key]['value']?'是':'否'))
                        ]);
                    }                    
                },                                                                                                              
                {
                    title: '操作',
                    key: 'action',
                    width:80,
                    align: 'center',
                    render: (h, params) => {
  
                        return h('div', [
                            h('Button', {
                                attrs:{
                                    title:'删除'
                                },
                                props: {
                                    type: 'error',
                                    size: 'small',
                                    icon:"md-close-circle",
                                },
                                on: {
                                    click: () => {
                                        this.removeRow(params.index);
                                    }
                                }
                            })
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
             * 上一步
             */
            lastStep(){

            },
            /**
             * 下一步
             */            
            nextStep (name) {

                this.$refs['formValidate'].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });

                console.log( this.formValidate );
                // this.$refs['allenccc'].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('Success!');
                //     } else {
                //         this.$Message.error('Fail!');
                //     }
                // });
                
            },
            /**
             * 重置
             */
            handleReset () {
                this.$refs['formValidate'].resetFields();
            },
            /**
             * 删除行
             */
            removeRow (index){
                this.formValidate.dataTable.splice(index, 1);
            },
            /**
             * 删除全部
             */
            deleteAll(){
                this.formValidate.dataTable=[];
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


                // 国家
                var countryList=[
                    {
                        value: 'China',
                        label: '中国'
                    },
                    {
                        value: 'America',
                        label: '美国'
                    }
                ];

                // 省
                var provincialList = [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    }                    
                ];

                // 市
                var cityList = [
                    {
                        value: 'zunyi',
                        label: '遵义市'
                    },
                    {
                        value: 'nantong',
                        label: '南通市'
                    }                    
                ];


                // 县/区
                var countyList=[
                    {
                        value: '徐汇',
                        label: '徐汇区'
                    },
                    {
                        value: 'luwan',
                        label: '卢湾区'
                    }                     
                ];


                // 模拟行数据
                this.rowData=[
                    {
                        address:{
                            required:true,   // 必填
                            value: '',       // 选中值
                            children:addrList  // 下拉数据
                        },
                        country:{
                            required:true,
                            value: '',
                            children:countryList
                        },
                        provincial:{
                            required:true,
                            value: '',
                            children:provincialList
                        },
                        city:{
                            required:true,
                            value: '',
                            children:cityList
                        }, 
                        county:{
                            required:true,
                            value: '',
                            children:countyList
                        },
                        street:{
                            required:true,
                            value: '',                            
                        },
                        postalCode:{
                            required:false,
                            value: '',                            
                        },
                        main:{
                            required:false,
                            value: false,                              
                        }                                                                            
                    }
                ];
            },
            /**
             * table 新增行
             */
            addRow(){
                this.formValidate.dataTable=this.formValidate.dataTable.concat(this.rowData);
            }
        }
    }
</script>