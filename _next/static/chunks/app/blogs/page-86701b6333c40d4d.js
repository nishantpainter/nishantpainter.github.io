(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{555:function(e,t,i){Promise.resolve().then(i.bind(i,9132))},9132:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(4587),r=i(476),l=i(2175),s=i(4382),a=i(8179),o=i(6819),c=i(2370),u=i(4730),h=i(4124),d=i(9793),m=i(9041),g=i(3055);function f(e){let{blogs:t}=e,i=(0,s.useRouter)(),f=(0,s.useSearchParams)(),[p,x]=(0,r.useState)(f.get("search")||""),j=e=>()=>{i.push(e)},b=e=>{x(e.target.value)},v=(e,t)=>{e.stopPropagation(),x(t)},Z=(0,l.Lu)(t,p,{keys:["slug","title","categories","tags","description"]});return(0,n.jsx)(a.Z,{component:o.Z,fixed:!0,minHeight:"100%",children:(0,n.jsxs)(a.Z,{component:"main",display:"flex",flexDirection:"column",rowGap:2,pt:5,pb:2,children:[(0,n.jsx)(h.Z,{variant:"h4",gutterBottom:!0,children:(0,n.jsx)("b",{children:"Blogs"})}),(0,n.jsx)(a.Z,{mb:2,children:(0,n.jsx)(c.Z,{fullWidth:!0,variant:"outlined",label:"Search",value:p,color:"secondary",onChange:b,InputProps:{startAdornment:(0,n.jsx)(u.Z,{position:"start",children:(0,n.jsx)(g.Z,{})})}})}),(0,n.jsx)(d.Z,{}),Z.map(e=>{let{title:t,description:i,slug:r,date:l,categories:s}=e;return(0,n.jsx)(a.Z,{component:"article",className:"pointer",onClick:j("/blogs/".concat(r)),sx:{"& .title":{transition:"all 0.1s ease"},"&:hover":{"& .title":{color:"secondary.light",fontWeight:"bold"}}},children:(0,n.jsxs)(a.Z,{display:"flex",flexDirection:"column",rowGap:2,children:[(0,n.jsx)(h.Z,{className:"title",variant:"h6",children:t},r),(0,n.jsx)(h.Z,{variant:"body1",color:"grey.900",children:i}),(0,n.jsx)(m.Rj,{items:s,onClick:v}),(0,n.jsx)(h.Z,{color:"grey.700",children:l}),(0,n.jsx)(d.Z,{})]},r)},r)})]})})}},9041:function(e,t,i){"use strict";i.d(t,{Rj:function(){return o},TR:function(){return g},I_:function(){return d}});var n=i(4587);i(476);var r=i(7730),l=i(8179),s=i(6953);let a=Object.values(s);function o(e){let{items:t=[],colorful:i=!0,onClick:s}=e,o=e=>{if(!i)return{};let t=function(e){if(!e)return;let t=0;for(let i=0;i<e.length;i++)t=e.charCodeAt(i)+((t<<5)-t),t&=t;return t=(t%a.length+a.length)%a.length,a[t][100]}(e);return{sx:{backgroundColor:t}}};return(0,n.jsx)(l.Z,{display:"flex",flexWrap:"wrap",columnGap:1,rowGap:1,children:t.map(e=>(0,n.jsx)(r.Z,{clickable:!0,label:e,onClick:t=>null==s?void 0:s(t,e),...o(e)},e))})}var c=i(2215),u=i.n(c);let h={sm:{height:24,width:30},md:{height:32,width:40}};function d(e){let{size:t="sm",...i}=e;return(0,n.jsx)(l.Z,{display:"flex",columnGap:1,...i,children:[{title:"Github",href:"https://github.com/nishantpainter",alt:"Image for social site github",img:"/img/github.svg"},{title:"Linkedin",href:"https://in.linkedin.com/in/nishant-painter-31388582",alt:"Image for social site linkedin",img:"/img/linkedin.svg"},{title:"Stackoverflow",href:"https://stackoverflow.com/users/13841339/nishant-painter",alt:"Image for social site stackoverflow",img:"/img/so.svg"},{title:"Medium",href:"https://medium.com/@nishantpainter",alt:"Image for social site medium",img:"/img/medium.svg"}].map(e=>{let{href:i,title:r,alt:l,img:s}=e;return(0,n.jsx)("a",{href:i,title:r,target:"_blank",children:(0,n.jsx)(u(),{...h[t],src:s,alt:l})},i)})})}var m=i(4124);function g(){return(0,n.jsx)(l.Z,{p:.5,border:"3px solid black",borderRadius:1,children:(0,n.jsx)(m.Z,{variant:"h5",letterSpacing:-.3,children:(0,n.jsx)("b",{children:"NP"})})})}}},function(e){e.O(0,[519,49,215,730,943,812,802,664,744],function(){return e(e.s=555)}),_N_E=e.O()}]);