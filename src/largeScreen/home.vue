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
        }   
      }
    }

    .module-box{
      // margin: 6px 4px;
      position: relative;
      margin: 0px 12px;
      margin-bottom: 10px;
      box-shadow:0px 0px 4px 0px rgba(0,180,255,0.44);

      .img-border{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      .img-l-r-t{
        position: absolute;
        right: -6px;
        top: -5px;
      }
      .img-l-r-b{
        position: absolute;
        right: -6px;
        bottom: -5px;
      }
      .img-l-l-t{
        position: absolute;
        left: -6px;
        top: -5px;
      }
      .img-l-l-b{
        position: absolute;
        left: -6px;
        bottom: -5px;
      }


      .head-tittle{
        .text-box{
          position: relative;
          text-align: center;
          height: 38px;
          line-height: 38px;
          color: #01C4F7;
          font-size: 14px;

          .img-s-r-t{
            position: absolute;
            right: 0px;
            top: 0px;
          }
          .img-s-r-b{
            position: absolute;
            right: 0px;
            bottom: 0px;
          }
          .img-s-l-t{
            position: absolute;
            left: 0px;
            top: 0px;
          }
          .img-s-l-b{
            position: absolute;
            left: 0px;
            bottom: 0px;
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
  <div class="weima-large-screen">

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
              <div class="module-box" style="height:300px">
                <div class="head-tittle">
                  <Row>
                     <Col push="6" span="12" class="text-box"> 
                        <span>楼层监控数据</span>
                          <img :src="imgS_r_t" class="img-s-r-t">
                          <img :src="imgS_r_b" class="img-s-r-b">
                          <img :src="imgS_l_t" class="img-s-l-t">
                          <img :src="imgS_l_b" class="img-s-l-b">
                     </Col>
                  </Row>
                </div>                
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">


  
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">
              </div>            
            </Col> 
          </Row>   
        </Col>  
        <Col span="16">
          <div class="module-box" style="height:600px">
            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>        
        </Col> 
        <Col span="4">
          <Row> 
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img :src="imgL_r_t" class="img-l-r-t">
                <img :src="imgL_r_b" class="img-l-r-b">
                <img :src="imgL_l_t" class="img-l-l-t">
                <img :src="imgL_l_b" class="img-l-l-b">
              </div>            
            </Col>    
            <Col span="24">   
              <div class="module-box" style="height:300px">
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
          <div class="module-box" style="height:300px">
            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img :src="imgL_r_t" class="img-l-r-t">
            <img :src="imgL_r_b" class="img-l-r-b">
            <img :src="imgL_l_t" class="img-l-l-t">
            <img :src="imgL_l_b" class="img-l-l-b">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
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
      this.initPage();  // 初始化
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