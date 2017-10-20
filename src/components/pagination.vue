<template>
    <div class="pagi">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagiData.currentPage"
                :page-sizes="pagiData.pageSizes"
                :page-size="pagiData.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagiData.total">
        </el-pagination>
    </div>

</template>
<script>
    export default {
        name:"jn-pagination",
        data() {
            return {
            }
        },
        props: ['pagiData'],
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.$emit("handlePageChange",val);
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
<style scoped>
    .pagi{
        position: relative;
        float: right;
        right: 232px;
        margin-bottom: 10px;
    }
</style>