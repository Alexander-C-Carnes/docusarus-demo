"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[1417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return a?l.createElement(b,i(i({ref:t},c),{},{components:a})):l.createElement(b,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={title:"Firebolt"},i="Firebolt Schema",o={unversionedId:"fireboltAPI/schemas/Firebolt",id:"fireboltAPI/schemas/Firebolt",title:"Firebolt",description:"---",source:"@site/docs/fireboltAPI/schemas/Firebolt.md",sourceDirName:"fireboltAPI/schemas",slug:"/fireboltAPI/schemas/Firebolt",permalink:"/docusarus-demo/docs/next/fireboltAPI/schemas/Firebolt",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/docusarus-demo/tree/development-branch-RDK/my-website/docs/fireboltAPI/schemas/Firebolt.md",tags:[],version:"current",frontMatter:{title:"Firebolt"},sidebar:"api",previous:{title:"Errors",permalink:"/docusarus-demo/docs/next/fireboltAPI/schemas/Errors"},next:{title:"Intents",permalink:"/docusarus-demo/docs/next/fireboltAPI/schemas/Intents"}},s={},p=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"FireboltSpecification",id:"fireboltspecification",level:3},{value:"SemanticVersion",id:"semanticversion",level:3},{value:"Capability",id:"capability",level:3},{value:"Details",id:"details",level:4},{value:"RolePolicy",id:"rolepolicy",level:3},{value:"Details",id:"details-1",level:4},{value:"CapabilityKey",id:"capabilitykey",level:3},{value:"UserGrantKey",id:"usergrantkey",level:3},{value:"MethodInfo",id:"methodinfo",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"firebolt-schema"},"Firebolt Schema"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.7.0"),(0,r.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,r.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,r.kt)("p",null,"For the full schema, see the link below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/firebolt.json"},"firebolt.json"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schemas",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fireboltspecification"},"FireboltSpecification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#semanticversion"},"SemanticVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#capability"},"Capability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rolepolicy"},"RolePolicy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#capabilitykey"},"CapabilityKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usergrantkey"},"UserGrantKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#methodinfo"},"MethodInfo"))))),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"fireboltspecification"},"FireboltSpecification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type FireboltSpecification = {\n  version: string\n  capabilities: Capability[]\n  methods?: MethodInfo[]\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"semanticversion"},"SemanticVersion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SemanticVersion = string\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"capability"},"Capability"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Capability = {\n  id: string\n  level: 'must' | 'should' | 'could'  // Whether this capabilty is a compliance requirement, a compliance recommendation, or optional.\n  use: RolePolicy                     // An access policy for a particular role of a capability.\n  manage: RolePolicy                  // An access policy for a particular role of a capability.\n  provide: RolePolicy                 // An access policy for a particular role of a capability.\n  delegable?: boolean                 // Whether this capability may be provided by applications.\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("h4",{id:"details"},"Details"),(0,r.kt)("p",null,"A Firebolt Capability that must, should, or could be implemented by a particular Firebolt implementation."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rolepolicy"},"RolePolicy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type RolePolicy = {\n  public?: boolean     // May this capability & role be assigned to applications by distributors.\n  negotiable: boolean  // May this policy be overridden by Firebolt distributors.\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("h4",{id:"details-1"},"Details"),(0,r.kt)("p",null,"An access policy for a particular role of a capability."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"capabilitykey"},"CapabilityKey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type CapabilityKey = string\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usergrantkey"},"UserGrantKey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type UserGrantKey = string\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"methodinfo"},"MethodInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MethodInfo = {\n  method: string\n  type: 'firebolt' | 'w3c'\n  uses?: string[]\n  provides?: string[]\n  manages?: string[]\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);