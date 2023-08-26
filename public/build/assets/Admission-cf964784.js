import{Z as k,r as a,o as d,c,a as l,w as n,F as f,b as r,e as p,d as I,f as D,t as w,g as h,h as x}from"./app-ab311d13.js";import{A as C}from"./GridApp-7fc45828.js";import S from"./Form-baeb63c6.js";import{F as v}from"./FormGroup-4756c19a.js";import{I as N}from"./InlineData-312386cb.js";import{S as R}from"./Select-70604ac4.js";import{I as O}from"./Input-372a1eaa.js";import{B}from"./Button-415165b1.js";import{L as H}from"./Label-aac4f242.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";import"./ValidationErrors-7e30df70.js";import"./FormHeading-f08567d7.js";import"./FormSlotGroup-9bbda37d.js";import"./TrashIcon-e9d6bd6e.js";const F={components:{Head:k,AppLayout:C,FormComponent:S,FormGroup:v,InlineData:N,Select:R,Input:O,Button:B,Label:H},props:{data:{type:Object,default:{}}},computed:{isValided(){return!!(this.form.type==="new"||this.form.type==="old"&&this.form.student)}},created(){this.registrationHandler()},data(){return{form:this.$inertia.form({student:"",type:""}),classId:"",roll:"",studentName:"",registration:""}},methods:{submit(){if(this.form.type==="new"&&delete this.form.student,this.isValided)return this.form.get(this.route("admissions.create"))},registrationHandler(){this.resetDuringRegistrationSelect(),this.resetCommonData();let e=Object.values(this.data.admissions).filter(t=>t.student.registration==this.registration)[0];e&&(this.setCommonData(e),this.setDuringRegistrationSelect(e))},classOrRollHandler(){this.resetDuringclassOrRollSelect(),this.resetCommonData();let e=null;this.classId&&this.roll&&(e=Object.values(this.data.admissions).filter(t=>t.class_id==this.classId&&t.roll==this.roll)[0]),e&&(this.setCommonData(e),this.setDuringclassOrRollSelect(e))},setCommonData(e){this.form.admission=e.id,this.studentName=e.student.name,this.form.student=e.student.id},setDuringRegistrationSelect(e){this.roll=e.roll,this.classId=e.class_id},setDuringclassOrRollSelect(e){this.registration=e.student.registration},resetCommonData(){this.form.admission="",this.studentName="",this.form.student=""},resetDuringRegistrationSelect(){this.roll="",this.classId=""},resetDuringclassOrRollSelect(){this.registration=""}}},L={class:"w-full max-w-lg rounded border bg-white p-4 shadow"},U=r("h2",{class:"mb-2 text-center text-2xl font-bold text-brand-600 print:text-black"}," ভর্তি আবেদন ",-1),q={class:"flex items-center justify-center gap-8"},A={key:0,class:"grid gap-4 md:grid-cols-3"},E=r("option",{value:""},"-- নির্বাচন করুন --",-1),G=["value"],M={class:"mt-4 flex items-center justify-end"};function T(e,t,g,Z,o,i){const _=a("Head"),m=a("Input"),b=a("Select"),u=a("form-group"),y=a("Button"),V=a("app-layout");return d(),c(f,null,[l(_,{title:"ভর্তি আবেদন"}),l(V,null,{default:n(()=>[r("div",L,[U,r("div",q,[r("label",null,[l(m,{type:"radio",name:"admission_type",checked:o.form.type==="new",onClick:t[0]||(t[0]=s=>o.form.type="new")},null,8,["checked"]),p(" নতুন ভর্তি ")]),r("label",null,[l(m,{type:"radio",name:"admission_type",checked:o.form.type==="old",onClick:t[1]||(t[1]=s=>o.form.type="old")},null,8,["checked"]),p(" পুরাতন ভর্তি ")])]),r("form",{onSubmit:t[6]||(t[6]=I((...s)=>i.submit&&i.submit(...s),["prevent"])),class:""},[o.form.type==="old"?(d(),c("div",A,[l(u,{class:"col-span-2",label:"ক্লাস"},{default:n(()=>[l(b,{class:"block w-full",modelValue:o.classId,"onUpdate:modelValue":t[2]||(t[2]=s=>o.classId=s),onChange:i.classOrRollHandler,required:""},{default:n(()=>[E,(d(!0),c(f,null,D(g.data.classes,s=>(d(),c("option",{key:s.id,value:s.id},w(s.name),9,G))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(u,{class:"",label:"রোল"},{default:n(()=>[l(m,{class:"block w-full",type:"Number",modelValue:o.roll,"onUpdate:modelValue":t[3]||(t[3]=s=>o.roll=s),onInput:i.classOrRollHandler,required:""},null,8,["modelValue","onInput"])]),_:1}),l(u,{class:"col-span-2",label:"শিক্ষার্থীর নাম"},{default:n(()=>[l(m,{class:"block w-full",type:"text",disabled:"",modelValue:o.studentName,"onUpdate:modelValue":t[4]||(t[4]=s=>o.studentName=s)},null,8,["modelValue"])]),_:1}),l(u,{class:"",label:"রেজি. নং"},{default:n(()=>[l(m,{class:"block w-full",type:"Number",modelValue:o.registration,"onUpdate:modelValue":t[5]||(t[5]=s=>o.registration=s),onInput:i.registrationHandler,required:""},null,8,["modelValue","onInput"])]),_:1})])):h("",!0),r("div",M,[i.isValided?(d(),x(y,{key:0,type:"submit"},{default:n(()=>[p(" পরবর্তী ধাপ → ")]),_:1})):h("",!0)])],32)])]),_:1})],64)}const it=j(F,[["render",T]]);export{it as default};
