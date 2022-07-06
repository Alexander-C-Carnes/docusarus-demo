"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[1439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:1,title:"LiVOD",tags:["Getting started","Core Concepts","Content Catalogs","VOD"]},r="LiVOD",o={unversionedId:"xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod/index",id:"xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod/index",title:"LiVOD",description:"| Status        | DRAFT          |",source:"@site/docs/xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod/index.md",sourceDirName:"xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod",slug:"/xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod/",permalink:"/docs/next/xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xvp-docs/getting-started/core-concepts/content-catalogs/vod/livod/index.md",tags:[{label:"Getting started",permalink:"/docs/next/tags/getting-started"},{label:"Core Concepts",permalink:"/docs/next/tags/core-concepts"},{label:"Content Catalogs",permalink:"/docs/next/tags/content-catalogs"},{label:"VOD",permalink:"/docs/next/tags/vod"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"LiVOD",tags:["Getting started","Core Concepts","Content Catalogs","VOD"]},sidebar:"tutorialSidebar",previous:{title:"Video On Demand",permalink:"/docs/next/xvp-docs/getting-started/core-concepts/content-catalogs/vod/"},next:{title:"Locker",permalink:"/docs/next/xvp-docs/getting-started/core-concepts/content-catalogs/vod/locker/"}},s={},p=[{value:"Feature Support",id:"feature-support",level:3},{value:"Playback",id:"playback",level:3},{value:"Index",id:"index",level:2},{value:"Design",id:"design",level:2},{value:"API Parameters",id:"api-parameters",level:3},{value:"Content Catalog",id:"content-catalog",level:4},{value:"Airing Type",id:"airing-type",level:4},{value:"IncludeOutOfWindowLiVod",id:"includeoutofwindowlivod",level:4},{value:"LivodType",id:"livodtype",level:4},{value:"f2m",id:"f2m",level:4},{value:"onNow &amp; upcoming",id:"onnow--upcoming",level:4},{value:"windowStart &amp; windowEnd",id:"windowstart--windowend",level:4},{value:"displayStartDate",id:"displaystartdate",level:4},{value:"Schema",id:"schema",level:3},{value:"SubscriberAccess",id:"subscriberaccess",level:4},{value:"Streaming Classes",id:"streaming-classes",level:2},{value:"OTT Scheduled Stream",id:"ott-scheduled-stream",level:3},{value:"Examples",id:"examples",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Continue Watching &amp; Resume Points post-event",id:"continue-watching--resume-points-post-event",level:4},{value:"Ephemeral Streams",id:"ephemeral-streams",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Attributes",id:"attributes-1",level:4},{value:"Continue Watching &amp; Resume Points post-event",id:"continue-watching--resume-points-post-event-1",level:4},{value:"OTT VOD",id:"ott-vod",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Attributes",id:"attributes-2",level:4},{value:"Continue Watching &amp; Resume Points post-event",id:"continue-watching--resume-points-post-event-2",level:4},{value:"Non-Scheduled Stream",id:"non-scheduled-stream",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Attributes",id:"attributes-3",level:4},{value:"Continue Watching &amp; Resume Points post-event",id:"continue-watching--resume-points-post-event-3",level:4},{value:"Spontaneous Stream",id:"spontaneous-stream",level:3},{value:"Example",id:"example",level:4},{value:"Attributes",id:"attributes-4",level:4},{value:"Continue Watching &amp; Resume Points post-event",id:"continue-watching--resume-points-post-event-4",level:4},{value:"Challenges and considerations",id:"challenges-and-considerations",level:2},{value:"References",id:"references",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"livod"},"LiVOD"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"DRAFT"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Last updated"),(0,i.kt)("td",{parentName:"tr",align:null},"06/10/2022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Author"),(0,i.kt)("td",{parentName:"tr",align:null},"Patricia Motta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reviewers"),(0,i.kt)("td",{parentName:"tr",align:null},"Lindsay Mack")))),(0,i.kt)("p",null,"a.k.a Live VOD - it models live content as on demand."),(0,i.kt)("p",null,'LiVOD enables OTT Live Content to be discoverable and tuned to throughout the experience, consistent with other content types.\nIt is the primary content catalog to populate "L"ive and Upcoming" in Canned Searches.'),(0,i.kt)("p",null,"It Surfaces in XVP as VOD results and a VOD-like WatchOption, but behaves like linear (minus the grid)."),(0,i.kt)("p",null,"LiVOD follows Merlin VOD-Program metadata model."),(0,i.kt)("p",null,"Supported on most Discovery APIs such as WatchOptions, Search, Playlist, PlayNow and any Browse."),(0,i.kt)("h3",{id:"feature-support"},"Feature Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Searchable via Text and Voice"),(0,i.kt)("li",{parentName:"ul"},"Browse/Canned Search"),(0,i.kt)("li",{parentName:"ul"},"Can be returned as \u201cUpcoming\u201d (only VOD variant that permits this)"),(0,i.kt)("li",{parentName:"ul"},"Entity Metadata and Show Pages"),(0,i.kt)("li",{parentName:"ul"},"Add to MyList and discover in PlayNow when currently airing"),(0,i.kt)("li",{parentName:"ul"},"Supports overrun cases"),(0,i.kt)("li",{parentName:"ul"},"No transactional component to LiVOD's - or any upsells pointing to these.")),(0,i.kt)("p",null,"LiVOD has some nuances."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It has additional date/time fields for metadata displays."),(0,i.kt)("li",{parentName:"ul"},"Content can be discoverable before and after availability window (via opt-in parameters on Discovery and WatchOptions)"),(0,i.kt)("li",{parentName:"ul"},"Content can be discoverable when not tunable \u2013 Status and StreamingClass inform client how to handle"),(0,i.kt)("li",{parentName:"ul"},"Live sports subject to status changes, delays and overrun")),(0,i.kt)("p",null,"Interesting fact:"),(0,i.kt)("p",null,"All live and sports content on FLEX is app based and discoverable as liVOD."),(0,i.kt)("h3",{id:"playback"},"Playback"),(0,i.kt)("p",null,"LiVOD is live streaming content for some portion of its availability window."),(0,i.kt)("p",null,"Deeplinks can point to a \u201cstatic\u201d locator or be generated per live event."),(0,i.kt)("h2",{id:"index"},"Index"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#design"},"Design")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#streaming-classes"},"Streaming Classes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#challenges-and-considerations"},"Challenges and considerations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#notes"},"Notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"There are slight differences on the handling of LiVOD between WatchOptions vs other Discovery APIs."),(0,i.kt)("h3",{id:"api-parameters"},"API Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#content-catalog"},"contentCatalogTypes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#airing-type"},"airingType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#includeoutofwindowlivod"},"includeOutOfWindowLiVod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#livod"},"livodType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#f2m"},"f2m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#onnow--upcoming"},"onNow & upcoming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#windowstart--windowend"},"windowStart & windowEnd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#displaystartdate"},"displayStartDate"))),(0,i.kt)("h4",{id:"content-catalog"},"Content Catalog"),(0,i.kt)("p",null,"In XVP Watch Options, ",(0,i.kt)("inlineCode",{parentName:"p"},"LiVOD")," is treated as VOD - there is no dedicated catalog.\nIt's returned by default."),(0,i.kt)("p",null,"On all other APIs, ",(0,i.kt)("inlineCode",{parentName:"p"},"LiVOD")," is a dedicated content catalog - separate from VOD.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"contentCatalogTypes=livod"),"."),(0,i.kt)("h4",{id:"airing-type"},"Airing Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AiringType")," values For ",(0,i.kt)("inlineCode",{parentName:"p"},"LiVOD")," are same as Listings - ",(0,i.kt)("inlineCode",{parentName:"p"},"Live"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Taped"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Repeat"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"New"),"."),(0,i.kt)("p",null,"Must enable Browse's ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_livod_airtype_filtering")," feature flag to allow filtering on LiVod airingType."),(0,i.kt)("h4",{id:"includeoutofwindowlivod"},"IncludeOutOfWindowLiVod"),(0,i.kt)("p",null,"In WatchOptions is possible to get LIVOD assets that are out of availability window - along with sufficient status messaging so that\nclients can message the user appropriately."),(0,i.kt)("h4",{id:"livodtype"},"LivodType"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"vodType"),", filters LiVOD showings by offer's purchase category."),(0,i.kt)("h4",{id:"f2m"},"f2m"),(0,i.kt)("p",null,"Supports the ability to filter LiVod content based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriberAccess.isWatchable")," flag.\nWhenever ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriberAccess.isWatchable=true"),", content is considered free to the subscriber in context."),(0,i.kt)("h4",{id:"onnow--upcoming"},"onNow & upcoming"),(0,i.kt)("p",null,"Filters LiVOD showings based on whether it is airing now or in the future.\nSee parameter definition for more details on how showing availability window is computed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"#tbd")," link to parameter definition"),(0,i.kt)("h4",{id:"windowstart--windowend"},"windowStart & windowEnd"),(0,i.kt)("p",null,"Filters LiVOD showings based on start or end time of the airing."),(0,i.kt)("h4",{id:"displaystartdate"},"displayStartDate"),(0,i.kt)("p",null,"Browse Airtime Sort on ",(0,i.kt)("inlineCode",{parentName:"p"},"VOD.displayStartDate")),(0,i.kt)("p",null,"Sorts programs based on their earliest showing start time using linear as priority.",(0,i.kt)("br",{parentName:"p"}),"\n","For series, the showings of child episodes will be considered."),(0,i.kt)("p",null,"Must be last when used as secondary sort field.\nFor LiVOD programs, it sorts based on their earliest displayStartDate."),(0,i.kt)("h3",{id:"schema"},"Schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/swagger-ui.html?json=Architecture/Specifications/components-vod-livod.yml"},"LiVOD Schema"))),(0,i.kt)("h4",{id:"subscriberaccess"},"SubscriberAccess"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/swagger-ui.html?json=Architecture/Specifications/components-subscriber-access.yml"},"SubscriberAccess Schema"))),(0,i.kt)("h2",{id:"streaming-classes"},"Streaming Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ott-scheduled-stream"},"OTT Scheduled Stream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ephemeral-streams"},"Ephemeral Streams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ott-vod"},"OTT VOD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#non-scheduled-stream"},"Non-Scheduled Stream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#spontaneous-stream"},"Spontaneous Stream"))),(0,i.kt)("h3",{id:"ott-scheduled-stream"},"OTT Scheduled Stream"),(0,i.kt)("p",null,"OTT scheduled event on a continuous Deeplink/Stream."),(0,i.kt)("p",null,"These are continuous streams that can't be in the grid, like Sky News is only discoverable as LiVOD on X1."),(0,i.kt)("p",null,"4K events, that can't be in the grid and aren't continuous - need to be scheduled individually"),(0,i.kt)("p",null,"Continous linear streams for apps (Peacock, Pluto, Xumo), where we treat each listing as a LiVOD bc we don't have support for launching to apps from all linear discovery points yet"),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AppleTV"),(0,i.kt)("li",{parentName:"ul"},"live 24x7 MLB 4k channels"),(0,i.kt)("li",{parentName:"ul"},"Friday Night Baseball \u201cpop-up\u201d events on"),(0,i.kt)("li",{parentName:"ul"},"Pluto, Xumo, FASTs")),(0,i.kt)("h4",{id:"attributes"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merlin ProgramId"),(0,i.kt)("li",{parentName:"ul"},"No Linear Listing presence for metadata/discovery"),(0,i.kt)("li",{parentName:"ul"},"Status: N/A"),(0,i.kt)("li",{parentName:"ul"},"StreamingClass: ScheduledStream")),(0,i.kt)("h4",{id:"continue-watching--resume-points-post-event"},"Continue Watching & Resume Points post-event"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tunes to currently airing point in stream")),(0,i.kt)("h3",{id:"ephemeral-streams"},"Ephemeral Streams"),(0,i.kt)("p",null,"No continuous deeplink/stream"),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESPN3 and other pop-up streams, like Peacock Sports (SLEs) - single live events"),(0,i.kt)("li",{parentName:"ul"},"DAZN")),(0,i.kt)("h4",{id:"attributes-1"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merlin ProgramId"),(0,i.kt)("li",{parentName:"ul"},"No No continuous deeplink/stream"),(0,i.kt)("li",{parentName:"ul"},"Status: Yes"),(0,i.kt)("li",{parentName:"ul"},"StreamingClass: EphemeralStream")),(0,i.kt)("h4",{id:"continue-watching--resume-points-post-event-1"},"Continue Watching & Resume Points post-event"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not tunnable")),(0,i.kt)("h3",{id:"ott-vod"},"OTT VOD"),(0,i.kt)("p",null,"Replay (for a LiVOD) or App VOD (or iVOD)"),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NBCSportsApp, Peacock, AppleTV+ MLB"),(0,i.kt)("li",{parentName:"ul"},"Premiums, BBC Restart")),(0,i.kt)("h4",{id:"attributes-2"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merlin ProgramId"),(0,i.kt)("li",{parentName:"ul"},"Status: N/A"),(0,i.kt)("li",{parentName:"ul"},"StreamingClass: OTTVOD"),(0,i.kt)("li",{parentName:"ul"},"Deeplink always available in-window")),(0,i.kt)("h4",{id:"continue-watching--resume-points-post-event-2"},"Continue Watching & Resume Points post-event"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tunes to start/resume point")),(0,i.kt)("h3",{id:"non-scheduled-stream"},"Non-Scheduled Stream"),(0,i.kt)("p",null,"Non-scheduled, continuous."),(0,i.kt)("h4",{id:"examples-3"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sling, Amazon Live, YouTube Live")),(0,i.kt)("h4",{id:"attributes-3"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Merlin ProgramId"),(0,i.kt)("li",{parentName:"ul"},"Continuous URL")),(0,i.kt)("h4",{id:"continue-watching--resume-points-post-event-3"},"Continue Watching & Resume Points post-event"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"spontaneous-stream"},"Spontaneous Stream"),(0,i.kt)("p",null,"Spontaneous, no-coninuous."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Twitch")),(0,i.kt)("h4",{id:"attributes-4"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Merlin ProgramId"),(0,i.kt)("li",{parentName:"ul"},"No Continuous URL")),(0,i.kt)("h4",{id:"continue-watching--resume-points-post-event-4"},"Continue Watching & Resume Points post-event"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h2",{id:"challenges-and-considerations"},"Challenges and considerations"),(0,i.kt)("p",null,"Discovering non-playble content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'in "Continue Watching" experience - Launchpad, MyList, Last9 - due to the presence of a\nresume point pointing to an expired LiVOD.'),(0,i.kt)("li",{parentName:"ul"},"Browse/Search may have an indexing gap when event timings changes.")),(0,i.kt)("p",null,"The experience throws an error if something is in your history, and user tries to tune after it ended. Caches never refresh quickly enough to prevent it.\nIt's eventually consistent."),(0,i.kt)("p",null,"Balancing the risk of over-runs with concluded events (configurable per content partner).\nFor example, we auto-pad expirations for 4K and other live sporting events so that they\u2019ll be discoverable in overtime.\nRapid takedown/graceful degradation of the experience when event actually ends."),(0,i.kt)("p",null,"Accurate metadata displays using LiVOD specific fields."),(0,i.kt)("p",null,"Messaging event status."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"This section is for internal use - not to be published."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://comcastcorp-my.sharepoint.com/:p:/g/personal/lmack200_cable_comcast_com/ESme-GH_9H1MhoyC9-GXsM0Bq4IhYBP8RlPcG8GgTiOt3w?e=0qf2cD&isSPOFile=1&params=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyOC8yMjA1MDEwMTAwOSJ9"},"LiVOD Slides")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://comcastcorp-my.sharepoint.com/:p:/g/personal/aobrie201_cable_comcast_com/EWrixPLsLx5JpTeU3R6maoYBnILxThgOFhZh0p41DZt_HQ?e=wAlB4x"},"FLEX Live Rows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ccp.sys.comcast.net/browse/CMPWM-2901"},"Realtime LIVOD updates: includeOutOfWindowLivod and subscriberAccess")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://etwiki.sys.comcast.net/display/COMPASS/Managing+LIVOD+realtime+updates+to+event+timing+for+ESPN"},"Managing LIVOD realtime updates to event timing for ESPN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://etwiki.sys.comcast.net/display/COMPASS/Livod+Event+Timeline+Proposal+2019"},"Matozzi's Livod Event Timeline Proposal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://etwiki.sys.comcast.net/display/COMPASS/First+Class+OTT+Roundup+-+LiVOD%2C+StreamingClass%2C+Non-Ingested+-+Feb+1%2C+2019"},"Point in Time recap of how things came to be")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://etwiki.sys.comcast.net/pages/viewpage.action?spaceKey=COMPASS&title=Livod+Event+Timeline+Proposal+2019"},"LiVOD Event Timeline Proposal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://etwiki.sys.comcast.net/display/AAE/LiVOD+Support+in+Xfinity+Stream"},"XStream LiVOD Support"))))}d.isMDXComponent=!0}}]);