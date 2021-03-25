<style lang="scss">
    .design-center-page{
        .left-side{
            ul{
                .title-content{
                    padding-bottom: 8px;
                    span{
                        border-bottom: 3px solid red;
                    }
                }

                li{
                    list-style: none;
                    width: 66px;
                    height: 66px;
                    float: left;
                    margin-right: 15px;
                    cursor: pointer;

                    img{
                        width: 100%;
                        height: 42px;
                        // user-select: none;
                    }
                    
                    span{
                        top: -6px;
                        position: relative;
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="left-side">
        <ul
            v-for="(obj,i) in data"
            :key="i"
        >
            <div class="title-content">
                <span>{{ obj["title"] }}</span>
            </div>
            <li
                v-for="(o,j) in obj['children']"
                :key="j"
                :draggable="true"
                @dragstart="dragStart($event,o)"
                @dragend="dragEnd"
            >
                <img :src="o['img']">
                <span>{{ o["title"] }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                zhexian_1: require('./assets/zhexian_1.png'),  // 折线1

                data:[
                    {
                        title:"柱状图",
                        children:[
                            {
                                title:"基础柱状图",
                                img: require('./assets/zhexian_1.png'),  // 折线1
                            },
                            {
                                title:"基础柱状图",
                                img: require('./assets/zhexian_1.png'),  // 折线1
                            }                            
                        ]
                    }
                ]
 
            }
        },
        created(){

        },        
        methods: {   
            /**
             *  面板 拖拽
             */
            dragStart: function (event, item={}) {
                event.stopPropagation();   
                event.dataTransfer.setData('item', JSON.stringify(item) );
            },
            dragEnd: function (event) {
                event.stopPropagation();  
                event.dataTransfer.clearData();
            },                   
        },        
    }
</script>