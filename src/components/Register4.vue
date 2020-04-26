<template>
    <span>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140" :label-colon="true">
  
                                          
            <div class="table-btn">
                <Button type="primary" size="small" icon="md-add" @click="addRow">新增</Button>
                <Button type="error" size="small" icon="md-trash" @click="deleteAll">全部删除</Button>
            </div>
            <!-- <div>
                <mark>注：每种地址标签如有多条，可维护多列。</mark>
                <span></span>
            </div> -->
            <Table 
                :columns="columns" 
                :data="formValidate.dataTable"
               
            ></Table>


            <br/>
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
    import {GlobalBus} from './../common/GlobalBus.js';

    export default {
        data () {
            return {
                modal:false,

                // 表单
                formValidate: {                                   
                    dataTable: []   // table 数据
                },
                // 表单 验证
                ruleValidate: {
                },

 
                // table 列配置
                columns: [],
                rowData:[],   // 行数据

             
            }
        },
        created(){

            let that=this;

            // 保存数据
			GlobalBus.$off("register4_save");
			GlobalBus.$on("register4_save", function (callBack){
                callBack(that.formValidate);
			});

            // 配置列
            this.columns = [
                {
                    title: '国家',
                    key: 'country',
                    width:140,
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
                    title: '货币',
                    key: 'currency',
                    width:120,
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
                                    placeholder:"请选择货币..."
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
                    title: '银行账号',
                    key: 'bankAccount',
                    // minWidth:100,
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
                                    placeholder:"请输入银行账号..."   
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
                    title: '开户名称',
                    key: 'bankDeposit',
                    // minWidth:100,
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
                                    placeholder:"请输入开户名称..."   
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
                    title: '银行名称',
                    key: 'bankName',
                    // minWidth:100,
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
                                    placeholder:"请输入银行名称..."   
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
                    title: '开户地址',
                    key: 'address',
                    width:260,
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
                                    placeholder:"请输入开户地址..."   
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
                    title: '备注',
                    key: 'remark',
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
                                    placeholder:"请输入备注..."   
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

                var result=false;  // 验证table 必填    

                if( this.formValidate.dataTable['length']==0 ){
                    this.$Message.info({
                        "content":'财务信息未编辑!',
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

                // table数据不完整
                if(result){
                    this.$Message.info({
                        "content":'财务信息数据不完整!',
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

                // 货币
                var currencyList = [
                    {
                        value: 'CNY',
                        label: 'CNY'
                    },
                    {
                        value: 'USD',
                        label: 'USD'
                    }                    
                ];




                // 模拟行数据
                this.rowData=[
                    {
                        country:{
                            required:true,
                            value: '',
                            children:countryList
                        },
                        currency:{
                            required:true,
                            value: '',
                            children:currencyList
                        },
                        bankAccount:{
                            required:true,
                            value: '',                            
                        },
                        bankDeposit:{
                            required:true,
                            value: '',                            
                        },
                        bankName:{
                            required:true,
                            value: '',                            
                        },
                        address:{
                            required:false,
                            value: '',                            
                        },
                        remark:{
                            required:false,
                            value: '',                            
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