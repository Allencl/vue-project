<style lang="scss">

</style>
<template>
    <button @click="clickHandle">跳转至大屏-并全屏显示</button>
</template>
<script>

export default {  
    data () {
        return {
 
        }
    },
               
    methods: {
        /**
         *  进入全屏
         */
        clickHandle: function(){
            this.$router.push('/largeScreen')
        }
    },
}
</script>