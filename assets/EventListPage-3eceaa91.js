import{j as s,k as i}from"./index-cee59efe.js";const r=t=>t.events.events,c=({event:t})=>s.jsxs("div",{className:"p-4 border rounded shadow-md text-sm",children:[s.jsx("h3",{className:"text-lg font-bold",children:t.title}),s.jsx("p",{children:t.location}),s.jsxs("p",{children:[t.date," at ",t.time]}),s.jsxs("p",{children:["participants: 0 / ",t.maxParticipants," "]}),s.jsx("p",{children:t.targetAudience.join(", ")})]}),d=i,l=()=>{const t=d(r);return s.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",children:t.map(e=>s.jsx("div",{children:s.jsx(c,{event:e})},e.id))})},a=()=>s.jsx("div",{className:"container",children:s.jsx(l,{})});export{a as default};
