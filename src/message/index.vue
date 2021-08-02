<style lang="less">
    .sand-clock-card{
        width: 610px;
        height: 380px;
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
            margin-top: 10px;
            height: 38px;
            .ivu-icon-ios-close{
                top: 0px;
            }
        }

        .top-contariner{
            padding-bottom: 3px;
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
                    <div class="top-contariner" style="paddingBottom:13px;">
                        <span  v-for="(o,index) in currencyArraySort" :key="index">
                            <Tag
                                color="warning"
                                :closable="switch1" @on-close="closeCurrencySort(index)"
                            >
                                {{o}}
                            </Tag>
                            <Icon style="color:#19be6b" v-show="currencyArraySort['length'] && (index!=currencyArraySort['length']-1)" type="ios-arrow-forward" />
                        </span>
                    </div>
                    <div class="top-contariner">
                        <Tag v-for="(o,index) in currencyArrayUp" :key="index" 
                        
                            color="success"
                            :closable="switch1" @on-close="closeCurrencyUp(index)"
                        >
                            <Icon type="md-trending-up" />
                            {{o}}
                        </Tag>
                    </div>
                    <div class="top-contariner">
                        <Tag v-for="(o,index) in currencyArrayDown" :key="index" 
                        
                            color="success"
                            :closable="switch1" @on-close="closeCurrencyDown(index)"
                        >
                            <Icon type="md-trending-down" />
                            {{o}}
                        </Tag>
                    </div>

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
                    <div v-show="switch1">
                        <Row>
                            <i-col span="6">
                                <Dropdown
                                    style="margin-top:18px"
                                    @on-click="dropdownChangeUp"
                                >
                                    <Button type="dashed">
                                        <Icon type="md-trending-up" />
                                        选择
                                        <Icon type="ios-arrow-down"></Icon>
                                    </Button>
                                    <DropdownMenu slot="list">
                                        <DropdownItem name="GBP">GBP</DropdownItem>
                                        <DropdownItem name="EUR">EUR</DropdownItem>
                                        <DropdownItem name="USD">USD</DropdownItem>
                                        <DropdownItem name="JPY">JPY</DropdownItem>
                                        <DropdownItem name="XAU" divided>XAU</DropdownItem>
                                        <DropdownItem name="XAG">XAG</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </i-col>
                            <i-col span="6">
                                <Dropdown
                                    style="margin-top:18px"
                                    @on-click="dropdownChangeDown"
                                >
                                    <Button type="dashed">
                                        <Icon type="md-trending-down" />
                                        选择
                                        <Icon type="ios-arrow-down"></Icon>
                                    </Button>
                                    <DropdownMenu slot="list">
                                        <DropdownItem name="GBP">GBP</DropdownItem>
                                        <DropdownItem name="EUR">EUR</DropdownItem>
                                        <DropdownItem name="USD">USD</DropdownItem>
                                        <DropdownItem name="JPY">JPY</DropdownItem>
                                        <DropdownItem name="XAU" divided>XAU</DropdownItem>
                                        <DropdownItem name="XAG">XAG</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </i-col>

                            <i-col span="6">
                                <Dropdown
                                    style="margin-top:18px"
                                    @on-click="dropdownChangeSort"
                                >
                                    <Button type="dashed">
                         
                                        排序
                                        <Icon type="ios-arrow-down"></Icon>
                                    </Button>
                                    <DropdownMenu slot="list">
                                        <DropdownItem name="GBP">GBP</DropdownItem>
                                        <DropdownItem name="EUR">EUR</DropdownItem>
                                        <DropdownItem name="USD">USD</DropdownItem>
                                        <DropdownItem name="JPY">JPY</DropdownItem>
                                        <DropdownItem name="XAU" divided>XAU</DropdownItem>
                                        <DropdownItem name="XAG">XAG</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </i-col>

                        </Row>


                    </div>
                </div>
            </Card>            
        </div>

        <div style="visibility:hidden;">
            <audio 
                ref="audioID" 
                :src="audioMp3"
                muted="muted"
            >
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                switch1:false,  //
                InputNumber:0,  // 
                currencyArrayUp:[],  // list up
                currencyArrayDown:[],  // list down
                currencyArraySort:[],  // list sort

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
             * 
             */
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

                try {
                    if( !localStorage.getItem("currencyArrayUp") ){
                        localStorage.setItem("currencyArrayUp","[]");
                    }
                    this.currencyArrayUp=JSON.parse(localStorage.getItem("currencyArrayUp")); 
                    

                    if( !localStorage.getItem("currencyArrayDown") ){
                        localStorage.setItem("currencyArrayDown","[]");
                    }
                    this.currencyArrayDown=JSON.parse(localStorage.getItem("currencyArrayDown"));                     
                    

                    if( !localStorage.getItem("currencyArraySort") ){
                        localStorage.setItem("currencyArraySort","[]");
                    }
                    this.currencyArraySort=JSON.parse(localStorage.getItem("currencyArraySort"));                     
                                   
               
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
             * 下拉
             */
            dropdownChangeUp:function(name){
                try {
                    var _array=JSON.parse(localStorage.getItem("currencyArrayUp"));

                    if(_array.filter((o)=>name==o)["length"]){
                        this.$Message.warning({
                            // background: true,
                            content: '已存在！'
                        });
                        return;
                    }
                    localStorage.setItem("currencyArrayUp",JSON.stringify(this.currencyArrayUp.concat([name])))
                    this.timerInit();   
                } catch (error) {
                    console.error(error);
                }
            },
            dropdownChangeDown: function(name){
                try {
                    var _array=JSON.parse(localStorage.getItem("currencyArrayDown"));

                    if(_array.filter((o)=>name==o)["length"]){
                        this.$Message.warning({
                            // background: true,
                            content: '已存在！'
                        });
                        return;
                    }
                    localStorage.setItem("currencyArrayDown",JSON.stringify(this.currencyArrayDown.concat([name])))
                    this.timerInit();   
                } catch (error) {
                    console.error(error);
                }                
            },
            dropdownChangeSort: function(name){
                try {
                    var _array=JSON.parse(localStorage.getItem("currencyArraySort"));

                    if(_array.filter((o)=>name==o)["length"]){
                        this.$Message.warning({
                            // background: true,
                            content: '已存在！'
                        });
                        return;
                    }
                    localStorage.setItem("currencyArraySort",JSON.stringify(this.currencyArraySort.concat([name])))
                    this.timerInit();   
                } catch (error) {
                    console.error(error);
                }  
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
             */
            closeCurrencyUp: function(index){
                localStorage.setItem("currencyArrayUp",JSON.stringify(this.currencyArrayUp.filter((o,i)=>i!=index)));
                this.timerInit();  
            },
            closeCurrencyDown: function(index){
                localStorage.setItem("currencyArrayDown",JSON.stringify(this.currencyArrayDown.filter((o,i)=>i!=index)));
                this.timerInit();  
            },
            closeCurrencySort: function(index){
                localStorage.setItem("currencyArraySort",JSON.stringify(this.currencyArraySort.filter((o,i)=>i!=index)));
                this.timerInit();  
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