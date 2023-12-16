(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d30b9"],{"5aa8":function(e,r,a){"use strict";a.r(r);var t=a("d399"),l={mixins:[{data:function(){return{formConfigs:[{formType:"title",label:"1、输入类",color:"#1989fa"},{formType:"input",label:"姓名",prop:"value1a",required:!0,rules:[{required:!0,message:"请输入姓名"}]},{formType:"input",label:"身份证",prop:"value1b",required:!0,rules:[{required:!0,message:"请输入姓名"}]},{formType:"textarea",label:"备注",type:"textarea",prop:"value1c",required:!0,rules:[{required:!0,message:"请输入备注"}]},{formType:"title",label:"2、开关|单选|多选"},{formType:"switch",label:"开关",prop:"value2a",required:!0,rules:[{required:!0,message:"请选择"}],events:{change:function(){Object(t.a)("开关-改变了")}}},{formType:"radio",label:"性别",prop:"value2b",required:!0,options:[{name:"1",label:"保密"},{name:"2",label:"男"},{name:"3",label:"女"}],rules:[{required:!0,message:"请选择"}]},{formType:"checkbox",label:"复选",prop:"value2c",required:!0,options:[{name:"1",label:"苹果"},{name:"2",label:"梨子",disabled:!0}],rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"3、picker选择器"},{formType:"picker",label:"学历",prop:"value3a",required:!0,columns:[{text:"初中",id:"10"},{text:"高中",id:"11",disabled:!0},{text:"专科",id:"12"},{text:"本科",id:"13"},{text:"硕士",id:"14"},{text:"博士",id:"15"}],rules:[{required:!0,message:"请选择"}]},{formType:"picker",label:"工作经验",prop:"value3b",required:!0,columns:[{text:"没有经验",id:"9"},{text:"1年以下",id:"10"},{text:"1-3年",id:"11"},{text:"3-5年",id:"12"},{text:"5-10年",id:"13"},{text:"10年以上",id:"14"}],rules:[{required:!0,message:"请选择"}]},{formType:"pickers",label:"所在城市",prop:"value3c",required:!0,columns:[{text:"湖南",id:"1",children:[{text:"长沙",id:"11"},{text:"株洲",id:"12"}]},{text:"浙江",id:"2",children:[{text:"杭州",id:"21"},{text:"温州",id:"22"}]}],rules:[{required:!0,message:"请选择"}]},{formType:"pickers",label:"现居住地区",prop:"value3d",apiCodeValue:"area",required:!0,rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"4、列表选择(单|复选)"},{formType:"listRadio",label:"行业类别",prop:"value4a",required:!0,isShowSearch:!0,columns:[{name:"44",text:"计算机"},{name:"55",text:"互联网"},{name:"66",text:"房地产"},{name:"77",text:"影视"},{name:"88",text:"餐饮"},{name:"99",text:"自媒体"}],rules:[{required:!0,message:"请选择"}]},{formType:"listCheckbox",label:"福利",prop:"value4b",apiCodeValue:"listRadio",flexCol:"2",required:!0,isShowSearch:!0,rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"5、日历|时间"},{formType:"calendar",label:"预约日期",prop:"value5a",required:!0,rules:[{required:!0,message:"请选择"}]},{formType:"dateTimePicker",label:"出身年月",dataTimetype:"date",prop:"value5b",required:!0,rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"6、分类选择"},{formType:"treeSelect",label:"期望岗位",prop:"value6a",apiCodeValue:"treeSelectJobs",required:!0,isShowSearch:!0,max:3,rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"7、地址"},{formType:"vanArea",label:"vant地址",prop:"value7a",required:!0,rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"8、文件上传"},{formType:"uploader",label:"上传图片",prop:"value8a",required:!0,accept:".doc,.docx,.pdf","max-count":1,"max-size":"50 * 1024",rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"11、年月-至今"},{formType:"YYYYmmToNow",label:"工作时间段",prop:"value11a",required:!0,rules:[{required:!0,message:"请选择"}]},{formType:"title",label:"12、薪资区间"},{formType:"salaryZone",label:"期望薪资",prop:"value12a",required:!0,rules:[{required:!0,message:"请选择"}]}]}}}],data:function(){return{disabledForm:!1,formQuerys:{value1a:"",value1b:"",value1c:"",value2a:!1,value2b:"",value2c:[],value3a:311,value3b:"311",value3c:{id:"1*11*111",text:"湖南/长沙/岳麓区"},value3d:{},value4a:"22",value4b:[],value5a:"",value5b:"",value6a:[{text:"计算机软件",id:12},{text:"计算机硬件",id:13}],value6c:"",value7a:{id:"430000*430100*430104",text:"湖南省/长沙市/岳麓区",value:"430104"},value7b:"",value7c:"",value8a:[{url:"https://img01.yzcdn.cn/vant/leaf.jpg"}],value8b:[{url:"https://img01.yzcdn.cn/vant/leaf.jpg"}],value11a:["2022-12","至今"],value12a:[]}}},methods:{emptyForm:function(){this.$refs.refMyForm._emptyForms()},resetForm:function(){this.$refs.refMyForm._resetForms()},disableForm:function(){this.disabledForm=!this.disabledForm},onRules:function(){this.$refs.refMyForm._onRulesForms().then((function(){Object(t.a)("校验已经通过")})).catch((function(){Object(t.a)("校验未通过")}))},submitFormApi:function(){this.$refs.refMyForm._onRulesForms().then((function(){Object(t.a)("校验已经通过")})).catch((function(){Object(t.a)("校验未通过")}))}}},u=a("2877"),i=Object(u.a)(l,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"page"},[a("MyFormItems",{ref:"refMyForm",attrs:{disabled:e.disabledForm,formConfigs:e.formConfigs,formQuerys:e.formQuerys,footerFixed:"true"},on:{"update:formQuerys":function(r){e.formQuerys=r},"update:form-querys":function(r){e.formQuerys=r}}},[a("template",{slot:"value9a"},[a("van-button",{attrs:{size:"small",type:"primary"}},[e._v("发送验证码")])],1),a("template",{slot:"value10a"},[a("van-image",{attrs:{width:"80",height:"30",src:"https://img01.yzcdn.cn/vant/cat.jpeg"}})],1),a("div",[a("van-button",{attrs:{type:"default",block:""},on:{click:e.emptyForm}},[e._v("置空")]),a("van-button",{attrs:{type:"default",block:""},on:{click:e.resetForm}},[e._v("重置")]),a("van-button",{attrs:{type:"danger",block:""},on:{click:e.disableForm}},[e._v("禁用")]),a("van-button",{attrs:{type:"info",block:""},on:{click:e.onRules}},[e._v("校验")]),a("van-button",{attrs:{type:"primary",block:""},on:{click:e.submitFormApi}},[e._v("提交")])],1)],2)],1)}),[],!1,null,"0678ba71",null);r.default=i.exports}}]);