import{A as f}from"./GridApp-327312e4.js";import{Z as _,i as h,r as t,o as l,c as b,a as o,w as a,F as g,b as y,e as w,t as A,h as k,g as B}from"./app-815ecbc5.js";import{S as N}from"./DataTable-6ab4ded5.js";import{A as T}from"./ActionButtonShow-53e3eb3b.js";import{A as $}from"./ActionButtonEdit-cb687ef4.js";import{A as q}from"./AddNewButton-a2d51047.js";import{T as H}from"./TableTd-c6a42ad4.js";import{A as v}from"./ActionButtonDelete-e8cc135d.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-2101d845.js";import"./ApplicationLogo-e1db4b62.js";import"./Index-f40909a6.js";import"./Label-6fa194ca.js";import"./PaginatorLinks-58a3d80f.js";const S={components:{AppLayout:f,SimpleTable:N,Head:_,Link:h,ActionButtonShow:T,ActionButtonEdit:$,AddNewButton:q,TableTd:H,ActionButtonDelete:v},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:this.$page.props.request.type==="2"?"ব্যয়ের খাত":"আয়ের খাত",align:"left"},{}]}}},V={class:"overflow-hidden whitespace-normal break-all line-clamp-6"};function C(e,D,r,x,p,E){const i=t("Head"),c=t("Link"),n=t("table-td"),m=t("action-button-delete"),d=t("simple-table"),u=t("app-layout");return l(),b(g,null,[o(i,{title:e.$page.props.request.type==="2"?"ব্যয়ের খাত":"আয়ের খাত"},null,8,["title"]),o(u,{pageTitle:e.$page.props.request.type==="2"?"ব্যয়ের খাত":"আয়ের খাত",addNewHref:e.route("categories.create",[{type:e.$page.props.request.type}])},{default:a(()=>[o(d,{collections:r.data.collections,filters:r.data.filters,columns:p.columns},{default:a(({item:s})=>[o(n,{class:"text-left"},{default:a(()=>[y("div",V,[o(c,{href:e.route("categories.edit",[s.id,{type:e.$page.props.request.type}]),class:"text-brand-600 hover:underline"},{default:a(()=>[w(A(s.name),1)]),_:2},1032,["href"])])]),_:2},1024),o(n,{class:"w-10 text-right"},{default:a(()=>[s.allowDeletion?(l(),k(m,{key:0,href:e.route("categories.destroy",s.id)},null,8,["href"])):B("",!0)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["pageTitle","addNewHref"])],64)}const W=L(S,[["render",C]]);export{W as default};