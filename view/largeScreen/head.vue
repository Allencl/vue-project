<style lang="less">
.wis-large-screen-head{
    height: 100%;

    background-image: url("./assets/head.jpg");
    color: #fff;


    .left-container{
        text-align: left;
    }

    .center-container{
        text-align: center;
        font-size: 26px;
        font-weight: 500;
    }
    
    .right-container{
        text-align: right;

        div{
            span{
                margin-right: 12px;
            }
        }
    }
}
</style>
<template>
    <div class="wis-large-screen-head">
        <Row>
            <i-col class="left-container" span="8">
                <div>
                    <Icon type="ios-home-outline" />
                    <span>欢迎使用TeleQy智慧水务管理系统！</span>
                </div>
            </i-col>
            <i-col class="center-container" span="8">
                智慧流域数字化平台
            </i-col>
            <i-col class="right-container" span="8">
                <div>
                    <span>2022年1月1日</span>
                    <span>星期六</span>
                    <span>上午11:05</span>
                    <span>8</span>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        },        
    }
</script>