webpackJsonp([1],{"+t3o":function(e,t){},BO1k:function(e,t,i){e.exports={default:i("fxRn"),__esModule:!0}},aEKa:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("BO1k"),r=i.n(s),a=i("mvHQ"),l=i.n(a),n={name:"orderList",mixins:[i("5jRo").a],data:function(){return{currentPage:1,apiUrl:"/api/order/search/getSellerOrderByCondition",postObj:{logisticsOrderId:"",shopType:"",sellerShipAddressId:"",logisticsType:"",payStatus:"",orderStatus:"",senderTelephone:"",receiveTelephone:"",sellerTaskId:"",thirdOrderId:"",time:"",substationId:"",sellerUserName:""},fixOrderObj:{show:!1,sellerOrderId:"",receiveName:"",receiveTelephone:"",receiveProvince:"",receiveCity:"",receiveRegion:"",receiveAddress:""},getOrderListObj:{show:!1,getWay:"1",filter:""},userList:[],multipleSelection:[]}},computed:{params:function(){return{currPageNo:this.pageNo,limit:this.pageSize,logisticsOrderId:this.postObj.logisticsOrderId,shopType:this.postObj.shopType,logisticsType:this.postObj.logisticsType,payStatus:this.postObj.payStatus,orderStatus:this.postObj.orderStatus,senderTelephone:this.postObj.senderTelephone,receiveTelephone:this.postObj.receiveTelephone,sellerTaskId:this.postObj.sellerTaskId,thirdOrderId:this.postObj.thirdOrderId,createStartTime:this.postObj.time[0],createEndTime:this.postObj.time[1],substationId:this.postObj.substationId,sellerUserName:this.postObj.sellerUserName}}},methods:{setList:function(e){this.userList=e},sureToFix:function(){var e=this;this.$ajax.post("/api/order/operate/fixTaskOrder",this.fixOrderObj).then(function(t){"200"===t.data.code?(e.$message({message:"操作成功",type:"success"}),e.getList(),e.fixOrderObj.show=!1):e.$message({message:t.data.message,type:"warning"})}).catch(function(){e.$message.error("服务器错误！")})},handleClick:function(e){var t={show:this.fixOrderObj.show||"",sellerOrderId:e.sellerOrderId||"",receiveName:e.receiveName||"",receiveTelephone:e.receiveTelephone||"",receiveProvince:e.receiveProvince||"",receiveCity:e.receiveCity||"",receiveRegion:e.receiveRegion||"",receiveAddress:e.receiveAddress||""};this.fixOrderObj=t,this.fixOrderObj.show=!0},handleSelectionChange:function(e){this.multipleSelection=e},sureToLinkOrder:function(){var e=[],t=!0,i=!1,s=void 0;try{for(var a,n=r()(this.multipleSelection);!(t=(a=n.next()).done);t=!0){var o=a.value;e.push(o.sellerOrderId)}}catch(e){i=!0,s=e}finally{try{!t&&n.return&&n.return()}finally{if(i)throw s}}window.open("/api/task/downloadSellerOrdersByOrderIds?orderIds="+l()(e))},sureToReget:function(){var e=this,t=[],i=!0,s=!1,a=void 0;try{for(var l,n=r()(this.multipleSelection);!(i=(l=n.next()).done);i=!0){var o=l.value;t.push(o.sellerOrderId)}}catch(e){s=!0,a=e}finally{try{!i&&n.return&&n.return()}finally{if(s)throw a}}this.$ajax.post("/api/order/operate/reGetLogisticsOrderIds",{sellerOrderIds:t}).then(function(t){"200"===t.data.code?(e.$message({message:"操作成功",type:"success"}),e.getList()):e.$message({message:t.data.message,type:"warning"})}).catch(function(){e.$message.error("服务器错误！")})}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"orderList"},[i("div",{staticClass:"search"},[i("ul",{staticClass:"left"},[i("li",[i("span",[e._v("物流平台")]),e._v(" "),i("el-select",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请选择"},model:{value:e.postObj.logisticsType,callback:function(t){e.$set(e.postObj,"logisticsType",t)},expression:"postObj.logisticsType"}},[i("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),i("el-option",{attrs:{label:"圆通",value:"1"}})],1)],1),e._v(" "),i("li",[i("span",[e._v("电商平台")]),e._v(" "),i("el-select",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请选择"},model:{value:e.postObj.shopType,callback:function(t){e.$set(e.postObj,"shopType",t)},expression:"postObj.shopType"}},[i("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),i("el-option",{attrs:{label:"淘宝",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"天猫",value:"2"}}),e._v(" "),i("el-option",{attrs:{label:"京东",value:"3"}}),e._v(" "),i("el-option",{attrs:{label:"拼多多",value:"4"}})],1)],1),e._v(" "),i("li",[i("span",[e._v("付款状态")]),e._v(" "),i("el-select",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请选择"},model:{value:e.postObj.payStatus,callback:function(t){e.$set(e.postObj,"payStatus",t)},expression:"postObj.payStatus"}},[i("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),i("el-option",{attrs:{label:"未支付",value:"0"}}),e._v(" "),i("el-option",{attrs:{label:"支付成功",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"任务删除",value:"2"}})],1)],1),e._v(" "),i("li",[i("span",[e._v("快递单号")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.logisticsOrderId,callback:function(t){e.$set(e.postObj,"logisticsOrderId",t)},expression:"postObj.logisticsOrderId"}})],1),e._v(" "),i("li",[i("span",[e._v("站点ID")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.substationId,callback:function(t){e.$set(e.postObj,"substationId",t)},expression:"postObj.substationId"}})],1),e._v(" "),i("li",[i("span",[e._v("任务ID")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.sellerTaskId,callback:function(t){e.$set(e.postObj,"sellerTaskId",t)},expression:"postObj.sellerTaskId"}})],1),e._v(" "),i("li",[i("span",[e._v("订单号")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.thirdOrderId,callback:function(t){e.$set(e.postObj,"thirdOrderId",t)},expression:"postObj.thirdOrderId"}})],1),e._v(" "),i("li",[i("span",[e._v("用户名")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.sellerUserName,callback:function(t){e.$set(e.postObj,"sellerUserName",t)},expression:"postObj.sellerUserName"}})],1),e._v(" "),i("li",[i("span",[e._v("发件手机")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.senderTelephone,callback:function(t){e.$set(e.postObj,"senderTelephone",t)},expression:"postObj.senderTelephone"}})],1),e._v(" "),i("li",[i("span",[e._v("收件手机")]),e._v(" "),i("el-input",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请输入内容"},model:{value:e.postObj.receiveTelephone,callback:function(t){e.$set(e.postObj,"receiveTelephone",t)},expression:"postObj.receiveTelephone"}})],1),e._v(" "),i("li",[i("span",[e._v("快递单状态")]),e._v(" "),i("el-select",{staticStyle:{width:"170px","margin-right":"20px"},attrs:{placeholder:"请选择"},model:{value:e.postObj.orderStatus,callback:function(t){e.$set(e.postObj,"orderStatus",t)},expression:"postObj.orderStatus"}},[i("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),i("el-option",{attrs:{label:"未获取运单",value:"0"}}),e._v(" "),i("el-option",{attrs:{label:"已获取运单",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"订单取消",value:"2"}})],1)],1),e._v(" "),i("li",{staticStyle:{width:"auto","margin-left":"15px"}},[i("span",[e._v("发布日期")]),e._v(" "),i("el-date-picker",{staticStyle:{width:"350px","margin-right":"20px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.postObj.time,callback:function(t){e.$set(e.postObj,"time",t)},expression:"postObj.time"}})],1),e._v(" "),i("li",{staticStyle:{"text-align":"left"}},[i("span",{staticClass:"btn",staticStyle:{"text-align":"center"},on:{click:e.getList}},[e._v("查询")])]),e._v(" "),i("li",{staticStyle:{flex:"1","text-align":"right"}},[i("span",{staticClass:"btn-b",staticStyle:{"text-align":"center","margin-right":"20px"},on:{click:e.sureToReget}},[e._v("重新获取")]),e._v(" "),i("span",{staticClass:"btn-b",staticStyle:{"text-align":"center"},on:{click:e.sureToLinkOrder}},[e._v("导出订单")])])])]),e._v(" "),i("div",{staticClass:"table"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),i("el-table-column",{attrs:{fixed:"left",prop:"channelId",label:"渠道ID",align:"center",width:"185"}}),e._v(" "),i("el-table-column",{attrs:{prop:"substationId",label:"站点ID",align:"center",width:"185"}}),e._v(" "),i("el-table-column",{attrs:{prop:"userName",label:"用户名",align:"center",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"logisticsType",label:"快递公司",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(1==t.row.logisticsType?"圆通":"--"))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"shopType",label:"平台",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(1==t.row.shopType?"淘宝":2==t.row.shopType?"天猫":3==t.row.shopType?"京东":4==t.row.shopType?"拼多多":"--"))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"userName",label:"发货信息",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{"text-align":"left","font-size":"12px"}},[i("p",[e._v("发货人姓名: "+e._s(t.row.senderName||"--"))]),e._v(" "),i("p",[e._v("发货人电话: "+e._s(t.row.senderTelephone||"--"))]),e._v(" "),i("p",[e._v("发货人地址: "+e._s(t.row.senderProvince+t.row.senderCity+t.row.senderRegion+t.row.senderAddress||"--"))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"userName",label:"收货信息",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{"text-align":"left","font-size":"12px"}},[i("p",[e._v("收货人姓名: "+e._s(t.row.receiveName||"--"))]),e._v(" "),i("p",[e._v("收货人电话: "+e._s(t.row.receiveTelephone||"--"))]),e._v(" "),i("p",[e._v("收货人地址: "+e._s(t.row.receiveProvince+t.row.receiveCity+t.row.receiveRegion+t.row.receiveAddress||"--"))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"userName",label:"订单信息",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{"text-align":"left","font-size":"12px"}},[i("p",[e._v("平台订单号: "+e._s(t.row.thirdOrderId||"--"))]),e._v(" "),i("p",[e._v("快递单号: "+e._s(t.row.logisticsOrderId||"--"))]),e._v(" "),i("p",[e._v("物品质量: "+e._s(t.row.weight||"--")+"KG")]),e._v(" "),i("p",[e._v("商品名称: "+e._s(t.row.productName||"--"))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.status?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){e.handleClick(t.row)}}},[e._v("修改订单")]):i("el-button",{attrs:{type:"text",size:"small"}},[e._v("--")])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"status",label:"状态",align:"center",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{"text-align":"left","font-size":"12px"}},[i("p",[e._v("商家"+e._s(0==t.row.payStatus?"未支付":1==t.row.payStatus?"支付成功":2==t.row.payStatus?"任务删除":"--"))]),e._v(" "),i("p",[e._v("站点"+e._s(0==t.row.payStatus?"未支付":1==t.row.payStatus?"支付成功":2==t.row.payStatus?"任务删除":"--"))]),e._v(" "),i("p",[e._v("渠道"+e._s(0==t.row.payStatus?"未支付":1==t.row.payStatus?"支付成功":2==t.row.payStatus?"任务删除":"--"))]),e._v(" "),i("p",[e._v("快递单: "+e._s(0==t.row.status?"未获取运单":1==t.row.status?"已获取运单":2==t.row.status?"订单取消":"--"))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"gmtCreate",label:"发布时间",align:"center",width:"180"}}),e._v(" "),i("el-table-column",{attrs:{prop:"gmtCreate",label:"出单号时间",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?i("span",[e._v(e._s(t.row.gmtModify||"--"))]):i("span",[e._v("--")])]}}])})],1)],1),e._v(" "),i("div",{staticClass:"pager"},[i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizeArray,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),i("div",{staticClass:"alertGrounp"},[i("el-dialog",{attrs:{title:"导出订单列表","append-to-body":!0,visible:e.getOrderListObj.show,width:"600px",top:"25vh"},on:{"update:visible":function(t){e.$set(e.getOrderListObj,"show",t)}}},[i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"60px","text-align":"right"}},[e._v("导出方式")]),e._v(" "),i("p",{staticStyle:{display:"inline-block",width:"300px","text-align":"left","margin-left":"10px"}},[i("el-radio",{attrs:{label:"1"},model:{value:e.getOrderListObj.getWay,callback:function(t){e.$set(e.getOrderListObj,"getWay",t)},expression:"getOrderListObj.getWay"}},[e._v("订单号")]),e._v(" "),i("el-radio",{attrs:{label:"2"},model:{value:e.getOrderListObj.getWay,callback:function(t){e.$set(e.getOrderListObj,"getWay",t)},expression:"getOrderListObj.getWay"}},[e._v("快递单号")])],1)]),e._v(" "),i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"60px","text-align":"right"}},[e._v("筛选条件")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px","vertical-align":"top"},attrs:{type:"textarea",rows:3,resize:"none",placeholder:"请输入内容"},model:{value:e.getOrderListObj.filter,callback:function(t){e.$set(e.getOrderListObj,"filter",t)},expression:"getOrderListObj.filter"}})],1),e._v(" "),i("div",{staticClass:"buttons",staticStyle:{"text-align":"center","margin-top":"40px"}},[i("span",{staticClass:"btn-b",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.getOrderListObj.show=!1}}},[e._v("取消")]),e._v(" "),i("span",{staticClass:"btn",on:{click:function(t){e.getOrderListObj.show=!1}}},[e._v("确定")])])]),e._v(" "),i("el-dialog",{attrs:{title:"修改订单","append-to-body":!0,visible:e.fixOrderObj.show,width:"600px",top:"15vh"},on:{"update:visible":function(t){e.$set(e.fixOrderObj,"show",t)}}},[i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"100px","text-align":"right"}},[e._v("收件人姓名")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{placeholder:"请输入内容"},model:{value:e.fixOrderObj.receiveName,callback:function(t){e.$set(e.fixOrderObj,"receiveName",t)},expression:"fixOrderObj.receiveName"}})],1),e._v(" "),i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"100px","text-align":"right"}},[e._v("收件人手机")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{placeholder:"请输入内容"},model:{value:e.fixOrderObj.receiveTelephone,callback:function(t){e.$set(e.fixOrderObj,"receiveTelephone",t)},expression:"fixOrderObj.receiveTelephone"}})],1),e._v(" "),i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"100px","text-align":"right"}},[e._v("收件人省")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{placeholder:"请输入内容"},model:{value:e.fixOrderObj.receiveProvince,callback:function(t){e.$set(e.fixOrderObj,"receiveProvince",t)},expression:"fixOrderObj.receiveProvince"}})],1),e._v(" "),i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"100px","text-align":"right"}},[e._v("收件人市")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{placeholder:"请输入内容"},model:{value:e.fixOrderObj.receiveCity,callback:function(t){e.$set(e.fixOrderObj,"receiveCity",t)},expression:"fixOrderObj.receiveCity"}})],1),e._v(" "),i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"100px","text-align":"right"}},[e._v("收件人区")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{placeholder:"请输入内容"},model:{value:e.fixOrderObj.receiveRegion,callback:function(t){e.$set(e.fixOrderObj,"receiveRegion",t)},expression:"fixOrderObj.receiveRegion"}})],1),e._v(" "),i("div",{staticClass:"cont",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("span",{staticStyle:{display:"inline-block",width:"100px","text-align":"right"}},[e._v("收件人详细地址")]),e._v(" "),i("el-input",{staticStyle:{width:"300px","margin-left":"10px"},attrs:{placeholder:"请输入内容"},model:{value:e.fixOrderObj.receiveAddress,callback:function(t){e.$set(e.fixOrderObj,"receiveAddress",t)},expression:"fixOrderObj.receiveAddress"}})],1),e._v(" "),i("div",{staticClass:"buttons",staticStyle:{"text-align":"center","margin-top":"40px"}},[i("span",{staticClass:"btn-b",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.fixOrderObj.show=!1}}},[e._v("取消")]),e._v(" "),i("span",{staticClass:"btn",on:{click:e.sureToFix}},[e._v("确定")])])])],1)])},staticRenderFns:[]};var p=i("VU/8")(n,o,!1,function(e){i("+t3o")},"data-v-647a35dd",null);t.default=p.exports},fxRn:function(e,t,i){i("+tPU"),i("zQR9"),e.exports=i("g8Ux")},g8Ux:function(e,t,i){var s=i("77Pl"),r=i("3fs2");e.exports=i("FeBl").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return s(t.call(e))}},mvHQ:function(e,t,i){e.exports={default:i("qkKv"),__esModule:!0}},qkKv:function(e,t,i){var s=i("FeBl"),r=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}});
//# sourceMappingURL=1.27a3320aa2573e26fac4.js.map