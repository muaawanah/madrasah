import{A as c}from"./Master-7a194640.js";import{Z as m,i as _,r as s,o as p,c as f,a as o,w as n,F as u,b as t,t as h}from"./app-815ecbc5.js";import{A as x}from"./AdmissionFormPreview-527b1f6e.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-2101d845.js";import"./ApplicationLogo-e1db4b62.js";import"./LetterHead-5fe5814b.js";import"./Input-d91aa2a0.js";import"./InlineData-34a4bfa5.js";import"./CheckUncheckIcon-006173ee.js";const b={components:{Head:m,Link:_,AppLayout:c,AdmissionFormPreview:x},props:{data:Object}},y={class:"mx-auto mt-5 w-full max-w-3xl rounded bg-white p-4"},k=t("h2",{class:"text-brand-600 mb-2 select-none text-center text-2xl font-bold print:text-black"}," ভর্তি আবেদন ফর্ম নাম্বার ",-1),v={class:"flex items-center justify-center"},g={class:"select-all text-center text-4xl"},A={class:"flex items-center justify-between"},F=t("span",{class:"hidden md:block"},"বাতিল করুন",-1),L=t("span",null,"×",-1),j=t("span",{class:"hidden md:block"},"ভর্তি করুন",-1),B=t("span",null,"→",-1),H={class:"mx-auto max-w-3xl overflow-hidden rounded"},P=t("br",null,null,-1);function C(a,N,e,O,S,V){const d=s("Head"),i=s("Link"),r=s("AdmissionFormPreview"),l=s("AppLayout");return p(),f(u,null,[o(d,{title:"ভর্তি আবেদন"}),o(l,null,{default:n(()=>[t("div",y,[k,t("div",v,[t("div",g,h(e.data.id),1)]),t("div",A,[o(i,{method:"delete",as:"button",href:a.route("admissions.online-forms.destroy",[e.data.id]),class:"flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded bg-red-600 px-3 pt-1 text-white"},{default:n(()=>[F,L]),_:1},8,["href"]),o(i,{href:a.route("admissions.create",{type:e.data.type,"online-form":e.data.id}),class:"bg-brand-600 flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded px-3 pt-1 text-white"},{default:n(()=>[j,B]),_:1},8,["href"])])]),t("div",H,[o(r,{data:e.data},null,8,["data"])]),P]),_:1})],64)}const Q=w(b,[["render",C]]);export{Q as default};