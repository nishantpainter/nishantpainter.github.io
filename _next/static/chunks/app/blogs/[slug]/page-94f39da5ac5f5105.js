(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{47802:function(e,t,n){Promise.resolve().then(n.t.bind(n,83898,23)),Promise.resolve().then(n.t.bind(n,88423,23)),Promise.resolve().then(n.t.bind(n,22109,23)),Promise.resolve().then(n.t.bind(n,27322,23)),Promise.resolve().then(n.bind(n,36831))},36831:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i=n(24587),r=n(20476),o=n(44382),l=n(48179),s=n(16819),a=n(54124),c=n(79041),u=n(67126),h=n(84100),d=n(56047),m=n(9213),p=n(90012),f=n(86990);let g=(0,d.ZP)(m.Z)({textDecoration:"none"}),v=e=>{let{content:t}=e,n=e=>{var n;null==navigator||null===(n=navigator.clipboard)||void 0===n||n.writeText(t)};return(0,i.jsx)(l.Z,{component:p.Z,onClick:n,position:"absolute",top:1,right:1,zIndex:1,color:"inherit",children:(0,i.jsx)(f.Z,{})})},x=e=>{let{children:t,...n}=e,o=(0,r.useRef)(),[s,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var e,t;let n=(null==o?void 0:null===(e=o.current)||void 0===e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.tagName)==="PRE";n&&a(!0)},[]),(0,i.jsxs)(l.Z,{component:"code",position:"relative",...n,ref:o,children:[t,s&&(0,i.jsx)(v,{content:t})]})},b=["h1","h2","h3","h4","h5","h6","p","small"].reduce((e,t)=>({...e,[t]:{component:l.Z,props:{component:t}}}),{}),j={pre:{component:l.Z,props:{borderRadius:"8px",component:"pre"}},code:{component:x}},k={...b,a:{component:g,props:{color:"primary"}},...j},Z={overrides:k};function w(e){let{markdown:t}=e;return(0,i.jsx)(h.Z,{options:Z,children:t})}n(92970);var C=n(14513);function P(e){let{blog:t}=e,n=(0,o.useRouter)(),{isDarkMode:h}=(0,C.useThemeContext)(),d=(e,t)=>{e.stopPropagation(),n.push("/blogs/?search=".concat(t))};return(0,r.useEffect)(()=>{u.Z.highlightAll()},[]),(0,i.jsx)(l.Z,{component:s.Z,fixed:!0,minHeight:"100%",children:(0,i.jsxs)(l.Z,{component:"main",display:"flex",flexDirection:"column",rowGap:2,pt:5,pb:2,children:[(0,i.jsx)(a.Z,{variant:"h4",component:"h1",children:(0,i.jsx)("b",{children:t.title})}),(0,i.jsx)(c.Rj,{items:t.categories,onClick:d,darkMode:h}),(0,i.jsx)(w,{markdown:t.content})]})})}},79041:function(e,t,n){"use strict";n.d(t,{Rj:function(){return a},TR:function(){return p},I_:function(){return d}});var i=n(24587);n(20476);var r=n(17730),o=n(48179),l=n(86953);let s=Object.values(l);function a(e){let{items:t=[],colorful:n=!0,onClick:l,darkMode:a}=e,c=e=>{if(!n)return{};let t=function(e){if(!e)return;let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t),t&=t;return t=(t%s.length+s.length)%s.length,s[t]}(e);return{sx:{backgroundColor:null==t?void 0:t[a?900:100]}}};return(0,i.jsx)(o.Z,{display:"flex",flexWrap:"wrap",columnGap:1,rowGap:1,children:t.map(e=>(0,i.jsx)(r.Z,{clickable:!0,label:e,onClick:t=>null==l?void 0:l(t,e),color:"default",...c(e)},e))})}var c=n(92215),u=n.n(c);let h={sm:{height:25,width:25},md:{height:35,width:35}};function d(e){let{size:t="sm",darkMode:n,...r}=e;return(0,i.jsx)(o.Z,{display:"flex",columnGap:1,...r,children:[{title:"Github",href:"https://github.com/nishantpainter",alt:"Image for social site github",img:"/img/social/".concat(n?"github-white":"github",".svg")},{title:"Linkedin",href:"https://in.linkedin.com/in/nishant-painter-31388582",alt:"Image for social site linkedin",img:"/img/social/".concat(n?"linkedin-white":"linkedin",".svg")},{title:"Stackoverflow",href:"https://stackoverflow.com/users/13841339/nishant-painter",alt:"Image for social site stackoverflow",img:"/img/social/".concat(n?"so-white":"so",".svg")},{title:"Medium",href:"https://medium.com/@nishantpainter",alt:"Image for social site medium",img:"/img/social/".concat(n?"medium-white":"medium",".svg")}].map(e=>{let{href:n,title:r,alt:o,img:l}=e;return(0,i.jsx)("a",{href:n,title:r,target:"_blank",children:(0,i.jsx)(u(),{...h[t],src:l,alt:o})},n)})})}var m=n(54124);function p(e){let{darkMode:t}=e;return(0,i.jsx)(o.Z,{p:.5,border:"3px solid ".concat(t?"white":"black"),borderRadius:1,children:(0,i.jsx)(m.Z,{variant:"h5",letterSpacing:-.3,children:(0,i.jsx)("b",{children:"NP"})})})}},14513:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return h},inter:function(){return o.a},useThemeContext:function(){return d}});var i=n(24587),r=n(72891),o=n.n(r),l=n(20476),s=n(37979),a=n(97766),c=n(3675);let u=(0,l.createContext)({}),h=e=>{let{children:t}=e,[n,r]=(0,l.useState)("light"),h=(0,l.useCallback)(()=>{r(e=>"light"===e?"dark":"light")},[]),d=(0,s.Z)({palette:{mode:n},typography:{fontFamily:o().style.fontFamily},components:{MuiToolbar:{styleOverrides:{root:{height:60}}}}}),m=(0,l.useMemo)(()=>({mode:n,isDarkMode:"dark"===n,toggleMode:h}),[n,h]);return(0,i.jsx)(u.Provider,{value:m,children:(0,i.jsxs)(a.Z,{theme:d,children:[(0,i.jsx)(c.ZP,{}),t]})})},d=()=>(0,l.useContext)(u);t.default=h}},function(e){e.O(0,[519,49,215,861,587,561,802,664,744],function(){return e(e.s=47802)}),_N_E=e.O()}]);