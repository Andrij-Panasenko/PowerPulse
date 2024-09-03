import{u as t,L as f,j as e,r as b,f as j,s as a,g as v}from"./index-b40a7282.js";import{F as k,a as y,b as S}from"./formik.esm-db9aa752.js";import{c as z,a as d,P as $}from"./PhotoHero-94041e97.js";import{M as F}from"./MainPageInfo-1b3a4b76.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const P=t.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
  margin-top: 12px;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    padding-left: 15px;
    margin-bottom: 39px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,q=t(f)`
  text-decoration: underline;
  color: ${i=>i.theme.colors.white};
`,E=()=>e.jsx(e.Fragment,{children:e.jsxs(P,{children:["Already have an account? ",e.jsx(q,{to:"/login",children:"Sign In"})]})}),I=t.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,l=t.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,p=t(k)`
  display: inline-block;
  border: 1px solid ${i=>i.theme.colors.grey};
  border-radius: 12px;
  outline: none;
  padding: 14px;
  width: 100%;
  max-width: 335px;
  height: 46px;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.29;
  color: ${i=>i.theme.colors.white};
  transition: border-color ${i=>i.theme.transition};

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: rgba(239, 237, 232, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &.invalid {
    border-color: #d80027;
  }

  &.valid {
    border-color: #3cbf61;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-text-fill-color: ${i=>i.theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${i=>i.theme.colors.orange};
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    max-width: 364px;
  }
`,L=t.button`
  display: block;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  width: 136px;
  height: 42px;
  background-color: ${i=>i.theme.colors.orange};
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  color: ${i=>i.theme.colors.white};
  margin-top: 28px;
  transition: background-color ${i=>i.theme.transition};

  &:hover,
  &:focus {
    background-color: ${i=>i.theme.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
    margin-top: 64px;
  }
`,c=t.span`
  font-size: 14px;
  color: #d80027;
  display: flex;
  gap: 5px;
`,x=t.span`
  font-size: 14px;
  color: #3cbf61;
  display: flex;
  gap: 5px;
  position: absolute;
  left: -3px;
  width: 150px;
`,m=t.div`
  margin-top: 1px;
  position: absolute;

  @media screen and (min-width: 768px) {
    margin-top: 2px;
  }
`,H=t.svg`
  width: 21px;
  height: 21px;
`,M=t.svg`
  width: 15px;
  height: 15px;
`,N=t.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 25%;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=t.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`,R=z().shape({name:d().required("Name is required"),email:d().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email. Example: expl@com.ua").required("Email is required"),password:d().min(6,"Password must be at least 6 characters").required("Password is required")}),T=()=>{const[i,g]=b.useState(!1),u=j(),w=(n,s)=>{u(v(n)),s.resetForm()},o=e.jsx(H,{children:e.jsx("use",{xlinkHref:a+"#icon-checkbox-circle-fillGreen"})}),r=e.jsx(M,{children:e.jsx("use",{xlinkHref:a+"#icon-checkbox-circle-fill"})});return e.jsx(y,{initialValues:{name:"",email:"",password:""},validationSchema:R,onSubmit:w,children:({errors:n,touched:s})=>e.jsxs(S,{noValidate:!0,children:[e.jsxs(I,{children:[e.jsxs(l,{children:[e.jsx(p,{id:"name",type:"text",name:"name",placeholder:"Name",required:!0,className:n.name&&s.name?"invalid":s.name&&!n.name?"valid":""}),s.name&&(n.name||!n.name)&&e.jsxs(m,{children:[n.name&&e.jsxs(c,{children:[r," ",n.name]}),!n.name&&e.jsxs(x,{children:[o,"Success name"]})]})]}),e.jsxs(l,{children:[e.jsx(p,{id:"email",type:"email",name:"email",placeholder:"Email",required:!0,className:n.email&&s.email?"invalid":s.email&&!n.email?"valid":""}),s.email&&(n.email||!n.email)&&e.jsxs(m,{children:[n.email&&e.jsxs(c,{children:[r,n.email]}),!n.email&&e.jsxs(x,{children:[o,"Success email"]})]})]}),e.jsxs(l,{children:[e.jsx(p,{id:"password",type:i?"text":"password",name:"password",placeholder:"Password",required:!0,className:n.password&&s.password?"invalid":s.password&&!n.password?"valid":""}),e.jsx(N,{type:"button",onClick:()=>{g(!i)},children:i?e.jsx(h,{children:e.jsx("use",{xlinkHref:a+"#icon-eye"})}):e.jsx(h,{children:e.jsx("use",{xlinkHref:a+"#icon-eye-off"})})}),s.password&&(n.password||!n.password)&&e.jsxs(m,{children:[n.password&&e.jsxs(c,{children:[r,n.password]}),!n.password&&e.jsxs(x,{children:[o,"Success password"]})]})]})]}),e.jsx(L,{type:"submit",children:"Sign Up"})]})})},C=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${i=>i.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
  }
`,V=t.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${i=>i.theme.colors.grey};
  margin-top: 14px;
  margin-bottom: 28px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
    margin-bottom: 32px;
    max-width: 496px;
  }
`,A=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{children:"Sign Up"}),e.jsx(V,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),U=t.div`
  padding-top: 127px;
  padding-bottom: 40px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
    padding-bottom: 48px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 178px;
    padding-top: 200px;
    padding-bottom: 114px;
  }
`,J=()=>e.jsx($,{children:e.jsxs(U,{children:[e.jsxs("div",{children:[e.jsx(A,{}),e.jsx(T,{}),e.jsx(E,{})]}),e.jsx(F,{})]})});export{J as default};
