_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"+I9f":function(n,e,a){"use strict";a.r(e),a.d(e,"meta",(function(){return p})),a.d(e,"default",(function(){return d}));var t=a("wx14"),r=a("Ff2n"),i=a("q1tI"),l=a.n(i),o=a("7ljp"),b=a("er9C"),c=["children"],s=["components"],p=(l.a.createElement,{id:"run-monika-in-raspberry-pi",title:"Run Monika in Raspberry Pi"}),u={meta:p},m=function(n){var e=n.children,a=Object(r.a)(n,c);return Object(o.b)(b.a,Object(t.a)({meta:p},a),e)};function d(n){var e=n.components,a=Object(r.a)(n,s);return Object(o.b)(m,Object(t.a)({},u,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Raspberry Pi is a good hardware to run Monika. For ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Raspberry_Pi_OS"},"Raspbian OS")," user, you need to install NodeJS >= 14 manually since Raspbian package manager (apt) only install for NodeJS 8."),Object(o.b)("h2",{id:"install-node-14-in-raspbian"},"Install Node 14 in Raspbian",Object(o.b)("a",{parentName:"h2",href:"#install-node-14-in-raspbian",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"Monika needs NodeJS >= 14 and npm ~= 6 to run.To install NodeJS 14 in Raspberry Pi (Raspbian OS), you need to get CPU architecture by running ",Object(o.b)("inlineCode",{parentName:"p"},"uname"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"uname -a\n")),Object(o.b)("p",null,"Next, download NodeJS for particular architecture. Example for architecture ",Object(o.b)("inlineCode",{parentName:"p"},"arm v7"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wget https://nodejs.org/dist/v14.17.3/node-v14.17.3-linux-armv7l.tar.xz\n")),Object(o.b)("img",{src:"/tutorials/raspberry-pi/uname-and-wget-node-arm-v7.png",alt:"uname example"}),Object(o.b)("p",null,"Untar the file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"tar xf node-v14.17.3-linux-armv7l.tar.xz\n")),Object(o.b)("p",null,"And install NodeJS globally:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo cp -R node-v14.17.3-linux-armv7l/* /usr/local/\n")),Object(o.b)("img",{src:"/tutorials/raspberry-pi/untar-and-install-node.png",alt:"install nodejs"}),Object(o.b)("p",null,"Check NodeJS and NPM version using this command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),Object(o.b)("img",{src:"/tutorials/raspberry-pi/node-version-and-npm-version.png",alt:"nodejs & npm version"}),Object(o.b)("h2",{id:"run-monika-in-raspbian"},"Run Monika in Raspbian",Object(o.b)("a",{parentName:"h2",href:"#run-monika-in-raspbian",title:"Direct link to heading",className:"anchor"},Object(o.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(o.b)("p",null,"You can install Monika by source using git clone and npm install:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/hyperjumptech/monika.git\ncd monika/\nnpm install\n")),Object(o.b)("img",{src:"/tutorials/raspberry-pi/git-clone-and-npm-install.png",alt:"nodejs & npm version"}),Object(o.b)("p",null,"Finally, run Monika using this command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./bin/run -c monika.example.json\n")),Object(o.b)("img",{src:"/tutorials/raspberry-pi/run-monika-example-json.png",alt:"nodejs & npm version"}))}d.isMDXComponent=!0},"59FY":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-in-raspberry-pi",function(){return a("+I9f")}])}},[["59FY",0,1,2,3,4,5]]]);