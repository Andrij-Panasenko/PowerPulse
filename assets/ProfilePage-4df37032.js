import{u as n,s,m as H,S as q,f as M,r as g,V as R,W as T,j as e,X as O,Y as I,Z as P,$ as Y}from"./index-0cc6453b.js";import{U as G,a as _,C as N,I as X,b as Z,c as J,d as K,e as Q,L as ee,f as S,D as L,g as U,h as E,i as ie,T as te,j as re,k as ne}from"./UserCard.Styled-5c28a36c.js";import{u as ae}from"./formik.esm-29aff15c.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const se=n.form`
  background-color: inherit;

  @media screen and (min-width: 320px) {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    lign-items: flex-start;

    width: 60%;
  }
`,de=n.input`
  background-color: inherit;
  color: #efede8;
  padding: 0;
  outline: none !important;
  display: block;
  width: 341px;
  height: 52px;
  border-radius: 12px;
  padding: 14px, 216px, 14px, 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-color: rgba(239, 237, 232, 0.3);
  text-indent: 14px;
  &:hover {
    border-color: #e6533c;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${t=>t.theme.colors.white};
    opacity: 30%;
  }
`,D=n(de)`
  ${({error:t})=>t&&"border-color: red;"}
  ${({success:t})=>t&&"border-color: green;"}
`,le=n.input`
  background-color: inherit;

  display: block;
  border-radius: 12px;
  padding: 14px, 216px, 14px, 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-color: rgba(239, 237, 232, 0.3);

  color: #efede8;
  text-indent: 14px;

  width: 159px;
  height: 52px;

  &:focus {
    border: 1px solid #e6533c;
  }
  &:hover {
    border-color: #e6533c;
  }

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    height: 46px;
    width: 100%;
  }
  @media screen and (min-width: 375px) {
    width: 160px;
    height: 46px;
  }

  @media screen and (min-width: 1440px) {
    width: 168px;
    height: 52px;
  }
`,y=n(le)`
  ${({error:t})=>t&&"border-color: red;"}
  ${({success:t})=>t&&"border-color: green;"}
`,c=n.label`
  font-size: 14px;
  line-height: 18px;
  background-color: inherit;
  color: rgba(239, 237, 232, 0.5);
  margin-bottom: 8px;

  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
  }
`,V=n.ul`
  background-color: inherit;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    // width: calc(50% - 10px);
    width: 40%;

    gap: 4px;
  }
`,oe=n.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,l=n.li`
  background-color: inherit;
  display: flex;

  &:checked {
    background-color: #e6533c;
  }
  margin-right: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex: 1;
    margin-right: 0;
  }

  position: relative;
`,he=n(c)`
  @media screen and (min-width: 320px) {
    margin-right: auto;
  }
`,ce=n.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    gap: 70px;
    margin-top: 8px;

    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`,xe=n.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 14px;
  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column;
    gap: 14px;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  @media screen and (min-width: 375px) {
    flex-direction: column;
    gap: 14px;
    justify-content: center;
    align-items: center;
    margin-left: 

    width: 100%;
  }

  @media screen and (min-width:768px){
    flex-direction:row;
  }

  @media screen and (min-width:1440px){
    align-items: flex-start;
  gap:14px;
 
  margin-bottom: 14px;
  margin-right:auto;
  
  }
`,$=n.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`,ge=n.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;

  @media screen (min-width: 768px) {
    flex-direction: row;

    flex-wrap: wrap;
    gap: 14px;

    margin-left: 0;
    margin-right: 0;
  }
  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 20px;
    margin-left: 20px;

    width: 100%;
  }
  @media screen and (min-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 20px;

    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`,C=n.div`
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: calc(50% - 7px);
  }
`,pe=n.button`
  background: #e6533c;
  border: none;
  color: rgba(239, 237, 232, 0.6);
  border-radius: 12px;

  width: 144px;
  height: 56px;
  &:disabled {
    cursor: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 115px;
    height: 42px;
    margin-bottom: 44px;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
  }
