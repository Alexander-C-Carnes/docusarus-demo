"use strict";(self.webpackChunkdeploy_test=self.webpackChunkdeploy_test||[]).push([[9030],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>h});var a=t(67294);function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,a,o=function(e,i){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var i=a.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):n(n({},i),e)),t},u=function(e){var i=l(e.components);return a.createElement(c.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},p=a.forwardRef((function(e,i){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(m,n(n({ref:i},u),{},{components:t})):a.createElement(m,n({ref:i},u))}));function h(e,i){var t=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var r=t.length,n=new Array(r);n[0]=p;var s={};for(var c in i)hasOwnProperty.call(i,c)&&(s[c]=i[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<r;l++)n[l]=t[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},28961:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={},n="Accessibility",s={unversionedId:"acessibility/accessibility",id:"acessibility/accessibility",title:"Accessibility",description:"Accessibility means building apps that can be enjoyed by everyone, regardless of abilities. Incorporating an inclusive approach can include considering color choices during design, integrating Voice Guidance capabilities, or ensuring videos include closed captions. It's also important to remember that you're building a global app.",source:"@site/docs/acessibility/accessibility.md",sourceDirName:"acessibility",slug:"/acessibility/accessibility",permalink:"/dousarus-demo/docs/acessibility/accessibility",draft:!1,editUrl:"https://github.com/Alexander-C-Carnes/dousarus-demo/tree/development-branch-RDK/my-website/docs/acessibility/accessibility.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accessibility",permalink:"/dousarus-demo/docs/category/accessibility"},next:{title:"Closed Captions",permalink:"/dousarus-demo/docs/acessibility/closed-captions"}},c={},l=[{value:"User Accessibility Preferences",id:"user-accessibility-preferences",level:2},{value:"Universal Design",id:"universal-design",level:2},{value:"Closed Captions",id:"closed-captions",level:2},{value:"Voice Guidance",id:"voice-guidance",level:2},{value:"Audio Description",id:"audio-description",level:2},{value:"Voice Commands",id:"voice-commands",level:2},{value:"Color Contrast",id:"color-contrast",level:2}],u={toc:l};function d(e){let{components:i,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"Accessibility means building apps that can be enjoyed by everyone, regardless of abilities. Incorporating an inclusive approach can include considering color choices during design, integrating Voice Guidance capabilities, or ensuring videos include closed captions. It's also important to remember that you're building a global app."),(0,o.kt)("p",null,"According to the World Health Organization, ",(0,o.kt)("a",{parentName:"p",href:"https://www.who.int/health-topics/blindness-and-vision-loss#tab=tab_1"},"2.2 billion")," people have a near or distance vision impairment. It comes as no surprise that these people still love watching and enjoying content. ",(0,o.kt)("a",{parentName:"p",href:"https://www.afb.org/research-and-initiatives/statistics/adults"},"A survey commissioned by Comcast")," (US) in 2017 showed a whopping 96% of users who are blind or have low vision regularly watch TV, with 81% watching more than an hour per day. However, 65% also reported encountering problems with looking up what's on TV. In the UK, a ",(0,o.kt)("a",{parentName:"p",href:"https://bighack.org/video-on-demand-streaming-and-accessibility-the-big-hack-survey-feedback/"},"2022 survey"),' showed that four out of every five disabled viewers experienced issues. An alarming but important takeaway from these studies is that disabled people feel "forgotten" and "excluded" by the video streaming revolution.'),(0,o.kt)("p",null,"That's where you come in. As a developer, you have the opportunity to create a pleasant and meaningful experience for all of your users."),(0,o.kt)("h2",{id:"user-accessibility-preferences"},"User Accessibility Preferences"),(0,o.kt)("p",null,"Your app can pull the devices' accessibility settings from your users using the ",(0,o.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API's. This will allow your app to stay in sync with your users' accessibility preferences so they do not have to configure it themselves within your app."),(0,o.kt)("h2",{id:"universal-design"},"Universal Design"),(0,o.kt)("p",null,"Universal design (also known as \u201cinclusive design\u201d) refers to creating a product that\u2019s accessible to all demographics with a wide range of disabilities, abilities, and various characteristics. Apps built to cater to the average user can lead to frustrating experiences and exclude many potential users. The concept of universal design goes beyond the bare minimum legal requirement and becomes an inclusive experience for all your users to enjoy."),(0,o.kt)("p",null,"To learn more about how to utilize the practice of universal design, visit:\n",(0,o.kt)("a",{parentName:"p",href:"https://universaldesign.com/what-is-ud/%22"},"https://universaldesign.com/what-is-ud/")),(0,o.kt)("h2",{id:"closed-captions"},"Closed Captions"),(0,o.kt)("p",null,"Closed Captioning shows the audio portion of a video program \u2013 including dialogue, narration, and sound effects \u2013 as text on your users' TV screens. Our platform has enhanced closed captioning controls built right in for those who are deaf or hard of hearing. Your users can customize their captions by font size, style, color, contrast, and more for greater readability.\nYour app may be legally required to support closed captioning. As a general rule, most content that has previously aired on television with captions must be closed captioned in your app. However, while it may not be legally required for some content, we recommend that all your video content is closed captioned to create a better & more inclusive experience for your users. For a full list of closed caption legal requirements, visit\n",(0,o.kt)("a",{parentName:"p",href:"https://www.fcc.gov/consumers/guides/captioning-internet-video-programming%22"},"FCC (USA)")," & ",(0,o.kt)("a",{parentName:"p",href:"https://www.ofcom.org.uk/__data/assets/pdf_file/0025/212776/provision-of-tv-access-services-guidelines.pdf%22"},"OFCOM (UK)")),(0,o.kt)("p",null," Learn more about how to implement this feature in our ",(0,o.kt)("a",{parentName:"p",href:"/dousarus-demo/docs/acessibility/closed-captions"},"Closed Captions")," documentation."),(0,o.kt)("h2",{id:"voice-guidance"},"Voice Guidance"),(0,o.kt)("p",null,'Consumers are accustomed to having their devices speak to them. Our platform has a Voice Guidance feature that allows your users with visual disabilities the freedom to independently explore thousands of TV shows and movies. It "speaks" what\'s on the screen and includes details such as navigational elements and program descriptions to help your users decide what to watch. It is important that you provide properly labeled elements for your navigation guidance experience.'),(0,o.kt)("p",null,'Enabling Voice Guidance is straightforward. HTML5 apps will work with Voice Guidance when proper markup structure and labeling conventions are followed. With Lightning apps, enabling the "Announcer" mixin will voice out strings found along your app\'s focus path. '),(0,o.kt)("p",null,"There are two common methods used for Voice Guidance;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"},"WebSpeech")," which has a wide range of customization with a lower accessibility standard than Aria."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"},"Aria")," which is a much more direct reading with a higher accessibility standard than Webspeech.")),(0,o.kt)("p",null,"Learn more about how to implement this feature in our ",(0,o.kt)("a",{parentName:"p",href:"./voice-commands.md"},"Voice Guidance")," documentation."),(0,o.kt)("h2",{id:"audio-description"},"Audio Description"),(0,o.kt)("p",null,"Audio description refers to audio-narrated descriptions of key visual elements of programming inserted within natural pauses in dialogue. Audio description makes television programs, feature films and other media accessible to people who are blind or have low vision or a visual disability, creating a richer, more independent experience. For example, audio description describes key visual elements such as actions, facial expressions, costumes or scene changes in a program that a viewer who is blind or has low vision or a visual disability would otherwise miss."),(0,o.kt)("h2",{id:"voice-commands"},"Voice Commands"),(0,o.kt)("p",null,"The voice remote provides a new level of independence to customers who have limited mobility or dexterity, or have a visual disability. By using simple voice commands, customers can change channels, search for shows, enable closed captioning and more. The voice remote also includes a back-lit keypad making it easier to see the buttons in the dark."),(0,o.kt)("p",null,"Learn more about how to implement this feature in our ",(0,o.kt)("a",{parentName:"p",href:"./voice-commands.md"},"Voice Commands")," documentation."),(0,o.kt)("h2",{id:"color-contrast"},"Color Contrast"),(0,o.kt)("p",null,"Your user's television screens render color differently than their other screens such as computers and mobile devices. Because of this, we've outlined some simple tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stay away from pure black (#000) and pure white (#fff)."),(0,o.kt)("li",{parentName:"ul"},"Use high contrasting colors to make actionable areas bolder and text readable."),(0,o.kt)("li",{parentName:"ul"},"Check your app experience on multiple TV types/manufacturers to ensure the results are consistent.")),(0,o.kt)("p",null,"Many users may have visual disabilities which can remove distinction from colors with the same contrast or make reading difficult. To prevent this frustrating experience from happening to your users, make sure that your colors align with WCAG AAA compliance for large text accessibility standards. You can check your color contrasts here:\n",(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/resources/contrastchecker/%22"},"https://webaim.org/resources/contrastchecker/")))}d.isMDXComponent=!0}}]);