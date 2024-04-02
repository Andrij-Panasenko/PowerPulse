import{u as n,r as j,f as b,j as e,s as o,l as v,i as y,L as S}from"./index-7f9d4c74.js";import{b as $,F as k,a as z}from"./formik.esm-c6fea360.js";import{c as E,a as d,P as F}from"./PhotoHero-70426d35.js";import{M as I}from"./MainPageInfo-a88482ec.js";import{C as P}from"./Welcome.styled-277bb06b.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const L=n($)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,l=n(k)`
  background-color: transparent;
  color: ${i=>i.theme.colors.white};
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px 14px 14px 14px;
  width: 100%;
  height: 46px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${i=>i.theme.colors.white};
    opacity: 30%;
  }
  transition: border-color ${i=>i.theme.transition};
  &:hover {
    border-color: ${i=>i.theme.colors.orange};
  }
  &.invalid {
    border-color: red;
  }
  &.valid {
    border-color: green;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 365px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
    height: 52px;
  }
`;n.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;const H=n.button`
  width: 130px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid black;
  display: block;
  background-color: ${i=>i.theme.colors.orange};
  color: ${i=>i.theme.colors.white};
  margin-top: 14px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  transition: background-color ${i=>i.theme.transition};
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${i=>i.theme.colors.orangeLight};
  }
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 56px;
    font-size: 20px;
    line-height: 120%;
    margin-top: 40px;
  }
`,M=n.h1`
  // padding-top: 127px;
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${i=>i.theme.colors.white};
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    // padding-top: 189px;
    font-size: 32px;
    line-height: 138%;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    // padding-top: 200px;
  }
`,q=n.h1`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.white};
  opacity: 30%;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 32px;
  }
`,p=n.span`
  font-size: 14px;
  color: red;
  display: flex;
`,c=n.span`
  display: flex;
  font-size: 14px;
  color: green;
`,C=n.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 25%;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=n.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`,x=n.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,T=n.svg`
  width: 21px;
  height: 21px;
`,A=n.svg`
  width: 15px;
  height: 15px;
`,m=n.div`
  margin-top: 1px;
  position: absolute;

  @media screen and (min-width: 768px) {
    margin-top: 2px;
  }
`,G=E().shape({email:d().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email format. Example: ivanov@com.ua").required("Email is required"),password:d().min(6,"Password must be at least 6 characters").required("Password is required")}),R=()=>{const[i,g]=j.useState(!1),a=e.jsx(T,{children:e.jsx("use",{xlinkHref:o+"#icon-checkbox-circle-fillGreen"})}),r=e.jsx(A,{children:e.jsx("use",{xlinkHref:o+"#icon-checkbox-circle-fill"})}),w=b(),{isLoggedIn:f}=y,u=(t,s)=>{w(v(t)),f&&s.resetForm()};return e.jsxs("div",{children:[e.jsx(M,{children:"Sign In"}),e.jsx(q,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(z,{initialValues:{email:"",password:""},validationSchema:G,onSubmit:u,children:({errors:t,touched:s})=>e.jsxs(L,{children:[e.jsxs(x,{children:[e.jsx(l,{name:"email",id:"email",type:"email",placeholder:"Email",className:t.email&&s.email?"invalid":s.email&&!t.email?"valid":""}),s.email&&(t.email||!t.email)&&e.jsxs(m,{children:[t.email&&e.jsxs(p,{children:[r,t.email]}),!t.email&&e.jsxs(c,{children:[a,"Success email"]})]})]}),e.jsxs(x,{children:[e.jsx(l,{name:"password",id:"password",type:i?"text":"password",placeholder:"Password",className:t.password&&s.password?"invalid":s.password&&!t.password?"valid":""}),s.password&&(t.password||!t.password)&&e.jsxs(m,{children:[t.password&&e.jsxs(p,{children:[r,t.password]}),!t.password&&e.jsxs(c,{children:[a,"Success password"]})]}),e.jsx(C,{type:"button",onClick:()=>{g(!i)},children:i?e.jsx(h,{children:e.jsx("use",{xlinkHref:o+"#icon-eye"})}):e.jsx(h,{children:e.jsx("use",{xlinkHref:o+"#icon-eye-off"})})})]}),e.jsx(H,{type:"submit",children:"Sign In"})]})})]})},V=n.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.white};
  opacity: 30%;
`,W=n(S)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.white};
  opacity: 80%;
  text-decoration: underline;
`,B=n.div`
  display: flex;
  margin-top: 12px;
`,D=()=>e.jsx("div",{children:e.jsxs(B,{children:[e.jsx(V,{children:"Don’t have an account?"}),e.jsx(W,{to:"/register",children:" Sign Up"})]})}),N=n.div`
  min-height: 433px;
  @media screen and (min-width: 768px) {
    min-height: 525px;
  }
  @media screen and (min-width: 1440px) {
    min-height: 100px;
    min-width: 598px;
  }
`,O=()=>e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsxs(P,{children:[e.jsxs(N,{children:[e.jsx(R,{}),e.jsx(D,{})]}),e.jsx(I,{})]})})});export{O as default};
