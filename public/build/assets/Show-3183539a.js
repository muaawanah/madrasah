import{A as p}from"./GridApp-327312e4.js";import{Z as _,r as t,o as l,c as f,a as e,w as n,F as u,b as o,e as g,t as s}from"./app-815ecbc5.js";import{A as h}from"./ActionButtonEdit-cb687ef4.js";import{F as w}from"./FormHeading-1f5c7a9c.js";import{I as x}from"./InlineData-34a4bfa5.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-2101d845.js";import"./ApplicationLogo-e1db4b62.js";import"./Index-f40909a6.js";const v={components:{AppLayout:p,Head:_,ActionButtonEdit:h,FormHeading:w,InlineData:x},props:{data:{type:Object,default:{}}}},y={class:"max-w-xl rounded border bg-white p-3 shadow md:p-4"},A={class:"flex items-end justify-end"},B={class:"flex items-center gap-2"},F={class:"whitespace-normal"};function H(i,S,a,V,N,j){const r=t("Head"),d=t("action-button-edit"),c=t("form-heading"),m=t("app-layout");return l(),f(u,null,[e(r,{title:"Setting"}),e(m,{pageTitle:"View Setting"},{default:n(()=>[o("div",y,[o("div",A,[o("div",B,[e(d,{href:i.route("settings.edit",a.data.setting.id)},null,8,["href"])])]),e(c,{class:"mb-2"},{default:n(()=>[g(s(a.data.setting.name),1)]),_:1}),o("div",F,s(a.data.setting.value),1)])]),_:1})],64)}const $=b(v,[["render",H]]);export{$ as default};