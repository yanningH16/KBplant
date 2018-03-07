<template>
  <div class="getwayManger">
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="apiAccountId" label="Api编号" align="center" width="185">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="company" label="联系人姓名" align="center">
        </el-table-column>
        <el-table-column prop="telephone" label="手机" align="center">
        </el-table-column>
        <el-table-column prop="balance" label="余额" align="center">
        </el-table-column>
        <el-table-column prop="rechargeSum" label="累计充值" align="center">
        </el-table-column>
        <el-table-column prop="price" label="单价" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="userSet([scope.row,0])" type="text" size="small">充值</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div> -->
    <div class="alertGroup">
      <el-dialog title="Api充值" :append-to-body="true" :visible.sync="rechargeObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">金额(元)</span>
          <el-input v-model="rechargeObj.money" style="width:300px;margin-left:10px;" placeholder="请输入充值金额"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">备注</span>
          <el-input v-model="rechargeObj.common" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <!-- <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">收款帐号</span>
          <el-input v-model="rechargeObj.getAccount" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div> -->
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <!-- <span class="btn-b" style="margin-right:10px;" @click="rechargeObj.show = false">取消</span> -->
          <span class="btn" @click="sureToRecharge" v-show="isPoting">确定</span>
          <el-button type="info" disabled v-show="!isPoting">
            <em class="el-icon-loading"></em>
          </el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
import { mapGetters } from 'vuex'
export default {
  name: 'apiManger',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      channelName: '',
      bankArr: [],
      apiUrl: '/api/apiAccount/getApiAccountList',
      rechargeObj: {
        show: false,
        row: '',
        money: '',
        common: ''
      },
      deleMoneyObj: {
        show: false,
        common: '',
        money: ''
      },
      editObj: {
        show: false,
        type: 0,
        stationId: '',
        wayName: '',
        payer: '',
        getBankName: '',
        otherBnakName: '',
        getBankAccount: '',
        kefuChat: '',
        kefuQQ: '',
        kefuPhone: '',
        adminAccount: '',
        adminPassword: '',
        yuantongPrice: ''
      },
      resetPassObj: {
        show: false
      },
      tableData: [],
      apiAccountId: '',
      isPoting: true
    }
  },
  computed: {
    params () {
      return {
        // pageNo: this.pageNo,
        // pageSize: this.pageSize
      }
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    setList (data) {
      this.tableData = data
    },
    handleClick (row) {
      // console.log(row)
    },
    userSet (command) {
      this.apiAccountId = command[0].apiAccountId
      if (command[1] === 0) { // 添加金额
        this.rechargeObj.show = true
        this.rechargeObj.row = command[0]
      }
    },
    // 确认充值
    sureToRecharge () {
      if (this.rechargeObj.money === '' || this.rechargeObj.common === '') {
        this.$message({
          message: '请填写充值信息!',
          type: 'warning'
        })
      } else {
        this.isPoting = false
        this.$ajax.post('/api/apiAccount/recharge', {
          money: this.rechargeObj.money,
          comment: this.rechargeObj.common,
          apiAccountId: this.apiAccountId
        }).then((data) => {
          if (data.data.code === '200') {
            this.rechargeObj.show = false
            this.$message({
              message: '操作成功!',
              type: 'success'
            })
            this.getList()
            this.isPoting = true
            for (let m in this.rechargeObj) {
              if (!(m === 'show')) {
                this.rechargeObj[m] = ''
              }
            }
          } else {
            this.$message({
              message: data.data.message,
              type: 'warning'
            })
          }
        }).catch((err) => {
          console.error(err)
        })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.getwayManger
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
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
