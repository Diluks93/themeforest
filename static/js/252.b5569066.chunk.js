"use strict";(self.webpackChunkthemeforest=self.webpackChunkthemeforest||[]).push([[252],{5252:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(390),i=r(5758),s=r(56),o=r(2822);const l=(0,o.ZP)(i.W2)`
  ${e=>{let{$padding:t}=e;return t?o.iv`
          padding-top: 20px;
        `:o.iv`
          padding-top: 70px;
          padding-bottom: 120px;
        `}}
`,a=o.ZP.h2`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[7]}}px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
  font-weight: 800;
`,c=(0,o.ZP)(i.dk)`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[1]}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  line-height: 24px;
`,h=o.ZP.div`
  flex: 1;
  padding-top: 10px;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  height: 158px;
  justify-content: space-between;
`;var u=r(2559);function d(){return(0,u.jsxs)(s.$0,{col:!0,secondary:!0,id:"team",children:[(0,u.jsx)(l,{$padding:!0,children:(0,u.jsx)(s.cI,{left:!0,secondary:!0})}),(0,u.jsxs)(l,{$flex:!0,$align:!0,children:[(0,u.jsx)(a,{children:"Our team"}),(0,u.jsxs)(h,{children:[(0,u.jsx)(c,{children:"Sed ut perspiciatis unde omnis iste natus error volupta doloremque laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu consectetur."}),(0,u.jsx)(c,{children:"Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero."})]})]})]})}var p=r(8187);const m=o.iv`
  letter-spacing: ${e=>{let{theme:t}=e;return t.fonts.spacings[1]}}em;

  ${e=>{let{$black:t,theme:r}=e;return t?o.iv`
          color: ${r.colors.black};
        `:o.iv`
          color: ${r.colors.white};
        `}}
`,f=(0,o.ZP)(i.W2)`
  margin: 120px auto;
  max-height: 1680px;
`,x=o.ZP.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 100%;
  height: fit-content;
  gap: ${e=>{let{theme:t}=e;return t.gaps[8]}}px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`,g=o.ZP.img`
  object-fit: cover;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  filter: grayscale(1);
`,b=o.ZP.figcaption`
  position: absolute;
  bottom: ${e=>{let{theme:t}=e;return t.gaps[7]}}px;
  left: ${e=>{let{theme:t}=e;return t.gaps[7]}}px;
  color: white;
  z-index: 11;
  display: flex;
  flex-direction: column;
`,$=o.ZP.span`
  font-family: ${e=>{let{theme:t}=e;return t.fonts.families[0]}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[3]}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[3]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[2]}}px;
  ${m}
`,w=o.ZP.span`
  font-family: ${e=>{let{theme:t}=e;return t.fonts.families[1]}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights[0]}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.sizes[2]}}px;
  line-height: ${e=>{let{theme:t}=e;return t.fonts.heights[1]}}px;
  ${m}
`,j=o.ZP.figure`
  position: relative;
  display: block;
  width: 350px;
  height: 500px;

  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;

  &::before {
    content: '';
    z-index: 10;
    width: 100%;
    height: 100%;
    display: block;
    bottom: 0;
    position: absolute;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
    background: linear-gradient(
        180deg,
        rgba(40, 50, 66, 0) 26.37%,
        ${e=>{let{theme:t}=e;return t.colors.secondary}} 103.66%
      )
      center center no-repeat;
  }

  &:nth-child(1),
  &:nth-child(3n),
  &:nth-child(3n + 1) {
    padding-top: 120px;
    &::before,
    figcaption {
      transform: translateY(120px);
    }
  }
`;function v(){const[e,t]=(0,n.useState)(1),{loading:r,error:i,members:o,hasMore:l}=function(e){const[t,r]=(0,n.useState)(!0),[i,s]=(0,n.useState)(!1),[o,l]=(0,n.useState)([]),[a,c]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{r(!0),s(!1),new Promise((e=>{setTimeout((()=>e(p.cz)),1e3)})).then((e=>{l((t=>[...t,...e.map((e=>({...e,id:e.id+t.length})))])),c(e.length>0),r(!1)})).catch((e=>{e||s(!0)}))}),[e]),{loading:t,error:i,members:o,hasMore:a}}(e),a=(0,n.useRef)(),c=(0,n.useCallback)((e=>{r||(a.current&&a.current.disconnect(),a.current=new IntersectionObserver((e=>{e[0].isIntersecting&&l&&t((e=>e+1))})),e&&a.current.observe(e))}),[r,l]),h=e=>o.length===e+1?c:null;return(0,u.jsx)(s.$0,{children:(0,u.jsxs)(f,{children:[(0,u.jsx)(x,{children:o.map(((e,t)=>{let{id:r,src:n,name:i,position:s}=e;return(0,u.jsxs)(j,{ref:h(t),children:[(0,u.jsx)(g,{src:n,alt:i}),(0,u.jsxs)(b,{children:[(0,u.jsx)($,{children:i}),(0,u.jsx)(w,{children:s})]})]},r)}))}),r&&(0,u.jsx)($,{$black:!0,children:"Loading..."}),i&&(0,u.jsx)($,{$black:!0,children:"Oooops something went wrong!"})]})})}function k(){return(0,u.jsxs)(i.or,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(v,{})]})}}}]);
//# sourceMappingURL=252.b5569066.chunk.js.map