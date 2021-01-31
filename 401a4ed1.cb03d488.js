(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(89)),c={id:"use-cases",title:"Typical Use Cases",sidebar_label:"Use Cases"},i={unversionedId:"use-cases",id:"use-cases",isDocsHomePage:!1,title:"Typical Use Cases",description:"ActiveWorkflow workflows usually (but not always) fall into one or more of the following three use cases:",source:"@site/docs/use-cases.md",slug:"/use-cases",permalink:"/use-cases",version:"current",sidebar_label:"Use Cases",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"ActiveWorkflow Basics",permalink:"/activeworkflow-basics"}},s=[{value:"Group Business Logic for Periodic Execution",id:"group-business-logic-for-periodic-execution",children:[]},{value:"Poll Resources",id:"poll-resources",children:[]},{value:"Orchestrate Business Logic Based on Events",id:"orchestrate-business-logic-based-on-events",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ActiveWorkflow workflows usually (but not always) fall into one or more of the following three use cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Periodic Execution")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Polling")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Event-Driven Orchestration"))),Object(a.b)("h2",{id:"group-business-logic-for-periodic-execution"},"Group Business Logic for Periodic Execution"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You want to perform a complex piece of work on a regular basis.")),Object(a.b)("p",null,"Often you need to execute a piece of business logic periodically, for example to generate a monthly report with data drawn from multiple data sources. With ActiveWorkflow you can orchestrate scalable execution of multiple pieces of business logic, while getting error handling, agent-level retry functionality, and execution history."),Object(a.b)("h2",{id:"poll-resources"},"Poll Resources"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You don't care about periodicity, you care about results.")),Object(a.b)("p",null,"Polling is frequently checking the status of an external resource in a synchronous way. Examples of polling are checking a URL for a specific HTTP response code or calling an API to see if a specific resource has become available."),Object(a.b)("h2",{id:"orchestrate-business-logic-based-on-events"},"Orchestrate Business Logic Based on Events"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You want to connect and organise complex flows of logic, data and messages.")),Object(a.b)("p",null,"Often as a creator and/or consumer of various services you are interested to be notified of events that occur, when they occur, and then execute certain business logic accordingly. For example, triggering an email campaign in reaction to events generated by user behaviour."))}u.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);