`,a=n.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 16px;
  line-height: 24px;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid #636366;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;

    @media screen and (min-width: 320px) {
      font-size: 14px;
      line-height: 18px;

      &::before {
        width: 18px;
        height: 18px;
      }
    }
  }
`,o=n.input`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:not(:disabled):active + ${a}::before {
    background-color: #ef8964;
    background-size: 50%;
    border-color: #ef8964;
  }

  &:focus + ${a}::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    stroke: #ef8964;
  }

  &:focus:not(:checked) + ${a}::before {
    // content: '';
    // background-image: url(${s+"#icon-1"});

    border: 1px solid #dddddd;
    background-color: #ffffff;
  }

  &:checked + ${a}::before {
    border-color: #ef8964;
    background-color: #ef8964;
    // background-size: 50%;
    // content: '';
    // background-image: url(${s+"#icon-1"});
  }

  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }
`,z=n.div`
  display: flex;
  gap: 4px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 18px;
  color: #d80027;
`,B=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 18px;
  color: #3cbf61;
`,me=(t,d)=>{const i={};return t.name||(i.name="Name is required!"),t.height?t.height<150&&(i.height="Height should be min.150cm"):i.height="Height is required",t.currentWeight?t.currentWeight<35&&(i.currentWeight="Min 35kg Weight required"):i.currentWeight="Current weight is required",t.desiredWeight?t.desiredWeight<35&&(i.currentWeight="Min 35kg Weight required"):i.desiredWeight="Desired weight is required",i},ue=()=>{var p,m,u,v,b,j,x,f,w,k,F;const t=H(q),d=M();g.useEffect(()=>{d(R())},[]);const i=ae({initialValues:{name:t.name||"",email:t.email?t.email:"",height:t.height?t.height:"",currentWeight:t.currentWeight?t.currentWeight:"",desiredWeight:t.desiredWeight?t.desiredWeight:"",birthday:t.birthday?t.birthday:"",blood:t.blood?t.blood:null,sex:t.sex?t.sex:"",levelActivity:t.levelActivity?t.levelActivity:null},validate:me,onSubmit:r=>{delete r.email,d(T({values:r}))}});g.useEffect(()=>{t.name!==""&&i.setFormikState(r=>{var A;return{...r,values:{name:t.name,email:t.email,height:t.height,currentWeight:t.currentWeight,desiredWeight:t.desiredWeight,birthday:((A=t.birthday)==null?void 0:A.slice(0,10))||"",blood:t.blood,sex:t.sex,levelActivity:t.levelActivity}}})},[t]);const h=r=>{if(i.errors[r])return e.jsxs(z,{children:[e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{href:s+"#icon-checkbox-circle-fill"})}),i.errors[r]]});if(!i.errors[r]&&i.values[r]>0)return e.jsxs(B,{children:[e.jsx("svg",{width:"18px",height:"18px",children:e.jsx("use",{href:s+"#icon-checkbox-circle-fillGreen"})}),"Success"]})},W=r=>{if(i.errors[r])return e.jsxs(z,{children:[e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{href:s+"#icon-checkbox-circle-fill"})}),i.errors[r]]});if(!i.errors[r]&&i.values[r].length!==0)return e.jsxs(B,{children:[e.jsx("svg",{width:"18px",height:"18px",children:e.jsx("use",{href:s+"#icon-checkbox-circle-fillGreen"})}),"Success"]})};return e.jsxs(se,{onSubmit:i.handleSubmit,children:[e.jsxs(xe,{children:[e.jsxs($,{children:[e.jsx(c,{htmlFor:"name",children:"Name"}),e.jsx(D,{placeholder:"User name",id:"name",name:"name",type:"text",onChange:i.handleChange,value:i.values.name,success:!((p=i==null?void 0:i.errors)!=null&&p.name)&&((u=(m=i==null?void 0:i.values)==null?void 0:m.name)==null?void 0:u.length)!==0,error:(v=i==null?void 0:i.errors)==null?void 0:v.name}),W("name")]}),e.jsxs($,{children:[e.jsx(c,{htmlFor:"email",children:"Email"}),e.jsx(D,{placeholder:"Email",id:"email",name:"email",type:"text",onChange:i.handleChange,value:t.email,success:!((b=i==null?void 0:i.errors)!=null&&b.email)&&((j=i==null?void 0:i.values)==null?void 0:j.email)!==0,error:(x=i==null?void 0:i.errors)==null?void 0:x.email}),h("email")]})]}),e.jsxs(ge,{children:[e.jsxs(C,{children:[e.jsx(c,{htmlFor:"height",children:"Height"}),e.jsx(y,{id:"height",name:"height",type:"number",onChange:i.handleChange,value:i.values.height,success:!i.errors.height&&i.values.height!==void 0&&i.values.height!==null&&i.values.height>0?i.values.height:void 0,error:i.errors.height}),h("height")]}),e.jsxs(C,{children:[e.jsx(c,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(y,{id:"currentWeight",name:"currentWeight",type:"number",onChange:i.handleChange,value:i.values.currentWeight,success:!i.errors.currentWeight&&i.values.currentWeight>0&&i.values.currentWeight!==void 0&&i.values.currentWeight!==null?i.values.currentWeight:void 0,error:i.errors.currentWeight}),h("currentWeight")]}),e.jsxs(C,{children:[e.jsx(c,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(y,{id:"desiredWeight",name:"desiredWeight",type:"number",onChange:i.handleChange,value:i.values.desiredWeight,success:!((f=i==null?void 0:i.errors)!=null&&f.desiredWeight)&&((w=i==null?void 0:i.values)==null?void 0:w.desiredWeight)>0?(k=i==null?void 0:i.values)==null?void 0:k.desiredWeight:void 0,error:(F=i==null?void 0:i.errors)==null?void 0:F.desiredWeight}),h("desiredWeight")]}),e.jsxs(C,{children:[e.jsx(c,{htmlFor:"dateOfBirth",children:"Date of Birth"}),e.jsx(y,{placeholder:"YYYY-MM-DD",id:"birthday",name:"birthday",type:"string",onChange:i.handleChange,value:i.values.birthday})]})]}),e.jsx(he,{htmlFor:"blood",children:" Blood"}),e.jsxs(ce,{children:[e.jsxs(V,{id:"blood",children:[e.jsxs(l,{children:[e.jsx(o,{name:"blood",value:"1",id:"1",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===1&&!0}),e.jsx(a,{htmlFor:"1",children:"1"})]}),e.jsxs(l,{children:[e.jsx(o,{name:"blood",value:"2",id:"2",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===2&&!0}),e.jsx(a,{htmlFor:"2",children:"2"})]}),e.jsxs(l,{children:[e.jsx(o,{name:"blood",value:"3",id:"3",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===3&&!0}),e.jsx(a,{htmlFor:"3",children:"3"})]}),e.jsxs(l,{children:[e.jsx(o,{name:"blood",value:"4",id:"4",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===4&&!0}),e.jsx(a,{htmlFor:"4",children:"4"})]})]}),e.jsxs(V,{id:"sex",children:[e.jsxs(l,{children:[e.jsx(o,{id:"female",name:"sex",value:"female",type:"radio",onChange:i.handleChange,checked:i.values.sex==="female"&&!0}),e.jsx(a,{htmlFor:"female",children:"Female"})]}),e.jsxs(l,{children:[e.jsx(o,{type:"radio",id:"male",name:"sex",value:"male",onChange:i.handleChange,checked:i.values.sex==="male"&&!0}),e.jsx(a,{htmlFor:"male",children:"Male"})]})]})]}),e.jsxs(oe,{id:"levelActivity",children:[e.jsxs(l,{children:[e.jsx(o,{id:"Sedentary",name:"levelActivity",value:"1",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===1&&!0}),e.jsx(a,{htmlFor:"Sedentary",children:"Sedentary lifestyle (little or no physical activity)"})]}),e.jsxs(l,{children:[e.jsx(o,{id:"Light",name:"levelActivity",value:"2",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===2&&!0}),e.jsx(a,{htmlFor:"Light",children:"Light activity (light exercises/sports 1-3 days per week)"})]}),e.jsxs(l,{children:[e.jsx(o,{id:"Moderately",name:"levelActivity",value:"3",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===3&&!0}),e.jsx(a,{htmlFor:"Moderately",children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]}),e.jsxs(l,{children:[e.jsx(o,{id:"VeryActive",name:"levelActivity",value:"4",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===4&&!0}),e.jsx(a,{htmlFor:"VeryActive",children:"Very active (intense exercises/sports 6-7 days per week)"})]}),e.jsxs(l,{children:[e.jsx(o,{id:"ExtremelyActive",name:"levelActivity",value:"5",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===5&&!0}),e.jsx(a,{htmlFor:"ExtremelyActive",children:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),e.jsx(pe,{type:"submit",disabled:!i.isValid,children:"Save"}),e.jsx("div",{children:e.jsx(O,{})})]})},ve=()=>{const t=M(),d=H(q),[i,h]=g.useState(),[W,p]=g.useState();g.useEffect(()=>{h(d.avatar)},[d.avatar]),g.useEffect(()=>{p(d.bmr)},[d.bmr]);const m=e.jsx(G,{src:d.avatar||i,alt:"User avatar"}),u=e.jsx("svg",{width:"102px",height:"102px",fill:"#EFEDE8",children:e.jsx("use",{xlinkHref:s+"#icon-user"})}),v=j=>{const x=j.target.files[0];if(!x)return;const f=URL.createObjectURL(x);h(f);try{t(P(x))}catch(w){console.log("Ooops, something went wrong. Try again",w)}},b=()=>{t(Y())};return console.log(d.bmr),e.jsxs(_,{children:[e.jsxs(N,{children:[e.jsx(X,{children:i?m:u}),e.jsxs(Z,{htmlFor:"avatar",children:[e.jsx(J,{id:"avatar",name:"avatar",type:"file",onChange:v}),e.jsx("svg",{width:"20px",height:"20px",fill:"#E6533C",children:e.jsx("use",{xlinkHref:s+"#icon-check-mark-4"})})]}),e.jsx(K,{children:d.name}),e.jsx(Q,{children:"User"})]}),e.jsxs(ee,{children:[e.jsxs(S,{children:[e.jsxs(L,{children:[e.jsx("svg",{width:"20px",height:"20px",fill:"tomato",children:e.jsx("use",{xlinkHref:s+"#icon-fluent_food-24-filled"})}),e.jsx(U,{children:"Daily calorie intake"})]}),e.jsx(E,{children:W||0})]}),e.jsxs(S,{children:[e.jsxs(L,{children:[e.jsx("svg",{width:"20px",height:"20px",fill:"tomato",children:e.jsx("use",{xlinkHref:s+"#icon-dumbbell"})}),e.jsx(U,{children:"Daily physical activity"})]}),e.jsx(E,{children:"110 mins"})]})]}),e.jsxs(ie,{children:[e.jsx("svg",{width:"34px",height:"34px",style:{width:"34px",height:"34px"},children:e.jsx("use",{xlinkHref:s+"#icon-icons"})}),e.jsx(te,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(re,{onClick:b,children:[e.jsx(I,{as:I,children:"Logout"}),e.jsx("svg",{width:"20px",height:"20px",stroke:"#E6533C",children:e.jsx("use",{xlinkHref:s+"#icon-logout"})})]})]})},be=n.div`
  display: flex;

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 320px) {
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
  //tablet

  @media screen and (min-width: 764px) and (max-width: 1439px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{titleName:"Profile Settings"}),e.jsxs(be,{children:[e.jsx(ue,{}),e.jsx(ve,{})]})]});export{Ce as default};
