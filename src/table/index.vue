<template>
    <div>
        <div>
            <button @click="getData">测试按钮</button>
            <button @click="saveData">保存数据按钮</button>

        </div>
        <div>
            <Table :columns="columns" :data="data"></Table>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // 列配置 信息
                columns: [],

                // 数据
                data: []
            }
        },
        methods: {
            /**
             * 保存数据
             */
            saveData: function(){
                console.log( this.data );

                this.$Notice.open({
                    title: 'Notification title',
                    desc: JSON.stringify(this.data)
                });

            },
            /**
             *  初始化
             */
            getData: function(){
                // 模拟 请求数据 替换 
                let that=this;

                setTimeout(()=>{

                    // 列数据
                    let _columns=["2021-01-01","2021-01-02","2021-01-03"];  
                    
                    // 行数据
                    let _data=[
                        {
                            "equipment":"设备一",
                            "2021-01-01":11,
                            "2021-01-02":22,
                            "2021-01-03":3
                        },
                        {
                            "equipment":"设备二"
                        },
                        {
                            "equipment":"设备三"
                        }                                        
                    ];


                    that.columns= [
                        {
                            title: "设备",
                            key: "equipment",
                            width:100,
                        }
                    ].concat(_columns.map((o,index)=>{
                        return({
                            title: o,
                            key: o,
                            width:300,
                            render: (h, params) => {
                                return h('div', [
                                    h('InputNumber', {
                                        props: {
                                            value:params.row[o],
                                            placeholder:"请输入...",
                                            max:100, 
                                            min:1,
                                            step:1
                                        },
                                        on: {
                                            input: event => {
                                                that.data[params.index][o]= event; //双向绑定 修改值
                                            }
                                        }
                                    }),
                                ]);
                            }
                        });
                    }));

                    that.$nextTick(()=>{
                        that.data=_data;
                    });
                },1000);
            }
        },        
    }
</script>