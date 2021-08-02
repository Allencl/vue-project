<style lang="less">
  .drag-content-iframe{
    .top-box{
      height: 30px;

      label{
        padding-right: 8px;
      }
    }

    .box-content{
      width:600px;
      height:600px;
      border:1px solid red;

      &.gridding{
        // position: relative; background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 10px 10px / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px; height: 400px; width: 400px; border: 1px solid blue; box-sizing: content-box;
        // position: relative; background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 10px 10px / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px; height: 400px; width: 400px; border: 1px solid blue; box-sizing: content-box;
        position: relative;background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
      }
    }
  }


</style>

<template>
  <div class="drag-content-iframe">
    <Row class="top-box">
        <span>
          <Checkbox v-model="configJson['grid']">网格</Checkbox>
        </span>
        <span style="margin-left:10px">
          <label>宽:</label>
          <InputNumber 
            v-model="configJson['width']"
            :min="600"  
            size="small"
          ></InputNumber>
        </span>
        <span style="margin-left:20px">
          <label>高:</label>
          <InputNumber 
            v-model="configJson['height']"
            :min="600" 
            size="small"
          ></InputNumber>
        </span>
        <span style="margin-left:50px">
          <Button type="primary" size="small" @click="onSave">保存</Button>
          <Button type="primary" size="small" @click="onChange">切换</Button>

        </span>
    </Row>
    <div 
      v-if="aaa"
      :class="`box-content ${configJson['grid']?'gridding':''}`" 
      @drop="dropHandle($event)"
      @dragover.prevent
    >
        <RendererPage 
           :children="children" 
        />
    </div>
  </div>

</template>

<script>
import RendererPage from "./rendererResizable.vue";  // 渲染器

export default {
  components: {
    RendererPage 
  },
  data: function () {
    return {
      aaa:!false,

      //数据
      configJson:{
          width:600,  
          height:600,
          grid: true, // 网格

      },

      // 组件 列表
      children:[]


    }
  },
  created() {

  }, 
  methods: {
    /**
     * 报表拖拽
     */
    dropHandle:function(event){

      let row = JSON.parse(event.dataTransfer.getData('item'));  

      // 报表 拖拽
      if(row["type"]=="dragEchart"){
        let x=Math.round((event["clientX"]-210)/20)*20;
        let y=Math.round((event["clientY"]-40)/20)*20;
        let len=this.children["length"];


        this.children=this.children.concat([{
          _key:`element_${new Date().getTime()}`,
          x:x,
          y:y,
          h:200, 
          w:200,
          z:len+1,
          option:row["option"]
        }]);
      }

    },
    /**
     * 保存 数据
     */
    onSave:function(){
      let params={
        ...this.configJson,
        children:this.children
      };

      console.log(params);
      console.log( JSON.stringify(params) );

    },
    onChange:function(){
      this.aaa=false;
      
      this.$nextTick(()=>{
        this.aaa=true;
      })
    }
  },
  props: {

  }  
}
</script>