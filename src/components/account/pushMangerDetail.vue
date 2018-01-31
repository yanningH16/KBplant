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
          <el-select style="width:180px;margin-right:10px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="下单获得利润" value="2">
            </el-option>
          </el-select>
          <span>交易时间</span>
          <el-date-picker style="width:180px;margin-right:10px;" type="date" placeholder="选择日期">
          </el-date-picker>
          <em class="btn">查询</em>
        </div>
      </div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="address" label="时间" align="center">
          </el-table-column>
          <el-table-column prop="address" label="类型" align="center">
          </el-table-column>
          <el-table-column prop="address" label="金额" align="center">
          </el-table-column>
          <el-table-column prop="address" label="变动前金额" align="center">
          </el-table-column>
          <el-table-column prop="address" label="变动后金额" align="center">
          </el-table-column>
          <el-table-column prop="address" label="备注" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="pager">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'pushMangerDetail',
  data () {
    return {
      tableData: [{
        address: '561561154451'
      }]
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
