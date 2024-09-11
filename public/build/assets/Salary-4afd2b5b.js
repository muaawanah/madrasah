import{V as b}from"./ValidationErrors-62ec6324.js";import{B as x}from"./Button-ee0d1e29.js";import{I as w}from"./Input-fe9d8c63.js";import{S as g}from"./Select-7a3aea8e.js";import{F as v}from"./FormSlotGroup-e2debcda.js";import{T as S}from"./Textarea-4401d210.js";import{I as V}from"./InlineData-18078cd8.js";import{F as y}from"./FormGroup-4e373c2e.js";import{r as o,o as k,c as B,b as e,a as t,w as s,n as I,d as N,e as j,t as C}from"./app-e97a51a8.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./TrashIcon-62d87504.js";import"./PlusCircleIcon-2518b7a1.js";import"./Label-b7d7db00.js";const T={components:{ValidationErrors:b,Button:x,Input:w,Select:g,FormSlotGroup:v,Textarea:S,InlineData:V,FormGroup:y},props:{buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},computed:{totalSalary(){let r=this.form.default_salaries.reduce(function(n,a){return n+parseInt(a.amount)},0);return isNaN(r)?0:r}},created(){this.form.default_salaries=this.data.staff.default_salaries},data(){return{form:this.$inertia.form({step:"salary",default_salaries:[]})}},methods:{addSalarySlot(){this.form.default_salaries.push({title:"",amount:""})},submit(){return this.form.put(this.route("staff.update",this.data.staff.id))}}},U={class:"w-full max-w-xl rounded border bg-white p-4 shadow"},M=e("h3",{class:"text-center text-2xl font-bold text-brand-600"}," বেতন নির্ধারণ ",-1),q={class:"grid md:grid-cols-2"},D=e("hr",{class:"my-3"},null,-1),E={class:"flex gap-4"},G=e("div",{class:"flex items-center"},[e("label",{class:"flex-shrink flex-grow bg-white px-2 font-bold line-clamp-1"}," বেতন বিবরণ "),e("label",{class:"w-28 flex-shrink-0 flex-grow-0 bg-white px-2 font-bold line-clamp-1"}," পরিমাণ ")],-1),z=e("hr",{class:"my-4 w-full"},null,-1),O={class:"flex items-center justify-end"};function A(r,n,a,H,u,i){const d=o("inline-data"),p=o("validation-errors"),f=o("Input"),c=o("form-group"),_=o("form-slot-group"),h=o("Button");return k(),B("div",U,[M,e("div",q,[t(d,{title:"নাম:",value:a.data.staff.name},null,8,["value"]),t(d,{class:"justify-end",title:"পদ:",value:a.data.staff.designationTitle},null,8,["value"]),t(d,{title:"ফোন:",value:a.data.staff.phone},null,8,["value"]),t(d,{class:"justify-end",title:"মোট বেতন:",value:r.$e2bnumber(i.totalSalary)},null,8,["value"])]),D,t(p,{class:"mb-4"}),e("form",{onSubmit:n[0]||(n[0]=N((...l)=>i.submit&&i.submit(...l),["prevent"])),class:""},[e("div",E,[t(_,{collections:u.form.default_salaries,addSlotMethod:i.addSalarySlot,class:"w-full"},{header:s(()=>[G]),default:s(({item:l})=>[t(c,{class:"w-full flex-shrink flex-grow"},{default:s(()=>[t(f,{type:"text",class:"block w-full",modelValue:l.title,"onUpdate:modelValue":m=>l.title=m,required:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(c,{class:"w-20 flex-shrink-0 flex-grow-0"},{default:s(()=>[t(f,{type:"number",class:"block w-full text-center",modelValue:l.amount,"onUpdate:modelValue":m=>l.amount=m,required:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["collections","addSlotMethod"])]),z,e("div",O,[t(h,{class:I(["",{"opacity-25":u.form.processing}]),disabled:u.form.processing},{default:s(()=>[j(C(a.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const at=F(T,[["render",A]]);export{at as default};