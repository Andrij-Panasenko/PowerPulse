import{u as a,s as o,V as T,m as q,S as M,f as R,r as g,W as O,X as P,j as e,Y,Z as S,$ as G,a0 as N}from"./index-b40a7282.js";import{U as _,a as X,C as Z,I as J,b as K,c as Q,d as ee,e as ie,L as te,f as L,D as U,g as E,h as D,i as re,T as ne,j as ae,k as se}from"./UserCard.Styled-4a64617d.js";import{u as de}from"./formik.esm-db9aa752.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const le=a.form`
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
`,oe=a.input`
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
    color: ${n=>n.theme.colors.white};
    opacity: 30%;
  }
`,V=a(oe)`
  ${({error:n})=>n&&"border-color: red;"}
  ${({success:n})=>n&&"border-color: green;"}
`,he=a.input`
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
`,w=a(he)`
  ${({error:n})=>n&&"border-color: red;"}
  ${({success:n})=>n&&"border-color: green;"}
`,h=a.label`
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
`,$=a.ul`
  background-color: inherit;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    // width: calc(50% - 10px);
    width: 40%;

    gap: 4px;
  }
`,ce=a.ul`
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
`,d=a.li`
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
`,xe=a(h)`
  @media screen and (min-width: 320px) {
    margin-right: auto;
  }
`,ge=a.div`
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
`,pe=a.div`
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
    /* margin-left:  */

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
`,z=a.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`,me=a.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
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
`,C=a.div`
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: calc(50% - 7px);
  }
