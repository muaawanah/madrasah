import{A as _}from"./GridApp-29be924a.js";import{Z as b,i as g,r as s,o as h,c as x,a as e,w as o,F as A,e as a,t as l,b as B}from"./app-e97a51a8.js";import{S as T}from"./DataTableOld-de545b75.js";import{A as k}from"./ActionButtonShow-1a49355d.js";import{A as w}from"./ActionButtonEdit-7e3f2c0f.js";import{A as $}from"./AddNewButton-f3e5de8a.js";import{T as L}from"./TableTd-9ef942db.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-fe0a1aa1.js";import"./ApplicationLogo-b241dc52.js";import"./Index-cba17f68.js";import"./Label-b7d7db00.js";import"./PaginatorLinks-2a3e189e.js";const S={components:{AppLayout:_,SimpleTable:T,Head:b,Link:g,ActionButtonShow:k,ActionButtonEdit:w,AddNewButton:$,TableTd:L},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"রশিদ নং",align:"left"},{title:"স্টাফ",align:"left"},{title:"মাস",align:"left"},{title:"মোট",align:"left"},{title:"কর্তন",align:"left"},{title:"প্রদান",align:"right"}]}}};function C(i,H,m,V,f,v){const p=s("Head"),r=s("Link"),n=s("table-td"),u=s("simple-table"),d=s("app-layout");return h(),x(A,null,[e(p,{title:"টাকা জমার রশিদ"}),e(d,{pageTitle:"স্টাফ বেতন তালিকা"},{default:o(()=>[e(u,{collections:m.data.collections,filters:m.data.filters,columns:f.columns,serialColumn:!1},{default:o(({item:t})=>[e(n,{class:"text-left"},{default:o(()=>[e(r,{href:i.route("salaries.show",t.id),class:"text-brand-600 hover:underline"},{default:o(()=>[a(l(i.$e2bnumber(t.id)),1)]),_:2},1032,["href"])]),_:2},1024),e(n,{class:"text-left"},{default:o(()=>{var c;return[a(l((c=t==null?void 0:t.staff)==null?void 0:c.name),1)]}),_:2},1024),e(n,{class:"text-left"},{default:o(()=>[a(l(t.purpose_text),1)]),_:2},1024),e(n,{class:"text-left"},{default:o(()=>[a(l(i.$e2bnumber(t==null?void 0:t.total)),1)]),_:2},1024),e(n,{class:"text-left"},{default:o(()=>[a(l(i.$e2bnumber(t==null?void 0:t.cut)),1)]),_:2},1024),e(n,{class:"text-right"},{default:o(()=>[B("b",null,l(i.$e2bnumber(t.paid)),1)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1})],64)}const P=N(S,[["render",C]]);export{P as default};