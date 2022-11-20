"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[150],{1227:function(e,t,r){r.d(t,{O:function(){return h},D:function(){return x}});var n=r(390);var s=r(56),i=r(2822),l=r(5758);const a=(0,i.ZP)(l.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[17]}}px;
  overflow-x: hidden;
`,o=i.ZP.div`
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  transform: translateX(1140px);
`;var c=r(2559);function h(e){return t=>{const{handleLeftClick:r,handleRightClick:i,cards:l}=function(e){const[t,r]=(0,n.useState)(e);return{handleRightClick:()=>{},handleLeftClick:()=>{},cards:t}}(t.data),[h,d]=(0,n.useState)(0),u=()=>h===l.length-1?d(0):d(h+1);return(0,n.useEffect)((()=>{const e=setInterval(u,3e3);return()=>clearInterval(e)})),(0,c.jsxs)(a,{children:[(0,c.jsx)(s.ZX,{...t,handleLeftClick:r,handleRightClick:i}),(0,c.jsx)(o,{children:l.map(((t,r)=>(0,n.createElement)(e,{...t,key:r})))})]})}}var d=r(4523);const u=(0,d.Ry)().shape({email:(0,d.Z_)().email().required(),name:(0,d.Z_)().required(),theme:(0,d.Z_)(),message:(0,d.Z_)().max(160).required()});function x(e){return t=>{const[r,s]=(0,n.useState)({email:"",name:"",theme:"",message:""}),[i,l]=(0,n.useState)({email:!1,name:!1,theme:!1,message:!1}),a=(0,n.useCallback)(((e,t)=>{s((r=>({...r,[e]:t}))),l({email:!1,name:!1,theme:!1,message:!1})}),[]),o=(0,n.useCallback)((async e=>{e.preventDefault();await u.isValid(r,{abortEarly:!1})?console.log("Form is legit"):u.validate(r,{abortEarly:!1}).catch((e=>{const t=e.inner.reduce(((e,t)=>({...e,[t.path]:!0})));l(t)}))}),[r]);return(0,c.jsx)(e,{values:r,errors:i,onFieldChange:a,onSubmit:o,...t})}}},150:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(390),s=r(5758),i=r(56),l=r(2677),a=r(2822);const o=(0,a.ZP)(s.W2)`
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[3]}}px 0;
`;var c=r(2559);function h(){return(0,c.jsx)(i.$0,{odd:!0,id:"about",children:(0,c.jsxs)(o,{children:[(0,c.jsx)(l.Dx,{children:"About Us"}),(0,c.jsx)(i.cI,{})]})})}var d=r(8187),u=r(7537);const x=(0,a.ZP)(s.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[12]}}px;
  padding: ${e=>{let{theme:t}=e;return t.gaps[12]}}px 0;
  flex-wrap: nowrap;

  ${u.ie} {
    font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[7]}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
    line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[6]}}px;

    letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  }
`,m=a.ZP.div`
  height: 440px;
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;

  ${e=>{let{$reverse:t}=e;return t?a.iv`
          flex-direction: row-reverse;
        `:a.iv`
          flex-direction: row;
        `}}
`,p=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
`,g=a.ZP.img`
  width: ${e=>{let{theme:t}=e;return t.sizes.image.width[0]}}px;
  height: ${e=>{let{theme:t}=e;return t.sizes.image.height[0]}}px;

  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
