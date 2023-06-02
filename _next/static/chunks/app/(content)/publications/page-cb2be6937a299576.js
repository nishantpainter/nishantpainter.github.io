(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{456:function(e,t,a){"use strict";a.d(t,{Z:function(){return $}});var o=a(3185),n=a(3890),i=a(476),r=a(9754),s=a(601),l=a(70),d=a(8251),c=a(6047),p=a(713),h=a(1049),u=a(9435),m=a(859),g=a(1301);function v(e){return(0,g.Z)("MuiButton",e)}let f=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),x=i.createContext({});var b=a(4587);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:a,fullWidth:o,size:i,variant:r,classes:s}=e,d={root:["root",r,`${r}${(0,u.Z)(t)}`,`size${(0,u.Z)(i)}`,`${r}Size${(0,u.Z)(i)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(i)}`]},c=(0,l.Z)(d,v,s);return(0,n.Z)({},s,c)},w=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(h.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,u.Z)(a.color)}`],t[`size${(0,u.Z)(a.size)}`],t[`${a.variant}Size${(0,u.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var a,o;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${f.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${f.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}}),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,u.Z)(a.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},w(e))),C=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,u.Z)(a.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},w(e))),I=i.forwardRef(function(e,t){let a=i.useContext(x),l=(0,s.Z)(a,e),d=(0,p.Z)({props:l,name:"MuiButton"}),{children:c,color:h="primary",component:u="button",className:m,disabled:g=!1,disableElevation:v=!1,disableFocusRipple:f=!1,endIcon:w,focusVisibleClassName:I,fullWidth:$=!1,size:k="medium",startIcon:j,type:A,variant:R="text"}=d,T=(0,o.Z)(d,y),M=(0,n.Z)({},d,{color:h,component:u,disabled:g,disableElevation:v,disableFocusRipple:f,fullWidth:$,size:k,type:A,variant:R}),q=S(M),B=j&&(0,b.jsx)(Z,{className:q.startIcon,ownerState:M,children:j}),E=w&&(0,b.jsx)(C,{className:q.endIcon,ownerState:M,children:w});return(0,b.jsxs)(z,(0,n.Z)({ownerState:M,className:(0,r.Z)(a.className,q.root,m),component:u,disabled:g,focusRipple:!f,focusVisibleClassName:(0,r.Z)(q.focusVisible,I),ref:t,type:A},T,{classes:q,children:[B,c,E]}))});var $=I},6064:function(e,t,a){Promise.resolve().then(a.bind(a,6445))},6445:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var o=a(4587),n=a(2215),i=a.n(n),r=a(8179),s=a(6819),l=a(4124),d=a(456);function c(e){let{href:t,title:a,img:n,alt:s,children:c}=e;return(0,o.jsxs)(r.Z,{component:"article",display:"flex",flexDirection:"column",rowGap:2,children:[(0,o.jsx)(l.Z,{variant:"h6",children:(0,o.jsx)("b",{children:a})}),(0,o.jsx)(i(),{height:200,width:135,src:n,alt:s}),c,(0,o.jsx)(r.Z,{children:(0,o.jsx)(d.Z,{component:"a",variant:"contained",color:"secondary",href:t,target:"_blank",children:"See Publication"})})]})}function p(){return(0,o.jsx)(r.Z,{component:s.Z,fixed:!0,minHeight:"100%",children:(0,o.jsxs)(r.Z,{component:"main",display:"flex",flexDirection:"column",rowGap:2,pt:5,pb:2,children:[(0,o.jsx)(l.Z,{variant:"h4",children:(0,o.jsx)("b",{children:"Publications"})}),(0,o.jsx)(c,{title:"Machine-Learning-Based Android Malware Detection Techniques—A Comparative Analysis",img:"/img/springer-information-and-communication-technology-for-sustainable-development.jpg",alt:"Information and Communication Technology for Sustainable Development",href:"https://link.springer.com/chapter/10.1007/978-981-10-3932-4_19",children:(0,o.jsx)(l.Z,{children:"Today, Smartphones can handle myriad of programs and applications that perform a wide varieties of functions. In recent years, Android has been a globally anticipated open source operating system for Smartphones. However, rapid advancement of Android is marred with augmenting threats of Android malwares that perform pernicious activities on Smartphones. Malwares exercising different techniques to dodge existing detection methods offer uncommon challenges for their accurate detection. Signature-based detection approach and machine-learning-based detection approach are the broad classifications for existing Android malware detection techniques. Researchers and antimalware companies have identified the inefficiency of signature-based detection approach and shifted to machine-learning-based detection approach to overcome the limitations of signature-based detection approach. This paper disserts existing machine-learning-based Android malware detection techniques and presents parametric comparison of discussed malware detection techniques. Hence, this paper targets to study various machine-learning-based detection techniques and to establish probable future directions."})}),(0,o.jsx)(c,{title:"Comparative Analysis of Android Malware Detection Techniques",img:"/img/springer-proceedings-of-the-international-conference-on-data-engineering-and-communication-technology.jpg",alt:"Information and Communication Technology for Sustainable Development",href:"https://link.springer.com/book/10.1007/978-981-10-1678-3",children:(0,o.jsx)(l.Z,{children:"In recent years, the widespread adoption of smartphones has led to a new age of information exchange. Among smartphones, Android devices have gained huge popularity due to the open architecture of Android and advanced programmable software framework to develop mobile applications. However, the pervasive adoption of Android is coupled with progressively uncontrollable malware threats. This paper gives an insight of existing work in Android malware detection. Additionally, this paper highlights the parametric comparison of existing Android malware detection techniques. Thus, this paper aims to study various Android malware detection techniques and to identify plausible research direction."})})]})})}}},function(e){e.O(0,[98,667,802,664,744],function(){return e(e.s=6064)}),_N_E=e.O()}]);