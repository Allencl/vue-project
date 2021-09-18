<style lang="less">
.tabs-compent{
    ul{
        li{
            display: inline-block;
            padding: 6px 12px;
            border-bottom: 2px solid #fff;
            cursor: pointer;

            &:hover{
                color: blue;
            }

            &.active{
                color: blue;
                border-bottom-color: blue;
            }
        }
    }

    .content{
        >div{
            display: none;

            &.active{
                display: inline-block;
            }
        }
    }
}
</style>
<template>
    <div class="tabs-compent">
        <h1>{{active}}</h1>
        <ul>
            <li :class="`${active==1?'active':''}`" @click="activeHandle(1)">首页</li>
            <li :class="`${active==2?'active':''}`" @click="activeHandle(2)">供应商</li>
            <li :class="`${active==3?'active':''}`" @click="activeHandle(3)">邮件</li>
        </ul>
        <div class="content">
            <div :class="`${active==1?'active':''}`">111</div>
            <div :class="`${active==2?'active':''}`">222</div>
            <div :class="`${active==3?'active':''}`">333</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                active:0
            }
        },
        watch: {

        },
        created(){

        },
        methods: {           
            /**
             * 切换
             */
            activeHandle:function(key){
                this.active=key;
            }
        },        
    }
</script>