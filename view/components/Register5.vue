<template>
    <span>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140" :label-colon="true">
  
                                          
            <div class="table-btn">
                <Button type="primary" size="small" icon="md-add" @click="addRow">新增</Button>
                <Button type="error" size="small" icon="md-trash" @click="deleteAll">全部删除</Button>
            </div>
            <div>
                <mark>注：平台账号将发送至管理联系人员的电子邮件。</mark>
                <span></span>
            </div>
            <Table 
                :columns="columns" 
                :data="formValidate.dataTable"
               
            ></Table>


            <br/>
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
        <div class="btn-box">
            <Button type="warning" @click="handleResetModal">重置</Button>
            <Button type="info" @click="lastStep">上一步</Button>
            <Button type="primary" @click="nextStep">下一步</Button>
        </div>              
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
			GlobalBus.$off("register5_save");
			GlobalBus.$on("register5_save", function (callBack){
                callBack(that.formValidate);
			});            

            // 配置列
            this.columns = [
                {
                    title: '姓名',
                    key: 'name',
                    // minWidth:180,
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
                                    placeholder:"请输入姓名..."   
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
                    title: '职务名称',
                    key: 'position',
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
                            h('Select',{
                                props:{
                                    transfer:true,
                                    placeholder:"请选择职务名称..."
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
                    title: '电话',
                    key: 'phone',
                    // minWidth:180,
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
                                    placeholder:"请输入电话..."   
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
                    title: '移动电话',
                    key: 'mobileTelephone',
                    // minWidth:180,
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
                                    placeholder:"请输入移动电话..."   
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
                    title: '传真',
                    key: 'fax',
                    // minWidth:180,
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
                                    placeholder:"请输入传真..."   
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
                    title: '电子邮件',
                    key: 'email',
                    // minWidth:180,
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
                                    placeholder:"请输入电子邮件..."   
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
                    title: '确认电子邮件',
                    key: 'emailAffirm',
                    // minWidth:180,
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
                                    placeholder:"请输入电子邮件..."   
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
                    title: '主供应商联系人',
                    key: 'main',
                    width:160,
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

                var result=false;  // 验证table 必填    

                if( this.formValidate.dataTable['length']==0 ){
                    this.$Message.info({
                        "content":'供应商注册未编辑!',
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
                        "content":'供应商注册数据不完整!',
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

                // 职务
                var positionList=[
                    {
                        value: 'chairman',
                        label: '董事长'
                    },
                    {
                        value: 'generalManager ',
                        label: '总经理'
                    }
                ];




                // 模拟行数据
                this.rowData=[
                    {
                        name:{
                            required:true,
                            value: '',  
                        },
                        position:{
                            required:false,   // 必填
                            value: '',       // 选中值
                            children:positionList  // 下拉数据
                        },
                        phone:{
                            required:false,
                            value: '',  
                        },
                        mobileTelephone:{
                            required:true,
                            value: '',  
                        },
                        fax:{
                            required:false,
                            value: '',  
                        },
                        email:{
                            required:true,
                            value: '',  
                        },
                        emailAffirm:{
                            required:true,
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