<style lang="scss">
    .weima-home-project{
        .box{
            padding: 10px;
            
        }
    }

</style>
<template>
    <div class="weima-home-project bi-module-box">
        <p>项目信息</p>
        <div class="box" style="width:100%;" >
            <Table 
                size="small" 
                height="150"
                :columns="columns" 
                :data="data"
            ></Table>
        </div>
    </div>
</template>
<script>

// 项目信息
export default {
    data () {
        return {
            columns:[
                {
                    title: '平台号',
                    key: 'name'
                },
                {
                    title: '项目编码',
                    key: 'age'
                },
                {
                    title: '项目名称',
                    key: 'address'
                }
            ],
            data:[
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York ',
                    date: '2016-10-03'
                },
                // {
                //     name: 'Jim Green',
                //     age: 24,
                //     address: 'London No. 1 Lake Park',
                //     date: '2016-10-01'
                // },
                // {
                //     name: 'Joe Black',
                //     age: 30,
                //     address: 'Sydney No. 1 Lake Park',
                //     date: '2016-10-02'
                // },
                // {
                //     name: 'Jon Snow',
                //     age: 26,
                //     address: 'Ottawa No. 2 Lake Park',
                //     date: '2016-10-04'
                // }
            ]
                  
        }
    },
    created() {
        this.initPage();  // 初始化
    }, 	               
    methods: {
        /**
         * 初始化
         */
        initPage: function(){

        },
 
    },
    props: {
        // 当前模板
        currentTpl:{
            type: Number,
            // default:()=>1           
        },
        // 配置 参数
        config:{
            type: Object,
            default:()=>{}              
        }
    }
}
</script>