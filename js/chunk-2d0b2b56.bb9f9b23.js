(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b2b56"],{"24ec":function(e,a,n){"use strict";n.r(a);var c=n("d399"),t=n("b311"),l=n.n(t);function o(e,a){var n=new l.a(a.target,{text:function(){return e}});n.on("success",(function(){c.a.success("复制成功"),n.destroy()})),n.on("error",(function(){c.a.fail("复制失败"),n.destroy()})),n.onClick(a)}var s={data:function(){return{value1:"11111111111",value2:"222222222222"}},methods:{handleCopy:function(e,a){o(e,a)},clipboardSuccess:function(){c.a.success("复制成功")}}},r=n("2877"),u=Object(r.a)(s,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{},[n("HeaderNavBack",{attrs:{title:"复制"}}),n("van-cell",{attrs:{title:"方法复制",value:""}}),n("van-search",{attrs:{"show-action":"",label:"",placeholder:"请输入搜索关键词"},scopedSlots:e._u([{key:"action",fn:function(){return[n("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.handleCopy(e.value1,a)}}},[e._v("点击复制")])]},proxy:!0}]),model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),n("van-divider",[e._v("-")]),n("van-cell",{attrs:{title:"指令复制",value:"指令已经全局注册"}}),n("van-search",{attrs:{"show-action":"",label:"",placeholder:"请输入搜索关键词"},scopedSlots:e._u([{key:"action",fn:function(){return[n("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value2,expression:"value2",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"info",size:"small"}},[e._v("点击复制")])]},proxy:!0}]),model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)}),[],!1,null,"2bdc0a32",null);a.default=u.exports}}]);