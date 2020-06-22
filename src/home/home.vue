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
            <div 
              class="module-box"
              @drop="dropHandle($event)"
              @dragover.prevent
            >
              <span>111</span>
            </div>
        </Col>
        <Col span="8">
            <div class="module-box">
              <span>222</span>
            </div>
        </Col>
        <Col span="8">
            <div class="module-box">
              <span>333</span>
            </div>
        </Col>
    </Row>
    <Row>
        <Col span="8">
          <customTemplate 
            :currentTpl=currentTpl
          />
        </Col>
        <Col span="16">
          <customTable />
        </Col>
    </Row> 
  </div>  
</template>
<script>

  import customTable from "./table.vue";             // table
  import customTemplate from "./template.vue";       // 模板切换


  export default {
    components: {customTable,customTemplate},
    data () {
      return {
        currentTpl:1,   // 当前模板  默认模板一 
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
       *  面板 拖拽
       */ 
      dropHandle: function (event) {
        let row = JSON.parse( event.dataTransfer.getData('item') );  
        console.log(row);
      }    
    }
  }
</script>