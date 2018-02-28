<template>
  <div class="apiList">
    <div class="search">
      <div class="left">
        <span>日期查询</span>
        <el-date-picker v-model="time" value-format="yyyyMMdd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:350px;margin-right:10px;">
        </el-date-picker>
        <!-- <span>api编号</span>
        <el-input v-model="channelId" style="width:180px;" placeholder="请输入内容"></el-input> -->
        <em @click="getList" class="btn">查询</em>
      </div>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column prop="gmtCreate" label="日期" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.gmtCreate ? scope.row.gmtCreate.split(' ')[0] : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="apiAccountId" label="api编号" align="center">
        </el-table-column>
        <el-table-column prop="apiAccountName" label="站点名称" align="center">
        </el-table-column>
        <el-table-column prop="orderNum" label="订单数" align="center">
        </el-table-column>
        <el-table-column prop="sellerAccountMoney" label="用户帐户余额" align="center">
        </el-table-column>
        <el-table-column prop="sellerCost" label="用户消费金额" align="center">
        </el-table-column>
        <el-table-column prop="profit" label="利润" align="center">
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
  name: 'apiList',
  mixins: [pageCommon],
  data () {
    return {
      searchTime: '',
      apiUrl: '/api/apiAccount/getStatisticList',
      channelId: '',
      time: '',
      currentPage: 1,
      userList: []
    }
  },
  computed: {
    params () {
      return {
        startTime: this.time[0],
        endTime: this.time[1],
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    setList (data) {
      this.userList = data
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.apiList
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
  ::-webkit-scrollbar
    display block
    width 100%
    height 8px
  ::-webkit-scrollbar-thumb
    background #eeeeee
    border-radius 5px
  .search
    padding-bottom 20px
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
</style>
