"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[9845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?l.createElement(m,o(o({ref:t},p),{},{components:n})):l.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const i={},o="Listening for Events",a={unversionedId:"firebolt/app-lifecycle/listening-for-events",id:"version-0.7.0/firebolt/app-lifecycle/listening-for-events",title:"Listening for Events",description:"Events are a common pattern for asynchronous notifications from an SDK.",source:"@site/versioned_docs/version-0.7.0/firebolt/app-lifecycle/listening-for-events.md",sourceDirName:"firebolt/app-lifecycle",slug:"/firebolt/app-lifecycle/listening-for-events",permalink:"/docusarus-demo/docs/firebolt/app-lifecycle/listening-for-events",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/docusarus-demo/tree/development-branch-RDK/my-website/versioned_docs/version-0.7.0/firebolt/app-lifecycle/listening-for-events.md",tags:[],version:"0.7.0",frontMatter:{},sidebar:"fireboltDocs",previous:{title:"App Lifecycle",permalink:"/docusarus-demo/docs/firebolt/app-lifecycle/lifecycle-management"},next:{title:"Listening for Property changes",permalink:"/docusarus-demo/docs/firebolt/app-lifecycle/listening-for-property-changes"}},s={},c=[{value:"Listening for Events",id:"listening-for-events-1",level:2},{value:"Listening for a specific event",id:"listening-for-a-specific-event",level:3},{value:"Listening for all events in a Module",id:"listening-for-all-events-in-a-module",level:3},{value:"Listening for an event just once",id:"listening-for-an-event-just-once",level:2},{value:"Clearing listeners",id:"clearing-listeners",level:2},{value:"Clearing a single listener",id:"clearing-a-single-listener",level:3},{value:"Clearing all listeners in a module",id:"clearing-all-listeners-in-a-module",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listening-for-events"},"Listening for Events"),(0,r.kt)("p",null,"Events are a common pattern for asynchronous notifications from an SDK."),(0,r.kt)("p",null,"Firebolt provides three methods for interacting with Firebolt events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"once")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clear"))),(0,r.kt)("h2",{id:"listening-for-events-1"},"Listening for Events"),(0,r.kt)("p",null,"In order to listen for an event, you need to know which Firebolt module it is part of."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"foreground")," event is part of the Firebolt ",(0,r.kt)("inlineCode",{parentName:"p"},"Lifecycle")," module."),(0,r.kt)("p",null,"Once you've identified which module, there are two ways to listen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"listen for ",(0,r.kt)("strong",{parentName:"li"},"every event")," in the module"),(0,r.kt)("li",{parentName:"ul"},"listen for a specific event in the module")),(0,r.kt)("h3",{id:"listening-for-a-specific-event"},"Listening for a specific event"),(0,r.kt)("p",null,"To listen to ",(0,r.kt)("strong",{parentName:"p"},"just the ",(0,r.kt)("inlineCode",{parentName:"strong"},"foreground")," event"),", you'd use the ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," method that is part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lifecycle")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Lifecycle.listen('foreground', () => { })    \n")),(0,r.kt)("p",null,"The first parameter is the name of the event you are listening for. The second parameter is a callback function that the platform will call to inform you that this event has occurred."),(0,r.kt)("p",null,"Ideally your callback would be more interesting than the example above. Generally the callback will take the event's payload object, which has important context about each instance of an event, and do ",(0,r.kt)("em",{parentName:"p"},"something")," with it."),(0,r.kt)("p",null,"To make this slightly more interesting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Lifecycle.listen('foreground', (value) => {\n    if (value.previous === 'inactive') {\n        console.log('Our app has transitioned from inactive to foreground!')\n    }\n})\n")),(0,r.kt)("h3",{id:"listening-for-all-events-in-a-module"},"Listening for all events in a Module"),(0,r.kt)("p",null,"To listen to all events in a module, say the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lifecycle")," module, you'd use the listen method with only one parameter, the callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Lifecycle.listen((event, value) => {\n    console.log(event) // this will be the string representation of the lifecycle state we just entered\n    if (value.previous === 'inactive') {\n        console.log('Our app has transitioned from inactive to foreground!')\n    }\n})\n")),(0,r.kt)("p",null,"Note that in this case, your callback method must take two parameters: the name of the event being received and the payload value of the event."),(0,r.kt)("h2",{id:"listening-for-an-event-just-once"},"Listening for an event just once"),(0,r.kt)("p",null,"Sometimes your app only wants to be notified of the ",(0,r.kt)("em",{parentName:"p"},"very next instance")," of an event."),(0,r.kt)("p",null,"In this case, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"once")," method, which as the same signature as ",(0,r.kt)("inlineCode",{parentName:"p"},"listen"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Lifecycle.once('foreground', (value) => {\n    if (value.previous === 'inactive') {\n        console.log('Our app has transitioned from inactive to foreground!')\n    }\n})\n\nLifecycle.once((event, value) => {\n    console.log(event) // this will be the string representation of the lifecycle state we just entered\n    if (value.previous === 'inactive') {\n        console.log('Our app has transitioned from inactive to foreground!')\n    }\n})\n")),(0,r.kt)("p",null,"Each of those ",(0,r.kt)("inlineCode",{parentName:"p"},"once")," calls results in zero or one calls to your callback, when a matching event occurs. Future events will not be sent to those callbacks. "),(0,r.kt)("h2",{id:"clearing-listeners"},"Clearing listeners"),(0,r.kt)("p",null,"Modules that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," method also have a ",(0,r.kt)("inlineCode",{parentName:"p"},"clear")," method. This allows you to clear out all of the listeners for the entire module, or just a single listener."),(0,r.kt)("h3",{id:"clearing-a-single-listener"},"Clearing a single listener"),(0,r.kt)("p",null,"In order to clear a single listener, your app needs to keep track of the listener ID for the initiating ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," call."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," method returns a Promise that resolves to an integer for this purpose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// let's log \"Hello World!\" whenever our app moves into the foreground\nconst helloListenerId = await Lifecycle.listen('foreground', () => { console.log(\"Hello World!\")})\n\n// but let's stop doing that when our app is unloading\nLifecycle.listen('unloading', () => {\n    Lifecycle.clear(helloListenerId)\n})\n")),(0,r.kt)("h3",{id:"clearing-all-listeners-in-a-module"},"Clearing all listeners in a module"),(0,r.kt)("p",null,"In order to clear all of the listeners added a specific module, simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"clear()")," with no parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Lifecycle.clear()\n")))}u.isMDXComponent=!0}}]);