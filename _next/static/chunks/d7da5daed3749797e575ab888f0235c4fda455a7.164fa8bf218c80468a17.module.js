(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function s(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),a=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((e,t)=>{var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return i=>{var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,c=h.length;a<c;a++){var u=h[a];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=i.props[u],p=r[u]||new Set;p.has(l)?o=!1:(p.add(l),r[u]=p)}}}return o}}()).reverse().map((e,t)=>{var n=e.key||t;return i.default.cloneElement(e,{key:n})})}function f(e){var{children:t}=e,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=()=>{};var m=f;t.default=m},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,p=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9CUm":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),s=n.n(o),a=n("nOHt"),c=i.a.createElement,u=n("DDq8"),l=Object(a.withRouter)(e=>{var{title:t,description:n,image:r=u,router:i,children:o}=e,a="https://hyperjumptech.github.io".concat(r);return c(s.a,null,void 0!=t&&c("title",{key:"title"},t," | Monika | Hyperjump Technology"),void 0!=n&&c("meta",{name:"description",key:"description",content:n}),c("meta",{property:"og:type",key:"og:type",content:"website"}),c("meta",{property:"og:url",key:"og:url",content:"https://hyperjumptech.github.io".concat(i.basePath).concat(i.pathname)}),void 0!=t&&c("meta",{property:"og:title",content:t,key:"og:title"}),void 0!=n&&c("meta",{property:"og:description",key:"og:description",content:n}),void 0!=r&&c("meta",{property:"og:image",key:"og:image",content:a}),c("meta",{name:"twitter:card",key:"twitter:card",content:"summary_large_image"}),c("meta",{name:"twitter:site",key:"twitter:site",content:"@hyperjump_tech"}),c("meta",{name:"twitter:creator",key:"twitter:creator",content:"@hyperjump_tech"}),void 0!=t&&c("meta",{name:"twitter:title",key:"twitter:title",content:t}),void 0!=n&&c("meta",{name:"twitter:description",key:"twitter:description",content:n}),void 0!=r&&c("meta",{name:"twitter:image",key:"twitter:image",content:a}),c("link",{rel:"apple-touch-icon",sizes:"57x57",href:"".concat(i.basePath,"/apple-icon-57x57.png")}),c("link",{rel:"apple-touch-icon",sizes:"60x60",href:"".concat(i.basePath,"/apple-icon-60x60.png")}),c("link",{rel:"apple-touch-icon",sizes:"72x72",href:"".concat(i.basePath,"/apple-icon-72x72.png")}),c("link",{rel:"apple-touch-icon",sizes:"76x76",href:"".concat(i.basePath,"/apple-icon-76x76.png")}),c("link",{rel:"apple-touch-icon",sizes:"114x114",href:"".concat(i.basePath,"/apple-icon-114x114.png")}),c("link",{rel:"apple-touch-icon",sizes:"120x120",href:"".concat(i.basePath,"/apple-icon-120x120.png")}),c("link",{rel:"apple-touch-icon",sizes:"144x144",href:"".concat(i.basePath,"/apple-icon-144x144.png")}),c("link",{rel:"apple-touch-icon",sizes:"152x152",href:"".concat(i.basePath,"/apple-icon-152x152.png")}),c("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(i.basePath,"/apple-icon-180x180.png")}),c("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(i.basePath,"/android-chrome-192x192.png")}),c("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(i.basePath,"/favicon-32x32.png")}),c("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"".concat(i.basePath,"/favicon-96x96.png")}),c("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(i.basePath,"/favicon-16x16.png")}),c("link",{rel:"manifest",href:"".concat(i.basePath,"/manifest.json")}),c("meta",{name:"msapplication-TileColor",content:"#ffffff"}),c("meta",{name:"msapplication-TileImage",content:"".concat(i.basePath,"/ms-icon-144x144.png")}),c("meta",{name:"theme-color",content:"#ffffff"}),o)})},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},DDq8:function(e,t){e.exports="/_next/static/images/monika-og-6fbd80169581b6fda158b8082a97ba41.png"},MX0m:function(e,t,n){e.exports=n("3niX")},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");class i extends r.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=i},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var p=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=p?p.getAttribute("content"):null}var t,o,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("7KCV");t.__esModule=!0,t.default=void 0;var i,o=r(n("q1tI")),s=n("elyg"),a=n("nOHt"),c=new Map,u=window.IntersectionObserver,l={};var p=(e,t)=>{var n=i||(u?i=new u(e=>{e.forEach(e=>{if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),t())}})},{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),()=>{try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):()=>{}};function h(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch(e=>{0}),l[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,[n,r]=o.default.useState(),i=(0,a.useRouter)(),c=i&&i.pathname||"/",{href:d,as:f}=o.default.useMemo(()=>{var[t,n]=(0,s.resolveHref)(c,e.href,!0);return{href:t,as:e.as?(0,s.resolveHref)(c,e.as):n||t}},[c,e.href,e.as]);o.default.useEffect(()=>{if(t&&u&&n&&n.tagName&&(0,s.isLocalURL)(d)&&!l[d+"%"+f])return p(n,()=>{h(i,d,f)})},[t,n,d,f,i]);var{children:m,replace:v,shallow:y,scroll:g}=e;"string"===typeof m&&(m=o.default.createElement("a",null,m));var _=o.Children.only(m),S={ref:e=>{e&&r(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:e=>{_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a){var{nodeName:c}=e.currentTarget;("A"!==c||!function(e){var{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o}).then(e=>{e&&a&&(window.scrollTo(0,0),document.body.focus())}))}(e,i,d,f,v,y,g)}};return t&&(S.onMouseEnter=e=>{(0,s.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),h(i,d,f,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(S.href=(0,s.addBasePath)((0,s.addLocale)(f,i&&i.locale,i&&i.defaultLocale))),o.default.cloneElement(_,S)};t.default=d},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},mrum:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={editUrl:"https://github.com/hyperjumptech/monika/edit/main/docs/src/pages",copyright:"Copyright \xa9 ".concat((new Date).getFullYear()," Hyperjump Tech. All Rights Reserved."),npmUrl:"https://www.npmjs.com/package/@hyperjumptech/monika",repoUrl:"https://github.com/hyperjumptech/monika",algolia:{appId:"",apiKey:"",indexName:""}}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yNaH:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("wx14"),i=n("q1tI"),o=n.n(i).a.createElement;function s(e){return e.outline?o(a,e,e.children):o("a",Object(r.a)({},e,{className:"px-4 py-2 bg-gradient-to-r from-purple-monika to-aqua-monika rounded-full font-sans text-white ".concat(e.className?e.className:"")}),e.children)}function a(e){return o("a",Object(r.a)({},e,{className:"px-4 py-2 rounded-full border-2 border-purple-monika text-purple-monika font-sans ".concat(e.className?e.className:"")}),e.children)}}}]);