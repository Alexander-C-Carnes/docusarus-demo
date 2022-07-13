"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[5226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Discovery"},o="Discovery Schema",s={unversionedId:"fireboltAPI/schemas/Discovery",id:"fireboltAPI/schemas/Discovery",title:"Discovery",description:"---",source:"@site/docs/fireboltAPI/schemas/Discovery.md",sourceDirName:"fireboltAPI/schemas",slug:"/fireboltAPI/schemas/Discovery",permalink:"/docusarus-demo/docs/next/fireboltAPI/schemas/Discovery",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/docusarus-demo/tree/development-branch-RDK/my-website/docs/fireboltAPI/schemas/Discovery.md",tags:[],version:"current",frontMatter:{title:"Discovery"},sidebar:"api",previous:{title:"Schemas",permalink:"/docusarus-demo/docs/next/category/schemas"},next:{title:"Entertainment",permalink:"/docusarus-demo/docs/next/fireboltAPI/schemas/Entertainment"}},i={},c=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"PurchasedContentResult",id:"purchasedcontentresult",level:3},{value:"EntityInfoResult",id:"entityinforesult",level:3},{value:"Details",id:"details",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discovery-schema"},"Discovery Schema"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Version 0.7.0"),(0,a.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,a.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,a.kt)("p",null,"For the full schema, see the link below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/discovery.json"},"discovery.json"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schemas",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#purchasedcontentresult"},"PurchasedContentResult")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#entityinforesult"},"EntityInfoResult"))))),(0,a.kt)("h2",{id:"schemas"},"Schemas"),(0,a.kt)("h3",{id:"purchasedcontentresult"},"PurchasedContentResult"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type PurchasedContentResult = {\n  expires: string\n  totalCount: number\n  entries: EntityInfo[]\n}\n")),(0,a.kt)("p",null,"See also: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../schemas/entertainment#entityinfo"},"EntityInfo"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entityinforesult"},"EntityInfoResult"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'type EntityInfoResult = {\n  expires: string\n  entity: EntityInfo       // An EntityInfo object represents an "entity" on the platform. Currently, only entities of type `program` are supported. `programType` must be supplied to identify the program type.\n  related?: EntityInfo[]\n}\n')),(0,a.kt)("p",null,"See also: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../schemas/entertainment#entityinfo"},"EntityInfo"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,a.kt)("h4",{id:"details"},"Details"),(0,a.kt)("p",null,"The result for an ",(0,a.kt)("inlineCode",{parentName:"p"},"entityInfo()")," push or pull."),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);