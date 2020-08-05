<style lang="scss">

</style>
<template>
    <div class='tinymce'>
        <tinymce-editor 
            v-model='tinymceHtml' 
            id='tinymce' 
            api-key="no-api-key"
            :init='init'
        />
        <div v-html='tinymceHtml'></div>
    </div>
</template>
<script>

    import tinymce from 'tinymce/tinymce';
    import TinymceEditor from '@tinymce/tinymce-vue';
    import 'tinymce/themes/silver/theme';
    import 'tinymce/icons/default/icons.min.js';


    import 'tinymce/plugins/table';
    // import 'tinymce/plugins/image';
    //   import 'tinymce/plugins/lists'
    //   import 'tinymce/plugins/contextmenu'
    //   import 'tinymce/plugins/wordcount'
    //   import 'tinymce/plugins/colorpicker'
    //   import 'tinymce/plugins/textcolor'

export default {   
    components: {TinymceEditor},
    data () {
        return {
            tinymceHtml: '请输入内容',
            init: {
                // theme: 'modern',
                content_css: '/tinymce/skins/content/default/content.css',
                skin_url: '/tinymce/skins/ui/oxide',
                language_url: '/tinymce/langs/zh_CN.js',
                language: 'zh_CN',
                height: 300,
                branding: false,  
                menubar: false, 
                plugins:`
                    table
                `,  
                toolbar:
                    'undo redo | formatselect fontsizeselect fontselect  | bold italic underline strikethrough forecolor backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | table | \
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

    },
}
</script>