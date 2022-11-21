"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[751],{2954:function(e,t,n){n.d(t,{O:function(){return h},D:function(){return x}});var r=n(390),i=n(7936),s=n(2822),a=n(6457);const l=(0,s.ZP)(a.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[17]}}px;
`,o=s.ZP.div`
  display: flex;
  overflow-x: hidden;
  width: inherit;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;

  > div {
    transform: ${e=>{let{$transform:t}=e;return`translateX(-${t}%)`}};
  }
`;var c=n(2559);function h(e){return t=>{const[n,a]=(0,r.useState)(0),h=(0,r.useRef)(t.data).current,u=(0,r.useRef)(null),d=(0,r.useRef)(0),{gaps:x}=(0,r.useContext)(s.Ni),m=x[8],f=()=>n===h.length-t.countCards?a(0):a(n+1);return(0,r.useEffect)((()=>{var e;d.current=100*m/((null===(e=u.current)||void 0===e?void 0:e.children[0].clientWidth)||1)+100}),[m]),(0,r.useEffect)((()=>{const e=setInterval(f,t.duration);return()=>clearInterval(e)})),(0,c.jsxs)(l,{children:[(0,c.jsx)(i.ZX,{...t,handleLeftClick:()=>a(0===n?h.length-t.countCards:n-1),handleRightClick:()=>{f()},disabledControls:h.length===t.countCards}),(0,c.jsx)(o,{ref:u,$transform:n*d.current,children:h.map(((t,n)=>(0,r.createElement)(e,{...t,key:n})))})]})}}var u=n(9360);const d=(0,u.Ry)().shape({email:(0,u.Z_)().email().required(),name:(0,u.Z_)().required(),theme:(0,u.Z_)(),message:(0,u.Z_)().max(160).required()});function x(e){return t=>{const[n,i]=(0,r.useState)({email:"",name:"",theme:"",message:""}),[s,a]=(0,r.useState)({email:!1,name:!1,theme:!1,message:!1}),l=(0,r.useCallback)(((e,t)=>{i((n=>({...n,[e]:t}))),a({email:!1,name:!1,theme:!1,message:!1})}),[]),o=(0,r.useCallback)((async e=>{e.preventDefault();await d.isValid(n,{abortEarly:!1})?console.log("Form is legit"):d.validate(n,{abortEarly:!1}).catch((e=>{const t=e.inner.reduce(((e,t)=>({...e,[t.path]:!0})));a(t)}))}),[n]);return(0,c.jsx)(e,{values:n,errors:s,onFieldChange:l,onSubmit:o,...t})}}},3561:function(e,t,n){n.d(t,{Aq:function(){return d},ie:function(){return h},zx:function(){return u},N0:function(){return l},SE:function(){return o},DK:function(){return c}});var r=n(2822),i=n(6457),s=n(6026),a=n.p+"static/media/team.150f0b190d9a4a3577df.webp";const l=(0,r.ZP)(i.W2)`
  column-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[2]}}px 0;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
`,o=(0,r.ZP)(i.dk)`
  margin-top: 7px;
  width: ${e=>{let{theme:t}=e;return t.sizes.container.width[1]}}px;
`,c=r.ZP.h2`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[9]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[7]}}px;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
  flex: 1;
`,h=(0,r.ZP)(i.bi)`
  width: ${e=>{let{theme:t}=e;return t.sizes.container.width[1]}}px;
`,u=(0,r.ZP)(s.O)`
  width: ${e=>{let{theme:t}=e;return t.sizes.button.width[4]}}px;
  height: ${e=>{let{theme:t}=e;return t.sizes.button.height[2]}}px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[2]}}px;
`,d=r.ZP.div`
  background-image: url(${a});
  background-repeat: no-repeat;
  height: ${e=>{let{theme:t}=e;return t.sizes.container.height[0]}}px;
  flex: 1;
  background-position: right;
  background-size: cover;
