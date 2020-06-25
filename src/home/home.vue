<style lang="scss">
  .weima-home{
    .module-box{
      height: 150px;
      background: wheat;
      border: 1px solid red;
    }
  }


</style>
<template>
  <div class="weima-home">
    <Row>
        <Col span="8">
          <customTemplate 
            :currentTpl="currentTpl"
            @templateChange="_templateChange"
          />
        </Col>
        <Col span="16">
          <customTable />
        </Col>
    </Row>    
    <Row>
        <Col span="8">
            <div 
              class="module-box"
              @drop="dropHandle($event,1)"
              @dragover.prevent
            >
              <BIPage1 
                :currentTpl="currentTpl"
                :config="BIConfig1"
              />
            </div>
        </Col>
        <Col span="8">
            <div 
              class="module-box"
              @drop="dropHandle($event,2)"
              @dragover.prevent
            >
              <!-- <BIPage1 /> -->
            </div>
        </Col>
        <Col span="8">
            <div 
              class="module-box"
              @drop="dropHandle($event)"
              @dragover.prevent
            >
              <!-- <BIPage2 /> -->
            </div>
        </Col>        
    </Row>
 
  </div>  
</template>
<script>

  import customTable from "./table.vue";             // table
  import customTemplate from "./template.vue";       // 模板切换

  import BIPage1 from "./BI/index1.vue";               // 报表模块 1
  // import BIPage2 from "./BI/index2.vue";               // 报表模块 2
  // import BIPage3 from "./BI/index3.vue";               // 报表模块 3
  // import BIPage4 from "./BI/index4.vue";               // 报表模块 4
  // import BIPage5 from "./BI/index5.vue";               // 报表模块 5
  // import BIPage6 from "./BI/index6.vue";               // 报表模块 6






  export default {
    components: {
      customTable,
      customTemplate,
      BIPage1
    },
    data () {
      return {
        currentTpl:1,   // 当前模板  默认模板一 

        BIConfig1:{},   // 模块1 配置文件
        BIConfig2:{},   // 模块2 配置文件
        BIConfig3:{},   // 模块3 配置文件
        BIConfig4:{},   // 模块4 配置文件
        BIConfig5:{},   // 模块5 配置文件
        BIConfig6:{},   // 模块6 配置文件

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
          currentTpl:1,     // 当前模板
          table_config:{},  // table 配置文件

        } 


        this.currentTpl = config["currentTpl"];  // 设置模板
      },
      /**
       * 模板切换
       */
      _templateChange: function(num){
        this.currentTpl=num;
      },
      /**
       *  面板 拖拽
       */ 
      dropHandle: function (event,key) {
        let row = JSON.parse( event.dataTransfer.getData('item') );  

        // 跟新模块数据
        switch ( Number(key) ) {
          case 1:
            this.BIConfig1=row;
            break;
          case 2:
            this.BIConfig2=row;
            break;
          case 3:
            this.BIConfig3=row;
            break;
          case 4:
            this.BIConfig4=row;
            break;
          case 5:
            this.BIConfig5=row;
            break;
          case 6:
            this.BIConfig6=row;
            break;                                                        
          default:
            break;
        }

      }    
    }
  }
</script>