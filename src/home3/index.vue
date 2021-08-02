<style lang="less">
    .home-page{
        background: rgba(238, 238, 238,0.3);
        padding: 16px 35px;

        .custem-row{
            background-clip: padding-box;
            box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
            margin-bottom: 16px;
            background:#fff;
        }

        .custem-row2{
            background-clip: padding-box;
            box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
            margin-bottom: 16px;
            // background:#fff;
        }

        .showd{
            background-clip: padding-box;
            box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
        }

        
        .ivu-col{
            background: #fff;
            padding: 18px 0px;

            // border-radius: 4px;

        }

        .mes-box{



            border: 1px dashed #dcdee2;
            border-left: 8px solid #FF0000;
            border-radius: 4px;

            .head{
                padding: 12px 16px;

                h3{
                    margin-top: 2px;
                    color: #006699;
                }

                h2{
                    margin-top: 6px;
                    color: #FF0000;

                }

            }
            

            ul{
                border-top: 1px dashed #dcdee2;
                // padding: 16px 16px;
                padding: 15px 16px;


                li{
                    list-style: none;
                    display: inline-block;
                    width: 33%;
                    font-size: 14px;
                    font-weight: 700;

                    span{
                        display: block;
                        text-align: left;

                    }
                }
            }
        }

    }
</style>
<template>
    <div class="home-page">
        <Row class="custem-row">
            <i-col span="6" style="padding-left:30px">
                <div class="mes-box">
                    <div class="head">
                        <h3>PSD6</h3>
                        <h2>异常(60min)</h2>
                        <p>1111</p>
                        <p>222</p>
                    </div>

                    <ul>
                        <li>
                            <span>计划数量</span>
                            <span>150</span>
                        </li>
                        <li>
                            <span>上线数量</span>
                            <span>6150</span>
                        </li>   
                        <li>
                            <span>完成数量</span>
                            <span>3150</span>
                        </li>                                              
                    </ul>
                </div>
            </i-col>
            <i-col span="18">
                <Row>
                    <i-col span="8">
                        OEE
                    </i-col>
                    <i-col span="8">
                        完成率
                    </i-col>
                    <i-col span="8">
                        合格率
                    </i-col>                                        
                </Row>    
            </i-col>
        </Row>

        <Row class="custem-row">
            <i-col span="6" style="padding-left:30px">
                <div class="mes-box" style="border-left-color:#00CC00">
                    <div class="head">
                        <h3>PSD6</h3>
                        <h2 style="color:#00CC00">异常(60min)</h2>
                        <p>1111</p>
                        <p>222</p>
                    </div>

                    <ul>
                        <li>
                            <span>计划数量</span>
                            <span>150</span>
                        </li>
                        <li>
                            <span>上线数量</span>
                            <span>6150</span>
                        </li>   
                        <li>
                            <span>完成数量</span>
                            <span>3150</span>
                        </li>                                              
                    </ul>
                </div>
            </i-col>
            <i-col span="18">
                <Row>
                    <i-col span="8">
                        OEE
                    </i-col>
                    <i-col span="8">
                        完成率
                    </i-col>
                    <i-col span="8">
                        合格率
                    </i-col>                                        
                </Row>    
            </i-col>
        </Row>

        <Row class="custem-row2">
            <i-col span="8" style="padding:0px;">
                <div class="showd" style="margin-right:8px;background:#fff;padding: 18px 0px;">
                    计划
                </div>
            </i-col>
            <i-col span="16" style="padding:0px;">
                <div class="showd" style="background:#fff;padding: 18px 0px;">
                    年度
                </div>
            </i-col>            
        </Row>

    </div>
</template>
<script>


export default {  
  
    data () {
        return {
 
        }
    },
               
    methods: {
        /**
         *  初始化
         */
        initPage: function(){
            // 请求数据 替换 config
        }
    },
}
</script>