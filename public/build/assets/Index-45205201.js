import{A as h}from"./GridApp-7fc45828.js";import{Z as b,i as w,r as e,o as s,c as g,a as t,w as o,F as A,b as k,e as i,t as c,h as B,g as N}from"./app-ab311d13.js";import{S as x}from"./DataTable-5cf49321.js";import{A as y,a as T}from"./AddNewButton-40620c20.js";import{A as H}from"./ActionButtonEdit-167e1a17.js";import{T as v}from"./TableTd-18048c1c.js";import{r as L}from"./TrashIcon-e9d6bd6e.js";import{A as S}from"./ActionButtonDelete-8c8cb7e6.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";import"./Label-aac4f242.js";const C={components:{AppLayout:h,SimpleTable:x,Head:b,Link:w,ActionButtonShow:y,ActionButtonEdit:H,AddNewButton:T,TableTd:v,TrashIcon:L,ActionButtonDelete:S},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"প্রদেয় ফি",align:"left"},{title:"ফি-এর ধরন",align:"left"},{title:"",align:"right"}]}}},D={class:"overflow-hidden whitespace-normal break-all line-clamp-6"};function E(n,F,r,I,d,j){const m=e("Head"),p=e("Link"),l=e("table-td"),f=e("action-button-delete"),u=e("simple-table"),_=e("app-layout");return s(),g(A,null,[t(m,{title:"প্রদেয় ফি তালিকা"}),t(_,{pageTitle:"প্রদেয় ফি তালিকা",addNewHref:n.route("fees.create")},{default:o(()=>[t(u,{collections:r.data.collections,filters:r.data.filters,columns:d.columns},{default:o(({item:a})=>[t(l,{class:"text-left"},{default:o(()=>[k("div",D,[t(p,{href:n.route("fees.edit",a.id),class:"text-brand-600 hover:underline"},{default:o(()=>[i(c(a.name),1)]),_:2},1032,["href"])])]),_:2},1024),t(l,{class:"text-left"},{default:o(()=>[i(c(a.periodName),1)]),_:2},1024),t(l,{class:"w-10 text-right"},{default:o(()=>[a.allowDeletion?(s(),B(f,{key:0,href:n.route("fees.destroy",a.id)},null,8,["href"])):N("",!0)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["addNewHref"])],64)}const U=V(C,[["render",E]]);export{U as default};
