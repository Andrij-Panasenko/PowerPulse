import{u as t,j as e,s as a,N as L,f as y,m as g,r as h,n as M,o as F,S as $,p as I,q as H,t as N,v as R,w as z,x as E,y as O}from"./index-0cc6453b.js";import{i as A}from"./emotion-is-prop-valid.esm-92713258.js";const V=t.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    overflow-y: auto;
    max-height: 500px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: ${i=>i.theme.colors.orangeLight};
      height: 153px; 
    }
  }

  @media screen and (min-width: 1440px) {
    width: 845px;
  }
`,Y=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.36;
  z-index: 999;
`,q=t.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`,G=t.div`
  position: relative;
  margin: 20px;
  padding: 48px 24px;
  width: 335px;
  height: 280px;
  max-width: 600px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f;
  pad: 40px 20px 20px 20px;
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: 768px) {
    width: 479px;
    height: 286px;
    padding: 48px 32px;
  }
`,Q=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  width: 287px;
  height: 84px;

  @media screen and (min-width: 768px) {
    width: 415px;
    height: 40px;
    flex-direction: row;
  }
`,U=t.input`
  background: #10100f;
  border: 1px solid #e6533c;
  outline: transparent;
  border-radius: 12px;
  padding: 8px 14px 8px 14px;
  width: 287px;
  height: 34px;

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
`,_=t.input`
  background: #10100f;
  color: #efede8;
  border: 1px solid #e6533c;
  outline: transparent;
  border-radius: 12px;
  padding: 8px 14px 8px 14px;
  width: 287px;
  height: 34px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    text-align: right;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,J=t.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 65px;
  height: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,K=t.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
`,X=t.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,Z=t.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  width: 286px;
  height: 42px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    width: 309px;
    height: 52px;
  }
`,ee=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  background: #e6533c;
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 32px;
  width: 151px;
  height: 42px;

  &:hover {
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
    height: 52px;
  }
`,te=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  background: #10100f;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 12px 32px;
  width: 121px;
  height: 42px;

  &:hover {
    border-color: #e6533c;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    width: 142px;
    height: 52px;
  }
`,ie=t.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,ne=({isOpen:i,onClose:n,children:d})=>{const r=o=>{o.target===o.currentTarget&&n()};return e.jsx(e.Fragment,{children:i&&e.jsx(Y,{children:e.jsx(q,{onClick:r,children:e.jsxs(G,{children:[e.jsx(ie,{onClick:()=>n(),children:e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{xlinkHref:a+"#icon-close"})})}),d]})})})})},oe=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.36;
  z-index: 999;
`,re=t.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`,se=t.div`
  position: relative;
  margin: 20px;

  padding: 48px 89px;
  width: 335px;
  height: 362px;
  max-width: 600px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f;

  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: 768px) {
    padding: 64px 136px;
    width: 430px;
    height: 428px;
  }
`,de=t.div`
  background-color: inherit;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 123px;
  height: 84px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ae=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 66px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 109px;
    margin-bottom: 32px;
  }
`,pe=t.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #efede8;
`,xe=t.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 79px;
  height: 18px;
  margin-bottom: 24px;
`,ce=t.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.3);
`,he=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #e6533c;
`,le=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  color: #efede8;
  border-radius: 12px;
  border: none;
  width: 157px;
  height: 42px;
  background: #e6533c;
  margin-bottom: 16px;

  &:hover {
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
    height: 52px;
  }
`,ge=t(L)`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.3);
  border: none;
  background-color: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 18px;

  &:hover {
    color: #efede8;
  }
`,me=t.svg``,ue=t.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`,fe=({isOpen:i,onClose:n,children:d})=>{const r=o=>{o.target===o.currentTarget&&n()};return e.jsx(e.Fragment,{children:i&&e.jsx(oe,{children:e.jsx(re,{onClick:r,children:e.jsxs(se,{children:[e.jsx(ue,{onClick:()=>n(),children:e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{xlinkHref:a+"#icon-close"})})}),d]})})})})},we=t.li`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 141px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,be=t.div`
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
`,je=t.h3`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
`,ve=t.div`
  margin-left: auto;
  margin-top: -20px;
  margin-bottom: 41px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 200px;
  height: 18px;
`,ke=t.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    border-radius: 10px;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    background: ${i=>i.isRecommended?"#e9101d":"#419b09"};
  }
`,ye=t.button`
  margin-left: 16px;
  display: flex;
  gap: 8px;
  padding: 0;
  width: 49px;
  height: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #e6533c;
  background-color: rgba(255, 255, 255, 0);
  border: none;
