"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[3211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={sidebar_label:"FAQs",sidebar_position:14,sidebar_class_name:"green"},s="Frequently Asked Questions",l={unversionedId:"faqs",id:"faqs",title:"Frequently Asked Questions",description:"How do I get started?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/docusarus-demo/docs/next/faqs",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/docusarus-demo/tree/development-branch-RDK/my-website/docs/faqs.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_label:"FAQs",sidebar_position:14,sidebar_class_name:"green"}},i={},p=[{value:"How do I get started?",id:"how-do-i-get-started",level:3},{value:"How do apps on the platform work?",id:"how-do-apps-on-the-platform-work",level:3},{value:"What are the limitations of the platform browser?",id:"what-are-the-limitations-of-the-platform-browser",level:3},{value:"Does the platform host my app or content?",id:"does-the-platform-host-my-app-or-content",level:3},{value:"Do you support HTTP/2?",id:"do-you-support-http2",level:3},{value:"Is local storage available?",id:"is-local-storage-available",level:3},{value:"Can I integrate with supported voice remotes?",id:"can-i-integrate-with-supported-voice-remotes",level:3},{value:"Is DRM supported on the platform?",id:"is-drm-supported-on-the-platform",level:3},{value:"Can I integrate my app&#39;s asset metadata with the platform?",id:"can-i-integrate-my-apps-asset-metadata-with-the-platform",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h3",{id:"how-do-i-get-started"},"How do I get started?"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"./quick-start.md"},"Quick Start Guide")," for steps on how to begin. Also, review the ",(0,o.kt)("a",{parentName:"p",href:"./app-requirements.md"},"App Requirements")," page to understand what is needed to build an app on the application platform."),(0,o.kt)("p",null,"If you are looking for a more in-depth guide on how to build your first Firebolt\xae app, check out our ",(0,o.kt)("a",{parentName:"p",href:"./hello-world-guide.md"},'"Hello World Guide"'),"."),(0,o.kt)("h3",{id:"how-do-apps-on-the-platform-work"},"How do apps on the platform work?"),(0,o.kt)("p",null,"Apps on the platform are managed by our cloud infrastructure. When an app is launched by a user, the Platform presents a full-screen HTML view of the web app in the RDK browser. It passes key-presses from a customer's remote back to the web app. Utilizing Firebolt\xae, the Platform will manage aspects of the app such as lifecycle, metadata, and other API calls."),(0,o.kt)("h3",{id:"what-are-the-limitations-of-the-platform-browser"},"What are the limitations of the platform browser?"),(0,o.kt)("p",null,"The platform uses the RDK browser. The RDK browser is not a full-featured web browser. You cannot open multiple tabs or windows, or link to other websites."),(0,o.kt)("h3",{id:"does-the-platform-host-my-app-or-content"},"Does the platform host my app or content?"),(0,o.kt)("p",null,"No, you must host your app at an IPv6 publicly accessible URL of your choosing."),(0,o.kt)("h3",{id:"do-you-support-http2"},"Do you support HTTP/2?"),(0,o.kt)("p",null,"Not at this time."),(0,o.kt)("h3",{id:"is-local-storage-available"},"Is local storage available?"),(0,o.kt)("p",null,"Local storage is not available at this time."),(0,o.kt)("h3",{id:"can-i-integrate-with-supported-voice-remotes"},"Can I integrate with supported voice remotes?"),(0,o.kt)("p",null,"Yes, any supported voice remote can be used to launch your app on the platform, and in certain cases, users can interact with your app by voice. See our ",(0,o.kt)("a",{parentName:"p",href:"./voice-commands.md"},"Voice Commands")," for more."),(0,o.kt)("h3",{id:"is-drm-supported-on-the-platform"},"Is DRM supported on the platform?"),(0,o.kt)("p",null,"The platform supports the following DRM:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microsoft PlayReady 2.5"),(0,o.kt)("li",{parentName:"ul"},"Widevine 1.14 Service level 1")),(0,o.kt)("h3",{id:"can-i-integrate-my-apps-asset-metadata-with-the-platform"},"Can I integrate my app's asset metadata with the platform?"),(0,o.kt)("p",null,"Integrated asset metadata is not available to all apps. Review the ",(0,o.kt)("a",{parentName:"p",href:"./metadata-integration.md"},"Integrated Metadata")," page to learn more."))}d.isMDXComponent=!0}}]);