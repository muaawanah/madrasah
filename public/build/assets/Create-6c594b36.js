import{Z as d,i as l,r as t,o as _,c as u,a as e,w as r,F as f,b as w,e as x}from"./app-e97a51a8.js";import{A as y}from"./GridApp-29be924a.js";import b from"./Form-576f7638.js";import{r as h}from"./ArrowLeftIcon-d0d2713d.js";import{P as L}from"./PrintButton-4e44bd66.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-fe0a1aa1.js";import"./ApplicationLogo-b241dc52.js";import"./Index-cba17f68.js";import"./ValidationErrors-62ec6324.js";import"./Button-ee0d1e29.js";import"./Input-fe9d8c63.js";import"./FormGroup-4e373c2e.js";import"./Label-b7d7db00.js";const k={components:{Head:d,Link:l,AppLayout:y,FormComponent:b,ArrowLeftIcon:h,PrintButton:L},props:{data:{type:Object,default:{}}}},A={class:"flex w-full max-w-2xl items-center justify-between py-2 print:hidden"};function j(n,B,o,C,v,F){const a=t("Head"),s=t("ArrowLeftIcon"),c=t("Link"),p=t("print-button"),m=t("form-component"),i=t("app-layout");return _(),u(f,null,[e(a,{title:"Result"}),e(i,{pageTitle:"ফলাফল"},{default:r(()=>[w("div",A,[e(c,{href:n.route("results.subjects",[o.data.result.exam_id,o.data.result.class_id])+"?session="+n.$page.props.current_academic_session.value,class:"flex items-center justify-center gap-2 rounded-md bg-gray-600 px-4 py-1 text-white"},{default:r(()=>[e(s,{class:"w-5"}),x(" পূর্বের পেজ ")]),_:1},8,["href"]),e(p)]),e(m,{data:o.data,"module-action":"store"},null,8,["data"])]),_:1})],64)}const G=g(k,[["render",j]]);export{G as default};