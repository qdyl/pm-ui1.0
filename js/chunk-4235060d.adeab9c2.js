(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4235060d"],{"1a5c":function(t,s,i){},"25f04":function(t,s,i){},3218:function(t,s,i){},"4ac9":function(t,s,i){t.exports=i.p+"img/logoMi.09abb085.png"},"9c72":function(t,s,i){"use strict";i("1a5c")},b587:function(t,s,i){"use strict";i.r(s),i("d3b7"),i("159b");var a=i("d399"),e=[{values:["周一","周二","周三","周四","周五"],defaultIndex:2},{values:["上午","下午","晚上"],defaultIndex:1}],o={props:{isShow:{type:Boolean,defalut:!1},columns:{type:Array,defalut:function(){return e}}},data:function(){return{}},methods:{onConfirm:function(t,s){this.$emit("onFilter1",t,s),this.$emit("update:isShow",!1)}}},n=i("2877"),l=Object(n.a)(o,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("van-popup",{style:{height:"45%"},attrs:{position:"bottom","close-on-click-overlay":!1},on:{"click-overlay":function(s){return t.$emit("update:isShow",!1)}},model:{value:t.isShow,callback:function(s){t.isShow=s},expression:"isShow"}},[i("van-picker",{attrs:{"show-toolbar":"",title:"",columns:t.columns},on:{cancel:function(s){return t.$emit("update:isShow",!1)},confirm:t.onConfirm}})],1)}),[],!1,null,null,null).exports,c=[{id:1,text:"计算机计算机"},{id:1,text:"房地产"},{id:1,text:"影视"},{id:1,text:"饮食"},{id:1,text:"金融"},{id:1,text:"服务"},{id:1,text:"饮食"},{id:1,text:"计算机"},{id:1,text:"房地产"},{id:1,text:"影视"},{id:1,text:"饮食"},{id:1,text:"金融"},{id:1,text:"服务"},{id:1,text:"饮食"},{id:1,text:"计算机"},{id:1,text:"房地产"},{id:1,text:"影视"},{id:1,text:"饮食"},{id:1,text:"金融"},{id:1,text:"服务"},{id:1,text:"饮食"}],r={props:{isShow:{type:Boolean,default:!1},filter2List:{type:Array,default:function(){return c}}},data:function(){return{curIndex:0,curTag:{id:11,text:"计算机"}}},methods:{onHandleItem:function(t,s){this.curIndex=t,this.curTag=s},onCancel:function(){this.curIndex=0,this.curTag={id:"00",text:"不限"},this.$emit("update:isShow",!1),this.$emit("onFilter2",this.curTag)},onComfirm:function(){this.$emit("onFilter2",this.curTag),this.$emit("update:isShow",!1)}}},u=(i("c035"),Object(n.a)(r,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("van-popup",{style:{height:"100%"},attrs:{position:"bottom"},model:{value:t.isShow,callback:function(s){t.isShow=s},expression:"isShow"}},[i("div",{staticClass:"headerBar flexClass"},[i("van-icon",{staticClass:"closeIcon",attrs:{name:"cross",size:"22",color:"#ccc7c7"},on:{click:t.onCancel}}),i("h3",{staticClass:"panelTit"},[i("span",{},[t._v("选择行业")])])],1),i("div",{staticClass:"fiter2Lists"},[i("ul",{staticClass:"flexClass"},t._l(t.filter2List,(function(s,a){return i("li",{key:a,staticClass:"fiterLi ellipsis1",class:{active:t.curIndex==a},on:{click:function(i){return t.onHandleItem(a,s)}}},[t._v(t._s(s.text))])})),0)]),i("footer",{staticClass:"footerBtns flexClass"},[i("van-button",{staticClass:"foBtn concelBtn",attrs:{size:"small",type:"default"},on:{click:t.onCancel}},[t._v("取 消")]),i("van-button",{staticClass:"foBtn comfirmBtn",attrs:{size:"small",type:"info"},on:{click:t.onComfirm}},[t._v("确 认")])],1)])}),[],!1,null,"12041dfb",null).exports),d=[{id:"1",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利","年终奖","免费午餐"],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"2",isCared:!0,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利"],local:"长沙岳麓区尖山站高档小区8单元2号501",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"3",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:[],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"4",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利"],local:"长沙岳麓区",hotJobs:["高级前端开发工程师","运维","开发"],hotJobNum:6},{id:"5",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利"],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"6",companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利"],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"7",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利"],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6}],f={props:{listData:{type:Array,default:function(){return d}}},data:function(){return{defaultImg:i("ead1"),isPermission:!1}},methods:{onCared:function(t){this.$emit("careCompany",t,"cared")},onCancelCared:function(t){this.$emit("careCompany",t,"noCare")},onHandleBtn:function(){this.isPermission=!this.isPermission},eventEmit:function(t){},onClickItem:function(){this.$router.push({path:"/companyA/companyDetailA"})}}},h=(i("9c72"),{components:{Filter1Tpl:l,Filter2Tpl:u,CompanyList:Object(n.a)(f,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"div"},t._l(t.listData,(function(s,a){return i("li",{key:a,staticClass:"listItem",on:{click:function(i){return t.onClickItem(s)}}},[i("h4",{staticClass:"itemTitle"},[t._v(t._s(s.companyName))]),i("div",{staticClass:"flexBox flexClass"},[i("img",{staticClass:"imgLogo",attrs:{src:s.logo||t.defaultImg,alt:""}}),i("div",{staticClass:"rightBar"},[i("div",{staticClass:"Bar1 flexClass"},[i("span",{staticClass:"leftKey"},[t._v("福利：")]),s.fulis.length>0?i("ul",{staticClass:"fulis ellipsis1"},t._l(s.fulis,(function(s,a){return i("li",{key:a,staticClass:"fuli"},[t._v(t._s(s))])})),0):i("span",{staticClass:"noMore"},[t._v("暂无")])]),i("div",{staticClass:"Bar2 flexClass"},[i("span",{staticClass:"leftKey"},[t._v("热招：")]),s.hotJobs.length>0?i("div",{staticClass:"hotJobs"},[i("span",{staticClass:"firstJob ellipsis1"},[t._v(t._s(s.hotJobs[0]))]),t._v(" 等"),i("span",{staticClass:"jobsNum"},[t._v(t._s(s.hotJobNum))]),t._v("个职位 ")]):i("span",{staticClass:"noMore"},[t._v("暂无")])])])]),i("div",{staticClass:"fotBar flexClass"},[i("p",{staticClass:"subInfo ellipsis1"},[i("van-icon",{attrs:{name:"location-o",size:"16"}}),t._v(t._s(s.local))],1),s.isCared?i("van-button",{staticClass:"careBtn cancelBtn",attrs:{round:"",type:"default",size:"mini"},on:{click:function(i){return t.onCancelCared(s)}}},[t._v("取消关注")]):i("van-button",{staticClass:"careBtn",attrs:{round:"",type:"info",size:"mini"}},[t._v("+ 关注")])],1)])})),0)}),[],!1,null,"23aaef1d",null).exports},data:function(){return{subInfos:{curLocal:"区域",isShow1:!1,isShow2:!1,finished:!1,loading:!1,totalNum:""},searchParams:{pageIndex:1,pageSize:10,keyWorkd:"",fliter1Val:"",fliter2Val:""},listData:[{id:"11",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利","年终奖","免费午餐"],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"12",isCared:!0,companyName:"百度有限公司",logo:"",fulis:["五险一金","加班福利"],local:"长沙岳麓区尖山站高档小区8单元2号501",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"13",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:[],local:"长沙岳麓区",hotJobs:["老师","运维","开发"],hotJobNum:6},{id:"14",isCared:!1,companyName:"百度有限公司",logo:i("4ac9"),fulis:["五险一金","加班福利"],local:"长沙岳麓区",hotJobs:["高级前端开发工程师","运维","开发"],hotJobNum:6}],columns:[{text:"浙江",children:[{text:"杭州",children:[{text:"西湖区"},{text:"余杭区"}]},{text:"温州",children:[{text:"鹿城区"},{text:"瓯海区"}]}]}],filter2List:[{id:"00",text:"不限"},{id:1,text:"11计算机计算机2"},{id:1,text:"22房地产"},{id:1,text:"影视"},{id:1,text:"饮食"},{id:1,text:"金融"},{id:1,text:"服务"},{id:1,text:"饮食"},{id:1,text:"计算机"},{id:1,text:"房地产"},{id:1,text:"影视"},{id:1,text:"饮食"},{id:1,text:"金融"},{id:1,text:"服务"},{id:1,text:"饮食"},{id:1,text:"计算机"},{id:1,text:"房地产"},{id:1,text:"影视"},{id:1,text:"饮食"},{id:1,text:"金融"},{id:1,text:"服务"},{id:1,text:"饮食"}]}},watch:{"searchParams.keyWorkd":function(t,s){!t&&s&&this.reInitData(1)},"searchParams.pageSize":function(t){t&&this.initData()}},methods:{onLoad:function(){this.searchParams.pageSize=parseInt(this.searchParams.pageSize)+10},initData:function(){a.a.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"})},onSearch:function(){this.reInitData(1)},onClear:function(){this.reInitData(1)},onFilter1:function(){this.reInitData(2)},onFilter2:function(t){var s=t.id;this.searchParams.fliter2Val=s,this.reInitData(2)},careCompany:function(t,s){var i=this,e=t.id;function o(t){i.listData.forEach((function(s){s.id==e&&(s.isCared=t)}))}"cared"==s?(o(!0),a.a.success("关注成功")):(o(!1),Object(a.a)("取消关注"))},reInitData:function(t){1===t?(this.searchParams.pageSize=10,this.searchParams.fliter1Val="",this.searchParams.fliter2Val="",this.initData()):2===t&&(this.searchParams.pageSize=10,this.initData())}}}),m=(i("d7a1"),Object(n.a)(h,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page"},[i("header",{staticClass:"header flexClass"},[i("div",{staticClass:"leftFilter",class:{active:t.searchParams.fliter1Val},on:{click:function(s){t.subInfos.isShow1=!0}}},[i("van-icon",{staticClass:"filterIcon1",attrs:{name:"arrow-down"}}),i("span",{staticClass:"leftTit ellipsis1"},[t._v(t._s(t.subInfos.curLocal))])],1),i("div",{staticClass:"searchBar"},[i("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:t.onSearch,clear:t.onClear},model:{value:t.searchParams.keyWorkd,callback:function(s){t.$set(t.searchParams,"keyWorkd",s)},expression:"searchParams.keyWorkd"}})],1),i("div",{staticClass:"rightFilter",on:{click:function(s){t.subInfos.isShow2=!0}}},[t.searchParams.fliter2Val?i("MyIcon",{attrs:{name:"icon-shaixuan",size:"22",color:"#1989fa"}}):i("MyIcon",{attrs:{name:"icon-shaixuan",size:"22"}})],1)]),i("div",{staticClass:"height",staticStyle:{height:"45px"}}),i("main",{staticClass:"main"},[t.listData.length>0?i("van-list",{attrs:{finished:t.subInfos.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.subInfos.loading,callback:function(s){t.$set(t.subInfos,"loading",s)},expression:"subInfos.loading"}},[i("CompanyList",{attrs:{listData:t.listData},on:{careCompany:t.careCompany}})],1):i("van-empty",{attrs:{description:"描述文字"}})],1),i("section",{staticClass:"othersPanel"},[i("Filter1Tpl",{attrs:{columns:t.columns,isShow:t.subInfos.isShow1},on:{"update:isShow":function(s){return t.$set(t.subInfos,"isShow1",s)},"update:is-show":function(s){return t.$set(t.subInfos,"isShow1",s)},onFilter1:t.onFilter1}}),i("Filter2Tpl",{attrs:{filter2List:t.filter2List,isShow:t.subInfos.isShow2},on:{"update:isShow":function(s){return t.$set(t.subInfos,"isShow2",s)},"update:is-show":function(s){return t.$set(t.subInfos,"isShow2",s)},onFilter2:t.onFilter2}})],1)])}),[],!1,null,"0d61aeb0",null));s.default=m.exports},c035:function(t,s,i){"use strict";i("3218")},d7a1:function(t,s,i){"use strict";i("25f04")}}]);