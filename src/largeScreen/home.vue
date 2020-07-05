<style lang="scss">
  .weima-large-screen{
    background: url(./Img/bag.png);

    .text-color{
      color: blue;
    }

    .head-box{
      position: relative;

      .text-box{
        position: absolute;
        top: 0px;
        width: 100%;
        text-align: center;  

        img{
          top: 12px;
          /* margin-top: 10px; */
          position: relative;
          right: 16px;
        }   

        span{
          font-size: 26px;
          font-weight: bold;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(1,196,247,1);
          line-height:12px;
          opacity:0.9;

          background:linear-gradient(0deg,rgba(127,235,173,1) 0%, rgba(1,240,255,1) 54.39453125%, rgba(77,145,252,1) 100%);
          -webkit-text-fill-color:transparent;
          -webkit-background-clip:text; 


        }   
      }
    }

    .module-box{
      // margin: 6px 4px;
      position: relative;
      margin: 0px 12px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 3px 2px rgba(0, 180, 255, 0.44);

      .img-border{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      .img-l-r-t{
        position: absolute;
        right: -7px;
        top: -7px;
      }
      .img-l-r-b{
        position: absolute;
        right: -7px;
        bottom: -7px;
      }
      .img-l-l-t{
        position: absolute;
        left: -7px;
        top: -7px;
      }
      .img-l-l-b{
        position: absolute;
        left: -7px;
        bottom: -7px;
      }


      .head-tittle{
        text-align: center;

        .text-box{
          display: inline-block;
          position: relative;
          text-align: center;
          height: 20px;
          line-height: 20px;
          color: #01C4F7;
          font-size: 14px;
          padding: 0px 22px;
          // background: red;

          .conten-title{
            top: -4px;
            position: relative;
            display: block;
          }

          .mark-top{
            position: absolute;
            left: 0px;
            top: -6px;
            display: inline-block;
            height: 10px;
            width: 100%;
            padding: 0px 6px;


            >span{
              display: block;
              height: 100%;
              width: 100%;
              background: #091334;     
            } 
          }

          .mark-left{
            position: absolute;
            top: 0px;
            left: 12px;
            display: inline-block;
            height: 100%;
            width: 0px;
            transform: rotate(-15deg);
            box-shadow: -2px 0px 2px 1px rgba(0, 180, 255, 0.44);
          }

          .mark-right{
            position: absolute;
            top: 0px;
            right: 8px;
            display: inline-block;
            height: 100%;
            width: 0px;
            transform: rotate(15deg);
            box-shadow: -2px 0px 2px 1px rgba(0, 180, 255, 0.44);           
          }

          .mark-bottom{
            position: absolute;
            left: 0px;
            bottom: 0px;
            display: inline-block;
            height: 0px;
            width: 100%;
            padding: 0px 18px;


            >span{
              display: block;
              height: 100%;
              width: 100%;
              box-shadow: -2px 0px 2px 1px rgba(0, 180, 255, 0.44);
            }            
          }

          .img-s-r-t{
            position: absolute;
            right: -3px;
            top: -6px;
          }
          .img-s-r-b{
            position: absolute;
            right: 7px;
            bottom: -5px;
          }
          .img-s-l-t{
            position: absolute;
            left: -4px;
            top: -6px;
          }
          .img-s-l-b{
            position: absolute;
            left: 7px;
            bottom: -5px;
          }

        }

      }

      
            


      &.detail{
        height: 120px;
        padding: 5px 8px;
      }
    }

    .bi-module-box{
      padding: 5px 8px;
      height: 100%;
    }

    .bi-box-page{
      padding: 0px 12px;
      padding-bottom: 6px;
    }
  }


</style>
<template>
  <div class="weima-large-screen" :style="`height:${windHeight}px`">
    <Row>
      <div class="head-box">
        <img :src="imgBag" alt="" style="width:100%">
        <div class="text-box">
          <img :src="imgIcon" alt="">
          <span>威马质量数据监控平台</span>
        </div>
      </div>
    </Row>  

    <!-- 报表 模板1 begin -->
    <div v-if="currentTpl==1" class="bi-box-page">
      <Row>
        <Col span="4">
          <Row> 
            <Col span="24"> 
              <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
                <div class="head-tittle">
                  <div class="text-box"> 
                    <div class="mark-top"><span></span></div>
                    <span class="mark-left"></span>
                    <span class="mark-right"></span>
                    <div class="mark-bottom"><span></span></div>

                    <span class="conten-title">楼层监控数据</span>
                    <img :src="imgS_r_t" class="img-s-r-t">
                    <img :src="imgS_r_b" class="img-s-r-b">
                    <img :src="imgS_l_t" class="img-s-l-t">
                    <img :src="imgS_l_b" class="img-s-l-b">
                  </div>
                </div>                
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">


  
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
                <div class="head-tittle">
                  <div class="text-box"> 
                    <div class="mark-top"><span></span></div>
                    <span class="mark-left"></span>
                    <span class="mark-right"></span>
                    <div class="mark-bottom"><span></span></div>

                    <span class="conten-title">区域监控量</span>
                    <img :src="imgS_r_t" class="img-s-r-t">
                    <img :src="imgS_r_b" class="img-s-r-b">
                    <img :src="imgS_l_t" class="img-s-l-t">
                    <img :src="imgS_l_b" class="img-s-l-b">
                  </div>
                </div>                 
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">
              </div>            
            </Col> 
          </Row>   
        </Col>  
        <Col span="16">
          <div class="module-box" :style="`height:${parseInt(bodyHeight*0.6)+9}px`">
                <div class="head-tittle">
                  <div class="text-box"> 
                    <div class="mark-top"><span></span></div>
                    <span class="mark-left"></span>
                    <span class="mark-right"></span>
                    <div class="mark-bottom"><span></span></div>

                    <span class="conten-title">楼层监控布局</span>
                    <img :src="imgS_r_t" class="img-s-r-t">
                    <img :src="imgS_r_b" class="img-s-r-b">
                    <img :src="imgS_l_t" class="img-s-l-t">
                    <img :src="imgS_l_b" class="img-s-l-b">
                  </div>
                </div> 


            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>        
        </Col> 
        <Col span="4">
          <Row> 
            <Col span="24">    
              <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
                <div class="head-tittle">
                  <div class="text-box"> 
                    <div class="mark-top"><span style="background: #091232;"></span></div>
                    <span class="mark-left"></span>
                    <span class="mark-right"></span>
                    <div class="mark-bottom"><span></span></div>

                    <span class="conten-title">监控事件处理</span>
                    <img :src="imgS_r_t" class="img-s-r-t">
                    <img :src="imgS_r_b" class="img-s-r-b">
                    <img :src="imgS_l_t" class="img-s-l-t">
                    <img :src="imgS_l_b" class="img-s-l-b">
                  </div>
                </div>                 
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">
              </div>            
            </Col>    
            <Col span="24">   
              <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
                <div class="head-tittle">
                  <div class="text-box"> 
                    <div class="mark-top"><span style="background: #0E1E51;"></span></div>
                    <span class="mark-left"></span>
                    <span class="mark-right"></span>
                    <div class="mark-bottom"><span></span></div>

                    <span class="conten-title">监控动态显示</span>
                    <img :src="imgS_r_t" class="img-s-r-t">
                    <img :src="imgS_r_b" class="img-s-r-b">
                    <img :src="imgS_l_t" class="img-s-l-t">
                    <img :src="imgS_l_b" class="img-s-l-b">
                  </div>
                </div>                 
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">
              </div>             
            </Col> 
          </Row>   
        </Col>                                       
      </Row>
      <Row> 
        <Col span="8">
          <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" :style="`height:${parseInt(bodyHeight*0.3)}px`">
            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>         
        </Col>                
      </Row>       
    </div>
    <!-- 报表 模板1  end -->

    <!-- 报表 模板2 begin -->
    <div v-if="currentTpl==2">
      <Row>
        <Col span="12">
          <div class="module-box" style="height:600px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>        
        </Col>         
        <Col span="12">
          <Row> 
            <Col span="24"> 
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>            
            </Col> 
          </Row>   
        </Col>                                       
      </Row>
      <Row> 
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>                
      </Row>       
    </div>
    <!-- 报表 模板2  end -->

    <!-- 报表 模板3 begin -->
    <div v-if="currentTpl==3">
      <Row>
        <Col span="12">
          <div class="module-box" style="height:600px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>        
        </Col>         
        <Col span="12">
          <Row> 
            <Col span="24"> 
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>            
            </Col> 
          </Row>   
        </Col>                                       
      </Row>
      <Row> 
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>        
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>                
      </Row>       
    </div>
    <!-- 报表 模板3  end -->


    <Row v-else></Row>

  </div>  
</template>
<script>


  // import ForeignTrade from "./BI/foreignTrade.vue";            // 报表 外贸订单
  // import DomesticTrade from "./BI/domesticTrade.vue";          // 报表 内贸订单
  // import Inventory from "./BI/inventory.vue";                 // 报表 配件库存表
  // import Inventory2 from "./BI/inventory2.vue";                 // 报表 配件库存表2
  // import Production from "./BI/production.vue";               // 报表 各产品生产进度表
  // import Puality from "./BI/quality.vue";                    // 报表 月度质量趋势表



  export default {
    components: {

      // ForeignTrade,
      // DomesticTrade,
      // Inventory,
      // Inventory2,
      // Production,
      // Puality
    },
    data () {
      return {
        currentTpl:1,
        windHeight:window.innerHeight,      // 屏幕高度
        bodyHeight: window.innerHeight-40,    // 屏幕高度

        imgBorder: require("./Img/border1-1.png"),   // 头 背景
        imgBag: require("./Img/top.png"),   // 头 背景
        imgIcon: require("./Img/logo.png"),   // 头 icon


        imgMark1: require("./Img/mark1.png"),   // mark1
        imgMark2: require("./Img/mark2.png"),   // mark2

        imgL_r_t: require("./Img/l_r_t.png"),   // 大 右上
        imgL_r_b: require("./Img/l_r_b.png"),   // 大 右下
        imgL_l_t: require("./Img/l_l_t.png"),   // 大 左上
        imgL_l_b: require("./Img/l_l_b.png"),   // 大 左下
  
        imgS_r_t: require("./Img/s_r_t.png"),   // 小 右上
        imgS_r_b: require("./Img/s_r_b.png"),   // 小 右下
        imgS_l_t: require("./Img/s_l_t.png"),   // 小 左上
        imgS_l_b: require("./Img/s_l_b.png"),   // 小 左下  

        config_foreign:{},   // 配置文件 外贸订单
        config_domestic:{},   // 配置文件 内贸订单
        config_inventory:{},   // 配置文件 配件库存表
        config_inventory2:{},   // 配置文件 配件库存表2
        config_production:{},   // 配置文件 各产品生产进度表
        config_puality:{},   // 配置文件 月度质量趋势表


      }
    },
    created() {
      let that=this;
      this.initPage();  // 初始化

      window.onresize = function () {
        that.windHeight=window.innerHeight;
        that.bodyHeight=window.innerHeight-40;
      };

    }, 	        
    methods: {
      /**
       * 初始化
       */
      initPage: function(){
        // 模拟数据
        let config = {


        } 

      }
    }
  }
</script>