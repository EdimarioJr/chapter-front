"use strict";(self.webpackChunkchapter_front=self.webpackChunkchapter_front||[]).push([[811],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||n;return t?r.createElement(f,s(s({ref:a},u),{},{components:t})):r.createElement(f,s({ref:a},u))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1266:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const n={sidebar_position:4},s="Nossa stack",i={unversionedId:"nossa-stack",id:"nossa-stack",title:"Nossa stack",description:"Astronauta, a gente tem uma stack ( conjunto de tecnologias ) que visa acelerar o nosso processo e tornar a nossa experi\xeancia como desenvolvedores uma coisa legal",source:"@site/docs/nossa-stack.md",sourceDirName:".",slug:"/nossa-stack",permalink:"/chapter-front/nossa-stack",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Princ\xedpios de Software",permalink:"/chapter-front/principios-de-software"},next:{title:"Boas pr\xe1ticas HTML",permalink:"/chapter-front/boas-praticas-html"}},c={},l=[{value:"React",id:"react",level:2},{value:"Chakra",id:"chakra",level:2},{value:"Axios",id:"axios",level:2},{value:"React Query",id:"react-query",level:2}],u={toc:l};function p(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nossa-stack"},"Nossa stack"),(0,o.kt)("p",null,"Astronauta, a gente tem uma stack ( conjunto de tecnologias ) que visa acelerar o nosso processo e tornar a nossa experi\xeancia como desenvolvedores uma coisa legal :D. Vamos apresentar algumas aqui:"),(0,o.kt)("h2",{id:"react"},"React"),(0,o.kt)("p",null,"Utilizamos o react como biblioteca para constru\xe7\xe3o das UI. Ele facilita a componentiza\xe7\xe3o e manuten\xe7\xe3o dos c\xf3digos, ao mesmo tempo que agiliza nosso desenvolvimento."),(0,o.kt)("p",null,"Se voc\xea quiser treinar um pouco, \xe9 recomendado o ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/tutorial/tutorial.html"},"tutorial pr\xe1tico do guia oficial do React."),"\n",(0,o.kt)("strong",{parentName:"p"},"Mas fa\xe7a usando fun\xe7\xf5es, n\xe3o classes"),"."),(0,o.kt)("h2",{id:"chakra"},"Chakra"),(0,o.kt)("p",null,"Como biblioteca CSS utilizamos o ",(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"chakra"),". \xc9 uma biblioteca que facilita a estiliza\xe7\xe3o atrav\xe9s de sua Style Props, se preocupa com a acessibilidade e com o gerenciamento de temas. Vale a pena dar uma olhada, por que ela toma uma abordagem um pouco n\xe3o tradicional :D"),(0,o.kt)("h2",{id:"axios"},"Axios"),(0,o.kt)("p",null,"Para cliente HTTP utilizamos o ",(0,o.kt)("a",{parentName:"p",href:"https://axios-http.com/ptbr/docs/intro"},"axios")," , que \xe9 a maior biblioteca do ramo, al\xe9m de ser bem mantida e ser bem customiz\xe1vel."),(0,o.kt)("h2",{id:"react-query"},"React Query"),(0,o.kt)("p",null,"Usamos o react query para consumir a API. \xc9 uma biblioteca que nos d\xe1 v\xe1rias facilidades, como cache e gerenciamento de estado do servidor ( estado de loading, de erro....). Vale a pena dar uma olhada mais aprofundada, por que \xe9 bem diferente consumir a API com ela e consumir a API sem ela. ",(0,o.kt)("a",{parentName:"p",href:"https://react-query-v3.tanstack.com/"},"Olha aqui")))}p.isMDXComponent=!0}}]);