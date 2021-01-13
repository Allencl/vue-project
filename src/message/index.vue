<style lang="scss">
    .sand-clock-card{
        width: 500px;
        height: 200px;
        margin-left: 52px;
        margin-top: 40px;

        .icon-head{
            width: 50px;
            height: 46px;
        }

        .title-head{
            cursor: cell;
            display: inline-block;
            font-family: cursive;
            top: 32px;
            position: absolute;
            left: 82px;
            font-size: 20px;
            font-style: oblique;
        }

        .save-signature{
            float: right;
            margin-top: 10px;
        }
    }
</style>
<template>
    <div>
        <div></div>
        <h1 style="font-family:fangsong;font-style: italic;padding-left:50px;padding-top:22px;">oh captain my captain！</h1>
    
        <div>
            <Card class="sand-clock-card">
                <div slot="title">
                    <img class="icon-head" :src="sandClockImage">
                    <span id="signature" @dblclick="dbclickHead" :contenteditable="editActionHead" class="title-head">{{signatureStr}}</span>
                
                    <Button title="保存" class="save-signature" @click="saveHead" type="success" icon="ios-power" shape="circle"></Button>
                </div>
                <div>
                    
                </div>
            </Card>            
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                signatureStr:"",  // 签名
                editActionHead:false, // 可编辑 标题
                timerGlobal1:null,   // 计时器
                sandClockImage: require('./../assets/sandclock.gif'),  // 沙漏

            }
        },
        created(){
            this.messageInit();  // 初始化 消息
            this.signatureInit();  // 初始化 签名

        },
        methods: {
            /**
             * 始化 签名
             */
            signatureInit: function(){
                // 签名
                if(!localStorage.getItem("signature")){
                    localStorage.setItem("signature","知行合一")
                }
                this.signatureStr=localStorage.getItem("signature");
            },
            /**
             * 初始化 消息
            */
            messageInit: function(){
                var that=this;

                // 消息
                Notification.requestPermission().then(function(permission){
                    if(permission=="granted"){
                        that.timerGlobal1 && clearInterval(that.timerGlobal1);
                        var timer1=setInterval(() => {
                            that.timerHandle();
                        },61000);
                        that.timerGlobal1=timer1;
                    }else{
                        alert("未获取权限！");
                    }
                });
            },
            /**
             * 计时器  
            */
            timerHandle: function(){
                    let date=new Date().getMinutes();

                    if( (date==20) || (date==50) ){
                        new Notification(`⏳ ${date}`,{
                            icon:"https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png"
                        });
                    }
            },
            /**
             * 双击 标题
            */
            dbclickHead: function(){
                this.editActionHead=true;
            },
            /**
             * 保存 标题 
            */
            saveHead: function(){
                localStorage.setItem("signature",document.querySelector("#signature").innerText);
                this.signatureInit();
            }
        },        
    }
</script>