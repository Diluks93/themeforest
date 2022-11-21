"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[150],{2954:function(e,t,r){r.d(t,{O:function(){return d},D:function(){return x}});var n=r(390),s=r(7936),i=r(2822),l=r(6457);const a=(0,i.ZP)(l.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[17]}}px;
`,o=i.ZP.div`
  display: flex;
  overflow-x: hidden;
  width: inherit;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;

  > div {
    transform: ${e=>{let{$transform:t}=e;return`translateX(-${t}%)`}};
  }
`;var c=r(2559);function d(e){return t=>{const[r,l]=(0,n.useState)(0),d=(0,n.useRef)(t.data).current,u=(0,n.useRef)(null),h=(0,n.useRef)(0),{gaps:x}=(0,n.useContext)(i.Ni),m=x[8],f=()=>r===d.length-t.countCards?l(0):l(r+1);return(0,n.useEffect)((()=>{var e;h.current=100*m/((null===(e=u.current)||void 0===e?void 0:e.children[0].clientWidth)||1)+100}),[m]),(0,n.useEffect)((()=>{const e=setInterval(f,t.duration);return()=>clearInterval(e)})),(0,c.jsxs)(a,{children:[(0,c.jsx)(s.ZX,{...t,handleLeftClick:()=>l(0===r?d.length-t.countCards:r-1),handleRightClick:()=>{f()},disabledControls:d.length===t.countCards}),(0,c.jsx)(o,{ref:u,$transform:r*h.current,children:d.map(((t,r)=>(0,n.createElement)(e,{...t,key:r})))})]})}}var u=r(9360);const h=(0,u.Ry)().shape({email:(0,u.Z_)().email().required(),name:(0,u.Z_)().required(),theme:(0,u.Z_)(),message:(0,u.Z_)().max(160).required()});function x(e){return t=>{const[r,s]=(0,n.useState)({email:"",name:"",theme:"",message:""}),[i,l]=(0,n.useState)({email:!1,name:!1,theme:!1,message:!1}),a=(0,n.useCallback)(((e,t)=>{s((r=>({...r,[e]:t}))),l({email:!1,name:!1,theme:!1,message:!1})}),[]),o=(0,n.useCallback)((async e=>{e.preventDefault();await h.isValid(r,{abortEarly:!1})?console.log("Form is legit"):h.validate(r,{abortEarly:!1}).catch((e=>{const t=e.inner.reduce(((e,t)=>({...e,[t.path]:!0})));l(t)}))}),[r]);return(0,c.jsx)(e,{values:r,errors:i,onFieldChange:a,onSubmit:o,...t})}}},150:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(390),s=r(7936),i=r(2677),l=r(2822),a=r(6457);const o=(0,l.ZP)(a.W2)`
  padding: ${e=>{let{theme:t}=e;return t.sizes.container.paddings[3]}}px 0;
`;var c=r(2559);function d(){return(0,c.jsx)(s.$0,{odd:!0,id:"about",children:(0,c.jsxs)(o,{children:[(0,c.jsx)(i.Dx,{children:"About Us"}),(0,c.jsx)(s.cI,{})]})})}var u=r(8187),h=r(7537);const x=(0,l.ZP)(a.W2)`
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[12]}}px;
  padding: ${e=>{let{theme:t}=e;return t.gaps[12]}}px 0;
  flex-wrap: nowrap;

  ${h.ie} {
    font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[7]}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[4]}};
    line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[6]}}px;

    letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;
  }
`,m=l.ZP.div`
  height: 440px;
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;

  ${e=>{let{$reverse:t}=e;return t?l.iv`
          flex-direction: row-reverse;
        `:l.iv`
          flex-direction: row;
        `}}
`,f=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
`,g=l.ZP.img`
  width: ${e=>{let{theme:t}=e;return t.sizes.image.width[0]}}px;
  height: ${e=>{let{theme:t}=e;return t.sizes.image.height[0]}}px;

  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
`;function p(){const e=u.AI.map((e=>{let{id:t,title:r,description:n,src:s,reverse:l}=e;return(0,c.jsxs)(m,{$reverse:l,children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(i.Dx,{children:r}),(0,c.jsx)(a.dk,{children:n})]}),(0,c.jsx)(g,{src:s,alt:"team"})]},t)}));return(0,c.jsx)(s.$0,{children:(0,c.jsx)(x,{children:e})})}const $=l.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>{let{theme:t}=e;return t.gaps[17]}}px 0 0;

  width: 100%;
`,j=l.ZP.hr`
  height: 1px;
  width: 3%;
  border: none;
  transform: rotate(90deg) scale(3);
  background-color: ${e=>{let{theme:t}=e;return t.colors.steel}};
`;function v(){const e=u.hd.map(((e,t,r)=>{const i=r.length-1,l=i!==t?(0,c.jsx)(j,{}):null;return[r[1],r[i]]=[r[i],r[1]],(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(s.$k,{...e,isCenter:!0}),l]},e.id)}));return(0,c.jsx)(s.$0,{odd:!0,col:!0,children:(0,c.jsxs)(o,{children:[(0,c.jsx)(i.Dx,{children:"Ensome in numbers"}),(0,c.jsx)($,{children:e})]})})}var w=r(2954);const b=l.iv`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
`,y=l.ZP.div`
  ${b}
  padding-right: 665px;
`,k=l.ZP.div`
  ${b}
`,Z=(0,w.O)(s.cT);function P(){return(0,c.jsx)(s.$0,{children:(0,c.jsxs)(x,{children:[(0,c.jsxs)(k,{children:[(0,c.jsxs)(y,{children:[(0,c.jsx)(i.Dx,{children:"Our customers"}),(0,c.jsx)(a.dk,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam."})]}),(0,c.jsx)(s.SD,{isBrighter:!0})]}),(0,c.jsx)(Z,{title:"What our customers say",isVisibleButtons:!0,data:u.cz,countCards:2,duration:3e3})]})})}var C=r(1224);const z=l.iv`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,D=l.ZP.div`
  ${z}
  width: 540px;
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[9]}}px;
`,E=l.ZP.div`
  ${z}
  row-gap: ${e=>{let{theme:t}=e;return t.gaps[7]}}px;

  a {
    font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[3]}};
  }
`,q=(0,w.D)(s.uI);function A(){return(0,c.jsx)(s.$0,{odd:!0,children:(0,c.jsxs)(x,{$row:!0,children:[(0,c.jsxs)(D,{children:[(0,c.jsxs)(E,{children:[(0,c.jsx)(a.bi,{children:"Left questions? Contacts us now for a free consultation and free trial!"}),(0,c.jsx)(a.dk,{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis\xa0suscipit laboriosam, nisi ut aliquid ex ea commodi."})]}),(0,c.jsxs)(E,{children:[(0,c.jsx)(s.YX,{black:!0,flex:!0,children:(0,c.jsx)(C.A,{$grey:!0,children:"Email address"})}),(0,c.jsx)(s.ED,{black:!0,flex:!0,children:(0,c.jsx)(C.A,{$grey:!0,children:"Phone number"})}),(0,c.jsx)(s.Vs,{black:!0,flex:!0,children:(0,c.jsx)(C.A,{$grey:!0,children:"Address"})})]})]}),(0,c.jsx)(q,{})]})})}function R(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{}),(0,c.jsx)(p,{}),(0,c.jsx)(v,{}),(0,c.jsx)(P,{}),(0,c.jsx)(A,{})]})}},1224:function(e,t,r){r.d(t,{A:function(){return i},D:function(){return s}});var n=r(2822);const s=n.ZP.h2`
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
//# sourceMappingURL=150.1d154790.chunk.js.map