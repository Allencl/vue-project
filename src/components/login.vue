<style lang="scss">
    .login-page{
        width: 100%;
        background-repeat: no-repeat;   //不重复
        // background-size: 100% 100%;     // 满屏
        background:url('./../../public/login.jpg');
    }

</style>

<template>
    <div class="login-page" :style="{height:outerHeight+'px'}">
        <div style="textAlign:center">
            <Button type="primary" @click="registerHandle" size="large" long>打开-注册页面</Button>
        </div>
        <Modal
            v-model="modal"
            width="98%"
            :styles="{top: '16px'}"
            :footer-hide="true"
        >
            <Register />
        </Modal>
    </div>
</template>

<script>

    import Register from './Register.vue';   // 注册页面

    export default {
        components:{
            Register,
        },
        data () {
            return {
                modal:false,
                outerHeight:window.innerHeight
            }
        },
        methods: {
            /**
             * 注册
             */
            registerHandle(){
                this.modal=true;
            }
        }        
    }
</script>


