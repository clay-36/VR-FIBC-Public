"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{5224:function(n,e,t){t.d(e,{z:function(){return s}});var r,i=t(168),a=(0,t(1191).ZP)("button")(r||(r=(0,i.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),(function(n){return n.color||"#2e186a"}),(function(n){return n.color?"#2E186A":"#fff"})),o=t(184),s=function(n){var e=n.color,t=n.fixedWidth,r=n.children,i=n.onClick;return(0,o.jsx)(a,{color:e,fixedWidth:t,onClick:i,children:r})}},4609:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r=t(914),i=t(4720),a=t(1758),o=t(4942),s=t(1413),d=t(9439),l=t(2791),c=t(3085),h=t(4569),m=t.n(h),p=function(n){var e=(0,l.useState)({}),t=(0,d.Z)(e,2),r=t[0],i=t[1],a=(0,l.useState)({}),h=(0,d.Z)(a,2),p=h[0],u=h[1],x=(0,l.useState)(!1),g=(0,d.Z)(x,2),f=g[0],Z=g[1];(0,l.useEffect)((function(){0===Object.keys(p).length&&f&&(i(""),c.Z.success({message:"Success",description:"Your message has been sent!"}))}),[p,f]);return{handleChange:function(n){n.persist(),i((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,o.Z)({},n.target.name,n.target.value))})),u((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,o.Z)({},n.target.name,""))}))},handleSubmit:function(e){e.preventDefault(),u(n(r));3===Object.keys(r).length&&m().post("",(0,s.Z)({},r)).then((function(){Z(!0)}))},values:r,errors:p}};function u(n){var e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}var x,g,f,Z,j,b,v,w,y,C,k,P,S=t(5224),z=t(4581),E=t(168),I=t(1191),R=(0,I.ZP)("p")(x||(x=(0,E.Z)(["\n  margin-top: 1.5rem;\n"]))),Y=(0,I.ZP)("div")(g||(g=(0,E.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),q=(0,I.ZP)("div")(f||(f=(0,E.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),F=t(184),U=(0,i.Z)()((function(n){var e=n.title,t=n.content,r=n.t;return(0,F.jsxs)(Y,{children:[(0,F.jsx)("h3",{children:r(e)}),(0,F.jsx)(q,{children:(0,F.jsx)(R,{children:r(t)})})]})})),W=(0,I.ZP)("div")(Z||(Z=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),_=(0,I.ZP)("input")(j||(j=(0,E.Z)(["\n  font-size: 0.875rem;\n"]))),A=(0,I.ZP)("div")(b||(b=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),M=(0,I.ZP)("textarea")(v||(v=(0,E.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),N=(0,I.ZP)("label")(w||(w=(0,E.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),O=(0,i.Z)()((function(n){var e=n.name,t=n.placeholder,r=n.onChange,i=n.t;return(0,F.jsxs)(W,{children:[(0,F.jsx)(N,{htmlFor:e,children:i(e)}),(0,F.jsx)(_,{placeholder:i(t),name:e,id:e,onChange:r})]})})),T=(0,i.Z)()((function(n){var e=n.name,t=n.placeholder,r=n.onChange,i=n.t;return(0,F.jsxs)(A,{children:[(0,F.jsx)(N,{htmlFor:e,children:i(e)}),(0,F.jsx)(M,{placeholder:i(t),id:e,name:e,onChange:r})]})})),B=(0,I.ZP)("div")(y||(y=(0,E.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),D=(0,I.ZP)("form")(C||(C=(0,E.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),G=(0,I.ZP)("span")(k||(k=(0,E.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),H=(0,I.ZP)("div")(P||(P=(0,E.Z)(["\n  text-align: center;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),L=(0,i.Z)()((function(n){var e=n.title,t=n.content,i=n.id,o=n.t,s=p(u),d=s.values,l=s.errors,c=s.handleChange,h=s.handleSubmit,m=function(n){var e=n.type,t=l[e];return(0,F.jsx)(a.LG,{direction:"left",children:(0,F.jsx)(G,{erros:l[e],children:t})})};return(0,F.jsx)(B,{id:i,children:(0,F.jsxs)(a.pT,{delay:200,children:[(0,F.jsx)(r.Z,{children:(0,F.jsx)(U,{title:e,content:t})}),(0,F.jsx)(r.Z,{children:(0,F.jsxs)(D,{autoComplete:"off",onSubmit:h,children:[(0,F.jsxs)(r.Z,{children:[(0,F.jsx)(O,{type:"text",name:"name",placeholder:"Your Name",value:d.name||"",onChange:c}),(0,F.jsx)(m,{type:"name"})]}),(0,F.jsxs)(r.Z,{children:[(0,F.jsx)(O,{type:"text",name:"email",placeholder:"Your Email",value:d.email||"",onChange:c}),(0,F.jsx)(m,{type:"email"})]}),(0,F.jsxs)(r.Z,{children:[(0,F.jsx)(T,{placeholder:"Your Message",value:d.message||"",name:"message",onChange:c}),(0,F.jsx)(m,{type:"message"})]}),(0,F.jsx)(H,{children:(0,F.jsx)(S.z,{onClick:function(){return window.location.href="mailto:exports@vrfibc.com?subject=".concat(encodeURIComponent("Query from "+d.name),"&body=").concat(encodeURIComponent(d.message),"&cc=").concat(encodeURIComponent(d.email))},children:o("Submit")})}),(0,F.jsxs)("div",{style:{textAlign:"center",marginTop:"20px"},children:["or connect with us via Whatsapp!",(0,F.jsx)("br",{}),(0,F.jsx)("div",{style:{padding:"2px",borderRadius:"10px",border:"1px"},children:(0,F.jsxs)("a",{href:"https://wa.me/+917383481710?text=Hi%2C%20I'm%20interested%20in%20FIBC%20product!",children:[(0,F.jsx)(z.l,{src:"whatsapp_icon.svg","aria-label":"logo",width:"50",height:"25"}),(0,F.jsx)("h1",{children:"+91 7383481710"})]})})]})]})})]})})}))}}]);
//# sourceMappingURL=609.f1771008.chunk.js.map