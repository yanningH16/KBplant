<template>
  <div class="pushManger">
    <div class="search">
      <span>所在站点ID</span>
      <el-input v-model="substationId" placeholder="请输入站点" style="width:180px;margin-right:10px;"></el-input>
      <span>抽成类型</span>
      <el-select v-model="rakeType" style="width:180px;margin-right:10px;" placeholder="请选择">
        <el-option label="全部" value="">
        </el-option>
        <el-option label="固定抽成金额" value="1">
        </el-option>
        <el-option label="差价" value="2">
        </el-option>
        <el-option label="无" value="3">
        </el-option>
      </el-select>
      <span>推荐人</span>
      <el-input v-model="condition" placeholder="请输入推荐人" style="width:180px;margin-right:10px;"></el-input>
      <em class="btn" @click="getList">查询</em>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="invitorId" label="推荐人ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="substationName" label="所在站点" align="center" width="120">
        </el-table-column>
        <el-table-column prop="invitorName" label="推荐人" align="center" width="120">
        </el-table-column>
        <!-- <el-table-column prop="userName" label="登录帐号" align="center" width="120">
        </el-table-column> -->
        <el-table-column prop="invitorCode" label="邀请码" align="center" width="120">
        </el-table-column>
        <el-table-column prop="rakeType" label="抽成类型" align="center" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.rakeType === '1' ? '固定抽成金额' : scope.row.rakeType === '2' ? '差价' : scope.row.rakeType === '3' ? '无' : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="rakeMoney" label="单笔抽成/成本价" align="center" width="120">
        </el-table-column>
        <el-table-column prop="inviteSum" label="推荐用户数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="balance" label="账户余额" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="toLookDetail(scope.row)" type="text" size="small">利润明细</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="gmtCreate" label="添加时间" align="center" width="180">
        </el-table-column>
        <el-table-column prop="gmtModify" label="最后修改时间" align="center" width="180">
        </el-table-column>
        <el-table-column prop="comment" label="备注" align="center" width="120">
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
  name: 'component_name',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/invitor/getListByStationIdAndNameAndRakeType',
      condition: '',
      substationId: '',
      rakeType: '',
      userList: []
    }
  },
  computed: {
    params () {
      return {
        condition: this.condition,
        substationId: this.substationId,
        rakeType: this.rakeType,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    toLookDetail (row) {
      this.$router.push({ name: 'pushMangerDetail', query: { invitorId: row.invitorId } })
    },
    setList (data) {
      this.userList = data
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
