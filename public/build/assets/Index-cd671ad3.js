import{A as n}from"./GridApp-7fc45828.js";import{Z as i,r,o as l,c as p,a as e,w as a,F as f,b as m,e as s}from"./app-ab311d13.js";import{G as u}from"./GridViewCard-66db2bf2.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";const h={components:{AppLayout:n,Head:i,GridViewCard:u},props:{data:{type:Object,default:{}}}},g={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function y(o,k,w,V,b,C){const c=r("Head"),t=r("GridViewCard"),d=r("app-layout");return l(),p(f,null,[e(c,{title:"ড্যাশবোর্ড"}),e(d,{backHref:o.route("dashboard")},{default:a(()=>[m("div",g,[e(t,{href:o.route("payments.create"),"icon-class":"fa-solid fa-money-check-dollar"},{default:a(()=>[s(" শিক্ষার্থী রশিদ ")]),_:1},8,["href"]),e(t,{href:o.route("incomes.index"),"icon-class":"fa-solid fa-money-check"},{default:a(()=>[s(" অন্যান্য রশিদ ")]),_:1},8,["href"]),e(t,{href:o.route("payments.index"),"icon-class":"fa-solid fa-list"},{default:a(()=>[s(" রশিদ তালিকা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const v=_(h,[["render",y]]);export{v as default};
