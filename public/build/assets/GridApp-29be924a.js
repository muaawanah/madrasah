import{i as u,r,o as t,c as o,b as a,a as l,t as m,g as n,h as c,w as d,k as g,e as f,F as x}from"./app-e97a51a8.js";import{A as y,a as k}from"./Index-fe0a1aa1.js";import{A as w}from"./Index-cba17f68.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const v={components:{Link:u,AppFooter:y,AppHeader:k,AppNavigation:w},props:{pageTitle:{type:String,default:""},addNewHref:{type:String,default:""},backHref:{type:String,default:""}},data(){return{navigation:!1}},methods:{navigationController(){this.navigation=!this.navigation}}},N={class:"sticky top-0 z-40 bg-white shadow-sm print:hidden"},A={class:"mx-auto flex max-w-6xl"},H={class:"w-full space-y-2 overflow-auto px-2 py-2 print:overflow-visible print:p-0 md:space-y-4 md:px-4 md:py-4"},B={key:0,class:"flex items-center justify-center gap-1.5 text-center print:hidden"},C={key:0,class:"text-xl font-bold leading-5 text-gray-700"},S=a("span",null,"+",-1),T=a("span",{class:"hidden md:block"},"নতুন যোগ করুন",-1),L={class:"flex w-full flex-col items-center gap-2 md:gap-4"},V=a("hr",{class:"print:hidden"},null,-1),j={key:1,class:"flex w-full max-w-6xl justify-between print:hidden"},F={key:1,type:"button",class:"inline-block cursor-pointer text-xl font-bold leading-5 text-gray-700",onclick:"history.back()"};function z(s,D,e,E,M,p){const h=r("app-header"),i=r("Link"),_=r("font-awesome-icon");return t(),o(x,null,[a("header",N,[l(h,{"navigation-controller":p.navigationController,hasAccount:!0},null,8,["navigation-controller"])]),a("div",A,[a("main",H,[e.pageTitle||e.addNewHref?(t(),o("div",B,[e.pageTitle?(t(),o("h2",C,m(e.pageTitle),1)):n("",!0),e.addNewHref?(t(),c(i,{key:1,href:e.addNewHref,class:"bg-brand-600 flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded px-2.5 py-0.5 text-white"},{default:d(()=>[S,T]),_:1},8,["href"])):n("",!0)])):n("",!0),a("div",L,[g(s.$slots,"default")]),V,s.route().current("dashboard")?n("",!0):(t(),o("div",j,[e.backHref?(t(),c(i,{key:0,class:"text-xl font-bold leading-5 text-gray-700",href:e.backHref},{default:d(()=>[f(" ← Back ")]),_:1},8,["href"])):(t(),o("div",F," ← Back ")),l(i,{class:"text-xl font-bold leading-5 text-gray-700",href:s.route("dashboard")},{default:d(()=>[l(_,{icon:"fa-solid fa-house"}),f(" Menu ")]),_:1},8,["href"])]))])])],64)}const K=b(v,[["render",z]]);export{K as A};