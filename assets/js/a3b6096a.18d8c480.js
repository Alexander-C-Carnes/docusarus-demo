"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[6953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Account"},o="Account Module",i={unversionedId:"fireboltAPI/Account",id:"version-0.7.0/fireboltAPI/Account",title:"Account",description:"---",source:"@site/versioned_docs/version-0.7.0/fireboltAPI/Account.md",sourceDirName:"fireboltAPI",slug:"/fireboltAPI/Account",permalink:"/docusarus-demo/docs/fireboltAPI/Account",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/docusarus-demo/tree/development-branch-RDK/my-website/versioned_docs/version-0.7.0/fireboltAPI/Account.md",tags:[],version:"0.7.0",frontMatter:{title:"Account"},sidebar:"api",previous:{title:"Accessibility",permalink:"/docusarus-demo/docs/fireboltAPI/accessibility"},next:{title:"Advertising",permalink:"/docusarus-demo/docs/fireboltAPI/Advertising"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"id",id:"id",level:3},{value:"uid",id:"uid",level:3}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"account-module"},"Account Module"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Version 0.7.0"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null," A module for querying about the device account."),(0,a.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,a.kt)("p",null,"Firebolt APIs are maintained in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,a.kt)("p",null,"You can see this API in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/account.json"},"account.json")," OpenRPC JSON-Schema document. "),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#openrpc"},"OpenRPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#id"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#uid"},"uid"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"))),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use the Account module, you can import it into your project from the Firebolt SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Account } from '@firebolt-js/sdk'\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"Get the platform back-office account identifier"),(0,a.kt)("p",null,"To get the value, call the method with no parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function id(): Promise<string>\n")),(0,a.kt)("p",null,"Promise resolution:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the id")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Default Example"),(0,a.kt)("p",null,"JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Account } from '@firebolt-js/sdk'\n\nAccount.id()\n    .then(id => {\n        console.log(id)\n    })\n")),(0,a.kt)("p",null,"Value of ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"123"\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON-RPC:"),(0,a.kt)("p",null,"Request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "account.id",\n  "params": {}\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "123"\n}\n'))),(0,a.kt)("h3",{id:"uid"},"uid"),(0,a.kt)("p",null,"Gets a unique id for the current app & account"),(0,a.kt)("p",null,"To get the value, call the method with no parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function uid(): Promise<string>\n")),(0,a.kt)("p",null,"Promise resolution:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"a unique ID")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Getting the unique ID"),(0,a.kt)("p",null,"JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Account } from '@firebolt-js/sdk'\n\nAccount.uid()\n    .then(uniqueId => {\n        console.log(uniqueId)\n    })\n")),(0,a.kt)("p",null,"Value of ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueId"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"ee6723b8-7ab3-462c-8d93-dbf61227998e"\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON-RPC:"),(0,a.kt)("p",null,"Request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "account.uid",\n  "params": {}\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "ee6723b8-7ab3-462c-8d93-dbf61227998e"\n}\n'))))}s.isMDXComponent=!0}}]);