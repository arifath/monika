(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"2qu3":function(e,t,r){"use strict";var n=r("oI91"),o=r("/GRZ"),a=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var u,d=(u=r("q1tI"))&&u.__esModule?u:{default:u},f=r("8L3h"),m=r("jwwS");var p=[],b=[],g=!1;function v(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function h(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=v(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function x(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new w(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!g&&"function"===typeof r.webpack){var a=r.webpack();b.push((function(e){var t,r=s(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=d.default.useContext(m.LoadableContext),i=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var w=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return x(v,e)}function O(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return x(h,e)},j.preloadAll=function(){return new Promise((function(e,t){O(p).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return g=!0,t()};O(b,e).then(r,r)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var k=j;t.default=k},"5Wrh":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI"),o=r.n(n).a.createElement;function a(e){return e.outline?o(i,e,e.children):o("button",{className:"px-4 py-2 bg-gradient-to-r from-purple-monika to-aqua-monika font-sans text-white ".concat(e.className?e.className:""," ").concat(!1!==e.rounded?"rounded-full":"rounded-md")},e.children)}function i(e){return o("button",{className:"px-4 py-2 border-2 border-purple-monika text-purple-monika font-sans ".concat(e.className?e.className:""," ").concat(!1!==e.rounded?"rounded-full":"rounded-md")},e.children)}},"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r("q1tI"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"===typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,p=d["".concat(i,".").concat(m)]||d[m]||f[m]||a;return r?o.a.createElement(p,l(l({ref:t},c),{},{components:r})):o.a.createElement(p,l({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},"8Dvh":function(e){e.exports=JSON.parse('{"routes":[{"title":"Getting Started","heading":true,"routes":[{"title":"Overview","path":"/overview","editUrl":"/overview.md"},{"title":"Installation","path":"/installation","editUrl":"/installation.md"},{"title":"Quick Start","path":"/quick-start","editUrl":"/quick-start.md"}]},{"title":"Guides","heading":true,"routes":[{"title":"Probes","path":"/guides/probes","editUrl":"/guides/probes.md"},{"title":"Notifications","path":"/guides/notifications","editUrl":"/guides/notifications.md"},{"title":"Alerts","path":"/guides/alerts","editUrl":"/guides/alerts.md"}]},{"title":"Examples","heading":true,"routes":[{"title":"Minimal Configuration","path":"/guides/examples#minimal-configuration","editUrl":"/guides/examples.md"},{"title":"Enabling Notification","path":"/guides/examples#enabling-notification","editUrl":"/guides/examples.md"},{"title":"HTML Form Submission","path":"/guides/examples#html-form-submission-example","editUrl":"/guides/examples.md"},{"title":"Multiple Request","path":"/guides/examples#multiple-request","editUrl":"/guides/examples.md"},{"title":"Requests Chaining","path":"/guides/examples#requests-chaining","editUrl":"/guides/examples.md"}]},{"title":"Tutorial","heading":true,"routes":[{"title":"Run Monika in Raspberry Pi","path":"/tutorial/run-in-raspberry-pi","editUrl":"/tutorial/run-in-raspberry-pi.md"}]}]}')},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},QhJM:function(e,t,r){e.exports={markdown:"markdown_markdown__3gxWv","code-block":"markdown_code-block__1jcT2"}},a6RD:function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var o={},l=e.modules();Object.keys(l).forEach((function(e){var t=l[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};l(r("q1tI"));var i=l(r("2qu3"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},er9C:function(e,t,r){"use strict";r.d(t,"a",(function(){return De}));var n=r("MX0m"),o=r.n(n),a=r("q1tI"),i=r.n(a),l=r("7ljp"),s=r("Gi+Z"),c=r("rePB"),u=r("TSYQ"),d=r.n(u),f=r("t4m3"),m=a.createElement,p=function(){var e=Object(f.b)().onOpen;return m("div",null,m("button",{type:"button",className:"group form-input hover:text-gray-600 hover:border-gray-300 transition duration-150 ease-in-out pointer flex items-center bg-gray-50 text-left w-full  text-gray-500 rounded-lg text-sm align-middle",onClick:e},m("svg",{width:"1em",height:"1em",className:"mr-3 align-middle text-gray-600 flex-shrink-0 group-hover:text-gray-700",style:{marginBottom:2},viewBox:"0 0 20 20"},m("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",strokeWidth:"2",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})),"Search docs",m("span",{className:"ml-auto invisible lg:visible"},m("kbd",{className:"border border-gray-300 mr-1 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center mr-0 rounded group-hover:border-gray-300 transition duration-150 ease-in-out ",style:{minWidth:"1.8em"}},"\u2318"),m("kbd",{className:"border border-gray-300 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center ml-auto mr-0 rounded group-hover:border-gray-300 transition duration-150 ease-in-out ",style:{minWidth:"1.8em"}},"K"))))};p.displayName="Search";var b=i.a.createElement,g=function(e){var t,r=e.active,n=e.children,i=e.fixed,l=Object(a.useState)(!1),s=l[0];l[1];return b("aside",{className:"jsx-3651371114 "+(d()("sidebar bg-white top-24 flex-shrink-0 pr-2",(t={active:r},Object(c.a)(t,"pb-0 flex flex-col z-1 sticky",i),Object(c.a)(t,"fixed",i),Object(c.a)(t,"searching",s),t))||"")},b("div",{className:"jsx-3651371114 sidebar-search my-2 lg:hidden"},b(p,null)),b("div",{className:"jsx-3651371114 sidebar-content overflow-y-auto pb-4"},n),b(o.a,{id:"3651371114"},[".sidebar.jsx-3651371114{-webkit-overflow-scrolling:touch;}",".sidebar.fixed.jsx-3651371114{width:300px;padding-right:2.5rem;height:calc(100vh - 1.5rem - 64px - 42px);}",".sidebar.fixed.searching.jsx-3651371114>.sidebar-content.jsx-3651371114{display:none;}",".sidebar-search.jsx-3651371114{position:relative;z-index:1;}","@media screen and (max-width:1024px){.sidebar.jsx-3651371114,.sidebar.fixed.jsx-3651371114{display:none;}.sidebar.active.jsx-3651371114{display:block;}}"]))},v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=a.createContext&&a.createContext(v),y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function w(e){return function(t){return a.createElement(j,y({attr:y({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,y({key:r},t.attr),e(t.child))}))}(e.child))}}function j(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,i=e.title,l=x(e,["attr","title"]);return a.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:y({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==h?a.createElement(h.Consumer,null,(function(e){return t(e)})):t(v)}function O(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function k(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function N(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"}}]})(e)}function P(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}}]})(e)}var E=i.a.createElement;function _(e){var t=e.isMobile,r=e.level,n=void 0===r?1:r,i=e.title,l=e.selected,s=e.opened,c=e.children,u=Object(a.useRef)(null),f=Object(a.useState)({toggle:l||s}),m=f[0],p=m.toggle,b=m.shouldScroll,g=void 0!==b&&b,v=f[1],h="level-".concat(n);return Object(a.useEffect)((function(){l&&v({toggle:!0})}),[l]),Object(a.useEffect)((function(){if(p&&g&&null!=u.current){var e=document.querySelector(t?".docs-dropdown":".sidebar-content");if(e){var r=u.current.offsetTop-(t?10:e.offsetTop);e.scrollTop=r,v({toggle:p})}}}),[p,g,t]),E("div",{ref:u,className:"jsx-4221507945 "+(d()("category",h,{open:p,selected:l})||"")},E("a",{onClick:function(){v({toggle:!p,shouldScroll:!0})},className:"jsx-4221507945 label"},i,E(O,{className:"text-gray-600"})),E("div",{className:"jsx-4221507945 posts"},c),E(o.a,{id:"4221507945"},[".category.jsx-4221507945{margin:12px 0;}",".category.jsx-4221507945:first-child{margin-top:0;}",".category.jsx-4221507945:last-child{margin-bottom:0;}",".label.jsx-4221507945{font-size:1rem;line-height:1.5rem;font-weight:400;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#4b5563;}",".label.jsx-4221507945>svg{margin-right:16px;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform 0.15s ease;-webkit-transition:transform 0.15s ease;transition:transform 0.15s ease;}",".selected.jsx-4221507945>.label.jsx-4221507945{font-weight:600;color:#161e2e;}",".open.jsx-4221507945>.label.jsx-4221507945{color:#161e2e;}",".open.jsx-4221507945>.label.jsx-4221507945>svg{margin-left:1px;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}",".level-2.jsx-4221507945 .label.jsx-4221507945{text-transform:none;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}",".label.jsx-4221507945:hover{color:#1a202c;}",".separated.jsx-4221507945{margin-bottom:32px;}",".posts.jsx-4221507945{border-left:1px solid #e5e7eb;margin-top:0;height:0;overflow:hidden;padding-left:19px;margin-left:3px;}",".open.jsx-4221507945>.posts.jsx-4221507945{margin-top:12px;height:auto;}","@media screen and (max-width:950px){.category.jsx-4221507945{margin:24px 0;}}"]))}var S=a.createElement,C=function(e){var t=e.title,r=e.children;return S("div",{className:"heading"},S("h4",{className:"my-2 mr-auto"},S("span",{className:"bg-gradient-to-r from-purple-monika to-aqua-monika bg-clip-text text-transparent font-semibold text-xl"},t)),S("div",null,r))};C.displayName="SidebarHeading";var D=r("ODXe");var M=!1;if("undefined"!==typeof window){var R={get passive(){M=!0}};window.addEventListener("testPassive",null,R),window.removeEventListener("testPassive",null,R)}var T="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),L=[],I=!1,q=-1,A=void 0,U=void 0,W=function(e){return L.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},B=function(e){var t=e||window.event;return!!W(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},F=function(){void 0!==U&&(document.body.style.paddingRight=U,U=void 0),void 0!==A&&(document.body.style.overflow=A,A=void 0)},z=function(e,t){if(e){if(!L.some((function(t){return t.targetElement===e}))){var r={targetElement:e,options:t||{}};L=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(L),[r]),T?(e.ontouchstart=function(e){1===e.targetTouches.length&&(q=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var r=e.targetTouches[0].clientY-q;!W(e.target)&&(t&&0===t.scrollTop&&r>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&r<0?B(e):e.stopPropagation())}(t,e)},I||(document.addEventListener("touchmove",B,M?{passive:!1}:void 0),I=!0)):function(e){if(void 0===U){var t=!!e&&!0===e.reserveScrollBarGap,r=window.innerWidth-document.documentElement.clientWidth;t&&r>0&&(U=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}void 0===A&&(A=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},H=r("wx14"),G=a.createElement,K=function(e){return G("div",Object(H.a)({className:d()("container mx-auto")},e))};K.displayName="Container";var V=r("nOHt"),Y=a.createElement;function J(e){var t=e.children,r=a.useState(!1),n=Object(D.a)(r,2),i=n[0],l=n[1],s=a.useRef(null),c=(a.useRef(null),Object(V.useRouter)()),u=function(){var e;null!=s.current&&((e=s.current)?(L=L.filter((function(t){return t.targetElement!==e})),T?(e.ontouchstart=null,e.ontouchmove=null,I&&0===L.length&&(document.removeEventListener("touchmove",B,M?{passive:!1}:void 0),I=!1)):L.length||F()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),l(!1))};return a.useEffect((function(){return u(),function(){T?(L.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),I&&(document.removeEventListener("touchmove",B,M?{passive:!1}:void 0),I=!1),q=-1):F(),L=[]}}),[c.asPath]),Y("div",{className:"lg:hidden"},Y(K,null,Y("div",{className:"jsx-1647504227 sidebar-search py-2 z-10"},Y(p,null)),Y("label",{htmlFor:"dropdown-input",className:"jsx-1647504227 "+(d()("w-full",{opened:i})||"")},Y("input",{id:"dropdown-input",type:"checkbox",checked:i,onChange:function(){i?u():null!=s.current&&(z(s.current),l(!0))},className:"jsx-1647504227 hidden"}),Y("div",{className:"jsx-1647504227 docs-select flex w-full items-center"},Y(k,{className:"text-gray-600 -ml-1"}),"Menu")),Y("div",{ref:s,className:"jsx-1647504227 docs-dropdown shadow-xl"},Y(K,null,Y("nav",{className:"jsx-1647504227"},t))),Y(o.a,{id:"1647504227"},[".docs-select.jsx-1647504227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.5rem;width:100%;line-height:3rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;cursor:pointer;}",".docs-dropdown.jsx-1647504227{position:absolute;left:0;right:0;top:100%;bottom:100%;background:white;overflow-y:auto;-webkit-overflow-scrolling:touch;}",".docs-dropdown.jsx-1647504227 nav.jsx-1647504227{padding:10px 0;}",".opened.jsx-1647504227~.docs-dropdown.jsx-1647504227{min-height:80px;bottom:calc(153px - 90vh);border-top:1px solid #eaeaea;}",".docs-select.jsx-1647504227 svg{margin-left:1px;margin-right:14px;-webkit-transition:-webkit-transform 0.15s ease;-webkit-transition:transform 0.15s ease;transition:transform 0.15s ease;}",".opened.jsx-1647504227>.docs-select.jsx-1647504227 svg{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}","@media screen and (max-width:640px){.opened.jsx-1647504227~.docs-dropdown.jsx-1647504227{bottom:calc(203px - 90vh);}}"])))}var X=r("Ff2n"),Q=r("YFqc"),Z=r.n(Q),$=a.createElement;function ee(e){var t=e.route,r=t.href,n=t.pathname,a=t.title,i=t.selected,l=(e.onClick,Object(V.useRouter)()),s=n===l.pathname;return $("div",{className:"jsx-918302968 "+(d()("nav-link pl-4",{selected:i},i?"border-2 py-2 border-purple-monika rounded-md":"text-black-monika text-opacity-50 font-semibold")||"")},s?$("a",{href:"".concat(l.basePath).concat(n),className:"jsx-918302968 "+((i?"selected text-purple-monika hover:text-purple-700":"text-black-monika text-opacity-50 font-semibold")||"")},a):$(Z.a,{href:r,as:n},$("a",{className:"jsx-918302968 text-black-monika text-opacity-50 font-semibold"},a)),$(o.a,{id:"918302968"},["div.selected.jsx-918302968{box-sizing:border-box;}",".nav-link.jsx-918302968{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}",".nav-link.jsx-918302968 a{-webkit-text-decoration:none;text-decoration:none;font-size:1rem;line-height:1.5rem;width:100%;box-sizing:border-box;}",".selected.jsx-918302968 a{font-weight:600;}","span.jsx-918302968{color:#a0aec0;}","@media screen and (max-width:950px){div.jsx-918302968{padding-left:0.5rem;}.nav-link.jsx-918302968 a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))}ee.displayName="SidebarNavLink";var te=["isMobile","route","level","onClick"],re=a.createElement,ne=function(e){var t=e.isMobile,r=e.route,n=e.level,i=void 0===n?1:n,l=e.onClick,s=Object(X.a)(e,te),c=a.useRef(null),u=r.selected?c:null;return a.useEffect((function(){if(u&&u.current&&!t){var e=document.querySelector(".sidebar-content"),r=u.current.offsetTop-32;e&&(e.scrollTop=r-e.offsetHeight/2)}}),[u,t]),re("div",{ref:u,className:"jsx-540246980 "+(d()("link","level-".concat(i))||"")},re(ee,{route:r,scrollSelectedIntoView:s.scrollSelectedIntoView,categorySelected:s.categorySelected,level:i,onClick:l}),re(o.a,{id:"540246980"},[".link.jsx-540246980{margin:12px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".link.jsx-540246980:first-child{margin-top:0;}",".link.jsx-540246980:last-child{margin-bottom:0;}","@media screen and (max-width:950px){.link.jsx-540246980{margin:24px 0;}}"]))},oe=r("mAZM"),ae=function(){return function(e){var t=Object(a.useState)(!1),r=t[0],n=t[1],o=Object(a.useCallback)((function(e){e.matches?n(!0):n(!1)}),[]);return Object(a.useEffect)((function(){var t=window.matchMedia("(max-width: ".concat(e,"px)"));return t.addListener(o),t.matches&&n(!0),function(){return t.removeListener(o)}}),[]),r}(1024)};function ie(e,t){var r=e.lastIndexOf(t);return-1===r?e:e.substring(0,r)}function le(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=r("QhJM"),fe=r.n(de),me=r("9BOD"),pe=r("mrum"),be=r("5Wrh"),ge=a.createElement;function ve(e,t){var r,n;return(null===(r=e.route)||void 0===r?void 0:r.path)===(null===(n=t.route)||void 0===n?void 0:n.path)}var he=a.memo((function(e){var t=e.route,r=e.prevRoute,n=e.nextRoute,o=null!==t&&void 0!==t&&t.editUrl||null!==t&&void 0!==t&&t.path?"".concat(pe.a.editUrl).concat((null===t||void 0===t?void 0:t.editUrl)||(null===t||void 0===t?void 0:t.path)):null;return ge(a.Fragment,null,ge("div",{className:"py-8"},ge("div",{className:"flex flex-col space-between items-center"},ge("span",{className:"h-px w-full bg-gradient-to-r from-purple-monika to-aqua-monika"}),ge("div",{className:"flex flex-col md:flex-row w-full py-8"},r&&r.path?ge(Z.a,{href:ie(r.path,".")},ge("a",{className:"flex flex-col block md:mr-auto md:ml-0 mx-auto"},ge("span",{className:"md:mr-auto md:ml-0 mx-auto text-base block text-gray-500 mb-1 font-semibold"},"\u2190 Prev"),ge("span",{className:"text-xl block bg-gradient-to-r from-purple-monika to-aqua-monika bg-clip-text text-transparent font-bold"},r.title))):ge("div",null),ge("div",{className:"flex flex-col justify-center"},ge("div",{className:"font-semibold mx-auto text-center mb-4"},"Was this page helpful?"),ge("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 w-auto max-w-xs mx-auto"},ge(be.a,{rounded:!1,className:"w-21 h-11 inline-flex self-center font-semibold"},ge(P,{className:"mt-1 mr-2"})," Yes"),ge(be.a,{outline:!0,rounded:!1,className:"w-21 h-11 inline-flex self-center font-semibold"},ge(N,{className:"mt-1 mr-2"})," No"))),n&&n.path&&ge(Z.a,{href:ie(n.path,".")},ge("a",{className:"flex flex-col text-right block mt-4 md:mt-0 md:ml-auto md:mr-0 mx-auto"},ge("span",{className:"md:ml-auto md:mr-0 mx-auto text-base block text-gray-500 mb-1 font-semibold"},"Next \u2192"),ge("span",{className:"text-xl block bg-gradient-to-r from-purple-monika to-aqua-monika bg-clip-text text-transparent font-bold"},n.title)))))),o?ge("div",{className:"mb-8"},ge("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 underline"},"Edit this page on GitHub")):null)}),ve);he.displayName="DocsPageFooter";var ye=r("9CUm"),xe=r("a6RD"),we=r.n(xe),je=a.createElement,Oe={pre:function(e){return je("pre",e)},code:we()((function(){return r.e(23).then(r.bind(null,"WdOL"))}),{loadableGenerated:{webpack:function(){return["WdOL"]},modules:["./Highlight2"]}})},ke=r("8Kt/"),Ne=r.n(ke),Pe=r("8Dvh"),Ee={},_e=(Object.keys(Ee),r("qj2Z")),Se=a.createElement,Ce=function(e){var t=e.split("/");return"1.5.8"===t[2]||"2.1.4"===t[2]?{tag:t[2],slug:"/docs/".concat(t.slice(2).join("/"))}:{slug:e}},De=function(e){var t=Object(V.useRouter)(),r=Ce(t.asPath),n=r.slug,i=r.tag,c=function(e){return e?Ee[e]:Pe}(i).routes,u=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t)return n;for(var o=t.path,a=n.parent,i=0;i<r.length;i+=1){var l,s=r[i];if(s.routes&&(n.parent=s,(n=e(t,s.routes,n)).nextRoute))return n;if(s&&s.path){if(n.route)return n.nextRoute=a&&0===i?ue(ue({},s),{},{title:"".concat(a.title,": ").concat(s.title)}):s,n;s&&s.path===o?n.route=ue(ue({},t),{},{title:a&&!a.heading?"".concat(a.title,": ").concat(t.title):t.title}):n.prevRoute=!a||a.heading||null!==(l=r[i+1])&&void 0!==l&&l.path?s:ue(ue({},s),{},{title:"".concat(a.title,": ").concat(s.title)})}}return n}(function e(t,r){var n,o=le(r);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a.path&&ie(a.path,".")===t)return a;var i=a.routes&&e(t,a.routes);if(i)return i}}catch(l){o.e(l)}finally{o.f()}}(ie(n,"#"),c),c),d=u.route,f=u.prevRoute,m=u.nextRoute,p=d&&"".concat(d.title),b=ae();return Se(a.Fragment,null,i&&Se(Ne.a,null,Se("meta",{name:"robots",content:"noindex",className:"jsx-99718258"})),Se("div",{className:"jsx-99718258"},b?Se(a.Fragment,null,Se(s.a,null),Se(oe.a,{shadow:!0},Se(J,null,Se(Me,{isMobile:!0,routes:c})))):Se(oe.a,null,Se(s.a,null)),Se(ye.a,{title:e.meta.title||p,description:e.meta.description}),Se("div",{className:"jsx-99718258 block"},Se(a.Fragment,null,Se("div",{className:"jsx-99718258 container mx-auto pb-12 pt-6 content"},Se("div",{className:"jsx-99718258 flex relative"},!b&&Se(g,{fixed:!0},Se(Me,{routes:c})),Se("div",{className:"jsx-99718258 "+(fe.a.markdown+" w-full docs"||!1)},Se("div",{className:"jsx-99718258 flex"},Se("h1",{id:"_top",className:"jsx-99718258 mr-auto"},e.meta.title)," ",Se(_e.a,null)),Se(l.a,{components:Oe},e.children),Se(he,{href:(null===d||void 0===d?void 0:d.path)||"",route:d,prevRoute:f,nextRoute:m}))))))),Se(me.a,{className:"bg-black-monika"}),Se(o.a,{id:"99718258"},[".docs.jsx-99718258{min-width:calc(100% - 300px - 1rem - 200px);}"]))};function Me(e){var t=e.isMobile,r=e.routes,n=e.level,o=void 0===n?1:n,a=Object(V.useRouter)().asPath,i=Ce(a),l=i.slug,s=i.tag;return r.map((function(e,r){var n=e.path,a=e.title,i=e.routes,c=e.heading,u=e.open;if(i){var d=function(e){var t=e.find((function(e){return e.path}));return t&&ie(t.path,"/")}(i),f=l.startsWith(d),m=!f&&!t&&u;return c?Se(C,{key:"parent"+r,title:a},Se(Me,{isMobile:t,routes:i,level:o+1})):Se(_,{key:d,isMobile:t,level:o,title:a,selected:f,opened:m},Se(Me,{isMobile:t,routes:i,level:o+1}))}var p=ie(n,"."),b=function(e,t){return t?"/docs/".concat(t,"/").concat(e.replace("/docs/","")):e}(p,s);return Se(ne,{key:a,isMobile:t,level:o,route:{href:p,path:n,title:a,pathname:b,selected:l===p}})}))}De.displayName="LayoutDocs"},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},t4m3:function(e,t,r){"use strict";r.d(t,"b",(function(){return w})),r.d(t,"a",(function(){return j}));var n=r("wx14"),o=r("rePB"),a=r("ODXe"),i=r("q1tI"),l=r.n(i),s=r("i8i4"),c=r("nOHt"),u=r.n(c),d=r("8Kt/"),f=r.n(d),m=r("YFqc"),p=r.n(m);var b=r("mrum"),g=l.a.createElement;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=l.a.createContext(),x=null,w=function(){return l.a.useContext(y)};function j(e){var t=e.children,o=e.searchParameters,i=void 0===o?{hitsPerPage:5}:o,c=l.a.useState(!1),d=Object(a.a)(c,2),m=d[0],p=d[1],v=l.a.useCallback((function(){(x?Promise.resolve():r.e(22).then(r.bind(null,"m3sE")).then((function(e){var t=e.DocSearchModal;return x=t}))).then((function(){p(!0)}))}),[]),w=l.a.useCallback((function(){return p(!1)}),[]);!function(e){var t=e.isOpen,r=e.onOpen,n=e.onClose;l.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey))&&(e.preventDefault(),t?n():r())}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,r,n])}({isOpen:m,onOpen:v,onClose:w});var j={appId:b.a.algolia.appId,apiKey:b.a.algolia.apiKey,indexName:b.a.algolia.indexName,renderModal:!0};return g(l.a.Fragment,null,g(f.a,null,g("link",{key:"algolia",rel:"preconnect",href:"https://".concat(j.appId,"-dsn.algolia.net"),crossOrigin:"true"})),g(y.Provider,{value:{DocSearchModal:x,onOpen:v}},t),m&&Object(s.createPortal)(g(x,Object(n.a)({},j,{searchParameters:i,onClose:w,navigator:{navigate:function(e){var t=e.suggestionUrl;u.a.push(t)}},transformItems:function(e){return e.map((function(e){var t=new URL(e.url);return h(h({},e),{},{url:e.url.replace(t.origin,"").replace("#__next","").replace("/docs/#","/docs/overview#")})}))},hitComponent:O})),document.body))}function O(e){var t=e.hit,r=e.children;return g(p.a,{href:t.url.replace()},g("a",null,r))}}}]);