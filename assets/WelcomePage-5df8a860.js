import{u as n,j as i,s as r,N as o,h as t,a,b as s,c as d,d as p,e as x}from"./index-b40a7282.js";import{C as h}from"./Welcome.styled-bf3f022d.js";import{M as g}from"./MainPageInfo-1b3a4b76.js";const c=n.h1`
  position: relative;
  font-weight: 500;
  font-size: 38px;
  line-height: 105%;
  letter-spacing: 0.01em;
  width: 335px; //or max-width

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 111%;
    width: 598px;

    margin-bottom: 64px;
  }
`,m=n.svg`
  position: absolute;
  z-index: -1000;
  top: 43px;
  left: -9px;
  width: 98px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: -16px;
  }
`,l=()=>i.jsx(i.Fragment,{children:i.jsxs(c,{children:["Transforming your body shape with Power Pulse",i.jsx(m,{children:i.jsx("use",{xlinkHref:r+"#icon-Line"})})]})}),u=n.nav`
  display: flex;
  gap: 14px;

  margin-bottom: 229.64px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 170px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,b=n(o)`
  border-radius: 12px;
  padding: 12px 40px;
  display: block;
  height: 100%;
  background-color: ${e=>e.theme.colors.orange};
  color: ${e=>e.theme.colors.white};

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: background-color ${e=>e.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${e=>e.theme.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }
`,w=n(o)`
  border: 1px solid ${e=>e.theme.colors.grey};
  color: ${e=>e.theme.colors.white};

  background-color: transparent;
  display: block;
  border-radius: 12px;
  padding: 12px 40px;
  height: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: border-color ${e=>e.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    border-color: ${e=>e.theme.colors.orange};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }
`,f=()=>i.jsx(i.Fragment,{children:i.jsxs(u,{children:[i.jsx(b,{to:"/register",children:"Sign Up"}),i.jsx(w,{to:"/login",children:"Sign In"})]})}),j=n.div`
  background-image: url(${t});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 298px 571px;
  /* padding-top: 127px; */

  margin: 0 auto;

  max-width: 375px;
  margin-right: -20px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${a});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${s});

    max-width: 768px;
    background-size: 437px 893px;
    /* padding-top: 189px; */
    margin-right: -32px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${p});

    background-size: 670px 800px;

    max-width: 1440px;

    /* padding-top: 200px; */
    margin-right: -96px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${x});
    }
  }
`,k=({children:e})=>i.jsx(i.Fragment,{children:i.jsx(j,{children:e})}),$=()=>i.jsx(i.Fragment,{children:i.jsx(k,{children:i.jsxs(h,{children:[i.jsxs("div",{children:[i.jsx(l,{}),i.jsx(f,{})]}),i.jsx(g,{})]})})});function F(){return i.jsx(i.Fragment,{children:i.jsx($,{})})}export{F as default};