`,Ce=t.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,ze=t.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #efede8;
  max-width: 258px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;

  @media screen and (min-width: 1440px) {
    max-width: 333px;
  }
`,Pe=t.ul`
  display: flex;
  gap: 16px;
  align-self: flex-end;
  margin-top: 8px;
`,j=t.li`
  display: flex;
  align-items: center;
  gap: 4px;
`,v=t.h4`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
  margin: 0;
`,k=t.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
  margin: 0;
  max-width: 76px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 1440px) {
    max-width: 130px;
  }
`,De="/PowerPulse/assets/avocado-img-46dd5bc9.png",Ie=({value:{calories:i,category:n,title:d,weight:r,groupBloodNotAllowed:o,_id:p},blood:x})=>{const u=y(),f=g(b=>b.diary.initialDate),[s,c]=h.useState(!1),[B,m]=h.useState(!1),[C,S]=h.useState(0),w=C*i/100,W=()=>{m(!1)},T={productId:p,date:f,amount:Number(C),calories:Number(w)};return e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:[e.jsx(be,{children:e.jsx(je,{children:"Diet"})}),e.jsxs(ve,{children:[e.jsx(M,{shouldForwardProp:A,children:e.jsx(ke,{isRecommended:o[x],children:o[x]?"Not Recommended":"Recommended"})}),e.jsxs(ye,{onClick:()=>c(!0),children:["Add",e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{xlinkHref:a+"#icon-red-raw"})})]})]}),e.jsxs(Ce,{children:[e.jsx(me,{width:"24px",height:"24px",children:e.jsx("use",{xlinkHref:a+"#icon-running-man"})}),e.jsx(ze,{children:d})]}),e.jsxs(Pe,{children:[e.jsxs(j,{children:[e.jsx(v,{children:"Calories:"}),e.jsxs(k,{children:[" ",i]})]}),e.jsxs(j,{children:[e.jsx(v,{children:"Category: "}),e.jsx(k,{children:n})]}),e.jsxs(j,{children:[e.jsx(v,{children:"Weight: "}),e.jsx(k,{children:r})]})]})]}),e.jsxs(ne,{isOpen:s,onClose:()=>c(!1),children:[e.jsxs(Q,{children:[e.jsx(U,{type:"text",placeholder:d,readOnly:!0}),e.jsx(_,{type:"number",placeholder:"grams",onChange:b=>S(b.target.value)})]}),e.jsxs(J,{children:[e.jsx(K,{children:"Calories:"}),e.jsx(X,{children:w})]}),e.jsxs(Z,{children:[e.jsx(ee,{onClick:()=>{u(F(T)),c(!1),m(!0)},children:"Add to diary"}),e.jsx(te,{onClick:()=>c(!1),children:"Cancel"})]})]}),e.jsxs(fe,{isOpen:B,onClose:()=>m(!1),children:[e.jsx(de,{children:e.jsx("img",{src:De,alt:"avocado"})}),e.jsxs("div",{children:[e.jsxs(ae,{children:[e.jsx(pe,{children:"Well done"}),e.jsxs(xe,{children:[e.jsx(ce,{children:"Calories:"}),e.jsx(he,{children:w})]})]}),e.jsx(le,{onClick:()=>m(!1),children:"Next product"}),e.jsxs(ge,{to:"/diary",onClick:W,children:["To the diary",e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{xlinkHref:a+"#icon-gray-arrow"})})]})]})]})]})},Be=i=>i.products.isLoading,Se=i=>i.products.categoriesList,We=i=>i.products.cards,Te=t.div`
  margin-top: 24px;
  width: 100%;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    max-width: 580px;
  }
`,Le=t.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${i=>i.theme.colors.grey};
  margin-bottom: 16px;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  & > span {
    color: ${i=>i.theme.colors.orange};
  }
`,Me=t.span`
  color: ${i=>i.theme.colors.orange};
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Fe=()=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsxs(Le,{children:[e.jsx("span",{children:"Sorry, no results were found  "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(Me,{children:"Try changing the search parameters."})]})}),$e=()=>{const i=y(),n=g(Be),d=g($).blood;h.useEffect(()=>{i(I())},[i]);const r=g(We);return e.jsxs(e.Fragment,{children:[n&&e.jsx(H,{}),!n&&e.jsxs(V,{children:[r.map(o=>e.jsx(Ie,{value:o,blood:d},o._id)),r.length===0&&!n&&e.jsx(Fe,{})]})]})},He=t.div``,Ne=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 454px;
  }
`,Re=t.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 137%;
  }

  @media screen and (min-width: 1440px) {
  }
