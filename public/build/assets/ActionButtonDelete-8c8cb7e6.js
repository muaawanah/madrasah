import{i,o as a,c as l,b as e,k as c,d as m,g as u}from"./app-ab311d13.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const f={components:{Link:i},props:["href"],methods:{submit(){if(confirm("Do you really want to delete?"))return this.$inertia.delete(this.href)}}},h={type:"submit",title:"Delete",class:"flex items-center justify-center text-red-500 focus:outline-none focus:ring-0"},p=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1);function _(s,t,r,k,w,o){return r.href?(a(),l("form",{key:0,onSubmit:t[0]||(t[0]=m((...n)=>o.submit&&o.submit(...n),["prevent"]))},[e("button",h,[p,c(s.$slots,"default")])],32)):u("",!0)}const x=d(f,[["render",_]]);export{x as A};
