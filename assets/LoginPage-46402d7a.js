import{j as e,B as c}from"./index-9c336197.js";import{c as u,a as t,u as p,I as i,o as g}from"./Input-280ece05.js";const h=u().shape({email:t().email("Please enter a valid email address").required("Required"),password:t().min(8,"Too Short!").required("Required")}),x=()=>{var o,a;const{register:r,handleSubmit:m,formState:{errors:s},reset:l}=p({resolver:g(h)}),n=d=>{console.log(d),l()};return e.jsxs("form",{className:"max-w-md",onSubmit:m(n),children:[e.jsx(i,{...r("email"),error:(o=s.email)==null?void 0:o.message,placeholder:"email",autocomplete:"email"}),e.jsx(i,{...r("password"),type:"password",withPasswordToggled:!0,error:(a=s.password)==null?void 0:a.message,placeholder:"password",autocomplete:"password"}),e.jsx(c,{type:"submit",children:"Send"})]})},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Login Page"}),e.jsx(x,{})]});export{S as default};
