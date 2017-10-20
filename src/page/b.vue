<template>
    <div>
        <div>{{msg}}</div>
        <jn-pagetable :tableData="tableData"></jn-pagetable>
        <jn-pagination :pagiData="pagiData" v-on:handlePageChange="pageChange"></jn-pagination>
    </div>

</template>

<script>

    import {queryPay,queryPay1} from '../service/pay'
    import JnPagetable from '../components/pagetable.vue'
    import JnPagination from '../components/pagination.vue'
    export default {
        name: 'jn-b',
        data () {
            return {
                msg: 'Welcome to jn-B',
                tableData:[],
                pagiData:{
                    pageSizes:[100, 200, 300, 400],
                    pageSize:100,
                    currentPage:4,
                    total:400
                }
            }
        },
        components:{
            JnPagetable,JnPagination
        },
        mounted(){
            queryPay(1,1,100,1,2,3,4,5).then(res=>{
                var data = res.data.alipayList
                console.log(data)
                this.tableData = data
            })
        },
        methods:{
            pageChange(page){
               //获取当前需要请求的页数
              console.log(page);
                //为了能看到分页效果，请求了另外的一个接口，实际需要请求当前接口
                queryPay1(1,page,100,1,2,3,4,5).then(res=>{
                    var data = res.data.alipayList
                    console.log(data)
                    this.tableData = data
                })
            }
        }
    }
</script>

<style scoped>


</style>
