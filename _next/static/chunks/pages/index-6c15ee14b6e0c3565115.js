(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7182:function(e,n,t){var r={"./0-1.mdx":8719,"./1-2.mdx":8532,"./2-3.mdx":1790,"./3-4.mdx":8982,"./4-5.mdx":3291};function i(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=c,e.exports=i,i.id=7182},9863:function(e,n,t){var r={"./step0":9951,"./step0.tsx":9951,"./step1":3212,"./step1.tsx":3212,"./step2":1521,"./step2.tsx":1521,"./step3":5537,"./step3.tsx":5537,"./step4":1784,"./step4.tsx":1784,"./step5":4292,"./step5.tsx":4292};function i(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=c,e.exports=i,i.id=9863},9951:function(e,n,t){"use strict";t.r(n);var r=t(4762),i=t(5893),c=function(){var e=(0,r.E)(),n=e.moveToAvailableSection,t=e.addNextStepToAvailableSections;return(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("h1",{children:"\u3088\u3046\u3053\u305d\uff01"}),(0,i.jsx)("button",{className:" text-3xl m-2 px-4 py-2 rounded-lg border-white border-2  bg-gray-100 hover:bg-gray-700  text-gray-700 hover:text-gray-100 ",onClick:function(){t(),setTimeout((function(){n((function(e){return e+1}))}),500)},children:"Let's Start!"})]})};n.default=(0,i.jsx)(c,{})},3212:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return a}});var r=t(7294),i=t(4893),c=t(73),o=t(5893),s={hint:"\u524d\u306e\u30da\u30fc\u30b8\u306b\u5834\u6240\u306e\u7279\u5fb4\u304c\u30fb\u30fb\uff1f",answer:"No.4 \u5834\u6240D"},a=function(){var e=(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:"Q1. \u5e7c\u99b4\u67d3\u307f\u304c\u3044\u308b\u5834\u6240\u306f\u30fb\u30fb\uff1f"})});return(0,o.jsx)(c.R,{answer:"3",header:e,modal:s,children:function(e){var n=e.getValues,t=e.setValue,c=e.watch;return(0,r.useMemo)((function(){return(0,o.jsx)("div",{className:"flex",children:[0,1,2,3].map((function(e){return(0,o.jsx)(i.Q,{src:"images/step1/".concat(e+1,".jpg"),title:"\u5834\u6240".concat("ABCD"[e]),isSelect:n("value")===String(e),filter:"brightness-75",onClick:function(){return t("value",String(e))},imgHeight:"30vh"},e)}))})}),[c("value")])}})};n.default=(0,o.jsx)("div",{children:(0,o.jsx)(a,{})})},1521:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return l}});var r=t(2809),i=t(73),c=t(5893);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a={hint:"\u6f22\u5b57\u306e\u66f8\u304b\u308c\u3066\u3044\u308b\u90e8\u5206\u3092\u8aad\u3080\u3068\u30fb\u30fb\uff1f",answer:"\u304d\u3093\u3071\u3064"},l=function(){var e=(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Q2. \u96a0\u3055\u308c\u3066\u3044\u308b\u6587\u5b57\u306f\u30fb\u30fb\uff1f"}),(0,c.jsx)("img",{src:"images/step2/main.png",className:"max-w-full mb-4",alt:""})]});return(0,c.jsx)(i.R,{value:"\u25cb\u25cb\u25cb\u25cb",answer:"\u304d\u3093\u3071\u3064",header:e,modal:a,children:function(e){var n=e.register;return(0,c.jsx)("div",{className:"text-2xl text-gray-700",children:(0,c.jsx)("input",s({type:"text",className:"text-center",style:{letterSpacing:"1em",paddingLeft:"1em",margin:"0 0.3em"}},n("value")))})}})};n.default=(0,c.jsx)("div",{children:(0,c.jsx)(l,{})})},5537:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return l}});var r=t(7294),i=t(4893),c=t(73),o=t(5893),s=["\u30a8\u30df\u30ea\u30fc","\u30b1\u30f3","\u30dc\u30d6","\u30a6\u30a3\u30ea\u30a2\u30e0"],a={hint:(0,o.jsx)("div",{className:"whitespace-pre-wrap",children:"\n4\u4eba\u306e\u30a2\u30ea\u30d0\u30a4\u3092\u6574\u7406\u3057\u3066\u307f\u305f\u3088\uff01\n\u30a8\u30df\u30ea\u30fc\u300c\u79c1\u306f\u305a\u3063\u3068\u90e8\u5c4b\u306b\u5c45\u305f\u308f\u3002\u300d\n\u30b1\u30f3\u300c\u50d5\u306f\u30ec\u30b9\u30c8\u30e9\u30f3\u3067\u98df\u4e8b\u3092\u3068\u3063\u3066\u3044\u305f\u3088\u3002\u300d\n\u30dc\u30d6\u300c\u4ffa\u306f\u55ab\u7159\u5ba4\u3067\u7159\u8349\u3092\u5438\u3063\u3066\u3044\u305f\u3051\u3069\u3001\u3055\u3063\u304d\u90e8\u5c4b\u306b\u623b\u3063\u305f\u3068\u3053\u308d\u3060\u3088\u3002\u300d\n\u30a6\u30a3\u30ea\u30a2\u30e0\u300c\u79c1\u306f\u5148\u307b\u3069\u30db\u30c6\u30eb\u306b\u5e30\u3063\u3066\u304d\u3066\u3001\u30a8\u30f3\u30c8\u30e9\u30f3\u30b9\u3067\u4f11\u61a9\u3057\u3066\u3044\u307e\u3057\u305f\u3002\u300d\n"}),answer:"\u30dc\u30d6"},l=function(){var e=(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:"Q3. \u72af\u4eba\u306f\u3069\u306e\u4eba\u30fb\u30fb\uff1f"})});return(0,o.jsx)(c.R,{answer:"2",header:e,modal:a,children:function(e){var n=e.getValues,t=e.setValue,c=e.watch;return(0,r.useMemo)((function(){return(0,o.jsx)("div",{className:"flex",children:s.map((function(e,r){return(0,o.jsx)(i.Q,{src:"images/step3/".concat(r+1,".png"),title:e,isSelect:n("value")===String(r),onClick:function(){return t("value",String(r))},imgHeight:"35vh"},r)}))})}),[c("value")])}})};n.default=(0,o.jsx)("div",{children:(0,o.jsx)(l,{})})},1784:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return j},default:function(){return b}});var r=t(3789),i=t(7294),c=t(2809),o=t(219),s=t(318),a=t(5948),l=t(5321),u=t(5893),d=["children","container"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(e){var n=e.children,t=e.container,r=(0,o.Z)(e,d),c=(0,i.useState)([]),f=c[0],v=c[1];return(0,i.useEffect)((function(){v(r.items.map((function(e,n){return{key:"key-".concat(n),value:e}})))}),[]),(0,u.jsx)(a.Z5,{onDragEnd:function(e){var n;if(e.destination&&e.destination.index!==e.source.index){var t=e.source.index,i=e.destination.index,c=function(e,n,t){console.log("move",n,"=>",t);var r=Array.from(e),i=r.splice(n,1),c=(0,s.Z)(i,1)[0];return r.splice(t,0,c),r}(f,t,i);v(c),null===(n=r.onDragEnd)||void 0===n||n.call(r,c.map((function(e){return e.value})))}},children:(0,u.jsx)(a.bK,{droppableId:"list",direction:"horizontal",children:function(e){return(0,u.jsxs)(l.n,{element:null!==t&&void 0!==t?t:(0,u.jsx)("div",{className:"flex justify-center"}),props:p({children:n,ref:e.innerRef},e.droppableProps),children:[f.map((function(e,t){return(0,u.jsx)(a._l,{draggableId:e.key,index:t,children:function(r){return i.cloneElement(n(e.value,e.key,t),p(p({ref:r.innerRef,key:e.key},r.draggableProps),r.dragHandleProps))}},e.key)})),e.placeholder]})}})})},m=t(73);var x=["\u308d"].concat((0,r.Z)(Array.from("\u3058\u3046\u3089\u306e\u307f").sort((function(){return Math.random()-.5}))),["\u305b"]),h={hint:"\u6700\u521d\u3068\u6700\u5f8c\u306e\u6587\u5b57\u306f\u305d\u306e\u307e\u307e\u3060\u3088\uff01\uff08\u308d\uff1f\uff1f\uff1f\uff1f\uff1f\u305b\uff09",answer:"\u308d\u3058\u3046\u3089\u306e\u307f\u305b"};var j=function(){var e=function(){var e=(0,i.useState)(!0),n=e[0],t=e[1];return(0,i.useEffect)((function(){t(!1)}),[]),n}(),n=(0,i.useState)(x),t=n[0],r=n[1],c=(0,u.jsx)("div",{children:(0,u.jsx)("h1",{children:"Q4. \u30c6\u30ec\u30dd\u30fc\u30bf\u30fc\u306e\u5834\u6240\u306f\u30fb\u30fb\uff1f"})});return(0,u.jsx)(m.R,{value:x.join(""),answer:"\u308d\u3058\u3046\u3089\u306e\u307f\u305b",header:c,modal:h,children:function(n){var i=n.setValue;return e?null:(0,u.jsx)(v,{items:t,onDragEnd:function(e){r(e),i("value",e.join(""))},container:(0,u.jsx)("div",{className:"flex justify-center w-96 rounded border-2 bg-gray-500 border-gray-100"}),children:function(e){return(0,u.jsx)("div",{className:"px-2 py-1 m-2 text-center flex-grow rounded bg-gray-100 text-gray-700",children:e})}})}})},b=(0,u.jsx)("div",{children:(0,u.jsx)(j,{})})},4292:function(e,n,t){"use strict";t.r(n);var r=t(5893);n.default=(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"\u304a\u75b2\u308c\u69d8\u3067\u3057\u305f\uff01"})})},4893:function(e,n,t){"use strict";t.d(n,{Q:function(){return i}});var r=t(5893);function i(e){var n=e.src,t=e.title,i=e.isSelect,c=e.imgHeight,o=e.filter,s=e.onClick,a=e.children;return(0,r.jsx)("div",{className:"\n      flex m-1 rounded-xl text-xl text-black overflow-hidden bg-none border-4 border-blue-300\n      ".concat(i?"border-opacity-100":"border-opacity-0","\n    "),onClick:s,children:(0,r.jsxs)("div",{className:"bg-gray-50 card-overlay",children:[(0,r.jsxs)("div",{className:"relative",style:{height:c},children:[(0,r.jsx)("img",{src:n,className:"h-full w-full filter ".concat(o||"")}),(0,r.jsx)("div",{className:"absolute left-0 bottom-0 px-2 pb-2",children:(0,r.jsx)("span",{className:"text-3xl text-white",children:t})})]}),a&&(0,r.jsx)("div",{className:"px-2 pb-2",children:a})]})})}},73:function(e,n,t){"use strict";t.d(n,{R:function(){return p}});var r=t(2283),i=t(4762),c=t(318),o=(t(7294),t(5321)),s=t(9656),a=t(5964),l=t(5893),u=function(){var e=function(){var e=a.y.useWithUpdate(),n=(0,c.Z)(e,2),t=(n[0],n[1]),r=function(){t((function(e){e.modal=void 0}))};return function(e){t((function(n){n.modal?(n.modal=void 0,setTimeout((function(){t((function(n){n.modal=(0,l.jsx)(e,{close:r})}))}),300)):n.modal=(0,l.jsx)(e,{close:r})}))}}();return function n(t){e((function(e){var r=e.close;return(0,l.jsx)(s.F0,{close:r,children:(0,l.jsx)(o.n,{element:t,props:{open:n,close:r},children:t.props.children})})}))}},d=t(8291);function f(e){return"number"===typeof e&&isFinite(e)}var p=function(e){var n=e.value,t=void 0===n?"":n,c=e.answer,o=e.header,a=e.modal,p=e.children,v=(0,i.E)(),m=v.isAvailableSction,x=v.moveToAvailableSection,h=v.addNextStepToAvailableSections,j=(0,r.cI)({defaultValues:{value:t}}),b=j.handleSubmit,g=(j.setValue,u()),y=(0,d.n)();return(0,l.jsxs)("form",{className:"flex flex-col items-center",onSubmit:b((function(e){if(e.value)if(e.value!==c)g((0,l.jsx)(s.Ed,{children:"\u56de\u7b54\u304c\u9055\u3046\u307f\u305f\u3044\u3060\u30fb\u30fb\u30fb"}));else{m(y+1)||h(),g((0,l.jsx)(s.Ed,{onConfirm:function(){setTimeout((function(){x((function(e){return e+1}))}),100)},children:"\u304a\u3081\u3067\u3068\u3046\uff01\u6b63\u89e3\uff01"}))}else g((0,l.jsx)(s.Ed,{children:"\u56de\u7b54\u3092\u5165\u529b\u3057\u3066\u306d\uff01"}))})),children:[o,(0,l.jsx)("div",{children:null===p||void 0===p?void 0:p(j)}),(0,l.jsxs)("div",{className:"text-xl mt-2",children:[(0,l.jsx)("button",{type:"submit",className:"px-2 py-1 m-1 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded",children:"\u6c7a\u5b9a"}),(0,l.jsx)("button",{type:"button",className:"px-2 py-1 m-1 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded",onClick:function(){var e,n;g((0,l.jsx)(s.$G,{hint:null!==(e=null===a||void 0===a?void 0:a.hint)&&void 0!==e?e:"\u30d2\u30f3\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093",answer:"\u7b54\u3048\uff1a".concat(null!==(n=null===a||void 0===a?void 0:a.answer)&&void 0!==n?n:f(parseInt(c))?"No.".concat(parseInt(c)+1):c)}))},children:"\u30d2\u30f3\u30c8\u3092\u898b\u308b"})]})]})}},4762:function(e,n,t){"use strict";t.d(n,{E:function(){return s}});var r=t(3789),i=t(318),c=t(5964),o=t(7057),s=function(){var e=c.y.useWithUpdate(),n=(0,i.Z)(e,2),t=n[0],s=n[1],a=function(e){return t.state.section.includes(e)},l=function(){if("undefined"===typeof document)return 0;var e=Array.from(document.querySelectorAll(".section-container > section")),n=e.findIndex((function(e){return e.querySelector(".hidden:scope .section-type-step")}));return 0<=n?n:e.length-1};return{isAvailableSction:a,moveToAvailableSection:function(e){(0,o.QO)((function(n){var t=e(n);return a(t)?t:n}))},getNextStepIndex:l,addNextStepToAvailableSections:function(){s((function(){for(var e=Math.max.apply(Math,(0,r.Z)(t.state.section))+1,n=l(),i=e;i<=n;i++)t.state.section.push(i)}))}}}},6425:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return C},default:function(){return Z},useIsFirst:function(){return E}});var r=t(3789),i=t(7294),c=t(318),o=t(4762),s=t(7057),a=t(5893),l=function(e){var n=(0,i.useState)(e),t=n[0],r=n[1],c=(0,i.useRef)(null);return c.current=t,{get value(){return c.current},set value(e){r(e)}}},u=function(e,n){var t=(0,i.useRef)(!0);(0,i.useEffect)((function(){t.current?t.current=!1:e()}),n)},d=function(e){var n,t=e.children,d=e.fixed,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onStart,t=e.onEnd,c=(0,i.useRef)(null),o=l(0),s=l(0),a=o.value%s.value,d=(a<s.value/2?0:s.value)-a||0,f=Math.abs(d)<.1;function p(e,n){return(0,i.useMemo)((function(){return console.log("render"),e(c)}),[f].concat((0,r.Z)(null!==n&&void 0!==n?n:[])))}return(0,i.useEffect)((function(){var e;null===(e=c.current)||void 0===e||e.addEventListener("scroll",(function(e){o.value=e.target.scrollLeft})),s.value=document.documentElement.getBoundingClientRect().width}),[]),u((function(){f?(console.log("scroll end"),null===t||void 0===t||t((o.value+d)/s.value)):(console.log("scroll start"),null===n||void 0===n||n((o.value+d)/s.value))}),[f]),p}({onEnd:function(e){(0,s.QO)((function(){return e}))}}),p=null!==(n=(null!==t&&void 0!==t?t:{}).length)&&void 0!==n?n:0,v=(0,o.E)().isAvailableSction,m=function(e,n){return[e,v(n)?"flex":"hidden"]};return f((function(e){var n;return(0,a.jsx)("div",{ref:e,className:"flex overflow-x-auto section-container",style:{scrollSnapType:"x mandatory",scrollBehavior:"smooth"},children:(null!==(n={0:[],1:[t]}[p])&&void 0!==n?n:t).map(m).filter((function(e){var n=(0,c.Z)(e,2);n[0];return n[1]})).map((function(e,n){var t=(0,c.Z)(e,2),r=t[0],i=t[1];return(0,a.jsx)("section",{id:"section".concat(n),className:"".concat(i," w-screen h-screen bg-gray-800 justify-center items-center"),style:{scrollSnapAlign:"start"},children:(0,a.jsxs)("div",{className:"box-border w-screen h-screen flex justify-center items-center text-white border-l-2 border-r-2 border-gray-700",children:[r,0===n&&d&&d]})},n)}))})}),[t,d])},f=function(e){return e.isFullScreen?(0,a.jsxs)("div",{className:"flex justify-between items-center w-screen bg-gray-600 text-white text-xs lg:text-base",children:[(0,a.jsxs)("div",{className:"mx-1 whitespace-nowrap text-center",children:[(0,a.jsx)("span",{children:"\u6388\u696d\u4e3b\u50ac\uff1aN\u30fbS\u9ad8"}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)("span",{children:"\u5354\u529b\uff1a\u682a\u5f0f\u4f1a\u793eSCRAP"}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)("span",{children:"\u4f01\u753b\u5236\u4f5c\uff1aN\u30fbS\u9ad8\u751f"})]}),(0,a.jsx)("div",{className:"mx-1 whitespace-nowrap",children:(0,a.jsx)("span",{children:"SCRAP\u304c\u4e3b\u50ac/\u516c\u8a8d\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})})]}):(0,a.jsxs)("div",{className:"relative flex justify-between w-screen bg-gray-600 text-white text-xs lg:text-base",children:[(0,a.jsxs)("div",{className:"flex mx-16",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{children:"\u6388\u696d\u4e3b\u50ac\uff1a"}),(0,a.jsx)("div",{children:"\u5354\u529b\uff1a"}),(0,a.jsx)("div",{children:"\u4f01\u753b\u5236\u4f5c\uff1a"})]}),(0,a.jsxs)("div",{className:"ml-2",children:[(0,a.jsx)("div",{children:"N\u30fbS\u9ad8"}),(0,a.jsx)("div",{children:"\u682a\u5f0f\u4f1a\u793eSCRAP"}),(0,a.jsx)("div",{children:"N\u30fbS\u9ad8\u751f"})]})]}),(0,a.jsx)("div",{className:"flex items-center mx-2",children:(0,a.jsxs)("div",{children:["\u300c\u30ea\u30a2\u30eb\u8131\u51fa\u30b2\u30fc\u30e0\u300d\u306f\u682a\u5f0f\u4f1a\u793eSCRAP\u306e\u767b\u9332\u5546\u6a19\u3067\u3059\u3002",(0,a.jsx)("br",{}),"\u682a\u5f0f\u4f1a\u793eSCRAP\u3068N\u30fbS\u9ad8\u3067\u5b9f\u65bd\u3057\u305f\u6388\u696d\u300c\u30ea\u30a2\u30eb\u8131\u51fa\u30b2\u30fc\u30e0\u306e\u4f5c\u308a\u65b9\u300d\u306e\u4e00\u74b0\u3067",(0,a.jsx)("br",{}),"\u751f\u5f92\u304c\u5236\u4f5c\u3057\u305f\u3082\u306e\u3067\u3042\u308a\u3001SCRAP\u304c\u4e3b\u50ac/\u516c\u8a8d\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]})})]})},p=t(2809),v=t(219),m=["children"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,p.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.children,t=(0,v.Z)(e,m);return(0,a.jsx)("button",h(h({},t),{},{className:" w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-gray-600 hover:bg-gray-500 text-white shadow-md transform -rotate-45 ",children:n}))},b=function(e){var n=e.isFullScreen,t=e.toggleIsFullScreen;return n?(0,a.jsx)("div",{className:"relative w-screen",children:(0,a.jsx)("div",{className:"absolute right-0 top-full p-2",children:(0,a.jsx)(j,{onClick:function(){return t()},children:"\u2192\u2190"})})}):(0,a.jsxs)("div",{className:"relative w-screen",children:[(0,a.jsxs)("div",{className:"flex justify-between items-end w-screen bg-gray-600 text-white text-xs lg:text-base",children:[(0,a.jsx)("div",{className:"mx-2 my-1 whitespace-nowrap text-center",children:(0,a.jsx)("span",{className:"text-3xl font-thin",style:{fontFamily:'"Noto Sans JP", sans-serif'},children:"\u30d3\u30d0\u30ea\u30fc\u30d2\u30eb\u30ba\u304b\u3089\u306e\u8131\u51fa\uff01"})}),(0,a.jsx)("div",{className:"mx-2 my-1 whitespace-nowrap",children:(0,a.jsx)("span",{children:"\u5236\u4f5c\uff1a\u30d7\u30edN\u03b1 \u6a2a\u6d5c D-17"})})]}),(0,a.jsx)("div",{className:"absolute right-0 top-full p-2",children:(0,a.jsx)(j,{onClick:function(){return t()},children:"\u2190\u2192"})})]})},g=["children","disabled"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,p.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function(e){var n=e.children,t=e.disabled,r=(0,v.Z)(e,g);return(0,a.jsx)("button",w(w({className:"\n      w-8 lg:w-14 h-8 lg:h-14 m-2 text-base lg:text-4xl \n      rounded-full bg-gray-600 shadow-md \n      ".concat(t?"hover:bg-gray-600 text-gray-500 cursor-default":"hover:bg-gray-500 text-white","\n    ")},r),{},{disabled:t,children:n}))},O=function(e){var n=(0,i.useState)(!1),t=n[0],r=n[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"fixed top-0",children:(0,a.jsx)(b,{isFullScreen:t,toggleIsFullScreen:function(){return r(!t)}})}),(0,a.jsx)("div",{className:"fixed bottom-0",children:(0,a.jsx)(f,{isFullScreen:t})}),(0,a.jsx)("div",{className:"fixed left-0 top-1/2 transform -translate-y-1/2",children:(0,a.jsx)(N,{onClick:function(){var n;null===(n=e.onClickSideButton)||void 0===n||n.call(e,-1)},disabled:e.disabledSideButton(-1),children:"\u25c0\ufe0e"})}),(0,a.jsxs)("div",{className:"fixed right-0 top-1/2 transform -translate-y-1/2",children:[(0,a.jsx)(N,{onClick:function(){var n;null===(n=e.onClickSideButton)||void 0===n||n.call(e,1)},disabled:e.disabledSideButton(1),children:"\u25b6\ufe0e"}),(0,a.jsx)("br",{})]})]})};function S(e){var n=e.children,t=e.deps;return(0,i.useMemo)(n,t)}var k=t(5964),P=t(8291);function D(e){return e.keys().map((function(n){return e(n)}))}function E(){var e=(0,i.useState)(!0),n=e[0],t=e[1];return!!n&&(t(!1),!0)}var C=function(){var e,n=D(t(7182)),i=D(t(9863)).filter((function(e,n){return n%2})),c=(e=i.length,Array.from({length:e},(function(e,n){return n}))).map((function(e,n){return function(){return i[n].default}})).map((function(e,t){var i,c;return[{type:"step",Section:e}].concat((0,r.Z)((null!==(i=null===(c=n[t])||void 0===c?void 0:c.default)&&void 0!==i?i:[]).map((function(e){return{type:"between-step",Section:e}}))))})).flat(),s=(0,o.E)(),l=s.isAvailableSction,u=s.moveToAvailableSection,f=E(),p=(0,P.n)(),v=k.y.use();return(0,a.jsx)(d,{fixed:(0,a.jsx)(O,{disabledSideButton:function(e){return!f&&!l(p+e)},onClickSideButton:function(e){return u((function(n){return n+e}))}}),children:c.map((function(e,n){var t=e.type,r=e.Section;return(0,a.jsx)("div",{className:"markdown-body section-type-".concat(t),children:(0,a.jsx)(S,{deps:[v],children:function(){return(0,a.jsx)(r,{},n)}})},n)}))})},Z=C},8291:function(e,n,t){"use strict";t.d(n,{n:function(){return c}});var r=t(7294),i=t(7057),c=function(){var e=(0,r.useState)(0),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e;t(Number(null!==(e=(0,i.Rp)().match(/\d+$/gm))&&void 0!==e?e:0)),window.addEventListener("hashchange",(function(){var e;t(Number(null!==(e=(0,i.Rp)().match(/\d+$/gm))&&void 0!==e?e:0))}))}),[]),n}},8719:function(e,n,t){"use strict";t.r(n);var r=t(159),i=t(219),c=(t(7294),t(3905)),o=["components"],s=["components"],a=["components"];n.default=[function(){var e={};function n(n){var t=n.components,s=(0,i.Z)(n,o);return(0,c.kt)("wrapper",(0,r.Z)({},e,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u6570\u65e5\u524d\u306b\u884c\u65b9\u4e0d\u660e\u306b\u306a\u3063\u305f\u5e7c\u99b4\u67d3\u304b\u3089\u4e00\u4ef6\u306e\u30e1\u30fc\u30eb\u304c\u5c4a\u3044\u3066\u3044\u305f\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u305d\u308c\u306b\u3088\u308b\u3068\u5e7c\u99b4\u67d3\u306f\u3069\u3046\u3084\u3089\u30db\u30c6\u30eb\u306e\u4e00\u5ba4\u306b\u9589\u3058\u8fbc\u3081\u3089\u308c\u3066\u3044\u308b\u3068\u306e\u3053\u3068\u3060\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u3055\u3089\u306b\u9a5a\u304f\u3053\u3068\u306b\u3001\u90e8\u5c4b\u306b\u7f6e\u3044\u3066\u3042\u308b\u65b0\u805e\u3084\u672c\u304b\u3089\u5bdf\u3059\u308b\u306b\u3069\u3046\u3084\u3089\u3042\u308b\u6620\u753b\u306e\u4e2d\u306e\u4e16\u754c\u306b\u5165\u3063\u3066\u3057\u307e\u3063\u305f\u3089\u3057\u3044\uff01",(0,c.kt)("br",{parentName:"p"}),"\n","\u306a\u306b\u304b\u306e\u62cd\u5b50\u306b\u6620\u753b\u306e\u4e2d\u306b\u5165\u3063\u3066\u3057\u307e\u3044\u3001\u6c17\u3092\u5931\u3063\u3066\u3044\u308b\u9593\u306b\u5076\u7136\u8a98\u62d0\u3055\u308c\u3066\u3057\u307e\u3063\u305f\u3088\u3046\u3060\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u60c5\u5831\u3084\u8b0e\u3092\u983c\u308a\u306b\u3057\u3066\u3001\u5e7c\u99b4\u67d3\u3092\u6620\u753b\u304b\u3089\u6551\u3044\u51fa\u305d\u3046\uff01  "))}return n.isMDXComponent=!0,n}(),function(){var e={};function n(n){var t=n.components,o=(0,i.Z)(n,s);return(0,c.kt)("wrapper",(0,r.Z)({},e,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u200b\u200b\u5e7c\u99b4\u67d3\u306b\u3088\u308b\u3068\u3001\u3061\u3087\u3046\u3069\u72af\u4eba\u304c\u5916\u51fa\u3057\u3066\u3044\u308b\u306e\u3067\u30e1\u30fc\u30eb\u3067\u4eca\u3044\u308b\u5834\u6240\u306e\u60c5\u5831\u3092\u9001\u3063\u3066\u304f\u308c\u308b\u3089\u3057\u3044\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u9001\u3089\u308c\u305f\u60c5\u5831\u306f\u3001\u300c\u7a93\u304b\u3089\u898b\u3048\u308b\u3082\u306e\u300d\u3068\u300c\u30db\u30c6\u30eb\u306b\u95a2\u3059\u308b\u60c5\u5831\u300d\u3060\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u9589\u3058\u3053\u3081\u3089\u308c\u3066\u3057\u307e\u3063\u305f\u5e7c\u99b4\u67d3\u306e\u5c45\u5834\u6240\u3092\u30de\u30c3\u30d7\u3068\u30d2\u30f3\u30c8\u3092\u4f7f\u3044\u306a\u304c\u3089\u7a81\u304d\u6b62\u3081\u3088\u3046\uff01  "))}return n.isMDXComponent=!0,n}(),function(){var e={};function n(n){var t=n.components,o=(0,i.Z)(n,a);return(0,c.kt)("wrapper",(0,r.Z)({},e,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("img",{src:"images/between-steps/email.png",style:{width:"70vw",marginBottom:"30px !important"}}))}return n.isMDXComponent=!0,n}()]},8532:function(e,n,t){"use strict";t.r(n);var r=t(159),i=t(219),c=(t(7294),t(3905)),o=["components"],s=["components"];n.default=[function(){var e={};function n(n){var t=n.components,s=(0,i.Z)(n,o);return(0,c.kt)("wrapper",(0,r.Z)({},e,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u3069\u3046\u3084\u3089\u3001\u5e7c\u99b4\u67d3\u306e\u5c45\u5834\u6240\u3068\u601d\u308f\u308c\u308b\u30db\u30c6\u30eb\u3092\u7279\u5b9a\u3067\u304d\u305f\uff01  "))}return n.isMDXComponent=!0,n}(),function(){var e={};function n(n){var t=n.components,o=(0,i.Z)(n,s);return(0,c.kt)("wrapper",(0,r.Z)({},e,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u3055\u3089\u306b\u8a71\u3092\u805e\u304f\u3068\u3001\u58c1\u306b\u72af\u4eba\u7279\u5b9a\u306e\u30d2\u30f3\u30c8\u3068\u306a\u308b\u3088\u3046\u306a\u60c5\u5831\u304c\u66f8\u3044\u3066\u3042\u3063\u305f\u3088\u3046\u3060\uff01",(0,c.kt)("br",{parentName:"p"}),"\n","\u3060\u304c\u6697\u53f7\u306e\u3088\u3046\u306a\u5f62\u306b\u306a\u3063\u3066\u304a\u308a\u8b0e\u3092\u89e3\u304b\u306a\u3051\u308c\u3070\u60c5\u5831\u306f\u5165\u624b\u3067\u304d\u306a\u3044\u3089\u3057\u3044\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u8b0e\u3092\u89e3\u3044\u3066\u72af\u4eba\u7279\u5b9a\u306e\u30d2\u30f3\u30c8\u3092\u7a81\u304d\u6b62\u3081\u3088\u3046\uff01"))}return n.isMDXComponent=!0,n}()]},1790:function(e,n,t){"use strict";t.r(n);var r=t(159),i=t(219),c=(t(7294),t(3905)),o=["components"];n.default=[function(){var e={};function n(n){var t=n.components,s=(0,i.Z)(n,o);return(0,c.kt)("wrapper",(0,r.Z)({},e,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u7a81\u7136\u3001\u5e7c\u99b4\u67d3\u3068\u306e\u9023\u7d61\u304c\u9014\u7d76\u3048\u3066\u3057\u307e\u3063\u305f...",(0,c.kt)("br",{parentName:"p"}),"\n","\u9014\u65b9\u306b\u66ae\u308c\u3066\u3044\u305f\u3068\u3053\u308d\u306b\u3001\u306a\u3093\u3068\u6620\u753b\u306e\u4e2d\u306e\u5211\u4e8b\u304b\u3089\u96fb\u8a71\u304c\u304b\u304b\u3063\u3066\u304d\u305f\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u5e7c\u99b4\u67d3\u304c\u9023\u7d61\u304c\u9014\u7d76\u3048\u308b\u76f4\u524d\u306b\u5211\u4e8b\u306b\u9023\u7d61\u3092\u3057\u3001\u81ea\u5206\u306e\u9023\u7d61\u5148\u3092\u4f1d\u3048\u305f\u3089\u3057\u3044\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u4e8b\u60c5\u3092\u8a71\u3057\u305f\u3068\u3053\u308d\u3001\u30db\u30c6\u30eb\u306b\u3044\u305f\u602a\u3057\u3044\u4eba\u72694\u4eba\u3092\u96c6\u3081\u3066\u304f\u308c\u305f\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u30d2\u30f3\u30c8\u3068\u306a\u308b\u60c5\u5831\u3092\u3082\u3068\u306b\u6620\u753b\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u3068\u7167\u3089\u3057\u5408\u308f\u305b\u3066\u72af\u4eba\u3092\u6355\u307e\u3048\u3088\u3046\u3002"))}return n.isMDXComponent=!0,n}()]},8982:function(e,n,t){"use strict";t.r(n);var r=t(159),i=t(219),c=(t(7294),t(3905)),o=["components"];n.default=[function(){var e={};function n(n){var t=n.components,s=(0,i.Z)(n,o);return(0,c.kt)("wrapper",(0,r.Z)({},e,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5468\u308a\u306b\u8a71\u3092\u805e\u304f\u3068\u3001\u3069\u3046\u3084\u3089\u8131\u51fa\u30dd\u30fc\u30bf\u30eb\u306a\u308b\u3082\u306e\u304c\u3042\u308b\u3089\u3057\u3044\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u3060\u304c\u3001\u5834\u6240\u304c\u308f\u304b\u3089\u305a\u9014\u65b9\u306b\u66ae\u308c\u3066\u3044\u308b\u3068\u3001\u6355\u307e\u3048\u305f\u72af\u4eba\u306e\u30dd\u30b1\u30c3\u30c8\u304b\u3089\u3042\u308b\u7d19\u304c\u898b\u3064\u304b\u3063\u305f\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u3069\u3046\u3084\u3089\u30dd\u30fc\u30bf\u30eb\u306e\u5c45\u5834\u6240\u306e\u30d2\u30f3\u30c8\u3068\u306a\u308b\u30ef\u30fc\u30c9\u304c\u66f8\u3044\u3066\u3042\u308b\u307f\u305f\u3044\u3060\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u30d2\u30f3\u30c8\u3092\u5143\u306b\u3057\u3001\u30a2\u30ca\u30b0\u30e9\u30e0\u65b9\u5f0f\u306e\u8b0e\u3092\u89e3\u3044\u3066\u3001\u5e7c\u99b4\u67d3\u3092\u8131\u51fa\u3055\u305b\u3088\u3046\uff01  "))}return n.isMDXComponent=!0,n}()]},3291:function(e,n,t){"use strict";t.r(n);var r=t(159),i=t(219),c=(t(7294),t(3905)),o=["components"];n.default=[function(){var e={};function n(n){var t=n.components,s=(0,i.Z)(n,o);return(0,c.kt)("wrapper",(0,r.Z)({},e,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u7121\u4e8b\u8131\u51fa\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002\u5f8c\u306b\u5e7c\u99b4\u67d3\u3068\u6620\u753b\u3092\u898b\u305f\u3089\u5185\u5bb9\u304c\u5c11\u3057\u5909\u308f\u3063\u3066\u3044\u305f\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u5211\u4e8b\u306f\u72af\u4eba\u3092\u6355\u307e\u3048\u305f\u529f\u7e3e\u304b\u3089\u3001\u6607\u9032\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002"))}return n.isMDXComponent=!0,n}()]},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6425)}])}},function(e){e.O(0,[774,630,311,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);