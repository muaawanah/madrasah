import{A as g}from"./GridApp-327312e4.js";import{Z as f,i as x,r as t,o,c as n,a as s,w as c,F as i,b as e,f as y,h as b,t as k,g as l}from"./app-815ecbc5.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{M as v}from"./Index-f40909a6.js";import"./Index-2101d845.js";import"./ApplicationLogo-e1db4b62.js";const B={components:{AppLayout:g,Head:f,Link:x,MoneyReceiptSvg:v},props:{data:{type:Object,default:{}}}},$={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4"},S={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},N={class:"shrink grow"},V={class:"text-md font-bold text-brand-600 md:text-xl"};const P=e("div",null,[e("hr",{class:"my-3"})],-1);function L(a,D,p,M,C,E){const _=t("Head"),m=t("MoneyReceiptSvg"),h=t("Link"),u=t("app-layout");return o(),n(i,null,[s(_,{title:"বাবদ সমুহ"}),s(u,{pageTitle:"বাবদ সমুহ"},{default:c(()=>[e("div",$,[(o(!0),n(i,null,y(p.data.purposes,(r,d)=>(o(),b(h,{href:a.route("payments.purpose.show",d),key:d,class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},{default:c(()=>[e("div",S,[s(m,{class:"w-6 text-brand-600"})]),e("div",N,[e("div",V,k(a.$e2bnumber(r.title)),1),l("",!0)])]),_:2},1032,["href"]))),128))]),P,l("",!0)]),_:1})],64)}const T=w(B,[["render",L]]);export{T as default};