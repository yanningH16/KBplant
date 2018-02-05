<template>
  <div class="pushMangerDetail">
    <div class="nav">
      <em @click="$router.push({name: 'pushManger'})">推荐人管理</em>
      <span>>利润明细</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="left">
          <span>交易类型</span>
          <el-select v-model="type" style="width:180px;margin-right:10px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="下单获得利润" value="1">
            </el-option>
            <el-option label="利润结算" value="2">
            </el-option>
            <el-option label="用户退款扣除利润" value="3">
            </el-option>
            <el-option label="其他结算利润" value="4">
            </el-option>
          </el-select>
          <span>交易时间</span>
          <el-date-picker v-model="time" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:350px;margin-right:10px;">
          </el-date-picker>
          <em class="btn" @click="getList">查询</em>
        </div>
      </div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="gmtCreate" label="时间" align="center">
          </el-table-column>
          <el-table-column prop="typeDetail" label="类型" align="center">
          </el-table-column>
          <el-table-column prop="money" label="金额" align="center">
          </el-table-column>
          <el-table-column prop="beforMoney" label="变动前金额" align="center">
          </el-table-column>
          <el-table-column prop="afterMoney" label="变动后金额" align="center">
          </el-table-column>
          <el-table-column prop="comment" label="备注" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="pager">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'pushMangerDetail',
  mixins: [pageCommon],
  data () {
    return {
      apiUrl: '/api/invitor/getWettingPagingListByInvitorId',
      type: '',
      time: '',
      tableData: []
    }
  },
  computed: {
    params () {
      return {
        invitorId: this.$route.query.invitorId,
        type: this.type,
        startTime: this.time[0],
        endTime: this.time[1],
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
.pushMangerDetail
  font-size 14px
  .nav
    padding 20px 20px 0
    em
      cursor pointer
      color #535353
      &:hover
        color #40B6FF
    span
      color #262626
  .content
    margin 20px
    padding 20px
    background #ffffff
    .search
      padding-bottom 20px
      border-bottom 1px solid #e5e5e5
      display flex
      .left
        flex 1
        span
          margin-right 10px
        .btn
          margin-left 20px
      .right
        flex 1
        text-align right
    .table
      margin-top 20px
</style>
