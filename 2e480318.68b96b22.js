(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),r=(n(0),n(89)),o={id:"rest-api",title:"Client REST API",sidebar_label:"Client REST API"},l={unversionedId:"rest-api",id:"rest-api",isDocsHomePage:!1,title:"Client REST API",description:"How to Query and Control Your Agents and Workflows Programmatically",source:"@site/docs/rest-api.md",slug:"/rest-api",permalink:"/rest-api",version:"current",sidebar_label:"Client REST API",sidebar:"someSidebar",previous:{title:"Remote Agent API",permalink:"/remote-agent-api"},next:{title:"Deployment",permalink:"/deployment"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"Agents",id:"agents",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Workflows",id:"workflows",children:[]}]},{value:"Errors",id:"errors",children:[]}],b={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"How to Query and Control Your Agents and Workflows Programmatically")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"ActiveWorkflow exposes a REST API that allows you to query and control your\nagents and workflows programmatically. All responses returned by the API are\nin JSON format."),Object(r.b)("p",null,"Currently the API is read-only. It can be used for implementing dashboards or\nfor acquiring the results of various workflows and feeding them into other\nsystems. The REST API will be expanded in the near future to offer functionality\nto create workflows and other operations."),Object(r.b)("h2",{id:"versioning"},"Versioning"),Object(r.b)("p",null,"This is ",Object(r.b)("strong",{parentName:"p"},"version 1")," of ActiveWorkflow API, which is indicated in the URL (",Object(r.b)("inlineCode",{parentName:"p"},"/v1/"),").\nThis version of the API may change in the future in a backwards compatible way.\nNew (optional) endpoints and parameters may be added without invalidating\nexisting functionality. Also please note that the documentation here may not\nbe exhaustive at all times. An API client should always expect that more\nfields may be returned in responses."),Object(r.b)("p",null,"If any incompatible changes are to be introduced, the API version will be\nupdated and the new API will be served at a different URL."),Object(r.b)("h2",{id:"authorization"},"Authorization"),Object(r.b)("p",null,"The ActiveWorkflow REST API uses a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://jwt.io/introduction/"}),"JsonWebToken"),"-based\nauthorization mechanism. You can acquire an authorization token by connecting to\nthe usual ActiveWorkflow web interface with you user credentials. You can then\nfind your token under 'Account' in 'User Settings'."),Object(r.b)("p",null,"Note: an authorization token is connected to the account of a specific user\nand therefore can only provide access to the system on behalf of that user."),Object(r.b)("p",null,"Currently API authorization tokens do not expire and allow full use of the\nAPI. Expiring and scoped APIs (like 'read only') may be introduced later. An\nAPI client should treat an authorization token as an opaque string and should\nnot assume anything about its format or content."),Object(r.b)("p",null,"To authorize a request a client should put the authorization token into\nan HTTP ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header in the following format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Authorization: Bearer :token:\n")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},":token:")," is the authorization token. You can find an example using ",Object(r.b)("inlineCode",{parentName:"p"},"curl")," below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.kG4Si_1WJyGrsvm9zTcubjpYKzCubgaGdyakGwuwaCs" http://localhost:3000/api/v1/workflows\n')),Object(r.b)("h2",{id:"endpoints"},"Endpoints"),Object(r.b)("h3",{id:"agents"},"Agents"),Object(r.b)("h4",{id:"get-apiv1agents"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/agents")),Object(r.b)("p",null,"Get a list of a user's agents."),Object(r.b)("p",null,"Parameters - none."),Object(r.b)("p",null,"Response - an array of JSON objects where each object represents an agent.\nEach object has the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - a unique identifier for the agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - the name of the agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," - a string indicating the type of the agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled")," - 'true' if agent is currently disabled, 'false' otherwise;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"messages_count")," - the number of messages that have been emitted by this agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sources")," - an array of agent objects that this agent receives messages from, each\nobject has the ",Object(r.b)("inlineCode",{parentName:"li"},"id")," of an agent.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/agents\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 1,\n    "name": "RetrieveStatistics",\n    "type": "Agents::WebsiteAgent",\n    "disabled": false,\n    "messages_count": 2,\n    "sources": []\n  },\n  {\n    "id": 2,\n    "name": "EmailStatistics",\n    "type": "Agents::EmailAgent",\n    "disabled": false,\n    "messages_count": 0,\n    "sources": [{"id": 1}]\n  }\n]\n')),Object(r.b)("h4",{id:"get-apiv1agentsagent_id"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/agents/:agent_id")),Object(r.b)("p",null,"Get info about a specific agent."),Object(r.b)("p",null,"Parameters - none."),Object(r.b)("p",null,"Response - a JSON object representing an agent that has the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - the unique identifier of the agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - the name of the agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," - a string indicating the type of the agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled")," - 'true' if the agent is currently disabled, 'false' otherwise;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"messages_count")," - the number of messages that have been emitted by this agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sources")," - an array of agent objects that this agent receives messages from,\neach object has the ",Object(r.b)("inlineCode",{parentName:"li"},"id")," of an agent.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/agents/1\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 2,\n  "name": "Email",\n  "type": "Agents::EmailAgent",\n  "disabled": false,\n  "messages_count": 0,\n  "sources": [{"id": 1}]\n}\n')),Object(r.b)("h4",{id:"get-apiv1agentsagent_idmessages"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/agents/:agent_id/messages")),Object(r.b)("p",null,"Get the latest messages emitted by the agent."),Object(r.b)("p",null,"Parameters:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"after")," - datetime (ISO 8601 string), only return the messages that where created\n",Object(r.b)("em",{parentName:"p"},"after")," the given time;"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"limit")," - integer, only return this number of the ",Object(r.b)("em",{parentName:"p"},"latest")," created messages. By\ndefault all messages are returned."),Object(r.b)("p",null,"Response - an array of JSON objects where each object represents a message and\nhas the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - a unique identifier for the message;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"agent_id")," - the unique identifier of emitting agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"created_at")," - datetime (ISO 8601 string) of when the message was created;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"expires_at")," - datetime (ISO 8601 string) of when the message expires, 'null'\nindicates that the message never expires.\nExample:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/agents/1/messages?limit=1&after=2019-10-20T01:10:10.256-8:00\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 1,\n    "agent_id": 1,\n    "created_at": "2019-10-20T02:01:14.122-8:00",\n    "expires_at": "2019-10-21T02:01:14.122-8:00"\n  },\n  {\n    "id": 2,\n    "agent_id": 1,\n    "created_at": "2019-10-20T02:02:13.317-8:00",\n    "expires_at": "2019-10-21T02:02:13.317-8:00"\n  },\n]\n')),Object(r.b)("h3",{id:"messages"},"Messages"),Object(r.b)("h4",{id:"get-apiv1messagesmessage_id"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/messages/:message_id")),Object(r.b)("p",null,"Get a message with its payload."),Object(r.b)("p",null,"Parameter - none."),Object(r.b)("p",null,"Response - a JSON object representing a message with the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - identifier of a message;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"agent_id")," - identifier of the emitting agent;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"created_at")," - datetime (ISO 8601 string) of when a message was created;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"expires_at")," - datetime (ISO 8601 string) of when a message expires, never if\nnull;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"payload")," - JSON object containing the payload of the message.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/messages/1\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 1,\n  "agent_id": 1,\n  "created_at": "2019-10-20T02:01:14.122-8:00",\n  "expires_at": "2019-10-21T02:01:14.122-8:00",\n  "payload": {\n    "title": "Lates news",\n    "author": "John Snow"\n  }\n}\n')),Object(r.b)("h3",{id:"workflows"},"Workflows"),Object(r.b)("h4",{id:"get-apiv1workflows"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/workflows")),Object(r.b)("p",null,"Get a list of workflows."),Object(r.b)("p",null,"Parameters - none."),Object(r.b)("p",null,"Response - an array of JSON objects where each object represents a workflow\nand has the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - the identifier of the workflow;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - the name of the workflow;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"description")," - the description of the workflow.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/workflows\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 1,\n    "name": "My Workflow",\n    "description": "This workflow does something."\n  }\n]\n')),Object(r.b)("h4",{id:"get-apiv1workflowsworkflow_id"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/workflows/:workflow_id")),Object(r.b)("p",null,"Get a workflow with a list of agents that participate in that workflow."),Object(r.b)("p",null,"Parameters - none."),Object(r.b)("p",null,"Response - a JSON object that represents the workflow with the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - the identifier of the workflow;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - the name of the workflow;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"description")," - the description of the workflow,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"agents")," - an array of JSON objects that describe the agents participating\nin this workflow, the format matches that of the ",Object(r.b)("inlineCode",{parentName:"li"},"/api/v1/agents"),"\nendpoint.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/workflows/1\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 1,\n  "name": "My Workflow",\n  "description": "This workflow does something.",\n  "agents": [\n    {\n      "id": 1,\n      "name": "RetrieveStatistics",\n      "type": "Agents::WebsiteAgent",\n      "disabled": false,\n      "messages_count": 2,\n      "sources": []\n    },\n    {\n      "id": 2,\n      "name": "EmailStatistics",\n      "type": "Agents::EmailAgent",\n      "disabled": false,\n      "messages_count": 0,\n      "sources": [{"id": 1}]\n    }\n  ]\n}\n')),Object(r.b)("h4",{id:"get-apiv1workflowsworkflow_idexport"},Object(r.b)("inlineCode",{parentName:"h4"},"GET /api/v1/workflows/:workflow_id/export")),Object(r.b)("p",null,"Get a file with the workflow and all its agents, which can be used later to\nimport the workflow into another instance of ActiveWorkflow (or as a different\nuser)."),Object(r.b)("p",null,"Parameters - none."),Object(r.b)("p",null,"Response - a JSON file (the file name is provided with the ",Object(r.b)("inlineCode",{parentName:"p"},"Content-Disposition"),"\nHTTP header) containing all the information about the workflow (including agents)\nthat can be used to later import this workflow."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /api/v1/workflows/1/export\n")),Object(r.b)("h2",{id:"errors"},"Errors"),Object(r.b)("p",null,"The API responds to failures with standard HTTP status codes and a JSON\ndocument that contains an ",Object(r.b)("inlineCode",{parentName:"p"},"error")," key. Its value is a short description of\nthe error. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error": "401 Unauthorized"\n}\n')),Object(r.b)("p",null,"Supported errors are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"401")," - unauthorized, authorization header is missing or is invalid;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"404")," - record (agent, workflow or message) not found;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"500")," - other unclassified errors (for now it includes parameter validation\nerrors).")))}c.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);