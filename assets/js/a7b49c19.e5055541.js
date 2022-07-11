"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[8887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),y=i,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return n?s.createElement(m,r(r({ref:t},p),{},{components:n})):s.createElement(m,r({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<a;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(87462),i=(n(67294),n(3905));const a={title:"Closed Captions"},r="Closed Captions (CC)",o={unversionedId:"acessibility/closed-captions",id:"acessibility/closed-captions",title:"Closed Captions",description:"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes.",source:"@site/docs/acessibility/closed-captions.md",sourceDirName:"acessibility",slug:"/acessibility/closed-captions",permalink:"/dousarus-demo/docs/acessibility/closed-captions",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website/docs/acessibility/closed-captions.md",tags:[],version:"current",frontMatter:{title:"Closed Captions"},sidebar:"tutorialSidebar",previous:{title:"Accessibility",permalink:"/dousarus-demo/docs/acessibility/accessibility"},next:{title:"Voice Guidance",permalink:"/dousarus-demo/docs/acessibility/voice-guidance"}},c={},l=[{value:"Reading device settings",id:"reading-device-settings",level:2},{value:"Adapting to real-time changes",id:"adapting-to-real-time-changes",level:2},{value:"Example ClosedCaptionsSettings value",id:"example-closedcaptionssettings-value",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"closed-captions-cc"},"Closed Captions (CC)"),(0,i.kt)("p",null,"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes."),(0,i.kt)("p",null,"As a note, we cannot not render the captions for your app. Your app will need to be in sync with your user's expectations."),(0,i.kt)("h2",{id:"reading-device-settings"},"Reading device settings"),(0,i.kt)("p",null,"In order to access your user's current closed captions settings, your app can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessibility.closedCaptions()")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nconst ccSettings = await Accessibility.closedCaptions()\n\nif (ccSettings.enabled) {\n  // the user has captions enabled\n}\n")),(0,i.kt)("p",null,"Additionally, your app should respect your user's current closed-captions styles, which they may have set as their personal preference for readability. Continuing from the previous example, you can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"styles")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(ccSettings.styles)\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/api/accessibility/#closedcaptionsstyles"},"ClosedCaptionsStyles")," API for more info on styling properties."),(0,i.kt)("h2",{id:"adapting-to-real-time-changes"},"Adapting to real-time changes"),(0,i.kt)("p",null,"While your app is running, or even while your app is playing content, your user may change the closed captions settings on their device. Your app should promptly respond to this change by listening to all ",(0,i.kt)("inlineCode",{parentName:"p"},"closedCaptionsSettingsChanged")," events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen(`closedCaptionsSettingsChanged`), ccSettings => {\n  // ccSettings is the same structure returned from `closedCaptions()`\n  if (ccSettings.enabled) {\n    // update your app's CC styles\n    console.log(ccSettings.styles)\n  }\n  else {\n    // turn off your app's CC rendering\n  }\n})\n")),(0,i.kt)("h2",{id:"example-closedcaptionssettings-value"},"Example ClosedCaptionsSettings value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    enabled: true,\n    styles: {\n      fontFamily: 'Monospace sans-serif',\n      fontSize: 1,\n      fontColor: '#ffffff',\n      fontEdge: 'none',\n      fontEdgeColor: '#7F7F7F',\n      fontOpacity: 100,\n      backgroundColor: '#000000',\n      backgroundOpacity: 100,\n      textAlign: 'center',\n      textAlignVertical: 'middle',\n    }\n}\n")),(0,i.kt)("p",null,"For more information about this API, visit the ",(0,i.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API documentation."))}u.isMDXComponent=!0}}]);