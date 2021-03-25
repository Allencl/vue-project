<style lang="scss">
    .design-center-page{
        .center-content{
            
        }
    }
</style>
<template>
    <div 
        class="center-content"
        @drop="dropHandle($event)"
        @dragover.prevent
    >
        <h1>12121</h1>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        created(){

        },        
        methods: {   
            /**
             *  面板 拖拽
             */ 
            dropHandle: function (event) {
                let row = JSON.parse( event.dataTransfer.getData('item') );  

                console.log( row );
            },                     
        },        
    }
</script>