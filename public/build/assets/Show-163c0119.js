import{A as p}from"./GridApp-29be924a.js";import{Z as f,i as _,r as e,o as u,c as x,a as t,w as s,F as h,b as o,e as w}from"./app-e97a51a8.js";import{A as g}from"./ActionButtonEdit-7e3f2c0f.js";import{F as b}from"./FormHeading-f223cc2c.js";import{I as y}from"./InlineData-18078cd8.js";import{L as k}from"./LetterHead-85ac93ce.js";import{P as A}from"./PrintButton-4e44bd66.js";import{r as L}from"./PencilAltIcon-9e541c18.js";import{A as j}from"./AdmissionForm-6052267f.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-fe0a1aa1.js";import"./ApplicationLogo-b241dc52.js";import"./Index-cba17f68.js";import"./Input-fe9d8c63.js";import"./CheckUncheckIcon-953a9ae2.js";const B={components:{AppLayout:p,Head:f,Link:_,ActionButtonEdit:g,FormHeading:b,InlineData:y,LetterHead:k,PrintButton:A,PencilAltIcon:L,AdmissionFormTemplete:j},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"Code",align:"left"},{title:"Name",align:"left"}]}}},F={class:"max-w-3xl"},H={class:"flex flex-wrap items-end justify-between gap-4 print:hidden"},I=o("h2",{class:"flex-shrink flex-grow text-xl font-bold leading-5 text-gray-700"}," আবেদন ফরম প্রিভিউ ",-1),P=o("span",{class:"hidden md:block"},"সম্পাদনা",-1),N={class:"max-w-3xl rounded border bg-white print:border-0"},C={class:"flex max-w-3xl items-center justify-end pt-2 print:hidden"};function V(a,E,n,T,D,O){const r=e("Head"),d=e("print-button"),l=e("PencilAltIcon"),i=e("Link"),m=e("admission-form-templete"),c=e("app-layout");return u(),x(h,null,[t(r,{title:"আবেদন ফরম প্রিভিউ"}),t(c,null,{default:s(()=>[o("div",F,[o("div",H,[I,t(d),t(i,{href:a.route("admissions.edit",n.data.admission.id),class:"flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded bg-brand-600 px-2.5 py-0.5 text-white"},{default:s(()=>[t(l,{class:"w-5"}),P]),_:1},8,["href"])])]),o("div",N,[t(m,{data:n.data,class:"max-w-3xl"},null,8,["data"])]),o("div",C,[t(i,{href:a.route("admissions.edit",n.data.admission.id)+"?step=2",class:"flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded bg-brand-600 px-3 py-2 text-white"},{default:s(()=>[w(" পরবর্তী ধাপ → ")]),_:1},8,["href"])])]),_:1})],64)}const tt=v(B,[["render",V]]);export{tt as default};