import{A as u}from"./GridApp-9515ee7b.js";import{Z as _,i as f,r as e,o as s,c as r,a as o,w as h,F as d,b as t,f as v,h as g}from"./app-13e8b3b3.js";import{A as x}from"./ActionButtonEdit-4b857a45.js";import{F as b}from"./FormHeading-c218f3e8.js";import{I as w}from"./InlineData-e8f3cca8.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-713a142e.js";import"./ApplicationLogo-9fda7697.js";import"./Index-55e62843.js";const k={components:{AppLayout:u,Head:_,Link:f,ActionButtonEdit:x,FormHeading:b,InlineData:w},props:{data:{type:Object,default:{}}}},B={class:"max-w-xl rounded border bg-white p-3 shadow md:p-4"},A={class:"flex items-end justify-end"},F={class:"flex items-center gap-2"},H={class:"grid gap-2"},L={class:"grid gap-2"};function j(l,C,a,E,I,N){const c=e("Head"),p=e("action-button-edit"),i=e("inline-data"),m=e("app-layout");return s(),r(d,null,[o(c,{title:"বাবদ"}),o(m,null,{default:h(()=>[t("div",B,[t("div",A,[t("div",F,[o(p,{href:l.route("purposes.edit",a.data.purpose.id)},null,8,["href"])])]),t("div",H,[o(i,{title:"বাবদ:",value:a.data.purpose.title},null,8,["value"])]),t("div",L,[(s(!0),r(d,null,v(a.data.purpose.purpose_fees,n=>(s(),g(i,{key:n.id,title:n.class_name,value:n.amount+" TK"},null,8,["title","value"]))),128))])])]),_:1})],64)}const z=y(k,[["render",j]]);export{z as default};