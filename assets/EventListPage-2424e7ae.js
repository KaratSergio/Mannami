import{j as e,k as d,l as o,s as x,I as r,m as p,n as h,p as u,q as g,t as j}from"./index-a0cb789e.js";const m=({event:t})=>e.jsxs("div",{className:"p-4 border rounded shadow-md text-sm",children:[e.jsx("h3",{className:"text-lg font-bold",children:t.title}),e.jsx("p",{children:t.location}),e.jsxs("p",{children:[t.date," at ",t.time]}),e.jsxs("p",{children:["participants: 0 / ",t.maxParticipants," "]}),e.jsx("p",{children:t.targetAudience.join(", ")})]}),v=d,c=o,y=()=>{const t=v(),{searchText:a,location:l,date:i,targetAudience:n}=c(x);return e.jsxs("div",{className:"flex",children:[e.jsx(r,{type:"text",placeholder:"Search by title",value:a,onChange:s=>t(p(s.target.value))}),e.jsx(r,{type:"text",placeholder:"Search by location",value:l,onChange:s=>t(h(s.target.value))}),e.jsx(r,{type:"text",placeholder:"Search by date",value:i,onChange:s=>t(u(s.target.value))}),e.jsx(r,{type:"text",placeholder:"Search by target audience",value:n,onChange:s=>t(g(s.target.value))})]})},S=()=>{const t=c(j);return e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",children:t.map(a=>e.jsx("div",{children:e.jsx(m,{event:a})},a.id))})},E=()=>e.jsxs("div",{className:"container",children:[e.jsx(y,{}),e.jsx(S,{})]});export{E as default};