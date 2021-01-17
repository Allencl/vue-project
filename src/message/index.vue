<style lang="scss">
    .sand-clock-card{
        width: 500px;
        height: 200px;
        margin-left: 52px;
        margin-top: 40px;

        .icon-head{
            width: 45px;
            height: 42px;
        }

        .title-head{
            cursor: cell;
            display: inline-block;
            font-family: cursive;
            top: 30px;
            position: absolute;
            left: 82px;
            font-size: 20px;
            font-style: oblique;
        }

        .save-signature{
            float: right;
            margin-top: 10px;
        }

        .timer-tag-box{
            height: 38px;
            .ivu-icon-ios-close{
                top: 0px;
            }
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
                    <Button v-show="editActionHead" title="保存" class="save-signature" @click="saveHead" type="success" icon="md-checkmark" shape="circle"></Button>
                </div>
                <div>
                    <div class="timer-tag-box">
                        <Tag v-for="(o,index) in timerArray" :key="index" @on-close="closeTag(index)"  :closable="switch1" color="warning">{{o}}</Tag>
                        <i-switch style="margin-left:12px" v-model="switch1" @on-change="changeSwitch" size="large" true-color="#13ce66" false-color="#CC0000">
                            <span slot="open">ON</span>
                            <span slot="close">OFF</span>
                        </i-switch>
                    </div>
                    <div v-show="switch1">
                        <InputNumber :step="1" :max="60" :min="0" v-model="InputNumber"></InputNumber>
                        <Button style="margin-left:16px" @click="addTimerArrayHandle" title="添加" type="success" icon="md-add" shape="circle"></Button>
                    </div>
                    <div v-show="false">
                        <audio ref="audioID" :src="audioMp3">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </Card>            
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                switch1:false,  //
                InputNumber:0,  // 
                timerArray:[],  // 计时器
                signatureStr:"",  // 签名
                editActionHead:false, // 可编辑 标题
                timerGlobal1:null,   // 计时器
                sandClockImage: require('./../assets/sandclock.gif'),  // 沙漏
                audioMp3: require('./../assets/mp3.mp3'),  // 音乐

            }
        },
        created(){
            this.messageInit();  // 初始化 消息
            this.signatureInit();  // 初始化 签名
            this.timerInit();   // 初始化 计时器
        },
        methods: {
            /**
             * 初始化 计时器
             */
            timerInit: function(){
                try {
                    if( !localStorage.getItem("timerArray") ){
                        localStorage.setItem("timerArray","[]");
                    }

                    this.timerArray=JSON.parse(localStorage.getItem("timerArray"));                
                } catch (error) {
                   console.error(error);     
                }
            },
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
                        },39000);
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
                var _date= new Date().getMinutes();

                if( this.timerArray.filter(o=>o==_date)["length"] ){
                    new Notification(`⏳ ${_date}`,{
                        icon:"https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png"
                    });
                    this.$refs["audioID"].play();
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
                this.editActionHead=false;
            },
            /**
             * 添加 定时器
            */
            addTimerArrayHandle:function(){
                var _val=this.InputNumber;
                try {
                    var _array=JSON.parse(localStorage.getItem("timerArray"));

                    if(_array.filter((o)=>_val==o)["length"]){
                        this.$Message.warning({
                            // background: true,
                            content: '已存在！'
                        });
                        return;
                    }
                    localStorage.setItem("timerArray",JSON.stringify(this.timerArray.concat([_val])))
                    this.timerInit();   
                } catch (error) {
                    console.error(error);
                }

            },
            /**
             * 删除 tag
            */
            closeTag:function(index){
                localStorage.setItem("timerArray",JSON.stringify(this.timerArray.filter((o,i)=>i!=index)));
                this.timerInit();   
            },
            /**
             * swich 切换
            */
            changeSwitch:function(){

            }
        },        
    }
</script>