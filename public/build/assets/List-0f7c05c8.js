import{A as h}from"./GridApp-327312e4.js";import{Z as b,i as w,r as a,o as r,c as g,a as t,w as e,F as A,e as k,t as s,b as c,h as B,g as x}from"./app-815ecbc5.js";import{S as y}from"./DataTable-6ab4ded5.js";import{A as N}from"./ActionButtonShow-53e3eb3b.js";import{A as T}from"./ActionButtonEdit-cb687ef4.js";import{A as v}from"./AddNewButton-a2d51047.js";import{T as H}from"./TableTd-c6a42ad4.js";import{A as L}from"./ActionButtonDelete-e8cc135d.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-2101d845.js";import"./ApplicationLogo-e1db4b62.js";import"./Index-f40909a6.js";import"./Label-6fa194ca.js";import"./PaginatorLinks-58a3d80f.js";const V={components:{AppLayout:h,SimpleTable:y,Head:b,Link:w,ActionButtonShow:N,ActionButtonEdit:T,AddNewButton:v,TableTd:H,ActionButtonDelete:L},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"নাম",align:"left"},{title:"পদবি",align:"left"},{title:"ফোন",align:"left"},{title:"",align:"right"}]}}},C={class:"overflow-hidden whitespace-normal break-all line-clamp-6"},D={class:"overflow-hidden whitespace-normal break-all line-clamp-6"};function E(n,F,i,j,m,O){const d=a("Head"),p=a("Link"),l=a("table-td"),f=a("action-button-delete"),_=a("simple-table"),u=a("app-layout");return r(),g(A,null,[t(d,{title:"শিক্ষক/স্টাফ"}),t(u,{pageTitle:"শিক্ষক/স্টাফ",addNewHref:n.route("staff.create")},{default:e(()=>[t(_,{collections:i.data.collections,filters:i.data.filters,columns:m.columns},{default:e(({item:o})=>[t(l,{class:"text-left"},{default:e(()=>[t(p,{href:n.route("staff.show",o.id),class:"text-brand-600 hover:underline"},{default:e(()=>[k(s(o.name),1)]),_:2},1032,["href"])]),_:2},1024),t(l,{class:"text-left"},{default:e(()=>[c("div",C,s(o.designationTitle),1)]),_:2},1024),t(l,{class:"text-left"},{default:e(()=>[c("div",D,s(o.phone),1)]),_:2},1024),t(l,{class:"w-10 text-right"},{default:e(()=>[o.allowDeletion?(r(),B(f,{key:0,href:n.route("staff.destroy",o.id)},null,8,["href"])):x("",!0)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["addNewHref"])],64)}const X=S(V,[["render",E]]);export{X as default};