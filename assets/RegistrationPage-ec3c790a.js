import{j as e,I as o,B as c}from"./index-a6065ed9.js";import{c as p,b as a,u as g,o as h}from"./index.esm-894d9dcc.js";const x=p().shape({name:a().min(3,"Too Short!").max(14,"Too Long!").required("Required"),email:a().email("Please enter a valid email address").required("Required"),password:a().min(8,"Too Short!").required("Required")}),j=()=>{var t,m,i;const{register:r,handleSubmit:n,formState:{errors:s},reset:l}=g({resolver:h(x)}),d=u=>{console.log(u),l()};return e.jsxs("form",{className:"max-w-md",onSubmit:n(d),children:[e.jsx(o,{...r("name"),error:(t=s.name)==null?void 0:t.message,placeholder:"name",autocomplete:"name"}),e.jsx(o,{...r("email"),error:(m=s.email)==null?void 0:m.message,placeholder:"email",autocomplete:"email"}),e.jsx(o,{...r("password"),type:"password",withPasswordToggled:!0,error:(i=s.password)==null?void 0:i.message,placeholder:"password",autocomplete:"password"}),e.jsx(c,{type:"submit",children:"Send"})]})},R=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Register"}),e.jsx(j,{})]});export{R as default};
