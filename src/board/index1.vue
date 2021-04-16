<style lang="scss">
    .board-page{

    }
</style>
<template>
    <div>
                <header>
            <Row>
                <i-col span="6">
                    <h1>产品外购件成本看板</h1>
                    <h3>Product purchase cost dashboard</h3>
                </i-col>
                <i-col span="18">

                    <Form :model="formItem" label-position="top">
                        <Row>
                            <i-col span="6">
                                <FormItem label="产品项目">
                                    <Select v-model="formItem.project">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                            </i-col>
                            <i-col span="6">
                                <FormItem label="项目类型">
                                    <Select v-model="formItem.type">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                            </i-col>  
                            <i-col span="6">
                                <FormItem label="专业组">
                                    <Select v-model="formItem.group">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                            </i-col>    
                            <i-col span="6">
                                <FormItem label="投产日期">
                                    <DatePicker 
                                        v-model="formItem.date"
                                        type="datetime" 
                                        placeholder="Select date" 
                                        style="width: 200px"
                                    >
                                    </DatePicker>
                                </FormItem>
                            </i-col> 
                        </Row>    
                    </Form>
                </i-col>
            </Row>
        </header>
        <nav>
            <Row>
                <i-col span="4">
                    <p>总零件数</p>
                    <p>1,450</p>
                </i-col>
                <i-col span="4">
                    <p>定点完成比例</p>
                    <p>90.83%</p>
                </i-col>
                <i-col span="4">
                    <p>产品总目标成本</p>
                    <p>92,000</p>
                </i-col>                
                <i-col span="4">
                    <p>当前总成本</p>
                    <p>84,344</p>
                </i-col>
                <i-col span="4">
                    <p>成本节省金额</p>
                    <p>4,616</p>
                </i-col>                                                
            </Row>
            <a href="index.asp">Home</a>
            <a href="html5_meter.asp">Previous</a>
            <a href="html5_noscript.asp">Next</a>
        </nav>
        <div>
            <h1>Model X10-1 舒适版 投产日期2021-03-29</h1>
            <Row>
                <i-col span="12">
                    <Table :columns="columns1" :data="data1"></Table>
                </i-col>
                <i-col span="12">
                        1
                </i-col>                
            </Row>   
            <Row>
                <i-col span="8">
                        1
                </i-col>
                <i-col span="8">
                        1
                </i-col>      
                <i-col span="8">
                        1
                </i-col>                           
            </Row>


        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // 表单
                formItem: {
                    project: '',
                    type:'',
                    group:'',
                },

                // table
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],

                sandClockImage: require('./../assets/sandclock.gif'),  // 沙漏

            }
        },
        created(){

        },
        methods: {

        },        
    }
</script>