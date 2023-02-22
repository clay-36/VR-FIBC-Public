"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[781],{6781:function(n,t,o){o.r(t),o.d(t,{PhotoAlbum:function(){return K},default:function(){return K}});var e=o(9439),r=o(3433),i=o(1413),a=o(5987),u=o(2791),c=["style"],l=["src","alt","srcSet","sizes","style"],s=["style"],d=["style"],p=["layoutOptions","renderColumnContainer","children","columnContainerProps"],h=["style"],f=function(n){return n.width/n.height},m=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=Math.pow(10,t);return Math.round((n+Number.EPSILON)*o)/o},g=function(n){var t=[],o=n,e=0,r=function(n,e){return o(t[n],t[e])<0},i=function(n,o){var e=t[n];t[n]=t[o],t[o]=e};return{push:function(n){t[e+=1]=n,function(n){for(var t=n,o=Math.floor(t/2);t>1&&r(o,t);)i(o,t),t=o,o=Math.floor(t/2)}(e)},pop:function(){if(0!==e){i(1,e),e-=1;var n=t.pop();return function(n){for(var t=n,o=2*t;o<=e&&(o<e&&r(o,o+1)&&(o+=1),r(t,o));)i(t,o),o=2*(t=o)}(1),n}},size:function(){return e}}},v=function(n,t,o){var e=function(n,t,o){var e=new Map,r=new Set,i=new Map;i.set(t,0);var a,u=g((a=function(n){return n.weight},function(n,t){return a(t)-a(n)}));u.push({id:t,weight:0});for(var c=function(){var t=u.pop(),o=t.id,a=t.weight;if(!r.has(o)){var c=n(o);r.add(o),c.forEach((function(n,t){var r=a+n,c=e.get(t),l=i.get(t);(void 0===l||l>r&&(l/r>1.005||void 0!==c&&c<o))&&(i.set(t,r),u.push({id:t,weight:r}),e.set(t,o))}))}};u.size()>0;)c();return i.has(o)?e:void 0}(n,t,o);return e?function(n,t){for(var o=[],e=t;void 0!==e;e=n.get(e))o.push(e);return o.reverse()}(e,o):void 0},y=function(n,t,o,e){return(t-(n.length-1)*o-2*e*n.length)/n.reduce((function(n,t){return n+f(t)}),0)},w=function(n,t,o,e,r,i,a){var u=n.slice(t,o),c=y(u,e,i,a);return c>0?Math.pow(c-r,2)*u.length:void 0},C=function(n){var t=n.photos,o=n.layoutOptions,e=o.spacing,r=o.padding,i=o.containerWidth,a=o.targetRowHeight,u=o.rowConstraints,c=function(n){var t=n.photos,o=n.targetRowHeight,e=n.containerWidth,r=t.reduce((function(n,t){return Math.min(f(t),n)}),Number.MAX_VALUE);return m(e/o/r)+2}({photos:t,containerWidth:i,targetRowHeight:a}),l=function(n){var t=n.photos,o=n.layoutOptions,e=n.targetRowHeight,r=n.limitNodeSearch,i=n.rowConstraints;return function(n){var a,u,c=o.containerWidth,l=o.spacing,s=o.padding,d=new Map;d.set(n,0);for(var p=null!==(a=null===i||void 0===i?void 0:i.minPhotos)&&void 0!==a?a:1,h=Math.min(r,null!==(u=null===i||void 0===i?void 0:i.maxPhotos)&&void 0!==u?u:1/0),f=n+p;f<t.length+1&&!(f-n>h);f+=1){var m=w(t,n,f,c,e,l,s);if(void 0===m)break;d.set(f,m)}return d}}({photos:t,layoutOptions:o,targetRowHeight:a,limitNodeSearch:c,rowConstraints:u}),s=v(l,0,t.length);if(void 0!==s){for(var d=[],p=function(){var n=t.map((function(n,t){return{photo:n,index:t}})).slice(s[h-1],s[h]),o=y(n.map((function(n){return n.photo})),i,e,r);d.push(n.map((function(t,e){var r=t.photo,i=t.index;return{photo:r,layout:{height:o,width:o*f(r),index:i,photoIndex:e,photosCount:n.length}}})))},h=1;h<s.length;h+=1)p();return d}},x=function(n,t,o){var e=t.width,r=t.photosCount,i=o.spacing,a=o.padding,u=o.containerWidth,c=i*(r-1)+2*a*r;return"calc((".concat(n," - ").concat(c,"px) / ").concat(m((u-c)/e,5),")")},P=function(n,t){return"rows"!==t.layout?"calc(100% - ".concat(2*t.padding,"px)"):x("100%",n,t)},W=function(n,t,o){var e,r;return x(null!==(r=null===(e=n.match(/calc\((.*)\)/))||void 0===e?void 0:e[1])&&void 0!==r?r:n,t,o)},O=function(n){var t,o,e,r=n.photo,s=n.layout,d=n.layoutOptions,p=n.imageProps,h=void 0===p?{}:p,f=h.style,m=(0,a.Z)(h,c),g=n.renderPhoto,v=d.onClick,y=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({display:"block",boxSizing:"content-box",width:P(s,d),height:"auto",aspectRatio:"".concat(r.width," / ").concat(r.height)},d.padding?{padding:"".concat(d.padding,"px")}:null),("columns"===d.layout||"masonry"===d.layout)&&s.photoIndex<s.photosCount-1?{marginBottom:"".concat(d.spacing,"px")}:null),v?{cursor:"pointer"}:null),f),w=v?function(n){v({event:n,photo:r,index:s.index})}:void 0,C=(0,i.Z)((0,i.Z)({src:r.src,alt:null!==(t=r.alt)&&void 0!==t?t:"",title:r.title,onClick:w,style:y,className:"react-photo-album--photo",loading:"lazy",decoding:"async"},function(n,t,o){var e,r;return n.images&&n.images.length>0&&(e=n.images.concat(n.images.find((function(t){return t.width===n.width}))?[]:[{src:n.src,width:n.width,height:n.height}]).sort((function(n,t){return n.width-t.width})).map((function(n){return"".concat(n.src," ").concat(n.width,"w")})).join(", "),r=o.sizes?(o.sizes.sizes||[]).map((function(n){var e=n.viewport,r=n.size;return"".concat(e," ").concat(W(r,t,o))})).concat(W(o.sizes.size,t,o)).join(", "):"".concat(Math.ceil(t.width/o.containerWidth*100),"vw")),{srcSet:e,sizes:r}}(r,s,d)),m),x=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).wrapped,t=C.src,o=C.alt,e=C.srcSet,r=C.sizes,c=C.style,s=(0,a.Z)(C,l);return u.createElement("img",(0,i.Z)((0,i.Z)({alt:o},e?{srcSet:e,sizes:r}:null),{},{src:t,style:n?{display:"block",width:"100%",height:"100%"}:c},s))},O={display:(e=y).display,boxSizing:e.boxSizing,width:e.width,aspectRatio:e.aspectRatio,padding:e.padding,marginBottom:e.marginBottom,cursor:e.cursor};return u.createElement(u.Fragment,null,null!==(o=null===g||void 0===g?void 0:g({photo:r,layout:s,layoutOptions:d,imageProps:C,renderDefaultPhoto:x,wrapperStyle:O}))&&void 0!==o?o:x())},Z=function(n){var t=n.rowContainerProps,o=n.children;return u.createElement("div",(0,i.Z)({},t),o)},R=function(n){var t=n.layoutOptions,o=n.rowIndex,e=n.rowsCount,r=n.renderRowContainer,c=n.rowContainerProps,l=void 0===c?{}:c,d=l.style,p=(0,a.Z)(l,s),h=n.children,f=(0,i.Z)({className:"react-photo-album--row",style:(0,i.Z)((0,i.Z)({display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between"},o<e-1?{marginBottom:"".concat(t.spacing,"px")}:null),d)},p);return u.createElement(u.Fragment,null,(null!==r&&void 0!==r?r:Z)({layoutOptions:t,rowIndex:o,rowsCount:e,rowContainerProps:f,children:h}))},b=function(n){var t=n.photos,o=n.layoutOptions,e=n.renderPhoto,r=n.renderRowContainer,i=n.componentsProps,a=C({photos:t,layoutOptions:o});return a?u.createElement(u.Fragment,null,a.map((function(n,t){return u.createElement(R,{key:"row-".concat(t),layoutOptions:o,rowIndex:t,rowsCount:a.length,renderRowContainer:r,rowContainerProps:null===i||void 0===i?void 0:i.rowContainerProps},n.map((function(n){var t=n.photo,r=n.layout;return u.createElement(O,{key:t.key||t.src,photo:t,layout:r,layoutOptions:o,renderPhoto:e,imageProps:null===i||void 0===i?void 0:i.imageProps})})))}))):null},E=function(n,t,o,e){return function(n,t,o){for(var e=[o],r=o,i=t;i>0;i-=1)r=n.get(r)[i].node,e.push(r);return e.reverse()}(function(n,t,o,e){var i=new Map,a=new Set;a.add(o);for(var u=function(o){var u=(0,r.Z)(a.keys());a.clear(),u.forEach((function(r){var u=o>0?i.get(r)[o].weight:0;n(r).forEach((function(n){var c=n.neighbor,l=n.weight,s=i.get(c);s||(s=[],i.set(c,s));var d=u+l,p=s[o+1];(!p||p.weight>d&&(p.weight/d>1.0001||r<p.node))&&(s[o+1]={node:r,weight:d}),o<t-1&&c!==e&&a.add(c)}))}))},c=0;c<t;c+=1)u(c);return i}(n,t,o,e),t,e)},k=function(n){for(var t=n.path,o=n.photos,e=n.containerWidth,r=n.columnsGaps,i=n.columnsRatios,a=n.spacing,u=n.padding,c=[],l=i.reduce((function(n,t){return n+t}),0),s=function(n){var s=o.map((function(n,t){return{photo:n,index:t}})).slice(t[n],t[n+1]),d=i.reduce((function(t,o,e){return t+(r[n]-r[e])*o}),0),p=(e-(t.length-2)*a-2*(t.length-1)*u-d)*i[n]/l;c.push(s.map((function(n,t){var o=n.photo,e=n.index;return{photo:o,layout:{width:p,height:p/f(o),index:e,photoIndex:t,photosCount:s.length}}})))},d=0;d<t.length-1;d+=1)s(d);return c},M=function(n){var t=n.photos,o=n.layoutOptions,e=n.targetColumnWidth,r=o.columns,i=o.spacing,a=o.padding,u=o.containerWidth,c=[],l=[];if(t.length<=r){for(var s=t.length>0?t.reduce((function(n,t){return n+f(t)}),0)/t.length:1,d=0;d<r;d+=1)c[d]=2*a,l[d]=d<t.length?f(t[d]):s;return{columnsGaps:c,columnsRatios:l,columnsModel:k({path:Array.from({length:r+1}).map((function(n,o){return Math.min(o,t.length)})),photos:t,columnsRatios:l,columnsGaps:c,containerWidth:u,spacing:i,padding:a})}}for(var p=(t.reduce((function(n,t){return n+e/f(t)}),0)+i*(t.length-r)+2*a*t.length)/r,h=function(n){var t=n.photos,o=n.spacing,e=n.padding,r=n.targetColumnWidth,i=n.targetColumnHeight;return function(n){for(var a=[],u=1.5*i,c=r/f(t[n])+2*e,l=n+1;l<t.length+1&&(a.push({neighbor:l,weight:Math.pow(i-c,2)}),!(c>u||l===t.length));l+=1)c+=r/f(t[l])+o+2*e;return a}}({photos:t,targetColumnWidth:e,targetColumnHeight:p,spacing:i,padding:a}),m=E(h,r,0,t.length),g=0;g<m.length-1;g+=1){var v=t.slice(m[g],m[g+1]);c[g]=i*(v.length-1)+2*a*v.length,l[g]=1/v.reduce((function(n,t){return n+1/f(t)}),0)}return{columnsGaps:c,columnsRatios:l,columnsModel:k({path:m,photos:t,columnsRatios:l,columnsGaps:c,containerWidth:u,spacing:i,padding:a})}},z=function n(t){var o=t.photos,e=t.layoutOptions,r=e.columns,a=e.spacing,u=e.padding,c=e.containerWidth,l=M({photos:o,layoutOptions:e,targetColumnWidth:(c-a*(r-1)-2*u*r)/r}),s=l.columnsGaps,d=l.columnsRatios,p=l.columnsModel;return p.findIndex((function(n){return n.findIndex((function(n){var t=n.layout,o=t.width,e=t.height;return o<0||e<0}))>=0}))>=0?r>1?n({photos:o,layoutOptions:(0,i.Z)((0,i.Z)({},e),{},{columns:r-1})}):void 0:{columnsModel:p,columnsGaps:s,columnsRatios:d}},I=function(n){var t=n.photos,o=n.layoutOptions;return z({photos:t,layoutOptions:o})},S=function(n){var t=n.columnContainerProps,o=n.children;return u.createElement("div",(0,i.Z)({},t),o)},G=function(n){var t=n.layoutOptions,o=n.columnIndex,e=n.columnsCount,r=n.columnsGaps,i=n.columnsRatios,a=t.layout,u=t.spacing,c=t.padding;if("masonry"===a||!r||!i)return"calc((100% - ".concat(u*(e-1),"px) / ").concat(e,")");var l=i.reduce((function(n,t){return n+t}),0),s=i.reduce((function(n,t,e){return n+(r[o]-r[e])*t}),0);return"calc((100% - ".concat(m((e-1)*u+2*e*c+s,3),"px) * ").concat(m(i[o]/l,5)," + ").concat(2*c,"px)")},H=function(n){var t=n.layoutOptions,o=n.renderColumnContainer,e=n.children,r=n.columnContainerProps,c=void 0===r?{}:r,l=c.style,s=(0,a.Z)(c,d),h=(0,a.Z)(n,p),f=(0,i.Z)({className:"react-photo-album--column",style:(0,i.Z)({display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:G(n),justifyContent:"columns"===t.layout?"space-between":"flex-start"},l)},s);return u.createElement(u.Fragment,null,(null!==o&&void 0!==o?o:S)((0,i.Z)({layoutOptions:t,columnContainerProps:f,children:e},h)))},N=function(n){var t=n.photos,o=n.layoutOptions,e=n.renderPhoto,r=n.renderColumnContainer,i=n.componentsProps,a=I({photos:t,layoutOptions:o});if(!a)return null;var c=a.columnsModel,l=a.columnsRatios,s=a.columnsGaps;return u.createElement(u.Fragment,null,c.map((function(n,t){return u.createElement(H,{key:"column-".concat(t),layoutOptions:o,columnIndex:t,columnsCount:c.length,columnsGaps:s,columnsRatios:l,renderColumnContainer:r,columnContainerProps:null===i||void 0===i?void 0:i.columnContainerProps},n.map((function(n){var t=n.photo,r=n.layout;return u.createElement(O,{key:t.key||t.src,photo:t,layout:r,layoutOptions:o,renderPhoto:e,imageProps:null===i||void 0===i?void 0:i.imageProps})})))})))},j=function n(t){var o=t.photos,e=t.layoutOptions,r=e.columns,a=e.spacing,u=e.padding,c=(e.containerWidth-a*(r-1)-2*u*r)/r;if(c<=0)return r>1?n((0,i.Z)((0,i.Z)({},t),{},{layoutOptions:(0,i.Z)((0,i.Z)({},e),{},{columns:r-1})})):void 0;for(var l=[],s=0;s<r;s+=1)l[s]=0;var d=o.reduce((function(n,t,o){var e=l.reduce((function(n,t,o){return t<l[n]-1?o:n}),0);return l[e]=l[e]+c/f(t)+a+2*u,n[e].push({photo:t,index:o}),n}),Array.from({length:r}).map((function(){return[]})));return d.map((function(n){return n.map((function(t,o){var e=t.photo,r=t.index;return{photo:e,layout:{width:c,height:c/f(e),index:r,photoIndex:o,photosCount:n.length}}}))}))},A=function(n){var t=n.photos,o=n.layoutOptions,e=n.renderPhoto,r=n.renderColumnContainer,i=n.componentsProps,a=j({photos:t,layoutOptions:o});return a?u.createElement(u.Fragment,null,a.map((function(n,t){return u.createElement(H,{key:"masonry-column-".concat(t),layoutOptions:o,columnsCount:a.length,columnIndex:t,renderColumnContainer:r,columnContainerProps:null===i||void 0===i?void 0:i.columnContainerProps},n.map((function(n){var t=n.photo,r=n.layout;return u.createElement(O,{key:t.key||t.src,photo:t,layout:r,layoutOptions:o,renderPhoto:e,imageProps:null===i||void 0===i?void 0:i.imageProps})})))}))):null},F=function(n){var t=n.containerProps,o=n.children,e=n.containerRef;return u.createElement("div",(0,i.Z)({ref:e},t),o)},B=function(n){var t=n.layout,o=n.renderContainer,e=n.children,r=n.containerRef,c=n.containerProps,l=void 0===c?{}:c,s=l.style,d=(0,a.Z)(l,h),p=(0,i.Z)({className:"react-photo-album react-photo-album--".concat(t),style:(0,i.Z)({display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:"rows"===t?"column":"row"},s)},d);return u.createElement(u.Fragment,null,(null!==o&&void 0!==o?o:F)({containerProps:p,containerRef:r,layout:t,children:e}))},D=function(n,t){var o=t.newContainerWidth,e=t.newScrollbarWidth,r=n.containerWidth,i=n.scrollbarWidth;return void 0!==r&&void 0!==i&&void 0!==o&&void 0!==e&&o>r&&o-r<=20&&e<i?{containerWidth:r,scrollbarWidth:e}:r!==o||i!==e?{containerWidth:o,scrollbarWidth:e}:n},_=function(n,t){var o=null===n||void 0===n?void 0:n.clientWidth;if(void 0!==o&&t&&t.length>0){var e=(0,r.Z)(t.filter((function(n){return n>0}))).sort((function(n,t){return t-n}));e.push(Math.floor(e[e.length-1]/2));var i=o;o=e.find((function(n,t){return n<=i||t===e.length-1}))}return o},L=Object.freeze([1200,600,300,0]),U=function(n,t){return"function"===typeof n?n(t):n},V=function(n,t){return"undefined"!==typeof n?U(n,t):void 0},X=function(n,t){var o=L.findIndex((function(n){return n<=t}));return U(n[o>=0?o:0],t)},q=function(n,t,o){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=V(n,t);return Math.round(Math.max(void 0===r?X(o,t):r,e))},J=function(n,t,o){var e=n.photos,r=n.layout,a=n.renderPhoto,c=n.renderRowContainer,l=n.renderColumnContainer,s=function(n){var t=n.layout,o=n.onClick,e=n.containerWidth,r=n.targetRowHeight,i=n.rowConstraints,a=n.columns,u=n.spacing,c=n.padding,l=n.sizes;return{layout:t,onClick:o,containerWidth:e,columns:q(a,e,[5,4,3,2],1),spacing:q(u,e,[20,15,10,5]),padding:q(c,e,[0,0,0,0,0]),targetRowHeight:q(r,e,[function(n){return n/5},function(n){return n/4},function(n){return n/3},function(n){return n/2}]),rowConstraints:V(i,e),sizes:l}}((0,i.Z)({containerWidth:t},n)),d={photos:e,renderPhoto:a,componentsProps:o};return"rows"===r?u.createElement(b,(0,i.Z)({layoutOptions:s,renderRowContainer:c},d)):"columns"===r?u.createElement(N,(0,i.Z)({layoutOptions:s,renderColumnContainer:l},d)):u.createElement(A,(0,i.Z)({layoutOptions:s,renderColumnContainer:l},d))},K=function(n){var t=n.photos,o=n.layout,r=n.renderContainer,i=n.defaultContainerWidth,a=function(n,t){var o=u.useReducer(D,{containerWidth:t}),r=(0,e.Z)(o,2),i=r[0].containerWidth,a=r[1],c=u.useRef(null),l=u.useRef();return{containerRef:u.useCallback((function(t){var o;null===(o=l.current)||void 0===o||o.disconnect(),l.current=void 0,c.current=t;var e=function(){return a({newContainerWidth:_(c.current,n),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth})};e(),t&&"undefined"!==typeof ResizeObserver&&(l.current=new ResizeObserver(e),l.current.observe(t))}),[n]),containerWidth:i}}(function(n){var t=u.useRef(n);return n&&t.current&&n.join()===t.current.join()||(t.current=n),t.current}(n.breakpoints),i),c=a.containerRef,l=a.containerWidth;if(!o||!["rows","columns","masonry"].includes(o)||!Array.isArray(t))return null;var s=function(n,t){return"function"===typeof n?n(t):n}(n.componentsProps,l);return u.createElement(B,{layout:o,containerRef:c,renderContainer:r,containerProps:null===s||void 0===s?void 0:s.containerProps},l?J(n,l,s):null)}}}]);
//# sourceMappingURL=781.7c52c7c6.chunk.js.map