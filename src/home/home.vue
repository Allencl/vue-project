<style lang="scss">
  .weima-home{
    .module-box{
      // height: 150px;
      // background: wheat;
      border: 1px solid red;
      margin: 6px 8px;

      &.detail{
        height: 120px;
        padding: 5px 8px;
      }
    }

    .bi-module-box{
      padding: 5px 8px;
      height: 300px;
    }
  }


</style>
<template>
  <div class="weima-home">
    <customTable 
      :config="table_config"
    />

    <Row>
      <Col span="8">
        <div class="module-box">
          <TodoPage 
            :config="config_todo"
          />
        </div>
      </Col>
      <Col span="8">
        <div class="module-box">
          <ProjectPage 
            :config="config_project"
          />
        </div>
      </Col>      
      <Col span="8">
        <div class="module-box">
          <NoticePage 
            :config="config_notice"
          />
        </div>
      </Col>       
    </Row>

    <Row>
        <Col span="8">
          <div class="module-box detail">
            <customTemplate 
              :currentTpl="currentTpl"
              @templateChange="_templateChange"
            />
          </div>
        </Col>


        <!-- <Col span="16">
          <div class="module-box detail">
            
          </div>        
        </Col> -->
    </Row>    
    <Row>
        <Col span="12">
            <div 
              class="module-box"
              @drop="dropHandle($event,'foreign')"
              @dragover.prevent
            >
              <ForeignTrade 
                :currentTpl="currentTpl"
                :config="config_foreign"
              />
            </div>
        </Col>
        <Col span="12">
            <div 
              class="module-box"
              @drop="dropHandle($event,'domestic')"
              @dragover.prevent
            >
              <DomesticTrade 
                :currentTpl="currentTpl"
                :config="config_domestic"
              />
            </div>
        </Col>       
    </Row>
 
  </div>  
</template>
<script>

  import customTable from "./table.vue";             // table
  import customTemplate from "./template.vue";       // 模板切换

  import TodoPage from "./todo.vue";                  // 处理事项
  import ProjectPage from "./project.vue";            // 项目信息
  import NoticePage from "./notice.vue";            //  系统公告



  import ForeignTrade from "./BI/foreignTrade.vue";            // 报表 外贸订单
  import DomesticTrade from "./BI/domesticTrade.vue";          // 报表 内贸订单







  export default {
    components: {
      customTable,
      customTemplate,
      TodoPage,
      ProjectPage,
      NoticePage,

      ForeignTrade,
      DomesticTrade
    },
    data () {
      return {
        currentTpl:1,   // 当前模板  默认模板一 
        table_config:{},   // 拖拽 table 配置文件

        config_todo:{},    // 配置文件 处理事项
        config_project:{},    // 配置文件 项目信息
        config_notice:{},    // 配置文件 系统 公告


        

        config_foreign:{},   // 配置文件 外贸订单
        config_domestic:{},   // 配置文件 内贸订单



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
          table_config:{},  // 拖拽 table 配置文件

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

        this.bufferConfig();  // 缓存数据

        // 跟新模块数据
        switch ( key ) {
          case 'foreign':         // 外贸 订单
            this.config_foreign=row;
            break;
          case 'domestic':        // 内贸 订单
            this.config_domestic=row;
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

      },
      /**
       * 缓存 数据 
       * */    
      bufferConfig:function(){
        // 缓存 数据
        let config = {
          currentTpl:this.currentTpl,   // 当前模板
        }
      }
    }
  }
</script>