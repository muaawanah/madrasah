import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,c as u,b as n,e as y,t as _,h as f,a as i,r as d,l as A,m as D,p as B,k as w,j as x,q as $,w as h,n as v,T as M,i as b,F as j,f as z,g as k}from"./app-13e8b3b3.js";import{A as I}from"./ApplicationLogo-9fda7697.js";const U={data(){return{year:new Date().getFullYear()}}},E={class:"bg-gray-300 py-4 text-sm md:text-base"},T={class:"text-center"},F=n("a",{href:"https://www.muaawanah.com"},"Muaawanah",-1);function O(e,t,o,s,c,l){return r(),u("div",E,[n("p",T,[y(" © "+_(c.year)+" "+_(e.route("home").replace("http://","").replace("https://",""))+" | Developed by ",1),F])])}const Le=m(U,[["render",O]]);function N(e,t){return r(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])}function P(e,t){return r(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])}function q(e,t){return r(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})])}const H={components:{SearchIcon:P}},R={class:"flex flex-shrink flex-grow justify-end md:justify-center"},V={class:"flex cursor-pointer items-center gap-1 md:w-full md:max-w-xs md:rounded-full md:border md:px-3 md:py-1"},Y=n("span",{class:"hidden flex-shrink flex-grow text-sm md:inline-block"}," Search... ",-1);function G(e,t,o,s,c,l){const a=d("SearchIcon");return r(),u("div",R,[n("div",V,[i(a,{class:"h-5 w-5"}),Y])])}const J=m(H,[["render",G]]),K={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(){let e=A(!1);const t=o=>{e.value&&o.key==="Escape"&&(e.value=!1)};return D(()=>document.addEventListener("keydown",t)),B(()=>document.removeEventListener("keydown",t)),{open:e}},computed:{widthClass(){return{48:"w-48"}[this.width.toString()]},alignmentClasses(){return this.align==="left"?"origin-top-left left-0":this.align==="right"?"origin-top-right right-0":"origin-top"}}},Q={class:"relative"};function W(e,t,o,s,c,l){return r(),u("div",Q,[n("div",{onClick:t[0]||(t[0]=a=>s.open=!s.open)},[w(e.$slots,"trigger")]),x(n("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=a=>s.open=!1)},null,512),[[$,s.open]]),i(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:h(()=>[x(n("div",{class:v(["absolute z-50 mt-2 rounded-md shadow-lg",[l.widthClass,l.alignmentClasses]]),style:{display:"none"},onClick:t[2]||(t[2]=a=>s.open=!1)},[n("div",{class:v(["rounded-md p-1 ring-1 ring-black ring-opacity-5",o.contentClasses])},[w(e.$slots,"content")],2)],2),[[$,s.open]])]),_:3})])}const C=m(K,[["render",W]]),X={components:{Link:b}};function Z(e,t,o,s,c,l){const a=d("Link");return r(),f(a,{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:h(()=>[w(e.$slots,"default")]),_:3})}const S=m(X,[["render",Z]]),ee={components:{Dropdown:C,DropdownLink:S,UserCircleIcon:q}},te={class:"flex items-center"},ne={class:"relative"},se={class:"inline-flex rounded-md"},oe={type:"button",class:"flex items-center gap-1 rounded-md border border-transparent bg-white py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"},re={class:"-mb-0.5 hidden md:block"},ae=n("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1);function ie(e,t,o,s,c,l){const a=d("UserCircleIcon"),p=d("DropdownLink"),g=d("Dropdown");return r(),u("div",te,[n("div",ne,[i(g,{align:"right"},{trigger:h(()=>[n("span",se,[n("button",oe,[i(a,{class:"h-5 w-5 md:h-8 md:w-8"}),n("span",re,_(e.$page.props.auth.user.name),1),ae])])]),content:h(()=>[i(p,{href:e.route("logout"),method:"post",as:"button"},{default:h(()=>[y(" Log Out ")]),_:1},8,["href"])]),_:1})])])}const ce=m(ee,[["render",ie]]),le={components:{Dropdown:C,DropdownLink:S},created(){this.getSession(this.currentAcademicSession.value||this.$page.props.current_academic_session.value)},props:{currentAcademicSession:{type:Object,default:{}},previousAcademicSession:{type:Object,default:{}}},computed:{selectedAcademicSession(){let e=this.$page.props.academic_sessions.find(t=>t.value===this.session);return e?e.bengali:""}},data(){return{session:""}},methods:{setSession(e){return this.setCookie("academic_session",e),this.session=e,window.location.href=this.replaceUrlParam(window.location.href,"session",e)},setCookie(e,t,o=1){const s=new Date;s.setTime(s.getTime()+o*24*60*60*1e3);let c="expires="+s.toUTCString();document.cookie=e+"="+t+";"+c+";path=/"},getSession(e=null){return this.session=e},replaceUrlParam(e,t,o){o==null&&(o="");var s=new RegExp("\\b("+t+"=).*?(&|#|$)");return e.search(s)>=0?e.replace(s,"$1"+o+"$2"):(e=e.replace(/[?#]$/,""),e+(e.indexOf("?")>0?"&":"?")+t+"="+o)}}},de={class:"flex items-center"},pe={class:"relative"},ue={class:"inline-flex rounded-md"},he={type:"button",class:"flex items-center gap-1 rounded-md border border-transparent bg-white py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"},me={class:"-mb-0.5 hidden text-brand-950 md:block"},_e=n("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),fe=["onClick"];function ge(e,t,o,s,c,l){const a=d("Dropdown");return r(),u("div",de,[n("div",pe,[i(a,{align:"right"},{trigger:h(()=>[n("span",ue,[n("button",he,[n("span",me,[n("b",null,"সেশন "+_(l.selectedAcademicSession),1)]),_e])])]),content:h(()=>[(r(!0),u(j,null,z(e.$page.props.academic_sessions,p=>(r(),u("button",{key:p.id,type:"button",onClick:g=>l.setSession(p.value),class:v(["w-full rounded-md py-2 text-center hover:bg-gray-200",{"text-brand-950":c.session===p.value}])},[n("b",null,"সেশন "+_(p.bengali),1)],10,fe))),128))]),_:1})])])}const we=m(le,[["render",ge]]),ve={components:{Link:b,ApplicationLogo:I,Search:J,Account:ce,Session:we,MenuIcon:N},props:{navigationController:Function,hasAccount:{type:Boolean,default:!1},hasSession:{type:Boolean,default:!1}}},xe={class:"mx-auto flex max-w-6xl items-center justify-between gap-2 py-2 px-2 md:py-3"},$e={class:"hidden text-xs font-bold text-brand-950 md:block md:text-4xl"},ke={class:"flex items-center justify-between gap-2"};function ye(e,t,o,s,c,l){const a=d("application-logo"),p=d("Link"),g=d("session"),L=d("account");return r(),u("div",xe,[i(p,{href:e.route("home"),class:"flex items-center gap-2 md:gap-4"},{default:h(()=>[i(a,{class:"h-12 md:h-16"}),n("h1",$e,_(e.$page.props.settings.siteName),1)]),_:1},8,["href"]),n("div",ke,[o.hasAccount?(r(),f(g,{key:0})):k("",!0),o.hasAccount?(r(),f(L,{key:1})):k("",!0)])])}const Ae=m(ve,[["render",ye]]);export{Le as A,Ae as a,N as r};