<template>
    <span>
        <Button type="info" @click="getData">获取数据</Button>
        <Table border :columns="columns" :data="data">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{row,index}" slot="input">
                <span>{{index}}</span>
                <Input v-model="row.name" placeholder="Enter something..." style="width: 300px" />
            </template>        
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>
        </Table>
    </span>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: '输入框',
                        slot: 'input'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        input: 'New York No'
                    },
                    {
                        name: 'John Brown',
                        input: '1 Lake Park'
                    },
                ]
            }
        },
        methods: {
            getData:function(){
                console.log(this.data[0]);
            }
        }
    }
</script>