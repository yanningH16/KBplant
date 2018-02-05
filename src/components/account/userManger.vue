<template>
  <div class="userManger">
    <div class="search">
      <ul class="left">
        <li>
          <span>用户状态</span>
          <el-select v-model="accountStatus" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="正常" value="1">
            </el-option>
            <el-option label="冻结" value="2">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户等级</span>
          <el-select v-model="level" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="注册用户" value="1">
            </el-option>
            <el-option label="高级用户" value="2">
            </el-option>
            <el-option label="钻石用户" value="3">
            </el-option>
            <el-option label="皇冠用户" value="4">
            </el-option>
            <el-option label="渠道用户" value="11">
            </el-option>
            <el-option label="代理商" value="12">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="userName" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>电话</span>
          <el-input v-model="telephone" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <!-- <li>
          <span>QQ</span>
          <el-input v-model="qq" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li> -->
        <li>
          <span>IP</span>
          <el-input v-model="ip" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <!-- <li>
          <span>UUID</span>
          <el-input v-model="uuid" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li> -->
        <li>
          <span>推荐人</span>
          <el-input v-model="invitorName" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="substationId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
      </ul>
      <div class="right">
        <span class="btn" @click="getList">查询</span>
      </div>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="sellerAccountId" label="用户ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="substationId" label="站点ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center" width="120">
        </el-table-column>
        <el-table-column prop="telephone" label="手机" align="center" width="120">
        </el-table-column>
        <!-- <el-table-column prop="qqNum" label="QQ" align="center" width="120">
        </el-table-column>
        <el-table-column prop="wechat" label="微信" align="center" width="120">
        </el-table-column> -->
        <el-table-column prop="balance" label="余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="rechargeSum" label="累计充值" align="center" width="120">
        </el-table-column>
        <el-table-column prop="levelDetail" label="会员等级" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
            <el-dropdown @command="userSet">
              <span style="font-size:12px;color:#409EFF;">
                更多
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="[scope.row,1]">设置等级</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,2]">禁用/解禁</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,3]">设置推荐人</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,4]">重置密码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="圆通价" align="center" width="120">
        </el-table-column>
        <el-table-column prop="checkStatusDetail" label="审核状态" align="center" width="120">
        </el-table-column>
        <el-table-column prop="lastLoginTime" label="最后登录时间" align="center" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.lastLoginTime ? scope.row.lastLoginTime : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="firstChargeTime" label="首次充值时间" align="center" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.firstChargeTime ? scope.row.firstChargeTime : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="gmtCreate" label="注册时间" align="center" width="200">
        </el-table-column>
        <el-table-column prop="invitorName" label="推荐人" align="center" width="120">
        </el-table-column>
        <el-table-column prop="invitedCode" label="邀请码" align="center" width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div>
    <div class="alertGrounp">
      <el-dialog title="设置审核状态" :append-to-body="true" :visible.sync="setStatus.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span>审核</span>
          <el-select v-model="setStatus.status" style="width:300px;margin-left:10px;" placeholder="请选择">
            <el-option label="未提交" value="0">
            </el-option>
            <el-option label="未审核" value="1">
            </el-option>
            <el-option label="审核未通过" value="2">
            </el-option>
            <el-option label="审核通过" value="3">
            </el-option>
          </el-select>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="setStatus.show = false">取消</span>
          <span class="btn" @click="sureToCheck">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="设置用户等级和价格" :append-to-body="true" :visible.sync="setPriceObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:60px;text-align:right;">等级</span>
          <el-select v-model="setPriceObj.status" style="width:300px;margin-left:10px;" placeholder="请选择">
            <el-option label="注册用户" value="1">
            </el-option>
            <el-option label="高级用户" value="2">
            </el-option>
            <el-option label="钻石用户" value="3">
            </el-option>
            <el-option label="皇冠用户" value="4">
            </el-option>
            <el-option label="渠道用户" value="11">
            </el-option>
            <el-option label="代理商" value="12">
            </el-option>
          </el-select>
        </div>
        <div class="cont" style="text-align:center;margin-top:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">圆通价格</span>
          <el-input v-model="setPriceObj.price" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:60px;"></span>
          <p style="font-size:12px;color:#ff3341;display:inline-block;width:300px;margin-left:10px;text-align:left;">皇冠以上可自定义价格</p>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="setPriceObj.show = false">取消</span>
          <span class="btn" @click="sureToSetLev">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="禁用/解禁用户" :append-to-body="true" :visible.sync="forbidObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span>状态</span>
          <el-select v-model="forbidObj.status" style="width:300px;margin-left:10px;" placeholder="请选择">
            <el-option label="冻结" value="2">
            </el-option>
            <el-option label="解冻" value="1">
            </el-option>
          </el-select>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="forbidObj.show = false">取消</span>
          <span class="btn" @click="sureToSetStatus">确定</span>
        </div>
        <!-- <div class="cont" style="text-align:center;">
          <span style="font-size:18px;font-wight:bold;">你确定要禁用123456吗?</span>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="forbidObj.show = false">取消</span>
          <span class="btn" @click="sureTo">确定</span>
        </div> -->
      </el-dialog>
      <el-dialog title="设置推荐人" :append-to-body="true" :visible.sync="setPushManObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:100px;text-align:right;">推荐人(手机号)</span>
          <el-input v-model="setPushManObj.pushMan" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="setPushManObj.show = false">取消</span>
          <span class="btn" @click="sureToSetInvter">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="重置密码" :append-to-body="true" :visible.sync="resetPassObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="font-size:18px;font-wight:bold;">你确定要重置该用户的密码吗?请谨慎操作</span>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="resetPassObj.show = false">取消</span>
          <span class="btn" @click="sureToReset">确定</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'userManger',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/seller/getPagingSellerListByCondtion',
      accountStatus: '',
      checkStatus: '',
      level: '',
      userName: '',
      telephone: '',
      qq: '',
      ip: '',
      substationId: '',
      uuid: '',
      invitorName: '',
      userList: [],
      setStatus: {
        show: false,
        status: '0'
      },
      setPriceObj: {
        show: false,
        status: '',
        price: ''
      },
      forbidObj: {
        show: false,
        status: ''
      },
      setPushManObj: {
        show: false,
        pushMan: ''
      },
      resetPassObj: {
        show: false
      }
    }
  },
  computed: {
    params () {
      return {
        accountStatus: this.accountStatus,
        checkStatus: this.checkStatus,
        level: this.level,
        userName: this.userName,
        telephone: this.telephone,
        qq: this.qq,
        ip: this.ip,
        substationId: this.substationId,
        uuid: this.uuid,
        invitorName: this.invitorName,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    handleClick (row) {
      this.setStatus.row = row
      this.setStatus.show = true
    },
    // 确认审核状态
    sureToCheck () {
      this.$ajax.post('/api/seller/setCheckStatus', {
        sellerAccountId: this.setStatus.row.sellerAccountId,
        checkStatus: this.setStatus.status
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
          this.setStatus.show = false
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    // 确认设置等级
    sureToSetLev () {
      this.$ajax.post('/api/seller/setLevelAndPrice', {
        sellerAccountId: this.setPriceObj.row.sellerAccountId,
        price: this.setPriceObj.price,
        level: this.setPriceObj.status
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
          this.setPriceObj.show = false
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    // 确认禁用/解禁用户
    sureToSetStatus () {
      this.$ajax.post('/api/seller/setAccountStatus', {
        sellerAccountId: this.forbidObj.row.sellerAccountId,
        accountStatus: this.forbidObj.status
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
          this.forbidObj.show = false
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    // 确认设置推荐人
    sureToSetInvter () {
      this.$ajax.post('/api/seller/setInvitor', {
        sellerAccountId: this.setPushManObj.row.sellerAccountId,
        invitorTelephone: this.setPushManObj.pushMan
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
          this.setPushManObj.show = false
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    // 确认重置密码
    sureToReset () {
      this.$ajax.post('/api/seller/initPwd', {
        sellerAccountId: this.resetPassObj.row.sellerAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
          this.resetPassObj.show = false
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    userSet (command) {
      switch (command[1]) {
        case 1:
          this.setPriceObj.row = command[0]
          this.setPriceObj.show = true
          break
        case 2:
          this.forbidObj.row = command[0]
          this.forbidObj.show = true
          break
        case 3:
          this.setPushManObj.row = command[0]
          this.setPushManObj.show = true
          break
        case 4:
          this.resetPassObj.row = command[0]
          this.resetPassObj.show = true
          break
        default:
          break
      }
    },
    setList (data) {
      this.userList = data
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.userManger
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
    display flex
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
    .right
      width 100px
      text-align center
      align-self center
</style>
