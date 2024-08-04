import{B}from"./Button-e27a7fc1.js";import{B as _}from"./Guest-5cdbaf44.js";import{I as b}from"./Input-ed105d19.js";import{L as w}from"./Label-4bef15bf.js";import{V as z}from"./ValidationErrors-f62f0f33.js";import{Z as y,r as e,o as i,c as l,a as o,t as V,g,b as r,w as x,n as h,d as k,F as v,e as E}from"./app-13e8b3b3.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-9fda7697.js";const F={layout:_,components:{BreezeButton:B,BreezeInput:b,BreezeLabel:w,BreezeValidationErrors:z,Head:y},props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}},I=r("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-brand-600"},C={class:"flex items-center justify-end mt-4"};function H(P,t,n,S,s,m){const u=e("Head"),d=e("BreezeValidationErrors"),c=e("BreezeLabel"),p=e("BreezeInput"),f=e("BreezeButton");return i(),l(v,null,[o(u,{title:"Forgot Password"}),I,n.status?(i(),l("div",N,V(n.status),1)):g("",!0),o(d,{class:"mb-4"}),r("form",{onSubmit:t[1]||(t[1]=k((...a)=>m.submit&&m.submit(...a),["prevent"]))},[r("div",null,[o(c,{for:"email",value:"Email"}),o(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":t[0]||(t[0]=a=>s.form.email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),r("div",C,[o(f,{class:h({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:x(()=>[E(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)],64)}const U=L(F,[["render",H]]);export{U as default};