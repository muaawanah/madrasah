import{A as p}from"./GridApp-29be924a.js";import{Z as i,r as a,o as l,c as n,a as e,w as t,F as f,b as m,e as s}from"./app-e97a51a8.js";import{G as _}from"./GridViewCard-fa8310a0.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-fe0a1aa1.js";import"./ApplicationLogo-b241dc52.js";import"./Index-cba17f68.js";const g={components:{AppLayout:p,Head:i,GridViewCard:_},props:{data:{type:Object,default:{}}}},h={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function w(o,V,b,k,C,H){const c=a("Head"),r=a("GridViewCard"),d=a("app-layout");return l(),n(f,null,[e(c,{title:"আর্টিকেল"}),e(d,{backHref:o.route("dashboard")},{default:t(()=>[m("div",h,[e(r,{href:o.route("posts.create"),"icon-class":"fa-solid fa-file-circle-plus",class:"lg:col-start-2"},{default:t(()=>[s(" নতুন আর্টিকেল ")]),_:1},8,["href"]),e(r,{href:o.route("posts.index"),"icon-class":"fa-solid fa-list-check"},{default:t(()=>[s(" আর্টিকেল তালিকা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const A=u(g,[["render",w]]);export{A as default};