"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[7320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:0,title:"Home",tags:["Getting started","Quick Start"]},i="Getting Started Guide",l={unversionedId:"xvp-docs/getting-started/index",id:"xvp-docs/getting-started/index",title:"Home",description:"Getting your app up and running on Firebolt takes just a few simple steps.",source:"@site/docs/xvp-docs/getting-started/index.md",sourceDirName:"xvp-docs/getting-started",slug:"/xvp-docs/getting-started/",permalink:"/dousarus-demo/docs/xvp-docs/getting-started/",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website/docs/xvp-docs/getting-started/index.md",tags:[{label:"Getting started",permalink:"/dousarus-demo/docs/tags/getting-started"},{label:"Quick Start",permalink:"/dousarus-demo/docs/tags/quick-start"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Home",tags:["Getting started","Quick Start"]},sidebar:"tutorialSidebar",previous:{title:"XVP Docs",permalink:"/dousarus-demo/docs/category/xvp-docs"},next:{title:"Core Concepts",permalink:"/dousarus-demo/docs/xvp-docs/getting-started/core-concepts/"}},s={},p=[{value:"Installing Firebolt",id:"installing-firebolt",level:2},{value:"Importing Modules",id:"importing-modules",level:2},{value:"Starting up your app",id:"starting-up-your-app",level:2},{value:"Reporting Errors",id:"reporting-errors",level:2},{value:"Reporting Content Minutes",id:"reporting-content-minutes",level:2},{value:"Inspecting Device Capabilities",id:"inspecting-device-capabilities",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-guide"},"Getting Started Guide"),(0,a.kt)("p",null,"Getting your app up and running on Firebolt takes just a few simple steps."),(0,a.kt)("p",null,"Most of your app's code is dealing with your own content and services, and rightfully so! However, there are a few minor APIs that your app will need to call in order to function in a Firebolt-compliant manner. Most of these APIs require just one line of code."),(0,a.kt)("p",null,"Firebolt has zero dependencies, and leverages industry standard ECMAScript, which is compiled into your app, and packaged up using whatever JavaScript packaging strategy you already use."),(0,a.kt)("p",null,"In order to get your app up and running on Firebolt, you'll need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the Firebolt package via your package manager (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"npm"),")"),(0,a.kt)("li",{parentName:"ul"},"Import a few Firebolt modules into your code-base"),(0,a.kt)("li",{parentName:"ul"},"Call a few simple methods to allow Firebolt and your app to communicate")),(0,a.kt)("h2",{id:"installing-firebolt"},"Installing Firebolt"),(0,a.kt)("p",null,"Installing Firebolt is simple, because it's a publicly hosted package at npmjs.com:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd <your project directory>\nnpm install @firebolt-js/sdk\n")),(0,a.kt)("p",null,"Now you're ready to use Firebolt in your project."),(0,a.kt)("h2",{id:"importing-modules"},"Importing Modules"),(0,a.kt)("p",null,"As mentioned before, Firebolt uses standard ECMAScript imports for all of its modules. This allows you to only import the modules you use."),(0,a.kt)("p",null,"To get your app using Firebolt modules, just import them."),(0,a.kt)("p",null,"For example, this will import the Lifecycle and Metrics modules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle, Metrics } from '@firebolt-js/sdk'\n")),(0,a.kt)("h2",{id:"starting-up-your-app"},"Starting up your app"),(0,a.kt)("p",null,"The first thing your app will want to do is tell Firebolt that it's ready. Firebolt avoids assuming your app is minimally usable, and gives you complete control over when your app is ready to be presented to end users."),(0,a.kt)("p",null,"When you've rendered enough of your app just call 'ready':"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Lifecycle.ready()\n")),(0,a.kt)("p",null,"That's it! Now Firebolt knows that it's safe to present your app to end users, and can do so as quickly as possible."),(0,a.kt)("p",null,"It's recommended to also listen to any Firebolt events ",(0,a.kt)("em",{parentName:"p"},"before")," calling ready, to ensure you don't miss any."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/api/Lifecycle/#ready"},"Lifecycle")," for more info."),(0,a.kt)("h2",{id:"reporting-errors"},"Reporting Errors"),(0,a.kt)("p",null,"In order to track the quality of both your app and the Firebolt experience, Firebolt needs to know when the user experiences errors in your app. Whenever an error occurs, simply pass the error to the Firebolt Metrics API. For example, to report a 404 network error when loading a required asset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Metrics.error('network', '404', true, 'The requested asset could not be found')\n")),(0,a.kt)("p",null,"The codes and descriptions are completely up to you, the only granularity required is the first parameter, ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),", which can have one of five values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"network")),(0,a.kt)("td",{parentName:"tr",align:null},"A network error occurred")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"media")),(0,a.kt)("td",{parentName:"tr",align:null},"A media playback related error occurred")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"restriction")),(0,a.kt)("td",{parentName:"tr",align:null},"A policy restriction occurred, e.g. content not available in the current region, device, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"entitlement")),(0,a.kt)("td",{parentName:"tr",align:null},"An entitlement restriction occurred, e.g. user attempted to play content they are not entitled to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"other")),(0,a.kt)("td",{parentName:"tr",align:null},"Any other error")))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/api/Metrics/#error"},"Metrics.error")," for more info."),(0,a.kt)("h2",{id:"reporting-content-minutes"},"Reporting Content Minutes"),(0,a.kt)("p",null,"In order to track frequency of errors, Firebolt needs to know which spans of time your user is watching content."),(0,a.kt)("p",null,"To track this, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"startContent")," method before the user starts watching content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Metrics.startContent()\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/api/Metrics/#startcontent"},"Metrics.startContent")," for more info."),(0,a.kt)("p",null,"Note that no identifiers are required for either method, as Firebolt only tracks the length of engagement, not specifically ",(0,a.kt)("em",{parentName:"p"},"what")," the user is watching."),(0,a.kt)("p",null,"When the user is done watching content, call ",(0,a.kt)("inlineCode",{parentName:"p"},"stopContent"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Metrics.stopContent()\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/api/Metrics/#stopcontent"},"Metrics.stopContent")," for more info."),(0,a.kt)("h2",{id:"inspecting-device-capabilities"},"Inspecting Device Capabilities"),(0,a.kt)("p",null,"Since not all devices are created equal, your app likely wants to know which capabilities a given device has."),(0,a.kt)("p",null,"Firebolt provides a number of convenient getters that you are welcome to use for this purpose, such as 'video resolution' as displayed below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let [width, height] = await Device.videoResolution()\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/api/Device/"},"Device API")," for the full list of methods you may want to use."))}c.isMDXComponent=!0}}]);