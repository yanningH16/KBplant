webpackJsonp([3],{AuAl:function(s,t){},LqM4:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Dd8w"),i=e.n(a),n={name:"navBar",data:function(){return{isActive:0,chooseIndexArray:[0,1,2,3,4,5,6,7]}},computed:{menus:{get:function(){return[{icon:"icon-yingxiaoduanxin",header:"帐号管理",router:"account",children:[{header:"用户管理",router:"userManger"},{header:"渠道管理",router:"getwayManger"},{header:"分站管理",router:"stationManger"},{header:"api管理",router:"apiManger"},{header:"推荐人管理",router:"pushManger"}]},{icon:"icon-qianmingguanli",header:"资金管理",router:"money",children:[{header:"用户充值记录",router:"userRechargeList"},{header:"站点充值记录",router:"stationRechargeList"},{header:"渠道充值记录",router:"getwayRechargeList"},{header:"api充值记录",router:"apiRechargeList"}]},{icon:"icon-xityongduanxin",header:"任务管理",router:"order",children:[{header:"任务列表",router:"taskList"},{header:"订单列表",router:"orderList"},{header:"api订单列表",router:"apiOrderList"}]},{icon:"icon-xityongduanxin",header:"统计报表",router:"countList",children:[{header:"平台报表统计",router:"plantformList"},{header:"渠道报表统计",router:"getwayList"},{header:"站点报表统计",router:"stationList"},{header:"api报表统计",router:"apiList"}]}]},set:function(s){return s}}},watch:{$route:"setRouterActive"},mounted:function(){this.setRouterActive()},methods:{setRouterActive:function(){var s=this;this.$nextTick(function(){s.$route.path})},changeShow:function(s){var t=this.chooseIndexArray.length;if(this.chooseIndexArray.includes(s))for(var e=0;e<t;e++)this.chooseIndexArray[e]===s&&this.chooseIndexArray.splice(e,e+1);else this.chooseIndexArray.push(s)},refresh:function(s){this.$route.name===s&&this.$router.go(0)}}},o={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"menu"},[s._m(0),s._v(" "),e("div",{staticClass:"router"},s._l(s.menus,function(t,a){return e("div",{key:a,ref:"routerBox",refInFor:!0,staticClass:"routerBox"},[t.children?s._e():e("router-link",{staticClass:"routerHeader",attrs:{tag:"div",to:{name:t.router}},nativeOn:{click:function(e){s.refresh(t.router)}}},[e("span",{staticClass:"icon iconfont",class:t.icon}),s._v(" "),e("span",{staticClass:"text"},[s._v(s._s(t.header))])]),s._v(" "),t.children?e("div",{staticClass:"routerHeader",on:{click:function(t){s.changeShow(a)}}},[e("span",{staticClass:"icon iconfont",class:[t.icon]}),s._v(" "),e("span",{staticClass:"text"},[s._v(s._s(t.header))]),s._v(" "),e("span",{staticClass:"more el-icon-arrow-down",class:{moreActive:s.chooseIndexArray.includes(a),unMoreActive:!s.chooseIndexArray.includes(a)}})]):s._e(),s._v(" "),e("el-collapse-transition",[t.children?e("div",{directives:[{name:"show",rawName:"v-show",value:s.chooseIndexArray.includes(a),expression:"chooseIndexArray.includes(index)"}],staticClass:"childRouter"},s._l(t.children,function(t,a){return e("router-link",{key:a,staticClass:"childBox",attrs:{tag:"div",to:{name:t.router}},nativeOn:{click:function(e){s.refresh(t.router)}}},[e("span",{staticClass:"icon iconfont",class:t.icon}),s._v(" "),e("span",{staticClass:"text"},[s._v(s._s(t.header))])])})):s._e()])],1)}))])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"logo"},[t("span",[this._v("后台管理系统")])])}]};var r=e("VU/8")(n,o,!1,function(s){e("AuAl")},"data-v-b9fc38ec",null).exports,c=e("SJI6"),l=e("L6bb"),u=e.n(l),d={name:"userTitle",data:function(){return{showPass:!1,showInfo:!1,task:!1,moneyObj:{},fixPassObj:{oldpass:"",newpass1:"",newpass2:""}}},computed:i()({},Object(c.mapGetters)(["userInfo"])),methods:{logout:function(){var s=this;this.$confirm("确认退出登录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.$router.push({name:"login"})}).catch(function(s){})},fixPass:function(){var s=this;this.$ajax.post("/api/user/changePwd",{telephone:this.userInfo.telephone,oldPwd:u()(this.fixPassObj.oldpass),newPwd:u()(this.fixPassObj.newpass1),repeatPwd:u()(this.fixPassObj.newpass2)}).then(function(t){"200"===t.data.code?(s.$message({message:"修改成功",type:"success"}),s.showPass=!1):s.$message({message:t.data.message,type:"warning"})}).catch(function(){s.$message.error("服务器错误！")})},getPrice:function(){var s=this;this.$ajax.post("/api/platform/getBalance",{userAccountId:this.userInfo.platformAccountId}).then(function(t){"200"===t.data.code?s.moneyObj=t.data.data:s.$message({message:t.data.message,type:"warning"})}).catch(function(){s.$message.error("服务器错误！")})}},mounted:function(){}},h={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"userTitle"},[e("div",{staticClass:"cont"},[e("div",[2===s.userInfo.status?e("span",{staticClass:"record"},[e("i",{staticClass:"iconfont icon-qi"}),s._v(" "),e("strong",[s._v("认证中")])]):s._e(),s._v(" "),e("router-link",{attrs:{to:{name:"sucessChange"}}},[1===s.userInfo.status?e("span",{staticClass:"record"},[e("i",{staticClass:"iconfont icon-qi1"}),s._v(" "),e("strong",[s._v("已认证")])]):s._e()]),s._v(" "),4===s.userInfo.status?e("span",{staticClass:"record"},[e("i",{staticClass:"iconfont icon-qi2"}),s._v(" "),e("strong",[s._v("认证驳回")])]):s._e(),s._v(" "),3===s.userInfo.status?e("span",{staticClass:"record"},[e("i",{staticClass:"iconfont icon-qi2"}),s._v(" "),e("strong",[s._v("未认证")])]):s._e()],1),s._v(" "),e("div",{staticClass:"info",on:{click:function(t){s.showInfo=!s.showInfo}}},[e("b",{staticClass:"head"},[s._v("\n        Y\n      ")]),s._v(" "),e("span",[s._v(s._s(s.userInfo.telephone))]),s._v(" "),e("a",{staticClass:"el-icon-arrow-down"}),s._v(" "),e("transition",{attrs:{name:s.showInfo?"el-fade-in-linear":"el-fade-in"}},[e("ul",{directives:[{name:"show",rawName:"v-show",value:s.showInfo,expression:"showInfo"}],staticClass:"operate",class:{fadeIn:s.showInfo,fadeOut:!s.showInfo}},[e("li",{on:{click:function(t){s.showPass=!0}}},[e("i",{staticClass:"iconfont icon-xiugaimima"}),s._v(" "),e("span",[s._v("修改登录密码")])]),s._v(" "),e("li",{on:{click:s.logout}},[e("i",{staticClass:"iconfont icon-quite"}),s._v(" "),e("span",[s._v("退出登录")])])])])],1)]),s._v(" "),e("div",{staticClass:"alert"},[e("el-dialog",{attrs:{title:"修改登录密码",visible:s.showPass,"modal-append-to-body":!1,width:"600px"},on:{"update:visible":function(t){s.showPass=t}}},[e("div",{staticClass:"list"},[e("span",[s._v("输入原密码")]),s._v(" "),e("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入内容"},model:{value:s.fixPassObj.oldpass,callback:function(t){s.$set(s.fixPassObj,"oldpass",t)},expression:"fixPassObj.oldpass"}})],1),s._v(" "),e("div",{staticClass:"list"},[e("span",[s._v("输入新密码")]),s._v(" "),e("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入内容"},model:{value:s.fixPassObj.newpass1,callback:function(t){s.$set(s.fixPassObj,"newpass1",t)},expression:"fixPassObj.newpass1"}})],1),s._v(" "),e("div",{staticClass:"list"},[e("span",[s._v("重新输入新密码")]),s._v(" "),e("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入内容"},model:{value:s.fixPassObj.newpass2,callback:function(t){s.$set(s.fixPassObj,"newpass2",t)},expression:"fixPassObj.newpass2"}})],1),s._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){s.showPass=!1}}},[s._v("取 消")]),s._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:s.fixPass}},[s._v("确 定")])],1)])],1)])},staticRenderFns:[]};var v={name:"home",components:{NavBar:r,UserTitle:e("VU/8")(d,h,!1,function(s){e("cxBn")},"data-v-fc42afd2",null).exports},data:function(){return{Nocertification:!0,noPass:!1,ceshi:!0,wrap:!1}},computed:i()({},Object(c.mapGetters)(["userInfo"])),methods:{go:function(){this.Nocertification=!1,this.wrap=!0},change:function(){this.noPass=!1}}},f={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"left"},[e("navBar")],1),s._v(" "),e("div",{staticClass:"right"},[e("userTitle"),s._v(" "),e("div",{staticClass:"rCont"},[e("router-view")],1)],1),s._v(" "),3===this.userInfo.status?e("div",{directives:[{name:"show",rawName:"v-show",value:s.Nocertification,expression:"Nocertification"}],staticClass:"confirm"},[e("div",{staticClass:"cont"},[s._m(0),s._v(" "),e("div",{staticClass:"bottom"},[e("router-link",{attrs:{to:{name:"certification"}}},[e("span",{staticClass:"btn",on:{click:s.go}},[s._v("去认证")])])],1)])]):s._e(),s._v(" "),2===this.userInfo.status?e("div",{staticClass:"confirm"},[s._m(1)]):s._e(),s._v(" "),4===this.userInfo.status?e("div",{directives:[{name:"show",rawName:"v-show",value:s.noPass,expression:"noPass"}],staticClass:"confirm"},[e("div",{staticClass:"cont"},[s._m(2),s._v(" "),e("div",{staticClass:"bottom"},[e("router-link",{attrs:{to:{name:"certificationChange"}}},[e("span",{staticClass:"btn",on:{click:s.change}},[s._v("去修改")])])],1)])]):s._e(),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.wrap,expression:"wrap"}],staticClass:"wrap"})])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"top"},[t("i",{staticClass:"qiye"}),this._v(" "),t("div",[t("p",[this._v("请您先认证企业短信")]),this._v(" "),t("p",[this._v("平台联系方式：\n            "),t("span",{staticClass:"blue"},[this._v("1337384556552")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"cont"},[t("div",{staticClass:"top"},[t("i",{staticClass:"qiye"}),this._v(" "),t("div",[t("p",[this._v("您已提交认证信息，请耐心等待平台审核")]),this._v(" "),t("p",[this._v("平台联系方式：\n            "),t("span",{staticClass:"blue"},[this._v("1337384556552")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"top"},[t("i",{staticClass:"qiye"}),this._v(" "),t("div",[t("p",[this._v("您的认证不通过请修改后再提交")]),this._v(" "),t("p",[this._v("平台联系方式：\n            "),t("span",{staticClass:"blue"},[this._v("1337384556552")])])])])}]};var p=e("VU/8")(v,f,!1,function(s){e("eDJp")},"data-v-23e793fc",null);t.default=p.exports},cxBn:function(s,t){},eDJp:function(s,t){}});
//# sourceMappingURL=3.5255f8c37b70f4e9087e.js.map