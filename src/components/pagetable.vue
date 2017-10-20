 <template>
     <el-table
             :data="tableData"
             border
             style="width: 100%">
         <el-table-column
                 prop="sbbh"
                 label="扫码设备编号"
                 sortable
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="xdsj"
                 label="下单时间"
                 sortable
                 width="140">
         </el-table-column>
         <el-table-column
                 prop="ddbh"
                 label="商户订单号"
                 sortable
                 width="120">
         </el-table-column>
         <el-table-column
                 prop="jyje"
                 label="交易金额"
                 sortable
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="gmt_payment"
                 label="交易时间"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="zfjg"
                 label="支付结果"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="trade_no"
                 label="支付宝订单号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="buyer_logon_id"
                 label="买家支付宝账号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="gmt_payment"
                 label="交易时间"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="sfcz"
                 label="是否冲正"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="smdblsh"
                 label="扫码流水号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="dwbh"
                 label="单位编号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="xlbh"
                 label="线路编号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="zdbh"
                 label="站点编号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="qcbh"
                 label="车辆编号"
                 width="100">
         </el-table-column>
         <el-table-column
                 prop="zgkh"
                 label="驾驶员"
                 width="100">
         </el-table-column>
         <!--<el-table-column
            prop="tag"
            label="标签"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                close-transition>{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column>-->
     </el-table>
  </template>

<script>
  export default {
    name:"jn-pagetable",
    data() {
      return {
      }
    },
    props: ['tableData'],
    methods: {
      formatter(row, column) {
        return row.xlbh;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