`,Ee=t.div`
  margin-bottom: 40px;
  width: 335px;
  height: 108px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    width: 664px;
    height: 52px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 68px;
    margin-bottom: 28px;
    background-color: rgba(0, 0, 0, 0);
  }
`,Oe=t.div`
  height: 46px;

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }

  @media screen and (min-width: 768px) {
  }
`,Ae=t.svg`
  position: relative;
  z-index: 1;
  float: right;
  bottom: 32px;
  right: 14px;

  @media screen and (min-width: 768px) {
    bottom: 35px;
  }
`,Ve=t.svg`
  position: relative;
  z-index: 2;
  float: right;
  bottom: 32px;
  right: 22px;

  @media screen and (min-width: 768px) {
    bottom: 35px;
  }
`,Ye=t.input`
  background-color: transparent;
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 335px;
  height: 46px;

  &::placeholder {
    color: #efede8;
  }

  &:focus,
  :active {
    border: 1px solid ${i=>i.theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }
`,P=t.div`
  position: relative;
`,qe=t.select`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  background-color: transparent;
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 146px;
  height: 46px;

  cursor: pointer;
  appearance: none;

  @media screen and (min-width: 768px) {
    line-height: 150%;
    width: 192px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: transparent;
  }
`,D=t.svg`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  pointer-events: none;
`,l=t.option`
  background-color: #1c1c1c;
  border-radius: 12px;
  padding: 14px 32px 14px 14px;
  width: 146px;
  height: 228px;
  text-indent: 20px;
  text-transform: capitalize;
`,Ge=t.select`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;

  background-color: transparent;
  outline: none;
  color: #efede8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  height: 46px;

  cursor: pointer;
  appearance: none;

  @media screen and (min-width: 768px) {
    line-height: 150%;
    width: 204px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }
`,Qe=()=>{const i=y(),[n,d]=N(),r=n.get("title")??"",o=n.get("category")??"",p=n.get("recommended")??"",x=(s,c)=>{n.set(s,c),d(n)};h.useEffect(()=>{i(R())},[]),h.useEffect(()=>{i(z(r)),i(E(o)),i(O(p)),i(I({title:r,category:o,recommended:p}))},[i,r,o,p]);const u=g(Se),f=r.trim()!=="";return e.jsxs(Ne,{children:[e.jsx(Re,{children:"Products"}),e.jsxs(Ee,{children:[e.jsxs(Oe,{children:[e.jsx(Ye,{type:"text",placeholder:"Search",value:r,onChange:s=>x("title",s.target.value)}),e.jsx(Ae,{width:"18px",height:"18px",children:e.jsx("use",{xlinkHref:a+"#icon-search"})}),f&&e.jsx(Ve,{width:"18px",height:"18px",onClick:()=>{d({}),i(z(""))},children:e.jsx("use",{xlinkHref:a+"#icon-red-cross"})})]}),e.jsxs(P,{children:[e.jsxs(qe,{value:o,name:"Categories",id:"cat",placeholder:"Categories",onChange:s=>x("category",s.target.value),children:[e.jsx(l,{value:"",defaultValue:!0,children:"Categories"}),u.map(s=>e.jsx(l,{value:s,children:s},s))]}),e.jsx(D,{width:"18px",height:"18px",children:e.jsx("use",{xlinkHref:a+"#icon-chevron-down"})})]}),e.jsxs(P,{children:[e.jsxs(Ge,{value:p,name:"all",id:"all",onChange:s=>x("recommended",s.target.value),children:[e.jsx(l,{value:"",defaultValue:!0,children:"All"}),e.jsx(l,{value:"true",children:"Recommended"}),e.jsx(l,{value:"false",children:"Not recommended"})]}),e.jsx(D,{width:"18px",height:"18px",children:e.jsx("use",{xlinkHref:a+"#icon-chevron-down"})})]})]})]})},Ue="/PowerPulse/assets/bg-products-24a3162a.jpg",_e="/PowerPulse/assets/bg-products@2x-35e40dce.jpg",Je=t.div`
  @media screen and (min-width: 1440px) {
    background-image: url(${Ue});
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: right;

    max-width: 1440px;
    height: 716px;
    margin-right: -96px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${_e});
    }
  }
`,Ke=({children:i})=>e.jsx(e.Fragment,{children:e.jsx(Je,{children:i})}),Xe=()=>e.jsx(Ke,{children:e.jsxs(He,{children:[e.jsx(Qe,{}),e.jsx($e,{})]})}),tt=()=>e.jsx("div",{children:e.jsx(Xe,{})});export{tt as default};