`,ue=a.button`
  background: #e6533c;
  border: none;
  color: rgba(239, 237, 232);
  border-radius: 12px;

  width: 144px;
  height: 56px;
  &:disabled {
    cursor: auto;
    color: rgba(239, 237, 232, 0.6);
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
`,s=a.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 16px;
  line-height: 24px;

  &::before {
    content: '';
    cursor: pointer;
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
`,l=a.input`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:not(:disabled):active + ${s}::before {
    background-color: #ef8964;
    background-size: 50%;
    border-color: #ef8964;
  }

  &:focus + ${s}::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    stroke: #ef8964;
  }

  &:focus:not(:checked) + ${s}::before {
    // content: '';
    // background-image: url(${o+"#icon-1"});

    border: 1px solid #dddddd;
    background-color: #ffffff;
  }

  &:checked + ${s}::before {
    border-color: #ef8964;
    background-color: #ef8964;
  }

  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }
`,B=a.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
  line-height: 18px;
  color: #d80027;

  position: absolute;
`,H=a.div`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 4px;
  /* padding-left: 10px; */
  font-size: 12px;
  line-height: 18px;
  color: #3cbf61;
`,ve=n=>{const t={};return n.name||(t.name="Name is required!"),n.height?n.height<150&&(t.height="Height should be min.150cm"):t.height="Height is required",n.currentWeight?n.currentWeight<35&&(t.currentWeight="Min 35kg Weight required"):t.currentWeight="Current weight is required",n.desiredWeight?n.desiredWeight<35&&(t.currentWeight="Min 35kg Weight required"):t.desiredWeight="Desired weight is required",t},be=()=>{var m,u,v,b,j,x,f,y,k,F,A;const n=T(),t=q(M),p=R();g.useEffect(()=>{p(O())},[]);const i=de({initialValues:{name:t.name||"",email:t.email?t.email:"",height:t.height?t.height:"",currentWeight:t.currentWeight?t.currentWeight:"",desiredWeight:t.desiredWeight?t.desiredWeight:"",birthday:t.birthday?t.birthday:"",blood:t.blood?t.blood:null,sex:t.sex?t.sex:"",levelActivity:t.levelActivity?t.levelActivity:null},validate:ve,onSubmit:r=>{delete r.email,p(P({values:r})),n("/diary")}});g.useEffect(()=>{t.name!==""&&i.setFormikState(r=>{var I;return{...r,values:{name:t.name,email:t.email,height:t.height,currentWeight:t.currentWeight,desiredWeight:t.desiredWeight,birthday:((I=t.birthday)==null?void 0:I.slice(0,10))||"",blood:t.blood,sex:t.sex,levelActivity:t.levelActivity}}})},[t]);const c=r=>{if(i.errors[r])return e.jsxs(B,{children:[e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fill"})}),i.errors[r]]});if(!i.errors[r]&&i.values[r]>0)return e.jsxs(H,{children:[e.jsx("svg",{width:"18px",height:"18px",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fillGreen"})}),"Success"]})},W=r=>{if(i.errors[r])return e.jsxs(B,{children:[e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fill"})}),i.errors[r]]});if(!i.errors[r]&&i.values[r].length!==0)return e.jsxs(H,{children:[e.jsx("svg",{width:"18px",height:"18px",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fillGreen"})}),"Success"]})};return e.jsxs(le,{onSubmit:i.handleSubmit,children:[e.jsxs(pe,{children:[e.jsxs(z,{children:[e.jsx(h,{htmlFor:"name",children:"Name"}),e.jsx(V,{placeholder:"User name",id:"name",name:"name",type:"text",onChange:i.handleChange,value:i.values.name,success:!((m=i==null?void 0:i.errors)!=null&&m.name)&&((v=(u=i==null?void 0:i.values)==null?void 0:u.name)==null?void 0:v.length)!==0,error:(b=i==null?void 0:i.errors)==null?void 0:b.name}),W("name")]}),e.jsxs(z,{children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(V,{placeholder:"Email",id:"email",name:"email",type:"text",onChange:i.handleChange,value:t.email,success:!((j=i==null?void 0:i.errors)!=null&&j.email)&&((x=i==null?void 0:i.values)==null?void 0:x.email)!==0,error:(f=i==null?void 0:i.errors)==null?void 0:f.email}),c("email")]})]}),e.jsxs(me,{children:[e.jsxs(C,{children:[e.jsx(h,{htmlFor:"height",children:"Height"}),e.jsx(w,{id:"height",name:"height",type:"number",onChange:i.handleChange,value:i.values.height,success:!i.errors.height&&i.values.height!==void 0&&i.values.height!==null&&i.values.height>0?i.values.height:void 0,error:i.errors.height}),c("height")]}),e.jsxs(C,{children:[e.jsx(h,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(w,{id:"currentWeight",name:"currentWeight",type:"number",onChange:i.handleChange,value:i.values.currentWeight,success:!i.errors.currentWeight&&i.values.currentWeight>0&&i.values.currentWeight!==void 0&&i.values.currentWeight!==null?i.values.currentWeight:void 0,error:i.errors.currentWeight}),c("currentWeight")]}),e.jsxs(C,{children:[e.jsx(h,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(w,{id:"desiredWeight",name:"desiredWeight",type:"number",onChange:i.handleChange,value:i.values.desiredWeight,success:!((y=i==null?void 0:i.errors)!=null&&y.desiredWeight)&&((k=i==null?void 0:i.values)==null?void 0:k.desiredWeight)>0?(F=i==null?void 0:i.values)==null?void 0:F.desiredWeight:void 0,error:(A=i==null?void 0:i.errors)==null?void 0:A.desiredWeight}),c("desiredWeight")]}),e.jsxs(C,{children:[e.jsx(h,{htmlFor:"dateOfBirth",children:"Date of Birth"}),e.jsx(w,{placeholder:"YYYY-MM-DD",id:"birthday",name:"birthday",type:"string",onChange:i.handleChange,value:i.values.birthday})]})]}),e.jsx(xe,{htmlFor:"blood",children:" Blood"}),e.jsxs(ge,{children:[e.jsxs($,{id:"blood",children:[e.jsxs(d,{children:[e.jsx(l,{name:"blood",value:"1",id:"1",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===1&&!0}),e.jsx(s,{htmlFor:"1",children:"1"})]}),e.jsxs(d,{children:[e.jsx(l,{name:"blood",value:"2",id:"2",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===2&&!0}),e.jsx(s,{htmlFor:"2",children:"2"})]}),e.jsxs(d,{children:[e.jsx(l,{name:"blood",value:"3",id:"3",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===3&&!0}),e.jsx(s,{htmlFor:"3",children:"3"})]}),e.jsxs(d,{children:[e.jsx(l,{name:"blood",value:"4",id:"4",type:"radio",onChange:r=>i.setFieldValue("blood",parseInt(r.target.value)),checked:i.values.blood===4&&!0}),e.jsx(s,{htmlFor:"4",children:"4"})]})]}),e.jsxs($,{id:"sex",children:[e.jsxs(d,{children:[e.jsx(l,{id:"female",name:"sex",value:"female",type:"radio",onChange:i.handleChange,checked:i.values.sex==="female"&&!0}),e.jsx(s,{htmlFor:"female",children:"Female"})]}),e.jsxs(d,{children:[e.jsx(l,{type:"radio",id:"male",name:"sex",value:"male",onChange:i.handleChange,checked:i.values.sex==="male"&&!0}),e.jsx(s,{htmlFor:"male",children:"Male"})]})]})]}),e.jsxs(ce,{id:"levelActivity",children:[e.jsxs(d,{children:[e.jsx(l,{id:"Sedentary",name:"levelActivity",value:"1",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===1&&!0}),e.jsx(s,{htmlFor:"Sedentary",children:"Sedentary lifestyle (little or no physical activity)"})]}),e.jsxs(d,{children:[e.jsx(l,{id:"Light",name:"levelActivity",value:"2",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===2&&!0}),e.jsx(s,{htmlFor:"Light",children:"Light activity (light exercises/sports 1-3 days per week)"})]}),e.jsxs(d,{children:[e.jsx(l,{id:"Moderately",name:"levelActivity",value:"3",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===3&&!0}),e.jsx(s,{htmlFor:"Moderately",children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]}),e.jsxs(d,{children:[e.jsx(l,{id:"VeryActive",name:"levelActivity",value:"4",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===4&&!0}),e.jsx(s,{htmlFor:"VeryActive",children:"Very active (intense exercises/sports 6-7 days per week)"})]}),e.jsxs(d,{children:[e.jsx(l,{id:"ExtremelyActive",name:"levelActivity",value:"5",type:"radio",onChange:r=>i.setFieldValue("levelActivity",parseInt(r.target.value)),checked:i.values.levelActivity===5&&!0}),e.jsx(s,{htmlFor:"ExtremelyActive",children:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),e.jsx(ue,{type:"submit",disabled:!i.isValid,children:"Save"}),e.jsx("div",{children:e.jsx(Y,{})})]})},je=()=>{const n=R(),t=q(M),[p,i]=g.useState(),[c,W]=g.useState();g.useEffect(()=>{i(t.avatar)},[t.avatar]),g.useEffect(()=>{W(t.bmr)},[t.bmr]);const m=e.jsx(_,{src:t.avatar||p,alt:"User avatar"}),u=e.jsx("svg",{width:"102px",height:"102px",fill:"#EFEDE8",children:e.jsx("use",{xlinkHref:o+"#icon-user"})}),v=j=>{const x=j.target.files[0];if(!x)return;const f=URL.createObjectURL(x);i(f);try{n(G(x))}catch(y){console.log("Ooops, something went wrong. Try again",y)}},b=()=>{n(N())};return e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(J,{children:p?m:u}),e.jsxs(K,{htmlFor:"avatar",children:[e.jsx(Q,{id:"avatar",name:"avatar",type:"file",onChange:v}),e.jsx("svg",{width:"20px",height:"20px",fill:"#E6533C",children:e.jsx("use",{xlinkHref:o+"#icon-check-mark-4"})})]}),e.jsx(ee,{children:t.name}),e.jsx(ie,{children:"User"})]}),e.jsxs(te,{children:[e.jsxs(L,{children:[e.jsxs(U,{children:[e.jsx("svg",{width:"20px",height:"20px",fill:"tomato",children:e.jsx("use",{xlinkHref:o+"#icon-fluent_food-24-filled"})}),e.jsx(E,{children:"Daily calorie intake"})]}),e.jsx(D,{children:c||0})]}),e.jsxs(L,{children:[e.jsxs(U,{children:[e.jsx("svg",{width:"20px",height:"20px",fill:"tomato",children:e.jsx("use",{xlinkHref:o+"#icon-dumbbell"})}),e.jsx(E,{children:"Daily physical activity"})]}),e.jsx(D,{children:"110 mins"})]})]}),e.jsxs(re,{children:[e.jsx("svg",{width:"34px",height:"34px",style:{width:"34px",height:"34px"},children:e.jsx("use",{xlinkHref:o+"#icon-icons"})}),e.jsx(ne,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ae,{onClick:b,children:[e.jsx(S,{as:S,children:"Logout"}),e.jsx("svg",{width:"20px",height:"20px",stroke:"#E6533C",children:e.jsx("use",{xlinkHref:o+"#icon-logout"})})]})]})},fe=a.div`
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
`,ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(se,{titleName:"Profile Settings"}),e.jsxs(fe,{children:[e.jsx(be,{}),e.jsx(je,{})]})]});export{ke as default};
