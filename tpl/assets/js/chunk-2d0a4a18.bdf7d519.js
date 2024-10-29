(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4a18"],{"06ea":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"sc-wp wbs-main",class:{"wb-page-loaded":t.isLoaded}},[e("el-radio-group",{staticClass:"for-tab-nav",attrs:{size:t.$cnf.is_mobile?"medium":"small"},on:{change:function(a){return t.log_type(a)}},model:{value:t.type,callback:function(a){t.type=a},expression:"type"}},[e("el-radio-button",{attrs:{label:100}},[t._v("所有推送")]),e("el-radio-button",{attrs:{label:1}},[t._v("普通推送")]),e("el-radio-button",{attrs:{label:3}},[t._v("强制推送 "),e("i",{staticClass:"tag-pro"},[t._v("Pro")])]),e("el-radio-button",{attrs:{label:2}},[t._v("快速推送 "),e("i",{staticClass:"tag-pro"},[t._v("Pro")])])],1),e("div",{staticClass:"log-box mt"},[e("el-table",{staticClass:"wbs-table",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":"id","empty-text":"- 最近7天无推送数据，建议保持每日更新内容 -"}},[e("el-table-column",{attrs:{label:"日期","class-name":"w30"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"data-label",attrs:{"data-label":"发布日期: "}},[t._v(" "+t._s(a.row.date)+" ")])]}}])}),e("el-table-column",{attrs:{label:"链接","class-name":"w40"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"url",attrs:{"data-label":"链接: "}},[t._v(t._s(a.row.url))])]}}])}),e("el-table-column",{attrs:{label:"推送状态"},scopedSlots:t._u([{key:"header",fn:function(a){return[e("span",{staticClass:"ib"},[t._v("推送状态")]),1==t.type?e("el-tooltip",{staticClass:"wbui-tooltip",attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("dl",[e("dd",[t._v("推送失败常见的问题有：")]),e("dd",[t._v("（1）服务器在国外或者香港；")]),e("dd",[t._v("（2）域名不一致，或者协议不一致；")]),e("dd",[t._v("（3）API填写错误。")])])]),e("div",{staticClass:"wbui-tooltip"},[e("svg",{staticClass:"wb-icon sico-qa"},[e("use",{attrs:{"xlink:href":"#sico-qa"}})])])]):t._e(),2==t.type?e("el-tooltip",{staticClass:"wbui-tooltip",attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("dl",[e("dd",[t._v("推送失败常见的问题有：")]),e("dd",[t._v("（1）服务器在国外或者香港；")]),e("dd",[t._v("（2）没有百度快速推送配额;")]),e("dd",[t._v("（3）域名不一致，或者协议不一致；")]),e("dd",[t._v("（4）API填写错误。")])])]),e("div",{staticClass:"wbui-tooltip"},[e("svg",{staticClass:"wb-icon sico-qa"},[e("use",{attrs:{"xlink:href":"#sico-qa"}})])])]):t._e()]}},{key:"default",fn:function(a){return[e("div",{staticClass:"data-label",attrs:{"data-label":"推送状态: "},domProps:{innerHTML:t._s(1==a.row.s_push?'<span class="suc">成功</span>':"失败")}})]}}])}),e("el-table-column",{attrs:{label:"推送方式"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"data-label",attrs:{"data-label":"推送方式: "}},[t._v(" "+t._s({1:"普通收录",2:"快速收录",3:"普通收录强推"}[a.row.type])+" ")])]}}])})],1),e("div",{staticClass:"btns-bar with-ctrl-area"},[e("div",{staticClass:"wb-ctrl-area"},[e("el-button",{attrs:{type:"danger",icon:"el-icon-s-open",plain:"",size:"mini"},on:{click:function(a){return t.clean_log(t.type)}}},[t._v(" 清除日志 ")])],1),e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.list.length>0,expression:"list.length > 0"}],attrs:{background:"",small:!!t.$cnf.is_mobile,layout:t.$cnf.is_mobile?"pager, total, prev, next":"total, prev, pager, next, jumper","page-sizes":[10,30,50,100],"page-size":t.num,total:1*t.total,"pager-count":5},on:{"size-change":t.handleSizeChange,"current-change":t.nav_page}})],1),2!=t.type&&3!=t.type||t.$cnf.is_pro?t._e():e("div",{staticClass:"getpro-mask"},[e("div",{staticClass:"mask-inner"},[e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.getPro}},[t._v("获取PRO版本")]),e("p",{staticClass:"tips"},[t._v("* 注意：当前为演示数据，仅供参考")])],1)]),e("wb-prompt",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"mt"})],1)],1)},o=[];const l="WB_BSL_USER_OPT_"+window.uid;var i={name:"LogBaidu",data(){return{isLoaded:!1,type:100,loading_data:-1,list:[],num:10,total:0,page:1}},created(){console.log("-- log-baidu -- created ---"),this.$cnf.is_pro&&this.$verify((t,a)=>{this.$cnf.is_pro=t})},mounted(){console.log("-- log-baidu -- mounted ---");const t=this,a=t.$WB.getLocalStorage(l)||{};t.num=a["PAGE_SIZE"]||10,t.loadData()},methods:{log_type(t){const a=this;a.type=t,a.page=1,a.total=0,a.list=[],a.loadData()},clean_log(t){const a=this;return a.$wbui.open({content:"确定清除所有推送日志?",btn:["确定","取消"],yes(){a.$api.saveData({_ajax_nonce:window._wb_bsl_ajax_nonce||"",action:a.$cnf.action.act,op:"clean_log",type:t}).then(t=>{a.$wbui.toast("清除成功"),sessionStorage.removeItem("WB_BSL_LOG_BAIDU"),location.reload()})}}),!1},loadData(t=!1){const a=this;let e=a.num||10;if(2==a.type&&!a.$cnf.is_pro)return[];a.showLoading();const s="WB_BSL_LOG_BAIDU",o=a.$WB.getSessionStorage(s,!0);let l=o.data;if(!t&&!a.$WB.updateLocalStorageChecker(o.ver)&&l&&l.num==a.num&&l.list[a.type]&&l.list[a.type][a.page])return a.list=l.list[a.type][a.page],a.total=l.total[a.type],a.closeLoading(),void(a.isLoaded=!0);a.$api.getData({_ajax_nonce:window._wb_bsl_ajax_nonce||"",action:a.$cnf.action.act,op:"push_log",num:e,page:a.page,type:a.type}).then(t=>{a.list=t.data,a.total=t.total,a.closeLoading(),l=a.$WB.getSessionStorage(s)||{list:{},total:{}};try{let o=l.list[a.type]||{},i=l.total;o[a.page]=t.data,i[a.type]=a.total,l.list[a.type]=o,l.total=i,l.num=e,a.$WB.setSessionStorage(s,l),a.isLoaded=!0}catch(o){console.log(o)}}).catch(()=>{a.closeLoading()})},aboutPro(){this.$router.push({path:"/pro"})},showLoading(){const t=this;t.$wbui.close(t.loading_data),t.loading_data=t.$wbui.loading()},closeLoading(){const t=this;t.$wbui.close(t.loading_data),t.loading_data=-1},nav_page(t){const a=this;a.page=t,a.loadData()},handleSizeChange(t){let a=e.$WB.getLocalStorage(l)||{};const e=this;e.num=t,e.page=1,a["PAGE_SIZE"]=t,e.$WB.setLocalStorage(l,a),sessionStorage.clear(),e.loadData()},getPro(){this.$router.push({path:"/pro"})}}},n=i,c=e("2877"),r=Object(c["a"])(n,s,o,!1,null,null,null);a["default"]=r.exports}}]);