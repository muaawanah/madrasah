import{A as b}from"./GridApp-29be924a.js";import{Z as g,i as h,r as l,o as x,c as A,a as t,w as e,F as T,e as s,t as i}from"./app-e97a51a8.js";import{S as k}from"./DataTableOld-de545b75.js";import{A as w}from"./ActionButtonShow-1a49355d.js";import{A as B}from"./ActionButtonEdit-7e3f2c0f.js";import{A as L}from"./AddNewButton-f3e5de8a.js";import{T as S}from"./TableTd-9ef942db.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-fe0a1aa1.js";import"./ApplicationLogo-b241dc52.js";import"./Index-cba17f68.js";import"./Label-b7d7db00.js";import"./PaginatorLinks-2a3e189e.js";const C={components:{AppLayout:b,SimpleTable:k,Head:g,Link:h,ActionButtonShow:w,ActionButtonEdit:B,AddNewButton:L,TableTd:S},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"রশিদ নং",align:"left"},{title:"শিক্ষার্থী",align:"left"},{title:"রোল",align:"left"},{title:"ক্লাস",align:"left"},{title:"জমা",align:"right"}]}}};function H(n,N,r,v,d,E){const f=l("Head"),p=l("Link"),a=l("table-td"),u=l("simple-table"),_=l("app-layout");return x(),A(T,null,[t(f,{title:"টাকা জমার রশিদ"}),t(_,{pageTitle:"টাকা জমার রশিদ"},{default:e(()=>[t(u,{collections:r.data.collections,filters:r.data.filters,columns:d.columns,serialColumn:!1},{default:e(({item:o})=>[t(a,{class:"text-left"},{default:e(()=>[t(p,{href:n.route("payments.show",o.id),class:"text-brand-600 hover:underline"},{default:e(()=>[s(i(n.$e2bnumber(o.id)),1)]),_:2},1032,["href"])]),_:2},1024),t(a,{class:"text-left"},{default:e(()=>{var m,c;return[s(i(((c=(m=o.admission)==null?void 0:m.student)==null?void 0:c.name)||o.admission.student_id),1)]}),_:2},1024),t(a,{class:"text-left"},{default:e(()=>[s(i(n.$e2bnumber(o.admission.roll)),1)]),_:2},1024),t(a,{class:"text-left"},{default:e(()=>[s(i(o.admission.class.name),1)]),_:2},1024),t(a,{class:"text-right"},{default:e(()=>[s(i(n.$e2bnumber(o.paid))+" TK ",1)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1})],64)}const M=$(C,[["render",H]]);export{M as default};