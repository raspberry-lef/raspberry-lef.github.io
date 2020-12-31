(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/AW_usage_diagram-595d1137b650c214c747b00643a818d2.svg"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(89)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The purpose of this page is to help you to try out ActiveWorkflow as easily and quickly as possible. If you find something confusing, ambiguous or have any ideas for improvements please let us know!",source:"@site/docs/getting-started.md",slug:"/",permalink:"/",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Typical Use Cases",permalink:"/use-cases"}},c=[{value:"Running ActiveWorkflow",id:"running-activeworkflow",children:[{value:"Running Locally With Docker",id:"running-locally-with-docker",children:[]},{value:"Running Locally With Docker Compose",id:"running-locally-with-docker-compose",children:[]},{value:"Running Locally Without Docker",id:"running-locally-without-docker",children:[]},{value:"Running on Heroku",id:"running-on-heroku",children:[]}]},{value:"Using ActiveWorkflow",id:"using-activeworkflow",children:[{value:"Creating Agents",id:"creating-agents",children:[]},{value:"Creating Workflows",id:"creating-workflows",children:[]}]}],s={toc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The purpose of this page is to help you to try out ActiveWorkflow as easily and quickly as possible. If you find something confusing, ambiguous or have any ideas for improvements please let us know!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#running-activeworkflow"}),"Running ActiveWorkflow"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#running-locally-with-docker"}),"Running Locally with Docker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#running-locally-with-docker-compose"}),"Running Locally with Docker Compose")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#running-locally-without-docker"}),"Running Locally without Docker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#running-on-heroku"}),"Running on Heroku")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#using-activeworkflow"}),"Using ActiveWorkflow"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#creating-agents"}),"Creating Agents")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#creating-workflows"}),"Creating Workflows"))))),Object(r.b)("h2",{id:"running-activeworkflow"},"Running ActiveWorkflow"),Object(r.b)("p",null,"Depending on what tools you are familiar with there are a few different ways you could run ActiveWorkflow:"),Object(r.b)("h3",{id:"running-locally-with-docker"},"Running Locally With Docker"),Object(r.b)("p",null,"You could run ActiveWorkflow locally using Docker. To do so you need to have Docker installed. If you are on a Mac see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"Install Docker Desktop on Mac"),". On Linux please use your package manager, or follow this ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/install/overview/"}),"docker installation guide"),". To run ActiveWorkflow locally with Docker simply run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker run -p 3000:3000 --rm automaticmode/active_workflow\n")),Object(r.b)("p",null,"Once it starts you can login at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," with ",Object(r.b)("inlineCode",{parentName:"p"},"admin"),"/",Object(r.b)("inlineCode",{parentName:"p"},"password"),"."),Object(r.b)("p",null,"If you would like data persistence you could use the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker run -p 3000:3000 --rm -v aw-data:/var/lib/postgresql/11/main automaticmode/active_workflow\n")),Object(r.b)("p",null,"The ActiveWorkflow image has a PostgreSQL database server included and runs all processes in one container. For production use we would recommend using an external database and multiple containers to run web, scheduler, and worker respectively. For more information on this please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"deployment#using-docker"}),"Deployment Using Docker"),"."),Object(r.b)("h3",{id:"running-locally-with-docker-compose"},"Running Locally With Docker Compose"),Object(r.b)("p",null,"To install docker-compose please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"Install Docker Compose"),". "),Object(r.b)("p",null,"To run ActiveWorkflow (with a PostgreSQL database in a separate container) issue the following command inside the project directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up\n")),Object(r.b)("p",null,"This starts a ActiveWorkflow instance locally at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," with the login credentials ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," / ",Object(r.b)("inlineCode",{parentName:"p"},"password"),"."),Object(r.b)("p",null,"You can stop containers by issuing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose down\n")),Object(r.b)("h3",{id:"running-locally-without-docker"},"Running Locally Without Docker"),Object(r.b)("p",null,"To run ActiveWorkflow locally without Docker you would effectively follow very similar steps to running it locally for development. Thus, please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/automaticmode/active_workflow/wiki/Development"}),"Development")," for more information."),Object(r.b)("h3",{id:"running-on-heroku"},"Running on Heroku"),Object(r.b)("p",null,"Another easy way to try out or to start using ActiveWorkflow is by deploying it to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.heroku.com/"}),"Heroku"),". If you are reading this document in a browser you can click the button bellow, fill in the environment variables for your seed user (admin), and deploy ActiveWorkflow to your Heroku account:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SEED_USERNAME")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SEED_PASSWORD")," (which must be at least 8 characters long)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SEED_EMAIL"))),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://heroku.com/deploy?template=https://github.com/automaticmode/active_workflow&env%5BSINGLE_DYNO%5D=1"}),Object(r.b)("img",Object(o.a)({parentName:"a"},{src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy"})))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Please note that while a free Heroku plan can be used to try out ActiveWorkflow, it would not be sufficient for real use. The button above deploys ActiveWorkflow in single-dyno mode, which is sufficient for demonstration or getting-started purposes (and is the only way to run ActiveWorkflow on Heroku's Free plan). For production use you should remove (or set to '0') the ",Object(r.b)("inlineCode",{parentName:"em"},"SINGLE_DYNO")," environment variable, and in addition to the ",Object(r.b)("inlineCode",{parentName:"em"},"web")," dyno, you should also start ",Object(r.b)("inlineCode",{parentName:"em"},"scheduler")," and ",Object(r.b)("inlineCode",{parentName:"em"},"worker")," dynos.")),Object(r.b)("h2",{id:"using-activeworkflow"},"Using ActiveWorkflow"),Object(r.b)("p",null,"Once you have ActiveWorkflow up and running you will want to create some agents and most probably to arrange them in one or more workflows. This is illustrated in the example diagram below where a1-a6 are six agents and w1-w3 are three workflows these agents participate in. Also note that you can use ActiveWorkflow via its web interface and its ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"rest-api"}),"Client REST API"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:n(162).default,title:"ActiveWorkflow system overview diagram"})),Object(r.b)("p",null,"You can read more about the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"use-cases"}),"Typical Use Cases")," of ActiveWorkflow."),Object(r.b)("h3",{id:"creating-agents"},"Creating Agents"),Object(r.b)("p",null,"There are currently three ways to create agents:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You can create a new instance of a built-in agent by following the agent's configuration options and inline documentation. With ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"built-in-agents"}),"30+ built-in agents")," you have the ability to address quite a few  common use cases, such as polling external services."),Object(r.b)("li",{parentName:"ol"},"If the functionality you are looking for isn't available from any of the built-in agents, you could use the built-in JavaScript agent. This agent executes JavaScript code, which could send and receive messages while implementing your business logic."),Object(r.b)("li",{parentName:"ol"},"Last but not least, to make the most out of the platform you could write and connect your own ActiveWorkflow agents. See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"remote-agent-api"}),"How to Create Your Own Custom Agents (with the Remote Agent API)")," to learn how to do this.")),Object(r.b)("h3",{id:"creating-workflows"},"Creating Workflows"),Object(r.b)("p",null,'To create a workflow you can simply use the web interface (the "New Workflow" button) to enter a name, description, select an icon for your workflow, and then link to it the agents that participate in it. As we mention in ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"activeworkflow-basics"}),"ActiveWorkflow Basics"),' agents can participate in multiple workflows, and exist independently of them. In that respect a workflow is more like a "tag" or a "label" rather than a "container".'),Object(r.b)("p",null,"In the near future you will be able to create workflows programmatically as well (via the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"rest-api"}),"Client REST API"),")."))}u.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);