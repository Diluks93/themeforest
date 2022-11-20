"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[451],{1227:function(e,t,n){n.d(t,{O:function(){return h},D:function(){return d}});var r=n(390);var s=n(56),l=n(2822),i=n(5758);const a=(0,l.ZP)(i.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[17]}}px;
  overflow-x: hidden;
`,c=l.ZP.div`
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  transform: translateX(1140px);
`;var o=n(2559);function h(e){return t=>{const{handleLeftClick:n,handleRightClick:l,cards:i}=function(e){const[t,n]=(0,r.useState)(e);return{handleRightClick:()=>{},handleLeftClick:()=>{},cards:t}}(t.data),[h,u]=(0,r.useState)(0),f=()=>h===i.length-1?u(0):u(h+1);return(0,r.useEffect)((()=>{const e=setInterval(f,3e3);return()=>clearInterval(e)})),(0,o.jsxs)(a,{children:[(0,o.jsx)(s.ZX,{...t,handleLeftClick:n,handleRightClick:l}),(0,o.jsx)(c,{children:i.map(((t,n)=>(0,r.createElement)(e,{...t,key:n})))})]})}}var u=n(4523);const f=(0,u.Ry)().shape({email:(0,u.Z_)().email().required(),name:(0,u.Z_)().required(),theme:(0,u.Z_)(),message:(0,u.Z_)().max(160).required()});function d(e){return t=>{const[n,s]=(0,r.useState)({email:"",name:"",theme:"",message:""}),[l,i]=(0,r.useState)({email:!1,name:!1,theme:!1,message:!1}),a=(0,r.useCallback)(((e,t)=>{s((n=>({...n,[e]:t}))),i({email:!1,name:!1,theme:!1,message:!1})}),[]),c=(0,r.useCallback)((async e=>{e.preventDefault();await f.isValid(n,{abortEarly:!1})?console.log("Form is legit"):f.validate(n,{abortEarly:!1}).catch((e=>{const t=e.inner.reduce(((e,t)=>({...e,[t.path]:!0})));i(t)}))}),[n]);return(0,o.jsx)(e,{values:n,errors:l,onFieldChange:a,onSubmit:c,...t})}}},6451:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(390);var r=n(56),s=n(1227),l=n(8268),i=n(5758),a=n(6829),c=n(1224),o=n(2559);const h=(0,s.D)(r.xh);function u(){return(0,o.jsxs)(i.or,{children:[(0,o.jsxs)(r.$0,{id:"contacts",col:!0,children:[(0,o.jsx)(i.W2,{children:(0,o.jsx)(r.cI,{left:!0})}),(0,o.jsxs)(i.W2,{$flex:!0,$align:!0,children:[(0,o.jsxs)(c.D,{children:["How can we ",(0,o.jsx)(i.vc,{children:"help you?"})]}),(0,o.jsx)(h,{})]}),(0,o.jsxs)(l.N,{$flex:!0,$left:!0,children:[(0,o.jsx)(r.YX,{grey:!0,flex:!0,children:(0,o.jsxs)(c.A,{children:[(0,o.jsx)(a.Mh,{})," Email"]})}),(0,o.jsx)(r.ED,{grey:!0,flex:!0,children:(0,o.jsxs)(c.A,{children:[(0,o.jsx)(a.Ig,{})," Phone"]})}),(0,o.jsx)(r.Vs,{grey:!0,flex:!0,children:(0,o.jsxs)(c.A,{children:[(0,o.jsx)(a.Ye,{})," Address"]})})]})]}),(0,o.jsx)(r.JS,{})]})}},1224:function(e,t,n){n.d(t,{A:function(){return l},D:function(){return s}});var r=n(2822);const s=r.ZP.h2`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[10]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[8]}}px;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  width: ${e=>{let{theme:t}=e;return t.sizes.title.width[0]}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
`,l=r.ZP.span`
  font-family: ${e=>{let{theme:t}=e;return t.fonts.families[0]}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[1]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[0]}}px;

  text-align: right;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[0]}}em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>{let{theme:t}=e;return t.gaps[4]}}px;

  ${e=>{let{$grey:t,theme:n}=e;return t?r.iv`
          color: ${n.colors.grey};
          font-weight: ${n.fonts.weights[0]};
          svg {
            fill: ${n.colors.grey};
          }
        `:r.iv`
          color: ${n.colors.black};
          font-weight: ${n.fonts.weights[2]};
          svg {
            fill: ${n.colors.black};
          }
        `}}
`},8268:function(e,t,n){n.d(t,{N:function(){return l}});var r=n(2822),s=n(5758);const l=(0,r.ZP)(s.W2)`
  padding-bottom: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[2]}}px;
`}}]);
//# sourceMappingURL=451.135f221b.chunk.js.map