(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{22:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var s,r,c,i,o,a,l,d=n(1),j=n.n(d),x=n(10),h=n.n(x),m=(n(22),n(11)),b=n(3),f=n(4),p=n(5),u=p.a.nav(s||(s=Object(f.a)(["\n  margin-top: -64px;\n  background: ",";\n  border-bottom-width: ",";\n  border-color: #34D399;\n"])),(function(e){return e.scrollNav?"black":"transparent"}),(function(e){return e.scrollNav?"2px":"0px"})),g=Object(p.a)(b.Link)(r||(r=Object(f.a)(["\n  padding: 1rem;\n  transition: 0.3s ease-in-out; \n  cursor: pointer;\n\n  text-decoration: underline 0.15em rgba(255, 255, 255, 0);\n  text-underline-offset: 0.7em;\n  transition: text-decoration-color 500ms;\n\n  &.active {\n      color: #34D399;\n  }\n  :hover{\n    color: #34D399;\n    text-decoration-color: #34D399;\n    text-underline-offset: 0.25em;\n  }\n"]))),O=n(0),v=function(e){var t=e.toggle,n=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(O.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})},s=Object(d.useState)(!1),r=Object(m.a)(s,2),c=r[0],i=r[1],o=function(){window.scrollY>=64?i(!0):i(!1)};return Object(d.useEffect)((function(){window.addEventListener("scroll",o)}),[]),Object(O.jsxs)(u,{scrollNav:c,className:"sticky z-10 top-0 flex items-center justify-between w-full h-16 font-roboto text-xl text-red-50 select-none",role:"navigation",children:[Object(O.jsx)("h1",{className:"pl-12 text-3xl font-bold text-secondary-100 cursor-pointer",onClick:function(){b.animateScroll.scrollToTop()},children:"Glexe"}),Object(O.jsx)("div",{className:"px-4 cursor-pointer md:hidden",onClick:t,children:Object(O.jsx)(n,{})}),Object(O.jsxs)("div",{className:"hidden pr-10 md:block",children:[Object(O.jsx)(g,{to:"about",smooth:!0,spy:!0,duration:800,offset:-64,children:"About"}),Object(O.jsx)(g,{to:"skills",smooth:!0,spy:!0,duration:800,offset:-64,children:"Skills"}),Object(O.jsx)(g,{to:"projects",smooth:!0,spy:!0,duration:800,offset:-64,children:"Projects"}),Object(O.jsx)(g,{to:"contacts",smooth:!0,spy:!0,duration:800,offset:-64,children:"Contacts"})]})]})},y=p.a.div(c||(c=Object(f.a)(["\n  width: 100%;\n  height: 100vh;\n  min-height: 512px;\n  user-select: none;\n"]))),w=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-24 h-24 text-red-50 transition duration-300 ease-in-out opacity-60 hover:text-secondary-100 lg:w-48 md:w-36 lg:h-48 md:h-36",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(O.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M16 17l-4 4m0 0l-4-4m4 4V3"})})},k=function(){return Object(O.jsxs)(y,{className:"flex flex-col items-center justify-center pb-24 bg-black bg-cover md:pt-48 bg-sand-pattern",children:[Object(O.jsxs)("h1",{className:"mb-2 text-6xl font-semibold text-gray-400 lg:text-8xl md:text-7xl font-roboto text-bold ",children:["Hello, I'm",Object(O.jsx)("hr",{className:"mt-2 border-t-4 border-secondary-100 lg:border-t-8 md:border-t-6"})]}),Object(O.jsx)("p",{className:"pb-10 text-red-50 lg:text-9xl md:text-8xl text-7xl font-roboto",children:"Gleb"}),Object(O.jsx)("p",{className:"text-3xl md:text-4xl text-red-50 font-josefin",children:"let me introduce myself"}),Object(O.jsx)(b.Link,{to:"about",smooth:!0,spy:!0,duration:800,offset:-64,className:"mt-16 cursor-pointer animate-bounce",children:Object(O.jsx)(w,{})})]})},N=function(e){return Object(O.jsxs)("div",{className:"transform transition duration-500 hover:scale-105 cursor-pointer",children:[Object(O.jsx)("div",{className:"text-black bg-secondary-100 rounded-t-3xl items-center justify-center lg:w-full flex h-14 font-josefin font-bold text-4xl",children:e.title}),Object(O.jsx)("div",{className:"bg-red-50 rounded-b-3xl flex justify-start px-5 py-5 overflow-auto lg:w-full",children:Object(O.jsx)("ul",{className:"list-none lg:space-y-2 md:space-y-1.5 sm:space-y-1",children:e.children})})]})},I=function(e){var t=e.content,n=e.preIcon,s=e.postIcon;return Object(O.jsx)("div",{children:Object(O.jsx)("li",{children:Object(O.jsxs)("div",{className:"inline-flex gap-2",children:[Object(O.jsx)("div",{className:"bg-secondary-100 rounded-3xl h-6 w-6 flex justify-center items-center",children:Object(O.jsx)("div",{className:"bg-white rounded-3xl h-3 w-3"})}),void 0!==n&&Object(O.jsx)("img",{src:n,className:"h-4 w-4 md:h-6 md:w-6 overflow-hidden bg-transparent"}),Object(O.jsx)("h3",{className:"text-semibold text-black font-josefin text-2xl md:text-3xl",children:t}),void 0!==s&&Object(O.jsx)("img",{src:s,className:"h-4 w-4 md:h-6 md:w-6 overflow-hidden bg-transparent"})]})})})},A=p.a.div(i||(i=Object(f.a)(["\n  background-color: #0e0f0f;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: grid;\n  align-items: center;\n  padding: 2rem 3.5rem;\n\n  @media screen and (max-width: 768px){\n    padding: 1rem;\n  }\n"]))),C=p.a.h1(o||(o=Object(f.a)(["\n  text-shadow: -2px 2px 2px #81E02D;\n  user-select: none;\n  font-family: 'Cambay', sans-serif;\n\n  h1 {\n  position: absolute;\n  color: #ffff64;\n  }\n\n  .stroke{   \n    animation: deconstructed 4s infinite ease-in;\n  }\n\n  h1:nth-child(1){\n    -webkit-mask-image: linear-gradient(black 25%, transparent 25%);\n    mask-image: linear-gradient(black 25%, transparent 25%);\n  }\n\n  h1:nth-child(2) {\n  -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);\n    mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);\n  }\n\n  h1:nth-child(3) {\n   -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);\n    mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);\n  }\n\n  h1:nth-child(4) {\n   -webkit-mask-image: linear-gradient(transparent 75%, black 75%);\n    mask-image: linear-gradient(transparent 75%, black 75%);\n  }\n\n  @keyframes deconstructed {\n  0% {\n    transform: translateX(-150%);\n    text-shadow: none;\n    color: transparent;\n  }\n  30% {\n    text-shadow: none;\n    color: transparent;\n    transform: translateX(2%);\n  }\n  85% {\n    color:#34d399;\n    transform: translateX(-2%);\n  }\n  90% {\n    color: transparent;\n  }\n  100% {\n    text-shadow: none;\n    color: transparent;\n    transform: translateX(-150%);\n  }\n}\n  \n"]))),L=p.a.a(a||(a=Object(f.a)(["\n  cursor: pointer;\n  color: #ffff64;\n  font-style: italic;\n\n  :hover{\n    text-decoration: underline;\n  }\n\n  :visited{\n    color: #9969C7;\n  }\n"]))),D=p.a.p(l||(l=Object(f.a)(["\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: -0.06em;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n\n  @media (min-width: 1024px){\n    font-size: 2.25rem;\n    line-height: 2rem;\n  }\n\n  @media (min-width: 768px){\n    font-size: 2rem;\n    line-height: 1.75rem;\n  }\n\n  @media (max-height: 512px){\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n  }\n"]))),W=n.p+"static/media/CsLogo.72d6dcc1.svg",M=n.p+"static/media/JavaLogo.20e92ef2.svg",H=n.p+"static/media/PythonLogo.e78f188f.svg",T=n.p+"static/media/GitLogo.8497c3c4.svg",S=n.p+"static/media/BlenderLogo.d2f5b95b.svg",P=n.p+"static/media/UnityLogo.f70eaa6b.svg",J=n.p+"static/media/JsonLogo.301fd1b4.svg",z=n.p+"static/media/JiraLogo.2062f917.svg",B=n.p+"static/media/DockerLogo.9f4e8559.svg",G=n.p+"static/media/GreenIndicator.6d43288d.svg",E=n.p+"static/media/OrangeIndicator.50bd87da.svg",F=n.p+"static/media/RedIndicator.c3107570.svg",R=[[{title:"Tech",content:[{name:"C#",logo:W,indicator:G},{name:"Java",logo:M,indicator:E},{name:"Python",logo:H,indicator:F},{name:"git",logo:T,indicator:E},{name:"sql",indicator:E},{name:"html,css,js",indicator:F},{name:"UML",indicator:F},{name:"jira",logo:z,indicator:n.p+"static/media/EmptyIndicator.55295e35.svg"},{name:"docker",logo:B,indicator:F},{name:"json,yaml",logo:J,indicator:E},{name:"ms office",indicator:F},{name:"blender",logo:S,indicator:F},{name:"unity",logo:P,indicator:E}]}],[{title:"Patterns",content:[{name:"SOLID"},{name:"DI"},{name:"rest"},{name:"DDD"},{name:"TBD"},{name:"GitFlow"},{name:"crqs"},{name:"designer"},{name:"MVC"},{name:"repository"},{name:"Singleton"},{name:"Factory method"},{name:"State pattern"}]}],[{title:"Frameworks",content:[{name:"react.js"},{name:"node.js"},{name:"asp.net"},{name:"efcore"},{name:"WPF"},{name:"tailwind"}]}]],K=function(e){var t=e.data,n=e.index;return Object(O.jsx)("div",{children:t[n].map((function(e){return Object(O.jsx)(N,{title:e.title,children:Object(O.jsx)(X,{dataArray:e.content})})}))})},X=function(e){var t=e.dataArray;return Object(O.jsx)("div",{children:t.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(I,{content:e.name,preIcon:e.logo,postIcon:e.indicator})})}))})},_=function(e){var t=e.id;return Object(O.jsxs)(A,{id:t,children:[Object(O.jsxs)(C,{className:"flex items-center justify-center text-5xl md:text-6xl lg:py-0 py-10 font-bold tracking-tight lg:text-8xl",children:[Object(O.jsx)("h1",{children:"WHAT I CAN?"}),Object(O.jsx)("h1",{class:"stroke",children:"WHAT I CAN?"}),Object(O.jsx)("h1",{children:"WHAT I CAN?"}),Object(O.jsx)("h1",{className:"underline",children:"WHAT I CAN?"})]}),Object(O.jsxs)("div",{className:"grid gap-6 mt-20 mb-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-14",children:[Object(O.jsx)(K,{data:R,index:0}),Object(O.jsx)(K,{data:R,index:1}),Object(O.jsx)(K,{data:R,index:2})]})]})},U=n.p+"static/media/DoneMark.bd1b556e.svg",V=(n.p,function(e){var t=e.id;return Object(O.jsx)(A,{id:t,children:Object(O.jsxs)("div",{className:"grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 my-8",children:[Object(O.jsxs)("div",{className:"grid items-center gap-y-14",children:[Object(O.jsxs)(C,{className:"flex justify-center items-center tracking-tight font-bold lg:text-8xl text-6xl",children:[Object(O.jsx)("h1",{class:"stroke",children:"WHO AM I?"}),Object(O.jsx)("h1",{children:"WHO AM I?"}),Object(O.jsx)("h1",{children:"WHO AM I?"}),Object(O.jsx)("h1",{className:"underline",children:"WHO AM I?"})]}),Object(O.jsxs)(D,{className:"text-center",children:["\u2014 Some very motivated guy on the 3rd year of\xa0",Object(O.jsx)(L,{target:"_blank",href:"https://www.pja.edu.pl",title:"Official PJAIT site",children:"PJAIT"}),", who"]}),Object(O.jsxs)("ul",{className:"list-none mx-auto space-y-2",children:[Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"Located in Warsaw,"}),postIcon:U}),Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"Climbing hard to his goals,"}),postIcon:U}),Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"Has passion for learning new things,"}),postIcon:U}),Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"Speaks both English and Polish,"}),postIcon:U}),Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"Always trying to find the best solution"}),postIcon:U}),Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"and to write flexible and reusable code,"}),postIcon:U}),Object(O.jsx)(I,{content:Object(O.jsx)(D,{children:"Approaches any tasks very responsibly"}),postIcon:U})]})]}),Object(O.jsxs)("div",{className:"grid justify-center",children:[Object(O.jsx)("img",{class:"select-none rounded-full  w-72 h-72 border-8 border-secondary-200",alt:"selfie"}),Object(O.jsx)("i",{class:"text-xl text-gray-400",children:"Maybe someday i add here my selfie, but not now..."})]})]})})}),q=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-github",children:Object(O.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})})},Y=function(){return Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-linkedin",children:[Object(O.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(O.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),Object(O.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})};function Q(){document.execCommand("copy"),alert("Copied the text: gl.pvn12@gmail.com")}var Z=function(e){var t=e.id;return Object(O.jsxs)("div",{id:t,className:"flex flex-col h-40",children:[Object(O.jsxs)("div",{className:"flex items-center pl-4 text-xl bg-gray-900 h-36 justify-evenly font-josefin text-red-50",children:[Object(O.jsxs)("div",{className:"flex flex-col items-center w-48 h-20 space-x-2 space-y-2",children:[Object(O.jsx)("h1",{children:"Links:"}),Object(O.jsxs)("div",{className:"inline-flex space-x-2",children:[Object(O.jsx)("div",{className:"inline-flex space-x-2 rounded-full border-2 border-secondary-200 p-1.5 text-xs md:p-3 md:text-xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-secondary-100",children:Object(O.jsxs)("a",{target:"_blank",href:"https://github.com/Glexe",className:"inline-flex items-baseline text-sm hover:underline",children:[Object(O.jsx)(q,{}),"@glexe"]})}),Object(O.jsx)("div",{className:"inline-flex space-x-2 rounded-full border-2 border-secondary-200 p-1.5 text-xs md:p-3 md:text-xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-secondary-100",children:Object(O.jsxs)("a",{target:"_blank",href:"https://www.linkedin.com/in/glebpivniev/",className:"inline-flex items-baseline text-sm hover:underline",children:[Object(O.jsx)(Y,{}),"@glebpivniev"]})})]})]}),Object(O.jsxs)("div",{className:"flex flex-col items-center w-48 h-20 space-x-2 space-y-2",children:[Object(O.jsx)("h1",{children:"An email:"}),Object(O.jsx)("btn",{onClick:Q,className:"transition-colors duration-300 ease-in-out cursor-pointer hover:text-secondary-100",children:Object(O.jsx)("h1",{className:"font-roboto border-2 rounded-full border-secondary-200 p-1.5 text-xs md:p-3 md:text-xl select-all",children:"gl.pvn12@gmail.com"})})]})]}),Object(O.jsx)("div",{className:"h-12 flex justify-center p-2 text-sm bg-gray-900 text-red-50 font-roboto",children:Object(O.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()]})})]})},$=function(e){var t=e.id;return Object(O.jsx)(A,{id:t,children:Object(O.jsxs)("div",{className:"grid items-center gap-y-14",children:[Object(O.jsxs)(C,{className:"flex justify-center items-center tracking-tight font-bold lg:text-8xl text-6xl",children:[Object(O.jsx)("h1",{children:"WHAT DID I WORK ON?"}),Object(O.jsx)("h1",{children:"WHAT DID I WORK ON?"}),Object(O.jsx)("h1",{class:"stroke",children:"WHAT DID I WORK ON?"}),Object(O.jsx)("h1",{className:"underline",children:"WHAT DID I WORK ON?"})]}),Object(O.jsxs)("h1",{className:"text-center text-2xl text-red-50 font-josefin py-10 px-20",children:["Unfortunately, I haven't worked on commercial projects yet, but you always can see some of my personal and schooling projects (which include web-APIs, basic ai algorithms implementation and some server/client in java) on my\xa0",Object(O.jsx)(L,{target:"_blank",href:"https://github.com/Glexe",title:"mine github profile",children:"github"})]})]})})},ee=function(e){var t=e.isOpen,n=e.toggle;return Object(O.jsx)("div",{className:t?"flex justify-center fixed top-0 bottom-0 left-0 right-0 z-40 bg-secondary-100":"hidden",onClick:n,children:Object(O.jsxs)("div",{className:"grid grid-rows-4 text-center py-40 font-roboto text-3xl items-center justify-center space-y-4",children:[Object(O.jsx)(b.Link,{to:"about",smooth:!0,spy:!0,duration:800,offset:-64,onClick:n,className:"transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2",children:"About"}),Object(O.jsx)(b.Link,{to:"skills",smooth:!0,spy:!0,duration:800,offset:-64,onClick:n,className:"transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2",children:"Skills"}),Object(O.jsx)(b.Link,{to:"projects",smooth:!0,spy:!0,duration:800,offset:-64,onClick:n,className:"transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2",children:"Projects"}),Object(O.jsx)(b.Link,{to:"contacts",smooth:!0,spy:!0,duration:800,offset:-64,onClick:n,className:"transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2",children:"Contacts"})]})})},te=function(){var e=Object(d.useState)(!1),t=Object(m.a)(e,2),n=t[0],s=t[1],r=function(){s(!n)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{toggle:r}),Object(O.jsx)(ee,{isOpen:n,toggle:r}),Object(O.jsx)(k,{}),Object(O.jsx)(V,{id:"about"}),Object(O.jsx)(_,{id:"skills"}),Object(O.jsx)($,{id:"projects"}),Object(O.jsx)(Z,{id:"contacts"})]})};var ne=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(te,{})})},se=n(30);h.a.render(Object(O.jsx)(j.a.StrictMode,{children:Object(O.jsx)(se.a,{children:Object(O.jsx)(ne,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.6e381f82.chunk.js.map