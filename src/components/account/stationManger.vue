<template>
  <div class="stationManger">
    <div class="search">
      <span>站点名称</span>
      <el-input v-model="substationName" placeholder="输入站点名称" style="width:180px;"></el-input>
      <em class="btn" @click="getList">查询</em>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="substationId" label="站点ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="name" label="站点名称" align="center" width="200">
        </el-table-column>
        <el-table-column prop="price" label="单价(元)" align="center" width="120">
        </el-table-column>
        <el-table-column prop="balance" label="账户余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="rechargeSum" label="累计充值" align="center" width="120">
        </el-table-column>
        <el-table-column prop="recipetContent" label="收款帐号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="serviceQq" label="客服QQ" align="center" width="120">
        </el-table-column>
        <el-table-column prop="serviceWechatNum" label="客服电话" align="center" width="120">
        </el-table-column>
        <el-table-column prop="servicePhone" label="客服电话" align="center" width="120">
        </el-table-column>
        <el-table-column prop="gmtCreate" label="添加时间" align="center" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="管理员" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">{{ scope.row.adminUserName }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="domainName" label="域名" align="center" width="120">
        </el-table-column>
        <!-- <el-table-column prop="userName" label="渠道名称" align="center" width="120">
        </el-table-column> -->
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
  name: 'stationManger',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/substation/getPagingListBySubstationName',
      channenId: '',
      substationName: '',
      userList: []
    }
  },
  computed: {
    params () {
      return {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        substationName: this.substationName
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
.stationManger
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
    .btn
      margin-left 20px
</style>
