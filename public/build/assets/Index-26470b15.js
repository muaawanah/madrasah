import{A as u}from"./GridApp-7fc45828.js";import{Z as _,i as g,r as e,o,c as r,a as i,w as s,F as l,b as a,f as h,h as w,t as d}from"./app-ab311d13.js";import{S as k}from"./DataTable-5cf49321.js";import{A,a as B}from"./AddNewButton-40620c20.js";import{A as b}from"./ActionButtonEdit-167e1a17.js";import{T as y}from"./TableTd-18048c1c.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";import"./Label-aac4f242.js";const H={components:{AppLayout:u,SimpleTable:k,Head:_,Link:g,ActionButtonShow:A,ActionButtonEdit:b,AddNewButton:B,TableTd:y},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"ভাউচার নং",align:"left"},{title:"তারিখ",align:"left"},{title:"খাত",align:"left"},{title:"ব্যয়কারী",align:"left"},{title:"টাকা",align:"right"}]}}},L={class:"w-full grid gap-2 md:grid-cols-3"},N={class:"text-brand-600 hover:underline"};function T(n,x,c,S,$,C){const p=e("Head"),m=e("Link"),f=e("app-layout");return o(),r(l,null,[i(p,{title:"বাবদ তালিকা"}),i(f,{pageTitle:"বাবদ তালিকা",addNewHref:n.route("purposes.create")},{default:s(()=>[a("div",L,[(o(!0),r(l,null,h(c.data.collections.data,t=>(o(),w(m,{key:t.id,class:"rounded bg-white p-4 shadow",href:n.route("purposes.edit",t.id)},{default:s(()=>[a("div",N,d(t.title),1),a("div",null,"ফি যুক্ত আছে "+d(t.purpose_fees_count)+" টি",1)]),_:2},1032,["href"]))),128))])]),_:1},8,["addNewHref"])],64)}const G=v(H,[["render",T]]);export{G as default};
