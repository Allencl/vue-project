<template>
    <span>
        <Button type="info" @click="getData">获取数据</Button>


        <Form ref="formDynamic" :model="formDynamic">
            <Table ref="table" border 
                :columns="columns" 
                :data="formDynamic.tableData"
            >
                <template slot-scope="{row}" slot="name">
                    <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{row,index}" slot="input">
                    <FormItem 
                        :prop="'tableData.' + index + '.name'"
                        :rules="{required: true, message: '请输入报文类型', trigger: 'change'}"
                    >
                        <Input v-model="formDynamic.tableData[index].input" placeholder="请输入..." :maxlength="10" show-word-limit clearable />
                    </FormItem>
                </template>        
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                    <Button type="error" size="small" @click="remove(index)">Delete</Button>
                </template>
            </Table>
        </Form>
    </span>
</template>
<script>
    export default {
        data () {
            return {

                formValidate: {
                    input: '',
                },

                // ruleValidate: {
                //     input: [
                //         { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                //     ],
                // },

                columns: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: '输入框',
                        slot: 'input'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],

                formDynamic:{
                    tableData: [
                        {
                            name: 'John danfu',
                            input: ''
                        },
                        {
                            name: 'norah jonse',
                            input: ''
                        },
                        {
                            name: 'adele',
                            input: ''
                        }                    
                    ]
                }
            }
        },
        methods: {
            getData:function(){
                // console.log(this.data[0]);
                let _data=this.$refs.table.rebuildData;
                console.log(_data);


                this.$refs["formDynamic"].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })


            }
        }
    }
</script>