<style lang="scss">
  .drag-content-iframe{
    .top-box{
      height: 30px;
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
        <i-col span="2">
          <Checkbox v-model="configJson['grid']">网格</Checkbox>
        </i-col>
        <i-col span="4">
          <label>宽</label>
          <InputNumber 
            v-model="configJson['width']"
            :min="600"  
            size="small"
          ></InputNumber>
        </i-col>
        <i-col span="4">
          <label>高</label>
          <InputNumber 
            v-model="configJson['height']"
            :min="600" 
            size="small"
          ></InputNumber>
        </i-col>

    </Row>
    <div 
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
      //数据
      configJson:{
          width:600,  
          height:600,
          grid: true, // 网格

      },

      // 组件 列表
      children:[
        {
            x:0,
            y:0,
            h:200, 
            w:200,
            z:1,       
        },
        {
            x:20,
            y:20,
            h:200, 
            w:200,
            z:2,       
        },            
      ]


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
      let x=Math.round((event["clientX"]-210)/20)*20;
      let y=Math.round((event["clientY"]-40)/20)*20;
      let len=this.children["length"];


      this.children=this.children.concat([{
        x:x,
        y:y,
        h:200, 
        w:200,
        z:len+1
      }])

      console.log(this.children);

      console.log(row);
      // console.log(event);
    }
  },
  props: {

  }  
}
</script>