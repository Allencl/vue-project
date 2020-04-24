<template>
    <span>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140" :label-colon="true">
            <Row>
                <Col span="12">
                    <FormItem label="营业执照" prop="company">
                        <Input v-model="formValidate.company" placeholder="请输入证书编号..." />
                    </FormItem>                
                </Col>
                <Col span="12">
             
                </Col>                
            </Row>
  

            <br/>
            <Divider />

            <div class="btn-box">
                <FormItem>
                    <Button type="warning" @click="handleResetModal">重置</Button>
                    <Button type="info" @click="lastStep">上一步</Button>
                    <Button type="primary" @click="nextStep">下一步</Button>
                </FormItem>            
            </div> 
        </Form>        
        <Modal v-model="modal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>重置确认</span>
            </p>
            <div style="text-align:center">
                <p>重置后数据无法恢复！</p>
                <p>是否继续？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long @click="handleReset">重置</Button>
            </div>
        </Modal>       
    </span>
</template>
<script>
    export default {
        data () {
            return {
                modal:false,

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
                this.$emit('lastStep');
            },
            /**
             * 下一步
             */            
            nextStep (name) {

                this.$refs['formValidate'].validate((valid) => {
                    if (valid) {

                        var result=false;  // 验证table 必填               
                        if( this.formValidate.dataTable['length']==0 ){
                            this.$Message.info({
                                "content":'地址未编辑!',
                                "duration":2  
                            });  
                            return;                          
                        }else{
                            this.formValidate.dataTable.map((o)=>{
                                Object.entries(o).map((j)=>{
                                    if( j[1]['required'] && !(j[1]['value']) ) result=true;
                                });
                            });
                            
                        }

                        if(result){
                            this.$Message.info({
                                "content":'地址数据不完整!',
                                "duration":2  
                            });
                            return;
                        }
                        


                        // 数据录入完成 跳转下一步
                        this.$Message.success({
                            "content":'填写完成!',
                            "duration":2  
                        });
                        this.$emit('nextStep');

                    } else {
                        this.$Message.error({
                            "content":'基础数据不完整!',
                            "duration":2  
                        });
                    }
                });

            },
            /**
             * 重置弹框
             */
            handleResetModal(){
                this.modal= true;
            },
            /**
             * 重置
             */
            handleReset () {
                this.$refs['formValidate'].resetFields();
                this.formValidate.dataTable=[];

                this.modal = false;
                this.$Message.success({
                    "content":'重置完成!',
                    "duration":2  
                });
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