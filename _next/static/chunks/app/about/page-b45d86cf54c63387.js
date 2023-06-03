(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3072:function(e,t,r){"use strict";function n(e){return"string"==typeof e}r.d(t,{Z:function(){return n}})},9793:function(e,t,r){"use strict";var n=r(3185),i=r(3890),a=r(476),o=r(9754),s=r(70),l=r(8251),d=r(6047),c=r(713),u=r(1260),p=r(4587);let h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=e=>{let{absolute:t,children:r,classes:n,flexItem:i,light:a,orientation:o,textAlign:l,variant:d}=e;return(0,s.Z)({root:["root",t&&"absolute",d,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},u.V,n)},x=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>(0,i.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),g=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),v=a.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:l,component:d=s?"div":"hr",flexItem:u=!1,light:v=!1,orientation:b="horizontal",role:f="hr"!==d?"separator":void 0,textAlign:Z="center",variant:y="fullWidth"}=r,j=(0,n.Z)(r,h),S=(0,i.Z)({},r,{absolute:a,component:d,flexItem:u,light:v,orientation:b,role:f,textAlign:Z,variant:y}),w=m(S);return(0,p.jsx)(x,(0,i.Z)({as:d,className:(0,o.Z)(w.root,l),role:f,ref:t,ownerState:S},j,{children:s?(0,p.jsx)(g,{className:w.wrapper,ownerState:S,children:s}):null}))});t.Z=v},1260:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(859),i=r(1301);function a(e){return(0,i.Z)("MuiDivider",e)}let o=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},9213:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(3185),i=r(3890),a=r(476),o=r(9754),s=r(70),l=r(9435),d=r(6047),c=r(713),u=r(5888),p=r(3292),h=r(4124),m=r(859),x=r(1301);function g(e){return(0,x.Z)("MuiLink",e)}let v=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=r(3118),f=r(8251);let Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>Z[e]||e,j=({theme:e,ownerState:t})=>{let r=y(t.color),n=(0,b.DW)(e,`palette.${r}`,!1)||t.color,i=(0,b.DW)(e,`palette.${r}Channel`);return"vars"in e&&i?`rgba(${i} / 0.4)`:(0,f.Fq)(n,.4)};var S=r(4587);let w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=e=>{let{classes:t,component:r,focusVisible:n,underline:i}=e,a={root:["root",`underline${(0,l.Z)(i)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,s.Z)(a,g,t)},A=(0,d.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`underline${(0,l.Z)(r.underline)}`],"button"===r.component&&t.button]}})(({theme:e,ownerState:t})=>(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:j({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v.focusVisible}`]:{outline:"auto"}})),L=a.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiLink"}),{className:s,color:l="primary",component:d="a",onBlur:h,onFocus:m,TypographyClasses:x,underline:g="always",variant:v="inherit",sx:b}=r,f=(0,n.Z)(r,w),{isFocusVisibleRef:y,onBlur:j,onFocus:L,ref:M}=(0,u.Z)(),[I,R]=a.useState(!1),T=(0,p.Z)(t,M),N=e=>{j(e),!1===y.current&&R(!1),h&&h(e)},k=e=>{L(e),!0===y.current&&R(!0),m&&m(e)},P=(0,i.Z)({},r,{color:l,component:d,focusVisible:I,underline:g,variant:v}),$=C(P);return(0,S.jsx)(A,(0,i.Z)({color:l,className:(0,o.Z)($.root,s),classes:x,component:d,onBlur:N,onFocus:k,ref:T,ownerState:P,variant:v,sx:[...Object.keys(Z).includes(l)?[]:[{color:l}],...Array.isArray(b)?b:[b]]},f))});var M=L},6135:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(3185),i=r(3890),a=r(476),o=r(9754),s=r(70),l=r(6047),d=r(713),c=r(811),u=r(859),p=r(1301);function h(e){return(0,p.Z)("MuiList",e)}(0,u.Z)("MuiList",["root","padding","dense","subheader"]);var m=r(4587);let x=["children","className","component","dense","disablePadding","subheader"],g=e=>{let{classes:t,disablePadding:r,dense:n,subheader:i}=e;return(0,s.Z)({root:["root",!r&&"padding",n&&"dense",i&&"subheader"]},h,t)},v=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})(({ownerState:e})=>(0,i.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),b=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiList"}),{children:s,className:l,component:u="ul",dense:p=!1,disablePadding:h=!1,subheader:b}=r,f=(0,n.Z)(r,x),Z=a.useMemo(()=>({dense:p}),[p]),y=(0,i.Z)({},r,{component:u,dense:p,disablePadding:h}),j=g(y);return(0,m.jsx)(c.Z.Provider,{value:Z,children:(0,m.jsxs)(v,(0,i.Z)({as:u,className:(0,o.Z)(j.root,l),ref:t,ownerState:y},f,{children:[b,s]}))})});var f=b},811:function(e,t,r){"use strict";var n=r(476);let i=n.createContext({});t.Z=i},8336:function(e,t,r){"use strict";r.d(t,{L:function(){return a}});var n=r(859),i=r(1301);function a(e){return(0,i.Z)("MuiListItemText",e)}let o=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=o},2191:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(476),i=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8515:function(e,t,r){"use strict";var n=r(8774);t.Z=n.Z},2290:function(e,t,r){Promise.resolve().then(r.bind(r,6603))},6603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(4587),i=r(8179),a=r(9793),o=r(6135),s=r(3185),l=r(3890),d=r(476),c=r(9754),u=r(70),p=r(3072),h=r(8251),m=r(6047),x=r(713),g=r(1049),v=r(2191),b=r(8515),f=r(3292),Z=r(811),y=r(859),j=r(1301);function S(e){return(0,j.Z)("MuiListItem",e)}let w=(0,y.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),C=(0,y.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function A(e){return(0,j.Z)("MuiListItemSecondaryAction",e)}(0,y.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);let L=["className"],M=e=>{let{disableGutters:t,classes:r}=e;return(0,u.Z)({root:["root",t&&"disableGutters"]},A,r)},I=(0,m.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,l.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),R=d.forwardRef(function(e,t){let r=(0,x.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:i}=r,a=(0,s.Z)(r,L),o=d.useContext(Z.Z),u=(0,l.Z)({},r,{disableGutters:o.disableGutters}),p=M(u);return(0,n.jsx)(I,(0,l.Z)({className:(0,c.Z)(p.root,i),ownerState:u,ref:t},a))});R.muiName="ListItemSecondaryAction";let T=["className"],N=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],k=(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.button&&t.button,r.hasSecondaryAction&&t.secondaryAction]},P=e=>{let{alignItems:t,button:r,classes:n,dense:i,disabled:a,disableGutters:o,disablePadding:s,divider:l,hasSecondaryAction:d,selected:c}=e;return(0,u.Z)({root:["root",i&&"dense",!o&&"gutters",!s&&"padding",l&&"divider",a&&"disabled",r&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",c&&"selected"],container:["container"]},S,n)},$=(0,m.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:k})(({theme:e,ownerState:t})=>(0,l.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,l.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${C.root}`]:{paddingRight:48}},{[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,h.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,h.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,h.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,h.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),G=(0,m.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),D=d.forwardRef(function(e,t){let r=(0,x.Z)({props:e,name:"MuiListItem"}),{alignItems:i="center",autoFocus:a=!1,button:o=!1,children:u,className:h,component:m,components:y={},componentsProps:j={},ContainerComponent:S="li",ContainerProps:{className:C}={},dense:A=!1,disabled:L=!1,disableGutters:M=!1,disablePadding:I=!1,divider:k=!1,focusVisibleClassName:D,secondaryAction:E,selected:F=!1,slotProps:V={},slots:O={}}=r,B=(0,s.Z)(r.ContainerProps,T),W=(0,s.Z)(r,N),q=d.useContext(Z.Z),_=d.useMemo(()=>({dense:A||q.dense||!1,alignItems:i,disableGutters:M}),[i,q.dense,A,M]),J=d.useRef(null);(0,b.Z)(()=>{a&&J.current&&J.current.focus()},[a]);let z=d.Children.toArray(u),H=z.length&&(0,v.Z)(z[z.length-1],["ListItemSecondaryAction"]),U=(0,l.Z)({},r,{alignItems:i,autoFocus:a,button:o,dense:_.dense,disabled:L,disableGutters:M,disablePadding:I,divider:k,hasSecondaryAction:H,selected:F}),Q=P(U),Y=(0,f.Z)(J,t),K=O.root||y.Root||$,X=V.root||j.root||{},ee=(0,l.Z)({className:(0,c.Z)(Q.root,X.className,h),disabled:L},W),et=m||"li";return(o&&(ee.component=m||"div",ee.focusVisibleClassName=(0,c.Z)(w.focusVisible,D),et=g.Z),H)?(et=ee.component||m?et:"div","li"===S&&("li"===et?et="div":"li"===ee.component&&(ee.component="div")),(0,n.jsx)(Z.Z.Provider,{value:_,children:(0,n.jsxs)(G,(0,l.Z)({as:S,className:(0,c.Z)(Q.container,C),ref:Y,ownerState:U},B,{children:[(0,n.jsx)(K,(0,l.Z)({},X,!(0,p.Z)(K)&&{as:et,ownerState:(0,l.Z)({},U,X.ownerState)},ee,{children:z})),z.pop()]}))})):(0,n.jsx)(Z.Z.Provider,{value:_,children:(0,n.jsxs)(K,(0,l.Z)({},X,{as:et,ref:Y},!(0,p.Z)(K)&&{ownerState:(0,l.Z)({},U,X.ownerState)},ee,{children:[z,E&&(0,n.jsx)(R,{children:E})]}))})});var E=r(4124),F=r(8336);let V=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],O=e=>{let{classes:t,inset:r,primary:n,secondary:i,dense:a}=e;return(0,u.Z)({root:["root",r&&"inset",a&&"dense",n&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},F.L,t)},B=(0,m.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${F.Z.primary}`]:t.primary},{[`& .${F.Z.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})(({ownerState:e})=>(0,l.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),W=d.forwardRef(function(e,t){let r=(0,x.Z)({props:e,name:"MuiListItemText"}),{children:i,className:a,disableTypography:o=!1,inset:u=!1,primary:p,primaryTypographyProps:h,secondary:m,secondaryTypographyProps:g}=r,v=(0,s.Z)(r,V),{dense:b}=d.useContext(Z.Z),f=null!=p?p:i,y=m,j=(0,l.Z)({},r,{disableTypography:o,inset:u,primary:!!f,secondary:!!y,dense:b}),S=O(j);return null==f||f.type===E.Z||o||(f=(0,n.jsx)(E.Z,(0,l.Z)({variant:b?"body2":"body1",className:S.primary,component:null!=h&&h.variant?void 0:"span",display:"block"},h,{children:f}))),null==y||y.type===E.Z||o||(y=(0,n.jsx)(E.Z,(0,l.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},g,{children:y}))),(0,n.jsxs)(B,(0,l.Z)({className:(0,c.Z)(S.root,a),ownerState:j,ref:t},v,{children:[f,y]}))});var q=r(9213),_=r(6819),J=r(7730);let z=(0,m.ZP)(q.Z)({textDecoration:"none"});function H(){return(0,n.jsx)(i.Z,{component:_.Z,fixed:!0,minHeight:"100%",children:(0,n.jsxs)(i.Z,{component:"main",display:"flex",flexDirection:"column",rowGap:2,pt:5,pb:2,children:[(0,n.jsx)(E.Z,{variant:"h4",children:(0,n.jsx)("b",{children:"About"})}),(0,n.jsxs)(E.Z,{children:["A dedicated and competent ",(0,n.jsx)("b",{children:"full stack software engineer"})," with years of experience in various application development. Detail oriented and organised lead developer with creative mindset and strong project management abilities. Leader of cross-functional teams adhering to quality output and best practices. An overall impeccable academic record consisting of double gold medal in both graduation and post graduation, university topper."]}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(U,{}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(Q,{}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(Y,{}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(K,{}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(X,{})]})})}function U(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{variant:"h6",children:(0,n.jsx)("b",{children:"Experience"})}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"Surat, Gujarat, India",children:[(0,n.jsx)(z,{href:"https://axelor.com/",children:"Axelor"})," -\xa0",(0,n.jsx)("b",{children:"Tech lead"}),"\xa0",(0,n.jsx)("br",{}),"( Apr 2021 - Current Date )"]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"Surat, Gujarat, India",children:[(0,n.jsx)(z,{href:"https://axelor.com/",children:"Axelor"})," -\xa0",(0,n.jsx)("b",{children:"Sr. System Engineer"}),"\xa0",(0,n.jsx)("br",{}),"( Feb 2018 - Mar 2021 )"]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"Surat, Gujarat, India",children:[(0,n.jsx)(z,{href:"https://www.vidillion.com/",children:"Vidillion"})," -\xa0",(0,n.jsx)("b",{children:"Developer"}),"\xa0",(0,n.jsx)("br",{}),"( Jan 2017 - Nov 2017 )"]})})]})]})}function Q(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{variant:"h6",id:"technologies",children:(0,n.jsx)("b",{children:"Technologies and Tools"})}),(0,n.jsx)(i.Z,{display:"flex",flexWrap:"wrap",rowGap:1,columnGap:1,children:["HTML","CSS","JavaScript","TypeScript","SQL","PostgresSQL","NOSQL","MongoDB","NodeJS","Socket","Docker","GIT","React","NextJS","Remix","Express","NestJS","REST","Loopback","Swagger","Firebase","AppScript"].map(e=>(0,n.jsx)(J.Z,{label:e},e))})]})}function Y(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{variant:"h6",children:(0,n.jsx)("b",{children:"Education"})}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"SCET, Surat, Gujarat, India",children:[(0,n.jsx)("b",{children:"Master of Engineering CGPA 9.69"}),"\xa0",(0,n.jsx)("br",{}),"( Apr 2021 - Current Date )"]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"SCET, Surat, Gujarat, India",children:[(0,n.jsx)("b",{children:"Sep 2014 - Jul 2016"}),"\xa0",(0,n.jsx)("br",{}),"( Sep 2009 - Jun 2013 )"]})})]})]})}function K(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{variant:"h6",children:(0,n.jsx)("b",{children:"Awards and Achievements"})}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"Gujarat Technological University",children:[(0,n.jsx)("b",{children:"Gold Medal - Master of Engineering"}),(0,n.jsx)("br",{})," ( University Topper - All Engineering Streams )"]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"Gujarat Technological University",children:[(0,n.jsx)("b",{children:"Gold Medal - Master of Engineering"}),(0,n.jsx)("br",{})," ( University Topper - Computer Engineering )"]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"SCET",children:[(0,n.jsx)("b",{children:"Gold Medal - Bachelor of Engineering"}),(0,n.jsx)("br",{})," ( Institute Topper - All Engineering Streams )"]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"SCET",children:[(0,n.jsx)("b",{children:"Gold Medal - Bachelor of Engineering"})," ",(0,n.jsx)("br",{}),"( Institute Topper - Computer Engineering )"]})}),(0,n.jsx)(D,{children:(0,n.jsx)(W,{secondary:"NASSCOM - Certificate of Excellence",children:(0,n.jsx)("b",{children:"Shri Dewant Mehta IT Awards"})})})]})]})}function X(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{variant:"h6",children:(0,n.jsx)("b",{children:"Publications"})}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"SPRINGER AISC book series",children:[(0,n.jsx)("b",{children:"Machine-Learning-Based Android Malware Detection Techniques—A Comparative Analysis"}),(0,n.jsx)("br",{}),(0,n.jsx)(z,{href:"https://link.springer.com/chapter/10.1007/978-981-10-3932-4_19",children:"Link"})]})}),(0,n.jsx)(D,{children:(0,n.jsxs)(W,{secondary:"SPRINGER LNNS book series",children:[(0,n.jsx)("b",{children:"Comparative Analysis of Android Malware Detection Techniques"}),(0,n.jsx)("br",{}),(0,n.jsx)(z,{href:"https://link.springer.com/chapter/10.1007/978-981-10-1678-3_12",children:"Link"})]})})]})]})}}},function(e){e.O(0,[519,49,730,802,664,744],function(){return e(e.s=2290)}),_N_E=e.O()}]);