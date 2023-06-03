(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{456:function(e,a,t){"use strict";t.d(a,{Z:function(){return I}});var n=t(3185),o=t(3890),i=t(476),r=t(9754),l=t(601),s=t(70),d=t(8251),c=t(6047),p=t(713),h=t(1049),u=t(9435),m=t(859),g=t(1301);function f(e){return(0,g.Z)("MuiButton",e)}let x=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=i.createContext({});var v=t(4587);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:a,disableElevation:t,fullWidth:n,size:i,variant:r,classes:l}=e,d={root:["root",r,`${r}${(0,u.Z)(a)}`,`size${(0,u.Z)(i)}`,`${r}Size${(0,u.Z)(i)}`,"inherit"===a&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(i)}`]},c=(0,s.Z)(d,f,l);return(0,o.Z)({},l,c)},w=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(h.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,u.Z)(t.color)}`],a[`size${(0,u.Z)(t.size)}`],a[`${t.variant}Size${(0,u.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})(({theme:e,ownerState:a})=>{var t,n;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(n=e.palette).getContrastText)?void 0:t.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,u.Z)(t.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},w(e))),k=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,u.Z)(t.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},w(e))),j=i.forwardRef(function(e,a){let t=i.useContext(b),s=(0,l.Z)(t,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:c,color:h="primary",component:u="button",className:m,disabled:g=!1,disableElevation:f=!1,disableFocusRipple:x=!1,endIcon:w,focusVisibleClassName:j,fullWidth:I=!1,size:C="medium",startIcon:$,type:R,variant:P="text"}=d,M=(0,n.Z)(d,y),E=(0,o.Z)({},d,{color:h,component:u,disabled:g,disableElevation:f,disableFocusRipple:x,fullWidth:I,size:C,type:R,variant:P}),T=S(E),B=$&&(0,v.jsx)(Z,{className:T.startIcon,ownerState:E,children:$}),F=w&&(0,v.jsx)(k,{className:T.endIcon,ownerState:E,children:w});return(0,v.jsxs)(z,(0,o.Z)({ownerState:E,className:(0,r.Z)(t.className,T.root,m),component:u,disabled:g,focusRipple:!x,focusVisibleClassName:(0,r.Z)(T.focusVisible,j),ref:a,type:R},M,{classes:T,children:[B,c,F]}))});var I=j},8335:function(e,a,t){Promise.resolve().then(t.bind(t,9952))},9952:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return c}});var n=t(4587),o=t(8179),i=t(6819),r=t(4124),l=t(456);function s(e){let{alt:a,src:t}=e;return(0,n.jsx)(o.Z,{width:"60%",component:"img",src:t,alt:a,sx:{maxInlineSize:"100%",blockSize:"auto"}})}function d(e){let{href:a,title:t,children:i}=e;return(0,n.jsxs)(o.Z,{component:"article",display:"flex",flexDirection:"column",p:3,rowGap:2,boxShadow:8,borderRadius:1,children:[(0,n.jsx)(r.Z,{variant:"h6",children:(0,n.jsx)("b",{children:t})}),i,(0,n.jsx)(o.Z,{children:(0,n.jsx)(l.Z,{component:"a",variant:"outlined",color:"secondary",href:a,target:"_blank",children:"See Project"})})]})}function c(){return(0,n.jsx)(o.Z,{component:i.Z,fixed:!0,minHeight:"100%",children:(0,n.jsxs)(o.Z,{component:"main",display:"flex",flexDirection:"column",rowGap:2,pt:5,pb:2,children:[(0,n.jsx)(r.Z,{variant:"h4",children:(0,n.jsx)("b",{children:"Projects"})}),(0,n.jsx)(d,{title:"Personal Kanban",href:"https://personalkanban.js.org/showcase.html",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{src:"https://camo.githubusercontent.com/5fbef426907f903d7967afd30d58914e52a7e29b4941d9cf062cef46fdc756ae/68747470733a2f2f6e697368616e747061696e7465722e6769746875622e696f2f706572736f6e616c2d6b616e62616e2f726561646d655f6c6f676f2e706e67",alt:"Image for personal kanban"}),(0,n.jsx)(r.Z,{children:"Personal Kanban is an offline capable application or tool that implements kanban to manage work at personal level. Work items can be represented as records and columns to depict each stage of your work process. Columns can be as simple as \xa8todo \xa8, \xa8in-progress \xa8 and \xa8done\xa8, or it can be complex to suit your flow."}),(0,n.jsx)(r.Z,{children:"It\xb4s a tool to visualize and optimize your workflow. Physical boards are popular among few, while virtual boards like Personal Kanban play a critical role in agile software development considering their accessibility, simplicity and elegant display. Regardless of whether a board is physical or virtual, it must depict work visually along with clearly identifying the blockage and other dependencies. Each of these features are offered seamlessly by Personal Kanban."}),(0,n.jsx)(r.Z,{children:"Plan your work with flexibility, identify and resolve bottlenecks and overview your complete work visually."})]})}),(0,n.jsx)(d,{title:"Tiny Manager",href:"https://tinymanager.js.org/#/",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{src:"https://camo.githubusercontent.com/c08011c65d925c19f30724bdf1bb8f9a6f03e783a47c6747f27bd24a345c4ba2/68747470733a2f2f6e697368616e747061696e7465722e6769746875622e696f2f74696e792d6d616e616765722f726561646d655f6c6f676f2e706e67",alt:"Image for tiny manager"}),(0,n.jsx)(r.Z,{children:"Tiny Manager is a simple application that assists you in managing your pet projects. Along with project management it allows mundane management using todos and a simple notepad application, all at one place."})]})}),(0,n.jsx)(d,{title:"Timesheet",href:"https://timesheet.js.org/",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{src:"https://camo.githubusercontent.com/be93ff84099217c5113c3a9919b7c13377f35e88d79c2d318766667c9e01a07e/68747470733a2f2f74696d6573686565742e6a732e6f72672f726561646d652d6c6f676f2e706e67",alt:"Image for timesheet"}),(0,n.jsx)(r.Z,{children:"Timesheet is an application for managing and quickly accessing your daily work time. It has a minimalistic features set required and sleek design. Stop opening, closing your local text editor for persisting and calculating the timesheet and hours manually. Start using Timesheet now."})]})}),(0,n.jsx)(d,{title:"Made in India CSS",href:"https://nishantpainter.com/made-in-india-css/",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{src:"https://raw.githubusercontent.com/nishantpainter/made-in-india-css/master/img/default.png",alt:"Image for made in india css"}),(0,n.jsx)(r.Z,{children:"Made in India CSS is a collection of 15 distinct background patterns generated using linear and radial CSS gradients. You can use these tricolor gradient patterns in building your website or web application by importing the made-in-india css file and using various class."})]})})]})})}}},function(e){e.O(0,[515,802,664,744],function(){return e(e.s=8335)}),_N_E=e.O()}]);