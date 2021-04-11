<style lang="scss">

</style>
<template>
    <span>
        <vue-draggable-resizable 
            v-for="(o,i) in children"
            :key="i"  
               
            :grid=[20,20] 
            :z="o.z||1"
            :x="o.x||0"
            :y="o.y||0"
            :h="o.h||200" 
            :w="o.w||200"

            @dragging="onDragElement" 
            @resizing="onResizeElement"     
        >
            <div style="width: 100%;height: 100%;">
                <EchartsPage />
            </div>
        </vue-draggable-resizable>
    </span>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable';
import EchartsPage from './echarts.vue';

export default {
    components: {
      VueDraggableResizable,
      EchartsPage 
    },
    data () {
        return {


        }
    },
    created(){


    },        
    methods: {   

        onDragElement:function(...aaa){
        // console.log(aaa);
        },
        onResizeElement:function(){
        // console.log(222);

        },                
    },  
    props: {
        // 配置 参数
        children:{
            type: Array,
            default:()=>[]             
        }
    }      
}
</script>