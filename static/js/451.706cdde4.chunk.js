"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[451],{2954:function(e,t,n){n.d(t,{O:function(){return h},D:function(){return d}});var r=n(390),s=n(7936),l=n(2822),i=n(6457);const a=(0,l.ZP)(i.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[17]}}px;
`,o=l.ZP.div`
  display: flex;
  overflow-x: hidden;
  width: inherit;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;

  > div {
    transform: ${e=>{let{$transform:t}=e;return`translateX(-${t}%)`}};
  }
`;var c=n(2559);function h(e){return t=>{const[n,i]=(0,r.useState)(0),h=(0,r.useRef)(t.data).current,u=(0,r.useRef)(null),f=(0,r.useRef)(0),{gaps:d}=(0,r.useContext)(l.Ni),m=d[8],g=()=>n===h.length-t.countCards?i(0):i(n+1);return(0,r.useEffect)((()=>{var e;f.current=100*m/((null===(e=u.current)||void 0===e?void 0:e.children[0].clientWidth)||1)+100}),[m]),(0,r.useEffect)((()=>{const e=setInterval(g,t.duration);return()=>clearInterval(e)})),(0,c.jsxs)(a,{children:[(0,c.jsx)(s.ZX,{...t,handleLeftClick:()=>i(0===n?h.length-t.countCards:n-1),handleRightClick:()=>{g()},disabledControls:h.length===t.countCards}),(0,c.jsx)(o,{ref:u,$transform:n*f.current,children:h.map(((t,n)=>(0,r.createElement)(e,{...t,key:n})))})]})}}var u=n(9360);const f=(0,u.Ry)().shape({email:(0,u.Z_)().email().required(),name:(0,u.Z_)().required(),theme:(0,u.Z_)(),message:(0,u.Z_)().max(160).required()});function d(e){return t=>{const[n,s]=(0,r.useState)({email:"",name:"",theme:"",message:""}),[l,i]=(0,r.useState)({email:!1,name:!1,theme:!1,message:!1}),a=(0,r.useCallback)(((e,t)=>{s((n=>({...n,[e]:t}))),i({email:!1,name:!1,theme:!1,message:!1})}),[]),o=(0,r.useCallback)((async e=>{e.preventDefault();await f.isValid(n,{abortEarly:!1})?console.log("Form is legit"):f.validate(n,{abortEarly:!1}).catch((e=>{const t=e.inner.reduce(((e,t)=>({...e,[t.path]:!0})));i(t)}))}),[n]);return(0,c.jsx)(e,{values:n,errors:l,onFieldChange:a,onSubmit:o,...t})}}},6451:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(390);var r=n(7936),s=n(2954),l=n(8268),i=n(6457),a=n(6829),o=n(1224),c=n(2559);const h=(0,s.D)(r.xh);function u(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.$0,{id:"contacts",col:!0,children:[(0,c.jsx)(i.W2,{children:(0,c.jsx)(r.cI,{left:!0})}),(0,c.jsxs)(i.W2,{$flex:!0,$align:!0,children:[(0,c.jsxs)(o.D,{children:["How can we ",(0,c.jsx)(i.vc,{children:"help you?"})]}),(0,c.jsx)(h,{})]}),(0,c.jsxs)(l.N,{$flex:!0,$left:!0,children:[(0,c.jsx)(r.YX,{grey:!0,flex:!0,children:(0,c.jsxs)(o.A,{children:[(0,c.jsx)(a.Mh,{})," Email"]})}),(0,c.jsx)(r.ED,{grey:!0,flex:!0,children:(0,c.jsxs)(o.A,{children:[(0,c.jsx)(a.Ig,{})," Phone"]})}),(0,c.jsx)(r.Vs,{grey:!0,flex:!0,children:(0,c.jsxs)(o.A,{children:[(0,c.jsx)(a.Ye,{})," Address"]})})]})]}),(0,c.jsx)(r.JS,{})]})}},1224:function(e,t,n){n.d(t,{A:function(){return l},D:function(){return s}});var r=n(2822);const s=r.ZP.h2`
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
`},8268:function(e,t,n){n.d(t,{N:function(){return l}});var r=n(2822),s=n(6457);const l=(0,r.ZP)(s.W2)`
  padding-bottom: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[2]}}px;
`}}]);
//# sourceMappingURL=451.706cdde4.chunk.js.map