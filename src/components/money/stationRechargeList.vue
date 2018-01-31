<template>
  <div class="stationRechargeList">
    <div class="search">
      <ul class="left">
        <li>
          <span>付款方式</span>
          <el-select v-model="payWay" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="支付宝转账" value="1">
            </el-option>
            <el-option label="网银转账" value="2">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>充值状态</span>
          <el-select v-model="payStatus" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="充值完成" value="1">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="stationId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li style="text-align:left;">
          <span class="btn" style="text-align:center;">查询</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="address" label="站点ID" align="center">
        </el-table-column>
        <el-table-column prop="address" label="站点名称" align="center">
        </el-table-column>
        <el-table-column prop="address" label="充值编号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="交易号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="付款方式" align="center">
          <template slot-scope="scope">
            <span>{{ 123456 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="充值金额" align="center">
        </el-table-column>
        <el-table-column prop="address" label="充值前金额" align="center">
        </el-table-column>
        <el-table-column prop="address" label="充值后金额" align="center">
        </el-table-column>
        <el-table-column prop="address" label="充值状态" align="center">
          <template slot-scope="scope">
            <span>{{ 123456 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="充值时间" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'stationRechargeList',
  data () {
    return {
      currentPage: 1,
      tableData: [{
        address: 'fgsaasggas'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.stationRechargeList
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
  .search
    display flex
    border-bottom 1px solid #e5e5e5
    .left
      flex 1
      display flex
      flex-wrap wrap
      li
        width 270px
        margin-bottom 20px
        text-align right
        span
          text-align right
          margin-right 5px
  .table
    margin-top 20px
</style>