`;function f(){const e=d.AI.map((e=>{let{id:t,title:r,description:n,src:i,reverse:a}=e;return(0,c.jsxs)(m,{$reverse:a,children:[(0,c.jsxs)(p,{children:[(0,c.jsx)(l.Dx,{children:r}),(0,c.jsx)(s.dk,{children:n})]}),(0,c.jsx)(g,{src:i,alt:"team"})]},t)}));return(0,c.jsx)(i.$0,{children:(0,c.jsx)(x,{children:e})})}const $=a.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>{let{theme:t}=e;return t.gaps[17]}}px 0 0;

  width: 100%;
`,j=a.ZP.hr`
  height: 1px;
  width: 3%;
  border: none;
  transform: rotate(90deg) scale(3);
  background-color: ${e=>{let{theme:t}=e;return t.colors.steel}};
`;function v(){const e=d.hd.map(((e,t,r)=>{const s=r.length-1,l=s!==t?(0,c.jsx)(j,{}):null;return[r[1],r[s]]=[r[s],r[1]],(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(i.$k,{...e,isCenter:!0}),l]},e.id)}));return(0,c.jsx)(i.$0,{odd:!0,col:!0,children:(0,c.jsxs)(o,{children:[(0,c.jsx)(l.Dx,{children:"Ensome in numbers"}),(0,c.jsx)($,{children:e})]})})}var w=r(1227);const b=a.iv`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
`,k=a.ZP.div`
  ${b}
  padding-right: 665px;
`,y=a.ZP.div`
  ${b}
`,Z=(0,w.O)(i.cT);function P(){return(0,c.jsx)(i.$0,{children:(0,c.jsxs)(x,{children:[(0,c.jsxs)(y,{children:[(0,c.jsxs)(k,{children:[(0,c.jsx)(l.Dx,{children:"Our customers"}),(0,c.jsx)(s.dk,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam."})]}),(0,c.jsx)(i.SD,{isBrighter:!0})]}),(0,c.jsx)(Z,{title:"What our customers say",isVisibleButtons:!0,data:d.cz})]})})}var C=r(1224);const z=a.iv`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,D=a.ZP.div`
  ${z}
  width: 540px;
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[9]}}px;
`,q=a.ZP.div`
  ${z}
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[7]}}px;

  a {
    font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[3]}};
  }
`,A=(0,w.D)(i.uI);function E(){return(0,c.jsx)(i.$0,{odd:!0,children:(0,c.jsxs)(x,{$row:!0,children:[(0,c.jsxs)(D,{children:[(0,c.jsxs)(q,{children:[(0,c.jsx)(s.bi,{children:"Left questions? Contacts us now for a free consultation and free trial!"}),(0,c.jsx)(s.dk,{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis\xa0suscipit laboriosam, nisi ut aliquid ex ea commodi."})]}),(0,c.jsxs)(q,{children:[(0,c.jsx)(i.YX,{black:!0,flex:!0,children:(0,c.jsx)(C.A,{$grey:!0,children:"Email address"})}),(0,c.jsx)(i.ED,{black:!0,flex:!0,children:(0,c.jsx)(C.A,{$grey:!0,children:"Phone number"})}),(0,c.jsx)(i.Vs,{black:!0,flex:!0,children:(0,c.jsx)(C.A,{$grey:!0,children:"Address"})})]})]}),(0,c.jsx)(A,{})]})})}function S(){return(0,c.jsxs)(s.or,{children:[(0,c.jsx)(h,{}),(0,c.jsx)(f,{}),(0,c.jsx)(v,{}),(0,c.jsx)(P,{}),(0,c.jsx)(E,{})]})}},1224:function(e,t,r){r.d(t,{A:function(){return i},D:function(){return s}});var n=r(2822);const s=n.ZP.h2`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[10]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[8]}}px;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  width: ${e=>{let{theme:t}=e;return t.sizes.title.width[0]}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
`,i=n.ZP.span`
  font-family: ${e=>{let{theme:t}=e;return t.fonts.families[0]}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[1]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[0]}}px;

  text-align: right;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[0]}}em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>{let{theme:t}=e;return t.gaps[4]}}px;

  ${e=>{let{$grey:t,theme:r}=e;return t?n.iv`
          color: ${r.colors.grey};
          font-weight: ${r.fonts.weights[0]};
          svg {
            fill: ${r.colors.grey};
          }
        `:n.iv`
          color: ${r.colors.black};
          font-weight: ${r.fonts.weights[2]};
          svg {
            fill: ${r.colors.black};
          }
        `}}
`}}]);
//# sourceMappingURL=150.34ac50d6.chunk.js.map