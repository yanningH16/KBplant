<template>
  <div class="pushManger">
    <div class="search">
      <span>所在站点</span>
      <el-input placeholder="请输入站点" style="width:180px;margin-right:10px;"></el-input>
      <span>抽成类型</span>
      <el-select style="width:180px;margin-right:10px;" placeholder="请选择">
        <el-option label="全部" value="">
        </el-option>
        <el-option label="固定抽成金额" value="2">
        </el-option>
        <el-option label="差价" value="3">
        </el-option>
        <el-option label="无" value="4">
        </el-option>
      </el-select>
      <span>推荐人</span>
      <el-input placeholder="请输入推荐人" style="width:180px;margin-right:10px;"></el-input>
      <em class="btn">查询</em>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="userName" label="推荐人ID" align="center" width="100">
        </el-table-column>
        <el-table-column prop="userName" label="所在站点" align="center" width="200">
        </el-table-column>
        <el-table-column prop="userName" label="推荐人" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="登录帐号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="邀请码" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="抽成类型" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="单笔抽成/成本价" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="推荐用户数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="账户余额" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="toLookDetail(scope.row)" type="text" size="small">利润明细</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="添加时间" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="最后修改时间" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="备注" align="center" width="120">
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
  name: 'component_name',
  data () {
    return {
      currentPage: 1,
      userList: [{
        userName: 'nfasnffsafn'
      }]
    }
  },
  methods: {
    toLookDetail (row) {
      this.$router.push({ name: 'pushMangerDetail' })
    },
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
.pushManger
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
    span
      margin-right 10px
</style>
