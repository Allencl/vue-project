<style lang="scss">
    .design-right-page{
        // padding-left: 6px;
        // padding-right: 6px;

        .data-search-box{
            padding-left: 6px;
            padding-right: 6px; 
            margin-bottom: 16px;           
        }

        .data-list{
            padding-left: 6px;
            padding-right: 6px;

            li{
                list-style: none;
                width: 100%;
                border: 1px solid #e8eaec;
                padding: 3px 6px;
                margin-bottom: 6px;
                border-radius: 4px;
                transition: all 0.3s ease-out;
                cursor: all-scroll;
            
                &:hover{
                    transform: scale(1.07,1.07)
                }    

                .head{
                    position: relative;

                    i{
                        position: absolute;
                        left: 0px;
                        top: 9px;
                    }

                    span{
                        width: 100%;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        padding-left: 22px;
                        font-weight: 700;
                        position: relative;
                        top: 5px;
                    } 
                }

                .description{

                }

            }
        }
    }
</style>
<template>
    <div class="design-right-page">
        <Tabs value="name1">
            <TabPane label="属性" name="tabs1">
                属性的内容
            </TabPane>
            <TabPane label="数据源" name="tabs2">
                <div>
                    <div class="data-search-box">
                        <Input 
                            v-model="searchDate"
                            @on-search="onSearch" search enter-button="查询" placeholder="查询..." />
                    </div>

                    <ul class="data-list">
                        <li 
                            v-for="(o,i) in data"
                            :key="i"
                        >
                            <div>
                                <div class="head" :title="o['lable']">
                                    <Icon type="ios-link" />
                                    <span>{{o["lable"]}}</span>
                                </div>
                                <!-- <div class="description">
                                    描述
                                </div> -->
                            </div>
                        </li>
                    </ul>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>


export default {
    data () {
        return {
            tabsname:'tabs1',   // tabs
            searchDate:"",  // 查询
           
            // 数据源
            data:[
                {
                    lable:"数据源1"
                },
                {
                    lable:"数据源2"
                },
                {
                    lable:"数据源3"
                },
                {
                    lable:"数据源4"
                },  
                {
                    lable:"数据源5"
                }                                                                
            ]

        }
    },
    created(){

    },        
    methods: {   
        /**
         * 查询 
         * */  
        onSearch:function(){
            console.log( this.searchDate.trim() );
        }      
    },   
    props: {

    }         
}
</script>