`},2895:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});n(390);var r=n(7936),i=n(8187),s=n(6457),a=n.p+"static/media/main-team.6728a8afacb2bf15b9e0.webp",l=n(2822);const o=(0,l.ZP)(s.W2)`
  column-gap: ${e=>{let{theme:t}=e;return t.gaps[3]}}px;
  flex-direction: row;
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[0]}}px 0
    ${e=>{let{theme:t}=e;return t.sizes.container.paddings[1]}}px;
`,c=(0,l.ZP)(s.dk)`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[2]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[2]}}px;
  position: relative;
  width: ${e=>{let{theme:t}=e;return t.sizes.description.width[0]}}px;
`,h=l.ZP.h1`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[7]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[6]}}px;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  height: ${e=>{let{theme:t}=e;return t.sizes.title.height[0]}}px;
  width: ${e=>{let{theme:t}=e;return t.sizes.title.width[0]}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
`,u=l.ZP.img`
  max-width: 1920px;
  object-fit: cover;
`;var d=n(2559);function x(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(r.$0,{col:!0,children:[(0,d.jsxs)(o,{children:[(0,d.jsxs)(h,{children:["Find true power in your data with ",(0,d.jsx)(s.vc,{children:"Ensome"})]}),(0,d.jsxs)(c,{children:[i.WL,(0,d.jsx)(r.g6,{path:i.Z_.SERVICES,children:"Learn more"})]})]}),(0,d.jsx)(u,{src:a,alt:"team meeting",loading:"lazy"})]})})}var m=n(5400);const f=l.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  flex: 1;

  ${e=>{let{$align:t}=e;return t?l.iv`
          align-items: flex-start;
        `:l.iv`
          align-items: baseline;
        `}};
`;var p=n(3561);function g(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.$0,{featureSection:!0,col:!0,children:(0,d.jsxs)(p.N0,{children:[(0,d.jsxs)(p.DK,{children:["The ",(0,d.jsx)(s.vc,{children:"newest"})," business analytics platform"]}),(0,d.jsxs)(f,{children:[(0,d.jsx)(p.SE,{children:i.WL}),(0,d.jsx)(p.zx,{children:(0,d.jsx)(m.rU,{to:i.Z_.SOLUTIONS,children:"Discover more"})})]})]})}),(0,d.jsxs)(r.$0,{featureSection:!0,odd:!0,children:[(0,d.jsx)(p.Aq,{}),(0,d.jsx)(p.N0,{children:(0,d.jsxs)(f,{$align:!0,children:[(0,d.jsx)(p.ie,{children:"Radically new solutions for\xa0data"}),(0,d.jsx)(p.SE,{children:i.WL}),(0,d.jsx)(p.zx,{children:(0,d.jsx)(m.rU,{to:i.Z_.SOLUTIONS,children:"Learn more"})})]})})]})]})}const j=(0,l.ZP)(s.W2)`
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[2]}}px 0;
  column-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  flex-direction: row;
`;function $(){return(0,d.jsx)(r.$0,{odd:!0,children:(0,d.jsxs)(j,{children:[(0,d.jsxs)(f,{children:[(0,d.jsx)(s.bi,{children:"The benefits of Ensome"}),(0,d.jsx)(s.dk,{children:i.WL})]}),(0,d.jsx)(r.fw,{})]})})}var b=n(2954);const w=(0,b.O)(r.k4),v=(0,b.O)(r.jV),z=(0,b.O)(r.l3);function Z(){return(0,d.jsxs)(r.$0,{cardSection:!0,col:!0,children:[(0,d.jsx)(w,{title:"Testimonials",isVisibleButtons:!0,data:i.cz,countCards:3,duration:3e3}),(0,d.jsx)(v,{title:"Our pricing",isVisibleButtons:!1,data:i.Hj,countCards:4}),(0,d.jsx)(z,{title:"Our blog",isVisibleButtons:!0,data:i.ZF,countCards:3})]})}function k(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{}),(0,d.jsx)(g,{}),(0,d.jsx)(r.BR,{}),(0,d.jsx)($,{}),(0,d.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=751.ad2fcf71.chunk.js.map