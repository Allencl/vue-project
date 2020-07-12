<style lang="scss">
    .home-page{
        padding: 0px 10px;

        .content-box{
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
            padding-top: 20px;
        }

        .content-page{
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
            padding-left: 70px;
            padding-right: 70px;
            padding-top: 20px;
            padding-bottom: 16px;
            margin-top: 22px;

            .content{
                position: relative;
                width: 100%;
                height: 100%;

                .center-left{
                    position: relative;
                    position: absolute;
                    left: 0px;
                    top: 0px;                    
                    height: 100%;
                    width: 360px;


                    height: inherit;
                    // background: 
                    //     -webkit-linear-gradient(top, transparent 10px, #000 11px),
                    //     -webkit-linear-gradient(left, transparent 10px, #000 11px);
                    // background-size: 11px 11px;
                    background-size: 15px 15px;
                    background-image: linear-gradient(45deg, #000 25%, transparent 25%),
                        linear-gradient(-45deg, #000 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, #000 75%),
                        linear-gradient(-45deg, transparent 75%, #000 75%);

                                       
                }

                .center-right{
                    position: absolute;
                    top: 0px;
                    left: 360px;
                    height: 100%;

                    // height: 360px;
                    // background-size: 10px 10px;
                    // background-image:  
                    //     linear-gradient(0deg, rgba(0,0,0,0.3) 25%, transparent 25%),
                    //     linear-gradient(-90deg, rgba(0,0,0,0.3) 25%, transparent 25%),
                    //     linear-gradient(0deg, transparent 75%, rgba(0,0,0,0.3) 75%),
                    //     linear-gradient(-90deg, transparent 75%, rgba(0,0,0,0.3) 75%);   
                    height: inherit;
                    background: 
                        -webkit-linear-gradient(top, transparent 10px, #000 15px),
                        -webkit-linear-gradient(left, transparent 10px, #000 15px);
                    background-size: 15px 15px;


                    ul{
                        position: relative;
                        height: 100%;
                        width: 100%;
                       
                    }
                }

            }
 

            .left{
                position: absolute;
                left: 0px;
                top: 0px;
                height: 100%;
                width:42px;
                padding: 0px 10px;
                font-size: 18px;
                font-weight: bold;                
                border:1px solid #000;
                padding-top: 116px;
                height: 100%;
            }

            .right{
               
                position: absolute;
                right: 0px;
                top: 0px;
                height: 100%;
                width:42px;
                padding: 0px 10px;
                font-size: 18px;
                font-weight: bold;                
                border:1px solid #000;
                padding-top: 116px;
                height: 100%;

            }   

            .number-top{
                position: absolute;
                // background: yellow;
                width: 100%;
                height: 26px;
                top: -14px;
                position: absolute;
                width: 100%;
                height: 20px;
                top: -22px;
                /* margin-top: 10px; */
                position: absolute;
                // left: 52px;
                b{  
                    text-align: right;
                    font-size: 7px;
                    // float: left;
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    // background: red;
                }
            }

            .number-left{
                position: absolute;
                top: 45px;
                left: 46px;
                width: 30px;
                // height: 100%;
                width: 20px;
                text-align: right;

                b{  
                    font-size: 7px;
                    float: left;
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    // background: red;
                }
            }       
        }

        .head-box{
            input{
                width: 130px;
                margin-left: 16px;
                text-align: center;
                border: none;
                border-bottom: 1px solid #000;
            }

            .ivu-col{
                padding: 10px 16px;

                &.col-img{
                    text-align: center;
                    // position: relative;
                    // padding-left: 30px;

                    label{
                        position: relative;
                        top: -10px;
                        left: 12px; 
                    }

                    .img1{
                        // position: absolute;
                        // left: 0px;
                        // top: 8px;
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        // background: red;
                        background: url(./../assets/3.png);
                        background-repeat: no-repeat;   //不重复
                        background-size: 100% 100%;     // 满屏

                        // background-image: url(./assets/1.png);


                    }

                    .img2{
                        // position: absolute;
                        // left: 0px;
                        // top: 8px;
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        // background: red;
                        background: url(./../assets/4.png);
                        background-repeat: no-repeat;   //不重复
                        background-size: 100% 100%;     // 满屏
                        // background-image: url(./assets/1.png);


                    }
                }
            }

            img{
                height: 22px;
                width: 22px;
            }
        }   



        .content{
            li{
                position: absolute;
                font-size: 10px;
                padding-top: 6px;
                list-style: none;
                width: 140px;
                height: 140px;
                background: palegoldenrod;
                padding-left: 6px;
                border: 1px solid #000;
                font-weight: bold;
                
                p{
                    margin-bottom: 3px;
                }
            }
        }

        h2{
            text-align:center;
            padding: 22px 0px;
            padding-top: 42px;
        }
    }
</style>
<template>
    <div class="home-page">

        <span v-for="(o,j) in config" :key="j">

            <span v-if="o['head']">
                <h2>{{ o['head']['title'] }}</h2>
                <div class="head-box">
                    <Row>
                        <Col span="4" offset="1">
                            <label for="">交货日期:</label>
                            <input type="text" readonly :value="o['head']['date']">
                        </Col>
                        <Col span="4">
                            <label for="">车辆区分:</label>
                            <input type="text" readonly :value="o['head']['area']">
                        </Col>   
                        <Col span="4" class="col-img">
                    
                            <div class="img1"></div>
                            <label>货架区域</label>
                        </Col>     
                        <Col span="4" class="col-img">
                            <div class="img2"></div>
                            
                            <label>自由区域</label>
                        </Col>     
                        <Col span="4">
                            <span>作成：{{ o['head']['principal'] }}</span>
                        </Col>                                             
                    </Row>         
                </div>
            </span>

            <span v-for="(c,k) in (o['children']||[])" :key="k">
                <div class="content-page">
                    <div class="left">{{c["titleLeft"]}}</div>
                    <div class="right">{{c["titleRight"]}}</div>                   
                        <div class="number-left">
                            <b v-for="(o,i) in c['scaleY']" :key="i">{{o}}</b>
                        </div> 

                    <div class="content-box">

                        <div class="content" :style="`height:${15*c['scaleY']}px;width:${15*c['scaleX']}px;`">   
                            <div class="number-top">
                                <b v-for="(o,i) in c['scaleX']" :key="i">{{o}}</b>
                            </div> 
                            
                            <div class="center-left">
                                <li v-for="(q,z) in c['boxLeft']" :key="z" :style="`background:${q['background']};height:${15*q['height']}px;width:${15*q['width']}px;top:${15*q['top']}px;left:${15*q['left']}px`">
                                    <p v-for="(t,x) in q['text']||[]" :key="x">{{t}}</p>
                                </li>                                      
                            </div>                             
                            <div class="center-right" :style="`width:${15*(c['scaleX']-24)}px;`">
                                <ul>
                                    <li v-for="(q2,z2) in c['boxRight']" :key="z2" :style="`background:${q2['background']};height:${15*q2['height']}px;width:${15*q2['width']}px;top:${15*q2['top']}px;left:${15*q2['left']}px`">
                                        <p v-for="(t2,x2) in q2['text']||[]" :key="x2">{{t2}}</p>
                                    </li>  
                                </ul>                                                                                
                            </div>
                        </div>
                    </div>

                </div>
            </span>
        </span>
    </div>
</template>
<script>

export default {  
    data () {
        return {
            img1: require('./../assets/arrows1.svg')
        }
    },
    props: {
        // 配置文件
        config:{
            type:Array,
            default:()=>[]         
        },
    },                
    methods: {
        /**
         *  进入全屏
         */
        clickHandle: function(){
            this.$router.push('/largeScreenPage')
        }
    },
}
</script>