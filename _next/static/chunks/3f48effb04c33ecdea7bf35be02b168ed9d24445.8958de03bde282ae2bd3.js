(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var i,r=n("q1tI");var s=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),o=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var r=i.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){s.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},i}(r.Component);t.default=o},"8oxB":function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"===typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var a,u=[],l=!1,M=-1;function p(){l&&a&&(l=!1,a.length?u=a.concat(u):M=-1,u.length&&h())}function h(){if(!l){var e=c(p);l=!0;for(var t=u.length;t;){for(a=u,u=[];++M<t;)a&&a[M].run();M=-1,t=u.length}a=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function N(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new N(e,t)),1!==u.length||l||c(h)},N.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9BOD":function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var i=n("q1tI"),r=n.n(i),s=n("NAyI"),o=n.n(s),c=n("GXWW"),a=n.n(c),u=n("mrum"),l=r.a.createElement;function M(e){return l("div",{className:"flex lg:flex-row flex-col justify-around text-white pt-8 pb-16 px-16 ".concat(e.className?e.className:"")},l("a",{href:"/"},l("img",{className:"w-16 h-4 mt-1",src:o.a})),l("div",{className:"flex flex-col mt-2 lg:mt-0"},l("p",{className:"font-bold"},"Resources"),l("a",{className:"text-xs pt-2",href:"/overview",rel:"noopener noreferrer"},"Documentation"),l("a",{className:"text-xs pt-1",href:"/examples",rel:"noopener noreferrer"},"Example"),l("a",{className:"text-xs pt-1",href:"/quick-start",rel:"noopener noreferrer"},"Configuration"),l("a",{className:"text-xs pt-1",href:"https://whatsapp.hyperjump.tech/",rel:"noopener noreferrer"},"WhatsApp Notifier")),l("div",{className:"flex flex-col mt-2 lg:mt-0"},l("p",{className:"font-bold"},"Community"),l("a",{className:"text-xs pt-2",href:u.a.repoUrl+"/discussions",target:"_blank",rel:"noopener noreferrer"},"Discussion"),l("a",{className:"text-xs pt-1",href:u.a.repoUrl+"/releases",target:"_blank",rel:"noopener noreferrer"},"Releases")),l("div",{className:"flex flex-col max-w-sm mt-2 lg:mt-0"},l("a",{className:"font-bold",href:"https://hyperjump.tech/",target:"_blank",rel:"noopener noreferrer"},l("img",{src:a.a})),l("p",{className:"text-xs pt-2"}," ","PT Artha Rajamas Mandiri (Hyperjump) is an open-source-first company providing engineering excellence service. We aim to build and commercialize open-source tools to help companies streamline, simplify, and secure the most important aspects of its modern DevOps practices.")))}},"9CUm":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("q1tI"),r=n.n(i),s=n("8Kt/"),o=n.n(s),c=n("nOHt"),a=r.a.createElement,u=n("DDq8"),l=Object(c.withRouter)((function(e){var t=e.title,n=e.description,i=e.image,r=void 0===i?u:i,s=e.router,c=e.children,l="https://hyperjumptech.github.io".concat(r);return a(o.a,null,void 0!=t&&a("title",{key:"title"},t," | Monika | Hyperjump Technology"),void 0!=n&&a("meta",{name:"description",key:"description",content:n}),a("meta",{property:"og:type",key:"og:type",content:"website"}),a("meta",{property:"og:url",key:"og:url",content:"https://hyperjumptech.github.io".concat(s.basePath).concat(s.pathname)}),void 0!=t&&a("meta",{property:"og:title",content:t,key:"og:title"}),void 0!=n&&a("meta",{property:"og:description",key:"og:description",content:n}),void 0!=r&&a("meta",{property:"og:image",key:"og:image",content:l}),a("meta",{name:"twitter:card",key:"twitter:card",content:"summary_large_image"}),a("meta",{name:"twitter:site",key:"twitter:site",content:"@hyperjump_tech"}),a("meta",{name:"twitter:creator",key:"twitter:creator",content:"@hyperjump_tech"}),void 0!=t&&a("meta",{name:"twitter:title",key:"twitter:title",content:t}),void 0!=n&&a("meta",{name:"twitter:description",key:"twitter:description",content:n}),void 0!=r&&a("meta",{name:"twitter:image",key:"twitter:image",content:l}),a("link",{rel:"apple-touch-icon",sizes:"57x57",href:"".concat(s.basePath,"/apple-icon-57x57.png")}),a("link",{rel:"apple-touch-icon",sizes:"60x60",href:"".concat(s.basePath,"/apple-icon-60x60.png")}),a("link",{rel:"apple-touch-icon",sizes:"72x72",href:"".concat(s.basePath,"/apple-icon-72x72.png")}),a("link",{rel:"apple-touch-icon",sizes:"76x76",href:"".concat(s.basePath,"/apple-icon-76x76.png")}),a("link",{rel:"apple-touch-icon",sizes:"114x114",href:"".concat(s.basePath,"/apple-icon-114x114.png")}),a("link",{rel:"apple-touch-icon",sizes:"120x120",href:"".concat(s.basePath,"/apple-icon-120x120.png")}),a("link",{rel:"apple-touch-icon",sizes:"144x144",href:"".concat(s.basePath,"/apple-icon-144x144.png")}),a("link",{rel:"apple-touch-icon",sizes:"152x152",href:"".concat(s.basePath,"/apple-icon-152x152.png")}),a("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(s.basePath,"/apple-icon-180x180.png")}),a("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(s.basePath,"/android-icon-192x192.png")}),a("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(s.basePath,"/favicon-32x32.png")}),a("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"".concat(s.basePath,"/favicon-96x96.png")}),a("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(s.basePath,"/favicon-16x16.png")}),a("link",{rel:"manifest",href:"".concat(s.basePath,"/manifest.json")}),a("meta",{name:"msapplication-TileColor",content:"#ffffff"}),a("meta",{name:"msapplication-TileImage",content:"".concat(s.basePath,"/ms-icon-144x144.png")}),a("meta",{name:"theme-color",content:"#ffffff"}),c)}))},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},DDq8:function(e,t){e.exports="/_next/static/images/monika-og-6fbd80169581b6fda158b8082a97ba41.png"},GXWW:function(e,t){e.exports="/_next/static/images/hyperjump-bd7f89613f6776b7ad6818bf58a277dd.svg"},"Gi+Z":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("ODXe"),r=n("q1tI"),s=n.n(r),o=n("YFqc"),c=n.n(o),a=n("mrum"),u=n("yNaH"),l=n("NAyI"),M=n.n(l),p=s.a.createElement;function h(){var e=s.a.useState(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return p("nav",{className:"relative flex flex-wrap items-center bg-black-monika justify-between px-2 py-3"},p("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between"},p("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},p("div",{className:"w-60 flex items-center h-16 pt-4 md:pt-0"},p(c.a,{href:"/",as:"/"},p("a",null,p("span",{className:"sr-only"},"Home"),p("img",{className:"w-24 h-6",src:M.a})))),p("button",{className:"cursor-pointer text-white fill-current text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return r(!n)}},p("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},p("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})))),p("div",{className:"lg:flex flex-grow items-center"+(n?" flex":" hidden")},p("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto"},p("li",{className:"nav-item"},p("a",{className:"px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75",href:"/overview"},p("span",{className:"ml-2"},"Docs"))),p("li",{className:"nav-item"},p("a",{className:"px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75",href:"https://hyperjumptech.github.io/monika-config-generator"},p("span",{className:"ml-2"},"Config Generator"))),p("li",{className:"nav-item"},p("a",{className:"px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75",href:"https://whatsapp.hyperjump.tech/"},p("span",{className:"ml-2"},"WhatsApp Notifier"))),p("li",{className:"nav-item"},p("a",{className:"px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75",href:"https://github.com/hyperjumptech/monika/discussions",target:"_blank"},p("span",{className:"ml-2"},"Discuss"))),p("li",{className:"nav-item"},p("a",{className:"px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75",href:"https://hyperjump.tech/",target:"_blank"},p("span",{className:"ml-2"},"Hyperjump"))),p("li",{className:"nav-item"},p(u.a,{className:"ml-4 flex items-center leading-snug hover:opacity-75",href:a.a.repoUrl,target:"_blank",rel:"noopener noreferrer"},p("svg",{className:"h-6 w-6 mr-2",fill:"currentColor",viewBox:"0 0 24 24"},p("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))," ","Github"))))))}},MX0m:function(e,t,n){e.exports=n("3niX")},NAyI:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1IiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMTA1IDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY2LjI5MzggNS4zNzcyNUM2Ny43Nzg3IDUuMzc3MjUgNjguOTgyNCA0LjE3MzUxIDY4Ljk4MjQgMi42ODg2M0M2OC45ODI0IDEuMjAzNzQgNjcuNzc4NyAwIDY2LjI5MzggMEM2NC44MDg5IDAgNjMuNjA1MiAxLjIwMzc0IDYzLjYwNTIgMi42ODg2M0M2My42MDUyIDQuMTczNTEgNjQuODA4OSA1LjM3NzI1IDY2LjI5MzggNS4zNzcyNVpNMjIuMTU0MyAwLjAzMDEwMTRIMTcuOTc1NEwxMS4xMjMyIDEwLjQ0NjZIMTEuMDMxTDQuMTc4ODkgMC4wMzAxMDE0SDBWMjEuNTA4NEg0LjQyNDcxVjcuMzczODlINC41MTY4OUw5LjY0ODMzIDE1LjA4NjRIMTIuNTA1OUwxNy42Mzc0IDcuMzczODlIMTcuNzI5NlYyMS41MDg0SDIyLjE1NDNWMC4wMzAxMDE0Wk00MS4xMTE1IDE2Ljg5OTNDNDEuNTIxMiAxNS45MzY1IDQxLjcyNiAxNC45NDMgNDEuNzI2IDEzLjkxODhDNDEuNzI2IDEyLjc5MjEgNDEuNTAwNyAxMS43MzcxIDQxLjA1IDEwLjc1MzlDNDAuNjE5OSA5Ljc3MDYxIDQwLjAxNTYgOC45MTAyNSAzOS4yMzcxIDguMTcyOEMzOC40NzkyIDcuNDM1MzUgMzcuNTg4MSA2Ljg2MTc3IDM2LjU2MzkgNi40NTIwOEMzNS41Mzk2IDYuMDIxOSAzNC40NDM3IDUuODA2ODEgMzMuMjc2MSA1LjgwNjgxQzMyLjEwODQgNS44MDY4MSAzMS4wMDIzIDYuMDIxOSAyOS45NTc1IDYuNDUyMDhDMjguOTMzMyA2Ljg2MTc3IDI4LjAzMiA3LjQzNTM1IDI3LjI1MzUgOC4xNzI4QzI2LjQ5NTYgOC45MTAyNSAyNS44OTEzIDkuNzcwNjEgMjUuNDQwNiAxMC43NTM5QzI1LjAxMDUgMTEuNzM3MSAyNC43OTU0IDEyLjc5MjEgMjQuNzk1NCAxMy45MTg4QzI0Ljc5NTQgMTUuMDI1IDI1LjAxMDUgMTYuMDY5NyAyNS40NDA2IDE3LjA1MjlDMjUuODkxMyAxOC4wMzYyIDI2LjQ5NTYgMTguODk2NiAyNy4yNTM1IDE5LjYzNEMyOC4wMzIgMjAuMzcxNSAyOC45MzMzIDIwLjk1NTMgMjkuOTU3NSAyMS4zODU1QzMxLjAwMjMgMjEuNzk1MiAzMi4xMDg0IDIyIDMzLjI3NjEgMjJDMzQuNTI1NiAyMiAzNS42NzI4IDIxLjc3NDcgMzYuNzE3NSAyMS4zMjRDMzcuNzYyMiAyMC44NTI5IDM4LjY1MzMgMjAuMjM4MyAzOS4zOTA4IDE5LjQ4MDRDNDAuMTI4MiAxOC43MjI1IDQwLjcwMTggMTcuODYyMSA0MS4xMTE1IDE2Ljg5OTNaTTMxLjUyNDYgMTAuMDQ3MkMzMi4wMzY3IDkuODIxODIgMzIuNjIwNSA5LjcwOTE1IDMzLjI3NjEgOS43MDkxNUMzMy45NTIxIDkuNzA5MTUgMzQuNTQ2MSA5LjgyMTgyIDM1LjA1ODIgMTAuMDQ3MkMzNS41NzA0IDEwLjI3MjUgMzUuOTkwMyAxMC41Nzk4IDM2LjMxODEgMTAuOTY5QzM2LjY0NTggMTEuMzU4MiAzNi44OTE2IDExLjc5ODYgMzcuMDU1NSAxMi4yOTAyQzM3LjIxOTQgMTIuNzgxOSAzNy4zMDEzIDEzLjI5NCAzNy4zMDEzIDEzLjgyNjZDMzcuMzAxMyAxNS4wOTY2IDM2LjkzMjYgMTYuMTIwOSAzNi4xOTUxIDE2Ljg5OTNDMzUuNDU3NyAxNy42Nzc3IDM0LjQ4NDcgMTguMDY2OSAzMy4yNzYxIDE4LjA2NjlDMzEuOTY1IDE4LjA2NjkgMzAuOTYxMyAxNy42Nzc3IDMwLjI2NDggMTYuODk5M0MyOS41NjgzIDE2LjEyMDkgMjkuMjIwMSAxNS4wOTY2IDI5LjIyMDEgMTMuODI2NkMyOS4yMjAxIDEzLjI5NCAyOS4zMTIzIDEyLjc4MTkgMjkuNDk2NiAxMi4yOTAyQzI5LjY4MSAxMS43OTg2IDI5LjkzNyAxMS4zNTgyIDMwLjI2NDggMTAuOTY5QzMwLjYxMyAxMC41Nzk4IDMxLjAzMyAxMC4yNzI1IDMxLjUyNDYgMTAuMDQ3MlpNNTMuODQzOCA1LjgwNjgxQzU2LjE5OTYgNS44MDY4MSA1Ny45OTIgNi40NjIzMiA1OS4yMjExIDcuNzczMzRDNjAuNDUwMSA5LjA2Mzg4IDYxLjA2NDcgMTEuMDgxNiA2MS4wNjQ3IDEzLjgyNjZWMjEuNTA4NEg1Ni43MDE0VjE0LjE5NTNDNTYuNzAxNCAxMi43ODE5IDU2LjM5NDIgMTEuNjg1OSA1NS43Nzk2IDEwLjkwNzVDNTUuMTY1MSAxMC4xMjkxIDU0LjE4MTggOS43Mzk4OCA1Mi44Mjk4IDkuNzM5ODhDNTEuNTgwMiA5LjczOTg4IDUwLjU2NjIgMTAuMTE4OCA0OS43ODc4IDEwLjg3NjhDNDkuMDA5NCAxMS42MzQ3IDQ4LjYyMDIgMTIuNzQwOSA0OC42MjAyIDE0LjE5NTNWMjEuNTA4NEg0NC4xOTU1VjYuMjk4NDRINDcuOTEzNUw0OC41ODk1IDguMjY0OThINDguNjUwOUM0OS4wODExIDcuNDg2NTYgNDkuNzA1OSA2Ljg4MjI2IDUwLjUyNTMgNi40NTIwOEM1MS4zNjUxIDYuMDIxOSA1Mi40NzEzIDUuODA2ODEgNTMuODQzOCA1LjgwNjgxWk02NC4xNTEzIDcuMDY2NjJWMjEuNTA4NEg2OC41NzZWNy4wNjY2Mkg2NC4xNTEzWk04MC45NjUzIDEyLjE5ODFMODcuNjMzMSAyMS41MDg0SDgyLjgwODlMNzguMDc3IDE0Ljk2MzVMNzYuMDQ5IDE2Ljg5OTNWMjEuNTA4NEg3MS42MjQzVjAuMDMwMTAxNEg3Ni4wNDlWMTIuMTY3M0w4MS44ODcxIDYuMjk4NDRIODcuMTcyMkw4MC45NjUzIDEyLjE5ODFaTTg3Ljc2NjMgMTAuNzIzMUM4Ny40Mzg2IDExLjcwNjQgODcuMjc0NyAxMy44ODggODcuMjc0NyAxMy44ODhDODcuMjc0NyAxMy44ODggODcuNDI4MyAxNi4wMzg5IDg3LjczNTYgMTcuMDIyMkM4OC4wNDI5IDE4LjAwNTUgODguNTAzOCAxOC44NjU4IDg5LjExODMgMTkuNjAzM0M4OS43MzI5IDIwLjMyMDMgOTAuNTAxMSAyMC44OTM4IDkxLjQyMjkgMjEuMzI0QzkyLjM2NTIgMjEuNzMzNyA5My40NjExIDIxLjkzODYgOTQuNzEwNyAyMS45Mzg2Qzk1Ljg1NzggMjEuOTM4NiA5Ni44MjA2IDIxLjc1NDIgOTcuNTk5IDIxLjM4NTVDOTguMzk3OSAyMS4wMTY3IDk5LjA2MzcgMjAuMzkyIDk5LjU5NjMgMTkuNTExMUg5OS42NTc3TDEwMC40ODcgMjEuNTA4NEgxMDQuMTc1VjYuMjY3NzFIMTAwLjQ4N0w5OS42NTc3IDguMjM0MjVIOTkuNTk2M0M5OS4xMjUxIDcuNDU1ODMgOTguNDc5OSA2Ljg2MTc3IDk3LjY2MDUgNi40NTIwOEM5Ni44NjE2IDYuMDIxOSA5NS44NzgzIDUuODA2ODEgOTQuNzEwNyA1LjgwNjgxQzkzLjU0MzEgNS44MDY4MSA5Mi40OTgzIDYuMDIxOSA5MS41NzY1IDYuNDUyMDhDOTAuNjU0NyA2Ljg2MTc3IDg5Ljg3NjMgNy40MzUzNSA4OS4yNDEyIDguMTcyOEM4OC42MDYyIDguODg5NzYgODguMTE0NiA5LjczOTg4IDg3Ljc2NjMgMTAuNzIzMVpNOTEuOTQ1MiAxNS40ODU5QzkxLjc4MTQgMTQuOTczNyA5MS42OTk0IDE0LjQ0MTEgOTEuNjk5NCAxMy44ODhDOTEuNjk5NCAxMy4zMTQ1IDkxLjc4MTQgMTIuNzcxNiA5MS45NDUyIDEyLjI1OTVDOTIuMTI5NiAxMS43NDc0IDkyLjM4NTcgMTEuMzA3IDkyLjcxMzQgMTAuOTM4MkM5My4wNjE3IDEwLjU0OSA5My40ODE2IDEwLjI1MiA5My45NzMyIDEwLjA0NzJDOTQuNDg1MyA5LjgyMTgyIDk1LjA2OTIgOS43MDkxNSA5NS43MjQ3IDkuNzA5MTVDOTYuMzU5NyA5LjcwOTE1IDk2LjkyMyA5LjgyMTgyIDk3LjQxNDcgMTAuMDQ3MkM5Ny45MjY4IDEwLjI3MjUgOTguMzU3IDEwLjU3OTggOTguNzA1MiAxMC45NjlDOTkuMDUzNSAxMS4zNTgyIDk5LjMxOTcgMTEuODA4OCA5OS41MDQxIDEyLjMyMUM5OS42ODg1IDEyLjgxMjYgOTkuNzgwNyAxMy4zMzUgOTkuNzgwNyAxMy44ODhDOTkuNzgwNyAxNC40NDExIDk5LjY3ODIgMTQuOTczNyA5OS40NzM0IDE1LjQ4NTlDOTkuMjg5IDE1Ljk3NzUgOTkuMDIyNyAxNi40MTc5IDk4LjY3NDUgMTYuODA3MUM5OC4zMjYyIDE3LjE3NTggOTcuODk2MSAxNy40NzI5IDk3LjM4MzkgMTcuNjk4MkM5Ni44OTIzIDE3LjkyMzUgOTYuMzM5MiAxOC4wMzYyIDk1LjcyNDcgMTguMDM2MkM5NS4wNDg3IDE4LjAzNjIgOTQuNDU0NiAxNy45MjM1IDkzLjk0MjUgMTcuNjk4MkM5My40MzA0IDE3LjQ3MjkgOTMuMDEwNCAxNy4xNzU4IDkyLjY4MjcgMTYuODA3MUM5Mi4zNTQ5IDE2LjQxNzkgOTIuMTA5MSAxNS45Nzc1IDkxLjk0NTIgMTUuNDg1OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUuNTAwMTYiIHkxPSIyMi4wMDA2IiB4Mj0iMTA4LjYyOCIgeTI9Ii05LjYyNTI2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5ODdDRTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkZEQ0RDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=s(n("9kyW")),r=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,c=t.isBrowser,a=void 0===c?"undefined"!==typeof window:c;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var s=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=s,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),s=t+r;return e[s]||(e[s]="jsx-"+(0,i.default)(t+"-"+r)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}},t.getIdAndRules=function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var s=this.computeId(r,i);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},TSYQ:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var s=typeof i;if("string"===s||"number"===s)e.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&e.push(o)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var c in i)n.call(i,c)&&i[c]&&e.push(c);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,c=t.optimizeForSpeed,a=void 0===c?i:c,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;o(r(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var M=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=M?M.getAttribute("content"):null}var t,s,c,a=e.prototype;return a.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(c){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(i,n):s.appendChild(i),i},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),c&&n(t,c),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},mAZM:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("MX0m"),r=n.n(i),s=n("q1tI"),o=n("TSYQ"),c=n.n(o),a=s.createElement,u=function(e){var t=e.offset,n=e.children,i=e.shadow;return a("div",{style:{top:t||0},className:"jsx-2500552309 "+(c()({shadow:i},"z-20")||"")},n,a(r.a,{id:"2500552309"},["div.jsx-2500552309{background:#fff;position:-webkit-sticky;position:sticky;}","div.shadow.jsx-2500552309{box-shadow:rgba(0,0,0,0.06) 0px 6px 20px;}"]))};u.displayName="Sticky"},qj2Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("q1tI"),r=n.n(i),s=n("yNaH"),o=n("mrum"),c=r.a.createElement;function a(e){var t=Object(i.useState)(0),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://api.github.com/repos/hyperjumptech/monika").then((function(e){return e.json()})).then((function(e){r(e.stargazers_count)}),(function(){}))})),c(s.a,{outline:"true",className:"w-40 flex justify-center leading-snug font-semibold text-center max-h-11",href:o.a.repoUrl,target:"_blank",rel:"noopener noreferrer"},c("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20"},c("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}))," ","Star (",n,")")}},yNaH:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("wx14"),r=n("q1tI"),s=n.n(r).a.createElement;function o(e){return e.outline?s(c,e,e.children):s("a",Object(i.a)({},e,{className:"px-4 py-2 bg-gradient-to-r from-purple-monika to-aqua-monika rounded-full font-sans text-white ".concat(e.className?e.className:"")}),e.children)}function c(e){return s("a",Object(i.a)({},e,{className:"px-4 py-2 rounded-full border-2 border-purple-monika text-purple-monika font-sans ".concat(e.className?e.className:"")}),e.children)}}}]);