"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{5224:function(n,e,i){i.d(e,{z:function(){return d}});var r,t=i(168),a=(0,i(1191).ZP)("button")(r||(r=(0,t.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),(function(n){return n.color||"#2e186a"}),(function(n){return n.color?"#2E186A":"#fff"})),s=i(184),d=function(n){var e=n.color,i=n.fixedWidth,r=n.children,t=n.onClick;return(0,s.jsx)(a,{color:e,fixedWidth:i,onClick:t,children:r})}},4609:function(n,e,i){i.r(e),i.d(e,{default:function(){return K}});var r=i(6106),t=i(914),a=i(4720),s=i(7116),d=i(4942),o=i(1413),l=i(9439),c=i(2791),m=i(5664),h=i(4569),u=i.n(h),p=function(n){var e=(0,c.useState)({}),i=(0,l.Z)(e,2),r=i[0],t=i[1],a=(0,c.useState)({}),s=(0,l.Z)(a,2),h=s[0],p=s[1],x=(0,c.useState)(!1),g=(0,l.Z)(x,2),f=g[0],Z=g[1];(0,c.useEffect)((function(){0===Object.keys(h).length&&f&&(t(""),m.Z.success({message:"Success",description:"Your message has been sent!"}))}),[h,f]);return{handleChange:function(n){n.persist(),t((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,d.Z)({},n.target.name,n.target.value))})),p((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,d.Z)({},n.target.name,""))}))},handleSubmit:function(e){e.preventDefault(),p(n(r));3===Object.keys(r).length&&u().post("",(0,o.Z)({},r)).then((function(){Z(!0)}))},values:r,errors:h}};function x(n){var e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}var g,f,Z,j,b,v,y,w,k,C,P,S,z=i(5224),E=i(168),Y=i(1191),q=(0,Y.ZP)("p")(g||(g=(0,E.Z)(["\n  margin-top: 1.5rem;\n"]))),F=(0,Y.ZP)("div")(f||(f=(0,E.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),M=(0,Y.ZP)("div")(Z||(Z=(0,E.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),N=i(184),O=(0,a.Z)()((function(n){var e=n.title,i=n.content,r=n.t;return(0,N.jsxs)(F,{children:[(0,N.jsx)("h6",{children:r(e)}),(0,N.jsx)(M,{children:(0,N.jsx)(q,{children:r(i)})})]})})),T=(0,Y.ZP)("div")(j||(j=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),W=(0,Y.ZP)("input")(b||(b=(0,E.Z)(["\n  font-size: 0.875rem;\n"]))),_=(0,Y.ZP)("div")(v||(v=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),A=(0,Y.ZP)("textarea")(y||(y=(0,E.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),D=(0,Y.ZP)("label")(w||(w=(0,E.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),G=(0,a.Z)()((function(n){var e=n.name,i=n.placeholder,r=n.onChange,t=n.t;return(0,N.jsxs)(T,{children:[(0,N.jsx)(D,{htmlFor:e,children:t(e)}),(0,N.jsx)(W,{placeholder:t(i),name:e,id:e,onChange:r})]})})),L=(0,a.Z)()((function(n){var e=n.name,i=n.placeholder,r=n.onChange,t=n.t;return(0,N.jsxs)(_,{children:[(0,N.jsx)(D,{htmlFor:e,children:t(e)}),(0,N.jsx)(A,{placeholder:t(i),id:e,name:e,onChange:r})]})})),B=(0,Y.ZP)("div")(k||(k=(0,E.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),H=(0,Y.ZP)("form")(C||(C=(0,E.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),I=(0,Y.ZP)("span")(P||(P=(0,E.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),J=(0,Y.ZP)("div")(S||(S=(0,E.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),K=(0,a.Z)()((function(n){var e=n.title,i=n.content,a=n.id,d=n.t,o=p(x),l=o.values,c=o.errors,m=o.handleChange,h=o.handleSubmit,u=function(n){var e=n.type,i=c[e];return(0,N.jsx)(s.LG,{direction:"left",children:(0,N.jsx)(I,{erros:c[e],children:i})})};return(0,N.jsx)(B,{id:a,children:(0,N.jsxs)(r.Z,{justify:"space-between",align:"middle",children:[(0,N.jsx)(t.Z,{lg:12,md:11,sm:24,xs:24,children:(0,N.jsx)(s.pT,{delay:200,children:(0,N.jsx)(O,{title:e,content:i})})}),(0,N.jsx)(t.Z,{lg:12,md:12,sm:24,xs:24,children:(0,N.jsx)(s.pT,{delay:200,children:(0,N.jsxs)(H,{autoComplete:"off",onSubmit:h,children:[(0,N.jsxs)(t.Z,{span:24,children:[(0,N.jsx)(G,{type:"text",name:"name",placeholder:"Your Name",value:l.name||"",onChange:m}),(0,N.jsx)(u,{type:"name"})]}),(0,N.jsxs)(t.Z,{span:24,children:[(0,N.jsx)(G,{type:"text",name:"email",placeholder:"Your Email",value:l.email||"",onChange:m}),(0,N.jsx)(u,{type:"email"})]}),(0,N.jsxs)(t.Z,{span:24,children:[(0,N.jsx)(L,{placeholder:"Your Message",value:l.message||"",name:"message",onChange:m}),(0,N.jsx)(u,{type:"message"})]}),(0,N.jsx)(J,{children:(0,N.jsx)(z.z,{name:"submit",children:d("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.9035b3e4.chunk.js.map