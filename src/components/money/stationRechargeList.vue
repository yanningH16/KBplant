<template>
  <div class="stationRechargeList">
    <div class="search">
      <ul class="left">
        <li>
          <span>付款方式</span>
          <el-select v-model="payType" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="网银转账" value="1">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>充值状态</span>
          <el-select v-model="rechargeStatus" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="等待付款" value="1">
            </el-option>
            <el-option label="等待收货" value="2">
            </el-option>
            <el-option label="等待收款" value="3">
            </el-option>
            <el-option label="充值失败" value="4">
            </el-option>
            <el-option label="订单取消" value="5">
            </el-option>
            <el-option label="充值完成" value="6">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="substationId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li style="text-align:left;">
          <span class="btn" @click="getList" style="text-align:center;">查询</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="substationId" label="站点ID" align="center">
        </el-table-column>
        <el-table-column prop="substationName" label="站点名称" align="center">
        </el-table-column>
        <el-table-column prop="id" label="充值编号" align="center">
        </el-table-column>
        <el-table-column prop="rechargeId" label="交易号" align="center">
        </el-table-column>
        <el-table-column prop="payTypeDetail" label="付款方式" align="center">
        </el-table-column>
        <el-table-column prop="money" label="充值金额" align="center">
        </el-table-column>
        <el-table-column prop="address" label="充值前金额" align="center">
        </el-table-column>
        <el-table-column prop="address" label="充值后金额" align="center">
        </el-table-column>
        <el-table-column prop="stautsDetail" label="充值状态" align="center">
        </el-table-column>
        <el-table-column prop="gmtCreate" label="充值时间" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'stationRechargeList',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/substation/recharge/getRechargeListForPlatform',
      payType: '',
      rechargeStatus: '',
      substationId: '',
      tableData: []
    }
  },
  computed: {
    params () {
      return {
        payType: this.payType,
        rechargeStatus: this.rechargeStatus,
        substationId: this.substationId,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    setList (data) {
      this.tableData = data
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
