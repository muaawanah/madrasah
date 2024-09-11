import{V as _}from"./ValidationErrors-62ec6324.js";import{B as h}from"./Button-ee0d1e29.js";import{I as b}from"./Input-fe9d8c63.js";import{S as x}from"./Select-7a3aea8e.js";import{F as g}from"./FormGroup-4e373c2e.js";import{T as V}from"./Textarea-4401d210.js";import{L as y}from"./Label-b7d7db00.js";import{r as s,o as w,c as v,a as o,b as n,w as l,n as B,d as S,e as T,t as F}from"./app-e97a51a8.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const z={components:{ValidationErrors:_,Button:h,Input:b,Select:x,FormGroup:g,Textarea:V,Label:y},props:{moduleAction:String,buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},data(){return{form:this.$inertia.form({name:this.data.department.name,description:this.data.department.description})}},created(){},methods:{submit(){if(this.moduleAction=="store")return this.form.post(this.route("departments.store"));if(this.moduleAction=="update")return this.form.put(this.route("departments.update",this.data.department.id))},resizeTextarea(m){let e=m.target,i=2;e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+i+"px"}}},C={class:"w-full max-w-xl rounded border bg-white p-4 shadow"},I={class:"grid gap-6"},A=n("hr",{class:"my-4 w-full"},null,-1),N={class:"flex items-center justify-end"};function j(m,e,i,E,t,a){const u=s("validation-errors"),p=s("Input"),d=s("form-group"),c=s("Textarea"),f=s("Button");return w(),v("div",C,[o(u,{class:"mb-4"}),n("form",{onSubmit:e[2]||(e[2]=S((...r)=>a.submit&&a.submit(...r),["prevent"])),class:""},[n("div",I,[o(d,{label:"নাম"},{default:l(()=>[o(p,{type:"text",class:"block w-full",modelValue:t.form.name,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.name=r),required:""},null,8,["modelValue"])]),_:1}),o(d,{label:"বিস্তারিত"},{default:l(()=>[o(c,{class:"block h-40 w-full text-sm md:h-32 md:text-lg",modelValue:t.form.description,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.description=r),onKeyup:a.resizeTextarea,onFocus:a.resizeTextarea},null,8,["modelValue","onKeyup","onFocus"])]),_:1})]),A,n("div",N,[o(f,{class:B(["",{"opacity-25":t.form.processing}]),disabled:t.form.processing},{default:l(()=>[T(F(i.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const J=k(z,[["render",j]]);export{J as default};