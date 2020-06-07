<template>
    <div>
        <button @click="click">按钮</button>
    </div>    
</template>
<script>

    export default {
        data () {
            return {
               
            }
        },
		created() {

		}, 	        
        methods: {
            click: function(){

            // var res = [{
            //     key: "a1111",
            //     label: "湖北省",
            //     children: [{
            //         key: "aa111",
            //         label: "武汉市",
            //         children: [{
            //             key: "ab11",
            //             label: "汉阳区",
            //             children: [{
            //                 key: "abgt11",
            //                 label: "水上分局1"
            //             }]
            //         }, 
            //         {
            //             key: "auitut8",
            //             label: "武昌区",
            //             children: [{
            //                 key: "ajuyt66",
            //                 label: "水上分局2"
            //             }]
            //         }, {
            //             key: "akiju8876",
            //             label: "汉口区",
            //             children: [{
            //                 key: "aoise7",
            //                 label: "水上分局3"
            //             }]
            //         }]
            //     }, {
            //         key: "c3333",
            //         label: "十堰市",
            //         children: [{
            //             key: "ku877eee",
            //             label: "郧阳区",
            //             children: [{
            //                 key: "kisu83yh",
            //                 label: "安阳镇"
            //             }]
            //         }, {
            //             key: "jiuuee",
            //             label: "茅箭区",
            //             children: [{
            //                 key: "kisuejjs655",
            //                 label: "小川乡"
            //             }]
            //         }]
            //     }]
            // }];


        var res = [
          {
            "label": "一级标题",
            "key": "77B1",
            "children": [
              {"label": "Alabama", "key": "AL"},
              {"label": "Alaska", "key": "AK"},
            ]
          },
          {
            "label": "第一级-多层的",
            "key": "ttt77B1",
            "children": [
              {
                "label": "第二级", 
                "key": "B1",
                "children": [
                  {
                    "label": "第三级111", 
                    "key": "B21",

                    "children": [
                      {
                        "label": "第四级111", 
                        "key": "rrruuAL",
                        "children": [
                          {
                            "label": "第五级111", 
                            "key": "wwwuuAL",
                            "children": [
                              {
                                "label": "第六级111", 
                                "key": "loouuAL",
                                "children": [
                                  {
                                    "label": "第七级111", 
                                    "key": "mmjjuuAL"
                                  }
                                ]                                 
                              }
                            ]                            
                          }
                        ]
                      }
                      
                    ]

                  },
                  {"label": "第三级222", "key": "B22"},
                ]
              },
              {"label": "Alaska", "key": "B2"},
            ]
          },  
        ]; 


            function treeFindPath (tree, func, path = []) {
                if (!tree) return []
                for (const data of tree) {
                    // 这里按照你的需求来存放最后返回的内容吧
                    path.push({
                        label:data.label,
                        key:data.key
                    });
                    if (func(data)) return path
                    if (data.children) {
                    const findChildren = treeFindPath(data.children, func, path)
                    if (findChildren.length) return findChildren
                    }
                    path.pop()
                }
                return []
            }


            var aaa = treeFindPath(res, data=> data.key==='mmjjuuAL');

            console.log(aaa);
            console.log(res);


            },   

        }
    }
</script>