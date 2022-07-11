"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[2343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Listening for Property changes",l={unversionedId:"firebolt/app-lifecycle/listening-for-property-changes",id:"version-0.7.0/firebolt/app-lifecycle/listening-for-property-changes",title:"Listening for Property changes",description:"With Firebolt\xae you can get and listen for property changes on the device. This includes both the hardware and system properties such as audio, current accessibility settings, and all the mutable properties of a device.",source:"@site/versioned_docs/version-0.7.0/firebolt/app-lifecycle/listening-for-property-changes.md",sourceDirName:"firebolt/app-lifecycle",slug:"/firebolt/app-lifecycle/listening-for-property-changes",permalink:"/dousarus-demo/docs/firebolt/app-lifecycle/listening-for-property-changes",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website/versioned_docs/version-0.7.0/firebolt/app-lifecycle/listening-for-property-changes.md",tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Listening for Events",permalink:"/dousarus-demo/docs/firebolt/app-lifecycle/listening-for-events"},next:{title:"Authentication",permalink:"/dousarus-demo/docs/category/authentication"}},s={},c=[{value:"Listening for a Property to Change",id:"listening-for-a-property-to-change",level:2},{value:"Listening for a change in the device&#39;s network connectivity status",id:"listening-for-a-change-in-the-devices-network-connectivity-status",level:3},{value:"Related Information",id:"related-information",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"listening-for-property-changes"},"Listening for Property changes"),(0,a.kt)("p",null,"With Firebolt\xae you can get and listen for property changes on the device. This includes both the hardware and system properties such as audio, current accessibility settings, and all the mutable properties of a device."),(0,a.kt)("p",null,"Each Firebolt\xae property comes with the following abilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Get the property at a specific time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Listen for when that property changes, such as when a user changes their device name from \\"Living Room TV\\" to \\"Bedroom TV\\".'))),(0,a.kt)("p",null,"This is useful in instances where you want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Retrieve a specific device setting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can retrieve the current state of a property. For instance, using the Accessibility module you can get back the user's closed captions settings.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Checking device property states")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can check the current state of a property. For instance, using ",(0,a.kt)("a",{parentName:"p",href:"/api/device/"},"the Device module")," you retrieve how the device is connected to the internet or if it's connected at all.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Receiving property state updates when they change")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can listen for when a property changes such as when a user changes a device setting or adjusts their profile."))),(0,a.kt)("h2",{id:"listening-for-a-property-to-change"},"Listening for a Property to Change"),(0,a.kt)("p",null,"You can receive property state updates when a change occurs in a specific property. To create a property listener for a specific property and have it do something or return something is the same syntax across each Firebolt\xae module. To listen for a property, change the syntax to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<Module>.<property>( value => {\n  // this code gets the new value when it changes\n})\n")),(0,a.kt)("h3",{id:"listening-for-a-change-in-the-devices-network-connectivity-status"},"Listening for a change in the device's network connectivity status"),(0,a.kt)("p",null,"If you wanted your app to receive a notification that the network value changed on the device, (e.g., react to when a user is no longer connected to the internet) it would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Device.network( value => {\n  console.log(value)\n})\n")),(0,a.kt)("p",null,"In the above example, the new value is printed to a console log."),(0,a.kt)("p",null,"If you were to run the above, it would look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  {\n    "state":"connected",\n    "type":"WIFI"\n}\n')),(0,a.kt)("p",null,"To see the current list of return values for the network method based on the device go to ",(0,a.kt)("a",{parentName:"p",href:"/api/device/#network"},"Device.network")),(0,a.kt)("h2",{id:"related-information"},"Related Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dependencies"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Firebolt\xae 0.6.0 and Higher")))))}u.isMDXComponent=!0}}]);