"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[751],{1227:function(e,t,n){n.d(t,{O:function(){return h},D:function(){return x}});var r=n(390);var i=n(56),s=n(2822),l=n(5758);const a=(0,s.ZP)(l.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[17]}}px;
  overflow-x: hidden;
`,o=s.ZP.div`
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  transform: translateX(1140px);
`;var c=n(2559);function h(e){return t=>{const{handleLeftClick:n,handleRightClick:s,cards:l}=function(e){const[t,n]=(0,r.useState)(e);return{handleRightClick:()=>{},handleLeftClick:()=>{},cards:t}}(t.data),[h,d]=(0,r.useState)(0),u=()=>h===l.length-1?d(0):d(h+1);return(0,r.useEffect)((()=>{const e=setInterval(u,3e3);return()=>clearInterval(e)})),(0,c.jsxs)(a,{children:[(0,c.jsx)(i.ZX,{...t,handleLeftClick:n,handleRightClick:s}),(0,c.jsx)(o,{children:l.map(((t,n)=>(0,r.createElement)(e,{...t,key:n})))})]})}}var d=n(4523);const u=(0,d.Ry)().shape({email:(0,d.Z_)().email().required(),name:(0,d.Z_)().required(),theme:(0,d.Z_)(),message:(0,d.Z_)().max(160).required()});function x(e){return t=>{const[n,i]=(0,r.useState)({email:"",name:"",theme:"",message:""}),[s,l]=(0,r.useState)({email:!1,name:!1,theme:!1,message:!1}),a=(0,r.useCallback)(((e,t)=>{i((n=>({...n,[e]:t}))),l({email:!1,name:!1,theme:!1,message:!1})}),[]),o=(0,r.useCallback)((async e=>{e.preventDefault();await u.isValid(n,{abortEarly:!1})?console.log("Form is legit"):u.validate(n,{abortEarly:!1}).catch((e=>{const t=e.inner.reduce(((e,t)=>({...e,[t.path]:!0})));l(t)}))}),[n]);return(0,c.jsx)(e,{values:n,errors:s,onFieldChange:a,onSubmit:o,...t})}}},3561:function(e,t,n){n.d(t,{Aq:function(){return u},ie:function(){return h},zx:function(){return d},N0:function(){return a},SE:function(){return o},DK:function(){return c}});var r=n(2822),i=n(5758),s=n(6026),l=n.p+"static/media/team.150f0b190d9a4a3577df.webp";const a=(0,r.ZP)(i.W2)`
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
`,d=(0,r.ZP)(s.O)`
  width: ${e=>{let{theme:t}=e;return t.sizes.button.width[4]}}px;
  height: ${e=>{let{theme:t}=e;return t.sizes.button.height[2]}}px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[2]}}px;
`,u=r.ZP.div`
  background-image: url(${l});
  background-repeat: no-repeat;
  height: ${e=>{let{theme:t}=e;return t.sizes.container.height[0]}}px;
  flex: 1;
  background-position: right;
  background-size: cover;
`},2895:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});n(390);var r=n(5758),i=n(56),s=n(8187),l=n.p+"static/media/main-team.6728a8afacb2bf15b9e0.webp",a=n(2822);const o=(0,a.ZP)(r.W2)`
  column-gap: ${e=>{let{theme:t}=e;return t.gaps[3]}}px;
  flex-direction: row;
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[0]}}px 0
    ${e=>{let{theme:t}=e;return t.sizes.container.paddings[1]}}px;
`,c=(0,a.ZP)(r.dk)`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[2]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[2]}}px;
  position: relative;
  width: ${e=>{let{theme:t}=e;return t.sizes.description.width[0]}}px;
`,h=a.ZP.h1`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[7]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[6]}}px;
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  height: ${e=>{let{theme:t}=e;return t.sizes.title.height[0]}}px;
  width: ${e=>{let{theme:t}=e;return t.sizes.title.width[0]}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
`,d=a.ZP.img`
  max-width: 1920px;
  object-fit: cover;
`;var u=n(2559);function x(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.$0,{col:!0,children:[(0,u.jsxs)(o,{children:[(0,u.jsxs)(h,{children:["Find true power in your data with ",(0,u.jsx)(r.vc,{children:"Ensome"})]}),(0,u.jsxs)(c,{children:[s.WL,(0,u.jsx)(i.g6,{path:s.Z_.SERVICES,children:"Learn more"})]})]}),(0,u.jsx)(d,{src:l,alt:"team meeting",loading:"lazy"})]})})}var m=n(5400);const f=a.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  flex: 1;

  ${e=>{let{$align:t}=e;return t?a.iv`
          align-items: flex-start;
        `:a.iv`
          align-items: baseline;
        `}};
`;var p=n(3561);function g(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.$0,{featureSection:!0,col:!0,children:(0,u.jsxs)(p.N0,{children:[(0,u.jsxs)(p.DK,{children:["The ",(0,u.jsx)(r.vc,{children:"newest"})," business analytics platform"]}),(0,u.jsxs)(f,{children:[(0,u.jsx)(p.SE,{children:s.WL}),(0,u.jsx)(p.zx,{children:(0,u.jsx)(m.rU,{to:s.Z_.SOLUTIONS,children:"Discover more"})})]})]})}),(0,u.jsxs)(i.$0,{featureSection:!0,odd:!0,children:[(0,u.jsx)(p.Aq,{}),(0,u.jsx)(p.N0,{children:(0,u.jsxs)(f,{$align:!0,children:[(0,u.jsx)(p.ie,{children:"Radically new solutions for\xa0data"}),(0,u.jsx)(p.SE,{children:s.WL}),(0,u.jsx)(p.zx,{children:(0,u.jsx)(m.rU,{to:s.Z_.SOLUTIONS,children:"Learn more"})})]})})]})]})}const j=(0,a.ZP)(r.W2)`
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[2]}}px 0;
  column-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  flex-direction: row;
`;function $(){return(0,u.jsx)(i.$0,{odd:!0,children:(0,u.jsxs)(j,{children:[(0,u.jsxs)(f,{children:[(0,u.jsx)(r.bi,{children:"The benefits of Ensome"}),(0,u.jsx)(r.dk,{children:s.WL})]}),(0,u.jsx)(i.fw,{})]})})}var b=n(1227);const w=(0,b.O)(i.k4),v=(0,b.O)(i.jV),z=(0,b.O)(i.l3);function k(){return(0,u.jsxs)(i.$0,{cardSection:!0,col:!0,children:[(0,u.jsx)(w,{title:"Testimonials",isVisibleButtons:!0,data:s.cz}),(0,u.jsx)(v,{title:"Our pricing",isVisibleButtons:!1,data:s.Hj}),(0,u.jsx)(z,{title:"Our blog",isVisibleButtons:!0,data:s.ZF})]})}function Z(){return(0,u.jsxs)(r.or,{children:[(0,u.jsx)(x,{}),(0,u.jsx)(g,{}),(0,u.jsx)(i.BR,{}),(0,u.jsx)($,{}),(0,u.jsx)(k,{})]})}}}]);
//# sourceMappingURL=751.8b6aab22.chunk.js.map