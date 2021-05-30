(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(88)),i={id:"deployment",title:"Deployment",sidebar_label:"Deployment"},c={unversionedId:"deployment",id:"deployment",isDocsHomePage:!1,title:"Deployment",description:"Using Docker",source:"@site/docs/deployment.md",slug:"/deployment",permalink:"/deployment",version:"current",sidebar_label:"Deployment",sidebar:"docs",previous:{title:"Client REST API",permalink:"/rest-api"},next:{title:"Roadmap",permalink:"/roadmap"}},l=[{value:"Using Docker",id:"using-docker",children:[{value:"Create a PostgreSQL Instance (Optional)",id:"create-a-postgresql-instance-optional",children:[]},{value:"Run ActiveWorkflow Using the Official Docker Image",id:"run-activeworkflow-using-the-official-docker-image",children:[]},{value:"Using docker-compose",id:"using-docker-compose",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"How to Build Your Own Docker Image",id:"how-to-build-your-own-docker-image",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"using-docker"},"Using Docker"),Object(r.b)("h3",{id:"create-a-postgresql-instance-optional"},"Create a PostgreSQL Instance (Optional)"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you have a PostgreSQL database instance configured and running you can skip this section.")),Object(r.b)("p",null,"Start a PostgreSQL database instance using docker:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker run --rm --name activeworkflow-db \\\n  -e POSTGRES_PASSWORD=activeworkflowpassword \\\n  -e POSTGRES_USER=activeworkflow \\\n  -v activeworkflow-data:/var/lib/postgresql/data \\\n  -d docker.io/postgres\n")),Object(r.b)("p",null,"This starts a database with the username/password you provided and mounts a docker volume (activeworkflow-data) so your data is\npreserved during runs."),Object(r.b)("p",null,"You can stop the database with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker stop activeworkflow-db\n")),Object(r.b)("h3",{id:"run-activeworkflow-using-the-official-docker-image"},"Run ActiveWorkflow Using the Official Docker Image"),Object(r.b)("p",null,"The default ActiveWorkflow instance consists of three containers: web, scheduler and worker.\nYou can run ActiveWorkflow using the official docker image with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker run --rm --name activeworkflow-web \\\n  --link activeworkflow-db:postgres \\\n  -e DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow\n  -e SECRET_KEY_BASE=secretrandomstring \\\n  -e CREATE_DATABASE=true \\\n  -e DISABLE_SSL=true \\\n  -p 3000:3000 \\\n  -d docker.io/automaticmode/active_workflow\n\ndocker run --rm --name activeworkflow-scheduler \\\n  --link activeworkflow-db:postgres \\\n  -e DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow\n  -e SECRET_KEY_BASE=secretrandomstring \\\n  -e CREATE_DATABASE=true \\\n  -e DISABLE_SSL=true \\\n  -d docker.io/automaticmode/active_workflow bundle exec rails runner bin/scheduler.rb\n\ndocker run --rm --name activeworkflow-worker \\\n  --link activeworkflow-db:postgres \\\n  -e DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow\n  -e SECRET_KEY_BASE=secretrandomstring \\\n  -e CREATE_DATABASE=true \\\n  -e DISABLE_SSL=true \\\n  -d docker.io/automaticmode/active_workflow bundle exec script/delayed_job -n 2 run\n")),Object(r.b)("p",null,"For convenience you can gather all the environment variable definitions in a single file, for example ",Object(r.b)("inlineCode",{parentName:"p"},"activeworkflow.env"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"DATABASE_URL=postgres://activeworkflow:activeworkflowpassword@postgres/active_workflow\nSECRET_KEY_BASE=secretrandomstring\nCREATE_DATABASE=true\nDISABLE_SSL=true\n")),Object(r.b)("p",null,"And then start ActiveWorkflow with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker run --rm --name activeworkflow-web \\\n  --link activeworkflow-db:postgres \\\n  --env-file activeworkflow.env\n  -p 3000:3000 \\\n  -d docker.io/automaticmode/active_workflow\n\ndocker run --rm --name activeworkflow-scheduler \\\n  --link activeworkflow-db:postgres \\\n  --env-file activeworkflow.env\n  -d docker.io/automaticmode/active_workflow bundle exec rails runner bin/scheduler.rb\n\ndocker run --rm --name activeworkflow-worker \\\n  --link activeworkflow-db:postgres \\\n  --env-file activeworkflow.env\n  -d docker.io/automaticmode/active_workflow bundle exec script/delayed_job -n 2 run\n")),Object(r.b)("p",null,"The above commands assume that you have a PostgreSQL instance in a docker container named ",Object(r.b)("inlineCode",{parentName:"p"},"activeworkflow-db")," and that you link it to ActiveWorkflow. If your database is hosted differently edit the ",Object(r.b)("inlineCode",{parentName:"p"},"--link")," line accordingly and/or omit it and use the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable."),Object(r.b)("p",null,"ActiveWorkflow is configured by default with user ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," and password ",Object(r.b)("inlineCode",{parentName:"p"},"password")," and is accessible using a web browser on ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),Object(r.b)("p",null,"You can stop ActiveWorkflow with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker stop activeworkflow-web activeworkflow-scheduler activewrorkflow-worker\n")),Object(r.b)("p",null,"!Note: For production deployment we strongly recommend you to use a web server (like nginx or Apache) to provide an SSL front. The ",Object(r.b)("inlineCode",{parentName:"p"},"DISABLE_SSL")," variable allows AcitveWorkflow to run without SSL encryption and should be omitted for production."),Object(r.b)("h3",{id:"using-docker-compose"},"Using docker-compose"),Object(r.b)("p",null,"You can also run ActiveWorkflow using\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker-compose")),". For this you need a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/automaticmode/active_workflow/blob/master/docker-compose.yml"}),Object(r.b)("inlineCode",{parentName:"a"},"docker-compose.yml")),"\nand a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/automaticmode/active_workflow/blob/master/.env"}),Object(r.b)("inlineCode",{parentName:"a"},".env"))," file with environment variables.\nPlease edit these according to your requirements. You can read more about supported environment variables in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#environment"}),"Environment")," section below."),Object(r.b)("p",null,"You can then run ActiveWorkflow with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up\n")),Object(r.b)("p",null,"You can stop it with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose down\n")),Object(r.b)("p",null,"This setup has a PostgreSQL database included."),Object(r.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"ActiveWorkflow tries to follow the best practices of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://12factor.net/"}),"12 factor")," app. You can configure your ActiveWorkflow instance by setting environment variables. The following environment variables are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_USERNAME"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_HOST")," and ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_NAME")," are self-explanatory credentials required to establish a connection to the PostgreSQL database.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," substitutes all of the above environment variables and could be used for convenience. It has the format\n",Object(r.b)("inlineCode",{parentName:"p"},"postgres://{username}:{password}@{hostname}/{database_name}"),", where ",Object(r.b)("inlineCode",{parentName:"p"},"{}")," should replaced by corresponding values.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"CREATE_DATABASE")," should be ",Object(r.b)("inlineCode",{parentName:"p"},"true")," for the web process to create a database. Usually it is used during the first run if you haven't created a database instance in advance. It is idempotent, so it can be given even if a database has been already created.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"DO_NOT_MIGRATE")," should be ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to skip database migrations. By default the ActiveWorkflow web process runs database migration scripts to update the database schema to the latest version.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"DO_NOT_SEED")," should be ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to avoid seeding a database. By default the ActiveWorkflow web process creates a new user and a simple example workflow. The seed user is configured by using the environment variables described below.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"SEED_EMAIL"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SEED_USERNAME")," and ",Object(r.b)("inlineCode",{parentName:"p"},"SEED_PASSWORD")," are the credentials of the user that the ActiveWorkflow web process should create (unless ",Object(r.b)("inlineCode",{parentName:"p"},"DO_NOT_SEED")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"). Created user is made an admin. If a user with the provided email already exists, the operation is skipped. If these variables are not set ActiveWorkflow creates a user ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," with password ",Object(r.b)("inlineCode",{parentName:"p"},"password")," and email ",Object(r.b)("inlineCode",{parentName:"p"},"admin@example.com"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE")," is a random string used to encrypt data, specifically session information.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"AGENT_LOG_LENGTH")," defines how many log entries per entries to keep. 200 log entries are kept if this variable is undefined.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"PORT")," is the port where the ActiveWorkflow web process should listen on.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"DISABLE_SSL")," could be set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when testing by using direct connection on localhost. For production you should use some web server to provide an SSL front (like nginx or Apache) and leave ",Object(r.b)("inlineCode",{parentName:"p"},"DISABLE_SSL")," unset.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"WEB_CONCURRENCY"),", ",Object(r.b)("inlineCode",{parentName:"p"},"RAILS_MAX_THREADS")," define how many processes and threads should the web process use to serve requests.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"SMTP_DOMAIN"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SMTP_SERVER"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SMTP_PORT"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SMTP_AUTHENTICATION")," ('none' or 'plain'),\n",Object(r.b)("inlineCode",{parentName:"p"},"SMTP_SSL")," (false or true), ",Object(r.b)("inlineCode",{parentName:"p"},"SMTP_USER_NAME"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SMTP_PASSWORD")," are all used for SMTP configuration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"SMTP_ENABLE_STARTTLS_AUTO")," - you may need to set this to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," for some servers.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"SMTP_OPENSSL_VERIFY_MODE")," - use ",Object(r.b)("inlineCode",{parentName:"p"},"peer")," for production or ",Object(r.b)("inlineCode",{parentName:"p"},"none")," for testing."))),Object(r.b)("h2",{id:"how-to-build-your-own-docker-image"},"How to Build Your Own Docker Image"),Object(r.b)("p",null,"You can build your own docker image of ActiveWorkflow by checking out the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/automaticmode/active_workflow/"}),"ActiveWorkflow repository"),"\nand using ",Object(r.b)("inlineCode",{parentName:"p"},"docker build")," command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/automaticmode/active_workflow.git\ncd active_workflow\ndocker build -t {yourname}/active_workflow .\n")))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);