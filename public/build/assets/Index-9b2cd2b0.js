import{A as _}from"./GridApp-9515ee7b.js";import{Z as b,i as h,r as e,o as w,c as A,a as t,w as o,F as x,e as i,t as r,b as g}from"./app-13e8b3b3.js";import{S as y}from"./DataTable-9453ddf2.js";import{A as B}from"./ActionButtonShow-7f82c3c6.js";import{A as N}from"./ActionButtonEdit-4b857a45.js";import{A as T}from"./AddNewButton-36bfd1df.js";import{T as H}from"./TableTd-0eb69cad.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-713a142e.js";import"./ApplicationLogo-9fda7697.js";import"./Index-55e62843.js";import"./Label-4bef15bf.js";import"./PaginatorLinks-c80dab43.js";const S={components:{AppLayout:_,SimpleTable:y,Head:b,Link:h,ActionButtonShow:B,ActionButtonEdit:N,AddNewButton:T,TableTd:H},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"পরীক্ষার নাম",align:"left"},{title:"সেশন",align:"left"},{title:"Action",align:"center"}]}}},k={class:"flex justify-center gap-2"};function V(a,j,l,v,c,C){const m=e("Head"),s=e("table-td"),p=e("action-button-show"),d=e("action-button-edit"),f=e("simple-table"),u=e("app-layout");return w(),A(x,null,[t(m,{title:"Exam"}),t(u,{pageTitle:"Exams",addNewHref:a.route("exams.create")},{default:o(()=>[t(f,{collections:l.data.collections,filters:l.data.filters,columns:c.columns},{default:o(({item:n})=>[t(s,{class:"text-left"},{default:o(()=>[i(r(n.name),1)]),_:2},1024),t(s,{class:"text-left"},{default:o(()=>[i(r(a.$e2bnumber(n.session)),1)]),_:2},1024),t(s,{class:"text-center"},{default:o(()=>[g("div",k,[t(p,{href:a.route("exams.show",n.id)},null,8,["href"]),t(d,{href:a.route("exams.edit",n.id)},null,8,["href"])])]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["addNewHref"])],64)}const P=E(S,[["render",V]]);export{P as default};