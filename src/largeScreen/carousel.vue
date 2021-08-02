<style lang="less">
    .bi-carousel{
        top: 0px;
        width: 100%;
        height: 20px;
        position: absolute;
        right: 0px;
        text-align: right;
        padding-right: 6px;


        li{
            display: inline-block;
            list-style: none;
            height: 4px;
            width: 12px;
            background: #006A86;
            margin-left: 6px;
            transform: skew(-30deg);

            &.active{
                background: #00B4FF;
            }

        }
    }
</style>
<template>
    <ul class="bi-carousel">                       
        <li v-for="(o,i) in carouselAll" :key="i" :class="((i+1)==carouselCurrent?'active':'')"></li>
    </ul>
</template>
<script>




// 轮播 图标
export default {
    data () {
        return {

        }
    },
    created() {

    }, 	
    watch: {        
    },                
    methods: {

    },
    props: {
        // 当前位置
        carouselCurrent:{
            type: Number,
            default:()=>1           
        },
        // 总数
        carouselAll:{
            type: Number,
            default:()=>3           
        }
    }
}
</script>