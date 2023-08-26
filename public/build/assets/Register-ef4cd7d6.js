import{B as _}from"./Button-415165b1.js";import{B}from"./Guest-1e3bcfe8.js";import{I as V}from"./Input-372a1eaa.js";import{L as b}from"./Label-aac4f242.js";import{V as z}from"./ValidationErrors-7e30df70.js";import{Z as v,i as g,r as t,o as y,c as k,a as e,b as a,w as i,n as x,d as L,F as h,e as d}from"./app-ab311d13.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-0bad1abd.js";const I={layout:B,components:{BreezeButton:_,BreezeInput:V,BreezeLabel:b,BreezeValidationErrors:z,Head:v,Link:g},data(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit(){this.form.post(this.route("register"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},q={class:"mt-4"},C={class:"mt-4"},N={class:"mt-4"},U={class:"flex items-center justify-end mt-4"};function F(u,o,H,R,s,n){const p=t("Head"),f=t("BreezeValidationErrors"),l=t("BreezeLabel"),m=t("BreezeInput"),c=t("Link"),w=t("BreezeButton");return y(),k(h,null,[e(p,{title:"Register"}),e(f,{class:"mb-4"}),a("form",{onSubmit:o[4]||(o[4]=L((...r)=>n.submit&&n.submit(...r),["prevent"]))},[a("div",null,[e(l,{for:"name",value:"Name"}),e(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>s.form.name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),a("div",q,[e(l,{for:"email",value:"Email"}),e(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":o[1]||(o[1]=r=>s.form.email=r),required:"",autocomplete:"username"},null,8,["modelValue"])]),a("div",C,[e(l,{for:"password",value:"Password"}),e(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":o[2]||(o[2]=r=>s.form.password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",N,[e(l,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s.form.password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",U,[e(c,{href:u.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[d(" Already registered? ")]),_:1},8,["href"]),e(w,{class:x(["ml-4",{"opacity-25":s.form.processing}]),disabled:s.form.processing},{default:i(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)],64)}const D=E(I,[["render",F]]);export{D as default};
