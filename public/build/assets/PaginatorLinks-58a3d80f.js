import{i as r,o as n,c as l,b as a,t as s,F as d,f,h as o,n as u,y as i,g as c}from"./app-815ecbc5.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const g={components:{Link:r},props:{collections:{type:Object,default:{}}}},x={class:"flex w-full justify-between"},_={class:"hidden items-center lg:flex"},h={key:0,class:"hidden lg:flex"},b={key:1,class:"flex w-full justify-between lg:hidden"};function y(v,k,e,L,w,p){return n(),l("div",x,[a("div",_," Showing "+s(e.collections.meta.from)+" to "+s(e.collections.meta.to)+" of "+s(e.collections.meta.total)+" results ",1),e.collections.meta.last_page>1?(n(),l("div",h,[(n(!0),l(d,null,f(e.collections.meta.links,t=>(n(),o(i(t.url?"Link":"div"),{key:t.index,class:u([{"bg-brand-600 border-brand-600 text-white":t.active,"border-gray-300 bg-white text-gray-700":!t.active},"ml-0.5 inline-flex items-center rounded-md border px-3.5 py-1.5 text-sm leading-5 focus:outline-none focus:ring-0"]),href:t.url,innerHTML:t.label},null,8,["class","href","innerHTML"]))),128))])):c("",!0),e.collections.meta.last_page>1?(n(),l("div",b,[(n(),o(i(e.collections.links.prev?"Link":"div"),{class:"inline-flex items-center rounded-md border px-3.5 py-1.5 leading-5 focus:outline-none focus:ring-0",href:e.collections.links.prev,innerHTML:"« Previous"},null,8,["href"])),(n(),o(i(e.collections.links.next?"Link":"div"),{class:"inline-flex items-center rounded-md border px-3.5 py-1.5 leading-5 focus:outline-none focus:ring-0",href:e.collections.links.next,innerHTML:"Next »"},null,8,["href"]))])):c("",!0)])}const M=m(g,[["render",y]]);export{M as P};