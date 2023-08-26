import{i as x,r as _,o as n,c as i,a as l,b as d,w as o,g as U,n as S,d as q,e as c,F as h,f as b,t as m}from"./app-ab311d13.js";import{V as C}from"./ValidationErrors-7e30df70.js";import{B as A}from"./Button-415165b1.js";import{I as j}from"./Input-372a1eaa.js";import{S as H}from"./Select-70604ac4.js";import{F as D}from"./FormHeading-f08567d7.js";import{F as I}from"./FormGroup-4756c19a.js";import{T as B}from"./Textarea-aa808472.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./Label-aac4f242.js";const N={components:{Link:x,ValidationErrors:C,Button:A,Input:j,Select:H,FormHeading:D,FormGroup:I,Textarea:B},props:{moduleAction:String,buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},created(){this.present_address.divisions=this.data.divisions,this.present_address.districts=this.data.districts,this.present_address.areas=this.data.areas,this.permanent_address.divisions=this.data.divisions,this.permanent_address.districts=this.data.districts,this.permanent_address.areas=this.data.areas},data(){return{present_address:{divisions:"",districts:"",postoffice:"",areas:""},permanent_address:{divisions:"",districts:"",postoffice:"",areas:""},form:this.$inertia.form({step:"basic",name:this.data.staff.name,date_of_birth:this.data.staff.date_of_birth,phone:this.data.staff.phone,alternative_phone:this.data.staff.alternative_phone,nid:this.data.staff.nid,gender:this.data.staff.gender,blood_group:this.data.staff.bloodGroup,fathers_info:this.data.staff.fathers_info,mothers_info:this.data.staff.mothers_info,reference_info:this.data.staff.reference_info,is_same_address:this.data.staff.is_same_address,present_address_info:this.data.staff.present_address_info,permanent_address_info:this.data.staff.permanent_address_info,joining_date:this.data.staff.joining_date})}},methods:{submit(){if(this.moduleAction=="store")return this.form.post(this.route("staff.store"));if(this.moduleAction=="update")return this.form.put(this.route("staff.update",this.data.staff.id))},sameAsPresentHandler(f){this.form.is_same_address=f.target.checked},presentAddressDivisionSelectHandler(){this.form.present_address.division?this.present_address.districts=Object.values(this.data.districts).filter(f=>f.divisionId==this.form.present_address.division):this.present_address.districts=this.data.districts,this.form.present_address.district="",this.presentAddressDistrictSelectHandler()},presentAddressDistrictSelectHandler(){this.form.present_address.district?this.present_address.areas=Object.values(this.data.areas).filter(f=>f.districtId==this.form.present_address.district):this.present_address.areas=this.data.areas,this.form.present_address.area=""},permanentAddressDivisionSelectHandler(){this.form.permanent_address.division?this.permanent_address.districts=Object.values(this.data.districts).filter(f=>f.divisionId==this.form.permanent_address.division):this.permanent_address.districts=this.data.districts,this.form.permanent_address.district="",this.permanentAddressDistrictSelectHandler()},permanentAddressDistrictSelectHandler(){this.form.permanent_address.district?this.permanent_address.areas=Object.values(this.data.areas).filter(f=>f.districtId==this.form.permanent_address.district):this.permanent_address.areas=this.data.areas,this.form.permanent_address.area=""}}},O={class:"w-full max-w-xl rounded border bg-white p-4 shadow"},L={class:"grid gap-x-2 gap-y-4 md:grid-cols-2"},G={class:"flex gap-2"},T=d("option",{value:""},"-- নির্বাচন করুন --",-1),E=d("option",{value:1},"ছেলে",-1),P=d("option",{value:2},"মেয়ে",-1),z=d("option",{value:""},"-- Select --",-1),M=["value"],J={class:"grid gap-x-2 gap-y-4 md:grid-cols-2"},K={class:"grid gap-x-2 gap-y-4 md:grid-cols-4"},Q={class:"grid gap-x-2 gap-y-4 md:grid-cols-3"},R=d("option",{value:""},"-- নির্বাচন করুন --",-1),W=["value"],X=d("option",{value:""},"-- নির্বাচন করুন --",-1),Y=["value"],Z=d("option",{value:""},"-- নির্বাচন করুন --",-1),$=["value"],ee={class:"col-span-full flex items-center justify-center gap-3 md:justify-start"},se={class:"flex items-center justify-center gap-1"},le=d("span",null,"বর্তমান ও স্থায়ী ঠিকানা একই",-1),te={key:0,class:"grid gap-x-2 gap-y-4 md:grid-cols-3"},oe=d("option",{value:""},"-- নির্বাচন করুন --",-1),re=["value"],de=d("option",{value:""},"-- নির্বাচন করুন --",-1),ae=["value"],ne=d("option",{value:""},"-- নির্বাচন করুন --",-1),ie=["value"],fe=d("hr",{class:"my-4 w-full"},null,-1),ue={class:"grid gap-4"},me=d("hr",{class:"my-4 w-full"},null,-1),pe={class:"flex items-center justify-between"};function _e(f,t,v,ce,s,p){const w=_("validation-errors"),V=_("form-heading"),a=_("Input"),r=_("form-group"),u=_("Select"),y=_("Link"),k=_("Button");return n(),i("div",O,[l(w,{class:"mb-4"}),d("form",{onSubmit:t[26]||(t[26]=q((...e)=>p.submit&&p.submit(...e),["prevent"])),class:""},[l(V,{class:"mb-2"},{default:o(()=>[c("ব্যক্তিগত তথ্য")]),_:1}),d("div",L,[l(r,{class:"w-full",label:"নাম"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.form.name=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"জন্ম তারিখ"},{default:o(()=>[l(a,{type:"date",class:"block w-full",modelValue:s.form.date_of_birth,"onUpdate:modelValue":t[1]||(t[1]=e=>s.form.date_of_birth=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"ফোন"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>s.form.phone=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"বিকল্প ফোন"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.alternative_phone,"onUpdate:modelValue":t[3]||(t[3]=e=>s.form.alternative_phone=e)},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"NID / জন্ম নিবন্ধন নাম্বার"},{default:o(()=>[l(a,{type:"number",class:"block w-full",modelValue:s.form.nid,"onUpdate:modelValue":t[4]||(t[4]=e=>s.form.nid=e)},null,8,["modelValue"])]),_:1}),d("div",G,[l(r,{class:"flex-1",label:"লিঙ্গ"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.gender,"onUpdate:modelValue":t[5]||(t[5]=e=>s.form.gender=e),required:""},{default:o(()=>[T,E,P]),_:1},8,["modelValue"])]),_:1}),l(r,{class:"flex-1",label:"রক্তের গ্রুপ"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.blood_group,"onUpdate:modelValue":t[6]||(t[6]=e=>s.form.blood_group=e)},{default:o(()=>[z,(n(!0),i(h,null,b(v.data.bloodGroups,(e,g)=>(n(),i("option",{key:g,value:g},m(e),9,M))),128))]),_:1},8,["modelValue"])]),_:1})])]),l(V,{class:"mt-8"},{default:o(()=>[c("পারিবারিক তথ্য")]),_:1}),d("div",J,[l(r,{class:"w-full",label:"পিতার নাম"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.fathers_info.name,"onUpdate:modelValue":t[7]||(t[7]=e=>s.form.fathers_info.name=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"ফোন"},{default:o(()=>[l(a,{type:"number",class:"block w-full",modelValue:s.form.fathers_info.phone,"onUpdate:modelValue":t[8]||(t[8]=e=>s.form.fathers_info.phone=e)},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"মাতার নাম"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.mothers_info.name,"onUpdate:modelValue":t[9]||(t[9]=e=>s.form.mothers_info.name=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"ফোন"},{default:o(()=>[l(a,{type:"number",class:"block w-full",modelValue:s.form.mothers_info.phone,"onUpdate:modelValue":t[10]||(t[10]=e=>s.form.mothers_info.phone=e)},null,8,["modelValue"])]),_:1})]),l(V,{class:"mt-8"},{default:o(()=>[c("রেফারেন্স তথ্য")]),_:1}),d("div",K,[l(r,{class:"w-full md:col-span-2",label:"নাম"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.reference_info.name,"onUpdate:modelValue":t[11]||(t[11]=e=>s.form.reference_info.name=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"ফোন"},{default:o(()=>[l(a,{type:"number",class:"block w-full",modelValue:s.form.reference_info.phone,"onUpdate:modelValue":t[12]||(t[12]=e=>s.form.reference_info.phone=e)},null,8,["modelValue"])]),_:1}),l(r,{class:"w-full",label:"সম্পর্ক"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.reference_info.relation,"onUpdate:modelValue":t[13]||(t[13]=e=>s.form.reference_info.relation=e)},null,8,["modelValue"])]),_:1}),l(r,{class:"col-span-full w-full",label:"ঠিকানা"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.reference_info.address,"onUpdate:modelValue":t[14]||(t[14]=e=>s.form.reference_info.address=e)},null,8,["modelValue"])]),_:1})]),l(V,{class:"mt-8"},{default:o(()=>[c("বর্তমান ঠিকানা")]),_:1}),d("div",Q,[l(r,{label:"বিভাগ"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.present_address_info.division,"onUpdate:modelValue":t[15]||(t[15]=e=>s.form.present_address_info.division=e),onChange:p.presentAddressDivisionSelectHandler,required:""},{default:o(()=>[R,(n(!0),i(h,null,b(v.data.divisions,e=>(n(),i("option",{key:e.id,value:e.id},m(e.name),9,W))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(r,{label:"জেলা"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.present_address_info.district,"onUpdate:modelValue":t[16]||(t[16]=e=>s.form.present_address_info.district=e),onChange:p.presentAddressDistrictSelectHandler,required:""},{default:o(()=>[X,(n(!0),i(h,null,b(s.present_address.districts,e=>(n(),i("option",{key:e.id,value:e.id},m(e.name),9,Y))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(r,{label:"উপজেলা/থানা"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.present_address_info.area,"onUpdate:modelValue":t[17]||(t[17]=e=>s.form.present_address_info.area=e)},{default:o(()=>[Z,(n(!0),i(h,null,b(s.present_address.areas,e=>(n(),i("option",{key:e.id,value:e.id,required:""},m(e.name),9,$))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"পোস্ট অফিস",class:"col-span-1"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.present_address_info.postoffice,"onUpdate:modelValue":t[18]||(t[18]=e=>s.form.present_address_info.postoffice=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{label:"বাড়ি নং, রোড নং, গ্রাম/মহল্লা",class:"col-span-2"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.present_address_info.address,"onUpdate:modelValue":t[19]||(t[19]=e=>s.form.present_address_info.address=e),required:""},null,8,["modelValue"])]),_:1})]),l(V,{class:"mt-8"},{default:o(()=>[c("স্থায়ী ঠিকানা")]),_:1}),d("div",ee,[d("label",se,[l(a,{onChange:p.sameAsPresentHandler,type:"checkbox",checked:s.form.is_same_address},null,8,["onChange","checked"]),le])]),s.form.is_same_address?U("",!0):(n(),i("div",te,[l(r,{label:"বিভাগ"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.permanent_address_info.division,"onUpdate:modelValue":t[20]||(t[20]=e=>s.form.permanent_address_info.division=e),onChange:p.permanentAddressDivisionSelectHandler,required:""},{default:o(()=>[oe,(n(!0),i(h,null,b(s.permanent_address.divisions,e=>(n(),i("option",{key:e.id,value:e.id},m(e.name),9,re))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(r,{label:"জেলা"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.permanent_address_info.district,"onUpdate:modelValue":t[21]||(t[21]=e=>s.form.permanent_address_info.district=e),onChange:p.permanentAddressDistrictSelectHandler,required:""},{default:o(()=>[de,(n(!0),i(h,null,b(s.permanent_address.districts,e=>(n(),i("option",{key:e.id,value:e.id},m(e.name),9,ae))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(r,{label:"উপজেলা/থানা"},{default:o(()=>[l(u,{class:"block w-full",modelValue:s.form.permanent_address_info.area,"onUpdate:modelValue":t[22]||(t[22]=e=>s.form.permanent_address_info.area=e),required:""},{default:o(()=>[ne,(n(!0),i(h,null,b(s.permanent_address.areas,e=>(n(),i("option",{key:e.id,value:e.id},m(e.name),9,ie))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"পোস্ট অফিস",class:"col-span-1"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.permanent_address_info.postoffice,"onUpdate:modelValue":t[23]||(t[23]=e=>s.form.permanent_address_info.postoffice=e),required:""},null,8,["modelValue"])]),_:1}),l(r,{label:"বাড়ি নং, রোড নং, গ্রাম/মহল্লা",class:"col-span-2"},{default:o(()=>[l(a,{type:"text",class:"block w-full",modelValue:s.form.permanent_address_info.address,"onUpdate:modelValue":t[24]||(t[24]=e=>s.form.permanent_address_info.address=e),required:""},null,8,["modelValue"])]),_:1})])),fe,d("div",ue,[l(r,{class:"w-full md:flex-row-reverse justify-center items-center gap-2",label:"নিয়োগের তারিখ:"},{default:o(()=>[l(a,{type:"date",class:"block w-full md:w-1/2",modelValue:s.form.joining_date,"onUpdate:modelValue":t[25]||(t[25]=e=>s.form.joining_date=e),required:""},null,8,["modelValue"])]),_:1})]),me,d("div",pe,[l(y,{href:f.route("staff.show",v.data.staff.id),class:"rounded-md border border-brand-600 px-4 py-2 font-semibold text-brand-600 hover:bg-brand-700 hover:text-white"},{default:o(()=>[c(" Cancel ")]),_:1},8,["href"]),l(k,{class:S(["",{"opacity-25":s.form.processing}]),disabled:s.form.processing},{default:o(()=>[c(m(v.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const Se=F(N,[["render",_e]]);export{Se as default};
