import{A as u}from"./GridApp-327312e4.js";import{Z as _,i as g,r as l,o as h,c as b,a as t,w as e,F as w,b as A,e as s,t as i}from"./app-815ecbc5.js";import{S as N}from"./DataTable-6ab4ded5.js";import{A as x}from"./ActionButtonShow-53e3eb3b.js";import{A as k}from"./ActionButtonEdit-cb687ef4.js";import{A as y}from"./AddNewButton-a2d51047.js";import{T as B}from"./TableTd-c6a42ad4.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-2101d845.js";import"./ApplicationLogo-e1db4b62.js";import"./Index-f40909a6.js";import"./Label-6fa194ca.js";import"./PaginatorLinks-58a3d80f.js";const H={components:{AppLayout:u,SimpleTable:N,Head:_,Link:g,ActionButtonShow:x,ActionButtonEdit:k,AddNewButton:y,TableTd:B},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"ভাউচার নং",align:"left"},{title:"তারিখ",align:"left"},{title:"খাত",align:"left"},{title:"ব্যয়কারী",align:"left"},{title:"টাকা",align:"right"}]}}},v={class:"overflow-hidden whitespace-normal break-all line-clamp-6"};function L(n,S,r,F,c,V){const d=l("Head"),m=l("Link"),o=l("table-td"),f=l("simple-table"),p=l("app-layout");return h(),b(w,null,[t(d,{title:"ব্যয়ের তালিকা"}),t(p,{pageTitle:"ব্যয়ের তালিকা",addNewHref:n.route("expenses.create")},{default:e(()=>[t(f,{collections:r.data.collections,filters:r.data.filters,columns:c.columns,dateFilter:!0},{default:e(({item:a})=>[t(o,{class:"text-left"},{default:e(()=>[A("div",v,[t(m,{href:n.route("expenses.edit",a.id),class:"text-brand-600 hover:underline"},{default:e(()=>[s(i(a.id),1)]),_:2},1032,["href"])])]),_:2},1024),t(o,{class:"text-left"},{default:e(()=>[s(i(a.date),1)]),_:2},1024),t(o,{class:"text-left"},{default:e(()=>[s(i(a.categoryName),1)]),_:2},1024),t(o,{class:"text-left"},{default:e(()=>[s(i(a.staffName),1)]),_:2},1024),t(o,{class:"text-right"},{default:e(()=>[s(i(a.amount),1)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["addNewHref"])],64)}const M=T(H,[["render",L]]);export{M as default};