<style lang="scss">
    // #formatHTMLID span[contentEditable="true"]:hover {
    //     outline: 1px solid #2276d2;
    // }
</style>
<template>
    <span>
        <div>
            <Button type="primary" @click="changeHandle">切换</Button>
            <Button type="primary" @click="saveHandle">保存</Button>
        </div>
        <div class='tinymce' v-show="toggle">
            <tinymce-editor 
                v-model='tinymceHtml' 
                id='tinymce' 
                api-key="no-api-key"
                :init='init'
            />
            <div v-html='tinymceHtmlEdit' style="display:none"></div>
        </div> 
        <div v-show="!toggle" v-html='tinymceHtmlEdit' id="formatHTMLID"></div>       
    </span>
</template>
<script>

    import tinymce from 'tinymce/tinymce';
    import TinymceEditor from '@tinymce/tinymce-vue';
    import 'tinymce/themes/silver/theme';
    import 'tinymce/icons/default/icons.min.js';


    import 'tinymce/plugins/table';
    import 'tinymce/plugins/fullscreen';
    import 'tinymce/plugins/preview';
    import 'tinymce/plugins/print';
  
    //   import 'tinymce/plugins/lists'
    //   import 'tinymce/plugins/contextmenu'
    //   import 'tinymce/plugins/wordcount'
    //   import 'tinymce/plugins/colorpicker'
    //   import 'tinymce/plugins/textcolor'

export default {   
    components: {TinymceEditor},
    data () {
        return {
            tinymceHtml: '',        // 富文本内容
            tinymceHtmlEdit: '',    // 保存的内容
            toggle:true,

            init: {
                // theme: 'modern',
                content_css: '/tinymce/skins/content/default/content.css',
                skin_url: '/tinymce/skins/ui/oxide',
                language_url: '/tinymce/langs/zh_CN.js',
                language: 'zh_CN',
                height: 300,
                branding: false,  
                menubar: false, 
                plugins:['table','fullscreen','preview','print'],  
                toolbar:
                    'undo redo | formatselect fontsizeselect fontselect  | bold italic underline strikethrough forecolor backcolor | \
                    alignleft aligncenter alignright | \
                    outdent indent | table | fullscreen preview print | \
                    removeformat',                
                
                // menu: {
                //     view: {title: 'Edit', items: 'cut, copy, paste'}
                // },  
                // plugins: 'table',
                // menubar: 'table',                           
                // toolbar:
                //     'undo redo | formatselect fontsizeselect fontselect  | bold italic underline strikethrough forecolor backcolor | \
                //     alignleft aligncenter alignright alignjustify | \
                //     bullist numlist outdent indent | removeformat | \
                //     link image'
            }
        }
    },
    created () {
        tinymce.init({});
    },           
    methods: {
        /**
         * 格式化
         */
        formatHandle: function(){
            var obj=document.querySelectorAll("#formatHTMLID span[style]");

            Array.from(obj).map((o)=>{
                if( o.style.textDecoration == "underline" ){
                    o.setAttribute("contenteditable", "true");
                }
            }); 
        },
        /**
         * 切换
         */
        changeHandle: function(){
            this.toggle=!this.toggle;

            if( !this.toggle ){
               this.tinymceHtmlEdit=this.tinymceHtml; 
                this.$nextTick(()=>{
                    this.formatHandle();
                });               
            }
        },
        /**
         * 获取 数据
         */
        getData: function(){
            return Array.from(document.querySelectorAll("#formatHTMLID span[contenteditable]")).map(o=>o.innerText);
        },
        /**
         * 保存
         */
        saveHandle: function(){
            let template=this.tinymceHtml;            // 原始模板
            let templatePrint=document.querySelector("#formatHTMLID").innerHTML;   // 打印模板
            let data=this.getData();   // 带下划线 的数据


            // 拿到的数据
            this.$Notice.open({
                title: '下划线的数据',
                duration:30,
                desc: `<pre>${data}</pre>`
            });
        }
    },
}
</script>