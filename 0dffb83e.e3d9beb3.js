(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(89)),i={id:"roadmap",title:"Roadmap",sidebar_label:"Roadmap"},c={unversionedId:"roadmap",id:"roadmap",isDocsHomePage:!1,title:"Roadmap",description:"The principles we follow in developing ActiveWorkflow are",source:"@site/docs/roadmap.md",slug:"/roadmap",permalink:"/roadmap",version:"current",sidebar_label:"Roadmap",sidebar:"someSidebar",previous:{title:"Deployment",permalink:"/deployment"}},l=[{value:"Roadmap for 2021",id:"roadmap-for-2021",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The principles we follow in developing ActiveWorkflow are\n",Object(o.b)("strong",{parentName:"p"},"simplicity"),", ",Object(o.b)("strong",{parentName:"p"},"practicality"),", and ",Object(o.b)("strong",{parentName:"p"},"reliability"),". Below you will find an\noverview of upcoming features and improvements for 2021."),Object(o.b)("h3",{id:"roadmap-for-2021"},"Roadmap for 2021"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Libraries"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Helper libraries for creating agents in Python, Ruby, Scala, and Go (",Object(o.b)("inlineCode",{parentName:"li"},"activeworkflow-agent-*"),") using the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"remote-agent-api"}),"Remote Agent API"),"."),Object(o.b)("li",{parentName:"ul"},"Client libraries in Python, Ruby, Scala, and Go (",Object(o.b)("inlineCode",{parentName:"li"},"activeworkflow-client-*"),") for controlling ActiveWorkflow programmatically via the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"rest-api"}),"REST API")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"New built-in agent")," ('Merge Agent') that merges incoming messages based on user-defined keys."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"More documentation"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Tutorials about various ActiveWorkflow use cases, including data pipelines."),Object(o.b)("li",{parentName:"ul"},"Additional deployment documentation, including discussions about scalable execution with docker, k8s, etc."),Object(o.b)("li",{parentName:"ul"},"How to write custom agents using the client libraries."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User interface improvements"),", such as new icons, cleaner user settings panel, improved layouts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"REST API enhancements"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Ability to create workflows."),Object(o.b)("li",{parentName:"ul"},"Functionality to access the message log of workflows or specific agents."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Functionality to plug-in different message back-ends")," (ActiveWorkflow currently uses PostgreSQL) such as Apache Kafka.")))}b.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);