(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1);n(2);const o=Object(c.f)('<header role="banner"></header>',2),l=Object(c.f)('<div><a><span class="screenreader-only"></span></a></div>',6),s=e=>(()=>{const t=o.cloneNode(!0);return Object(c.b)(t,(()=>{const t=Object(c.c)(()=>e.hide,!0);return()=>t()?"":(()=>{const t=l.cloneNode(!0),n=t.firstChild,o=n.firstChild;return Object(c.b)(o,()=>e.screenreader),Object(i.g)(c=>{const i="header-logo\n                ".concat(e.logo?" header-logo--"+e.logo:"","\n                ").concat(e.white?" header-logo--white":"","\n            "),o=e.link?e.link:"/",l=e.title;return i!==c._v$&&(t.className=c._v$=i),o!==c._v$2&&n.setAttribute("href",c._v$2=o),l!==c._v$3&&(n.title=c._v$3=l),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()})()),Object(i.g)(()=>t.className="header".concat(e.transparent?" header--transparent":"")),t})();n(4);const a=Object(c.f)('<a class="skiplink"></a>',2),r=e=>(()=>{const t=a.cloneNode(!0);return Object(c.b)(t,()=>e.title),Object(i.g)(()=>t.setAttribute("href","#".concat(e.id))),t})();n(5);const d=Object(c.f)('<div class="col-xs-12 col-md-10 col-md-offset-1"><span class="footer__header footer__header--title"></span></div>',4),b=Object(c.f)('<footer class="footer"><div><div class="container"><div class="row"></div></div></div></footer>',8),h=["children","when"],v=e=>(()=>{const t=b.cloneNode(!0),n=t.firstChild,o=n.firstChild.firstChild;return Object(c.b)(o,Object(i.e)(i.c,{when:()=>e.title,children:()=>{const t=d.cloneNode(!0),n=t.firstChild;return Object(c.b)(n,()=>e.title),t}},h),null),Object(c.b)(o,Object(i.e)(i.c,{when:()=>e.children,children:()=>e.children},h),null),Object(i.g)(()=>n.className="footer__content ".concat(e.color?"background--"+e.color:"background--transparent")),t})();n(6),n(7);const j=Object(c.f)("<p></p>",2),f=Object(c.f)('<li class="card"><a class="card__content"><div class="card__thumb"></div><div class="card__body"><span class="card__title"></span></div></a></li>',10),O=["children","when"],g=e=>(()=>{const t=f.cloneNode(!0),n=t.firstChild,o=n.firstChild,l=o.nextSibling,s=l.firstChild;return n.__click=e.onclick,Object(c.b)(s,()=>e.title),Object(c.b)(l,Object(i.e)(i.c,{when:()=>e.content,children:()=>{const t=j.cloneNode(!0);return Object(c.b)(t,()=>e.content),t}},O),null),Object(i.g)(t=>{const i="".concat(e.href?e.href:"#"),l="background-image: url('".concat(e.image,"')");return i!==t._v$&&n.setAttribute("href",t._v$=i),t._v$2=Object(c.e)(o,l,t._v$2),t},{_v$:void 0,_v$2:void 0}),t})();Object(c.a)(["click"]);const u=Object(c.f)('<ul class="list list--card"></ul>',2),m=Object(c.f)('<li class="Card">No Cards</li>',2),k=["each","fallback"],_=e=>(()=>{const t=u.cloneNode(!0);return Object(c.b)(t,Object(i.e)(i.a,{each:()=>e.cards,fallback:()=>m.cloneNode(!0),children:e=>Object(i.e)(g,Object.assign(Object.keys(e).reduce((t,n)=>(t[n]=()=>e[n],t),{}),{}),Object.keys(e))},k)),t})();n(8);const p=Object(c.f)('<button class="notification__close-button"><i class="icon icon-cross"></i>Sluit</button>',4),w=Object(c.f)('<div><div class="notification__content"><div class="notification__type"></div><h2 class="notification__title"></h2><span></span></div></div>',10),N=["children","when"],$=e=>{const[t,n]=Object(i.k)({notification:!0});let o;switch(e.type){case"success":o="Gelukt";break;case"info":o="Ter informatie";break;case"warning":o="Let op";break;case"error":o="Storing"}const l=()=>{n({notification:!1})};return Object(i.e)(i.c,{when:()=>t.notification,children:()=>{const t=w.cloneNode(!0),n=t.firstChild.firstChild,s=n.nextSibling,a=s.nextSibling;return Object(c.b)(n,o),Object(c.b)(s,()=>e.title),Object(c.b)(a,()=>e.description),Object(c.b)(t,Object(i.e)(i.c,{when:()=>e.canClose,children:()=>{const e=p.cloneNode(!0);return e.__click=l,e}},N),null),Object(i.g)(n=>{const c="notification notification--".concat(e.type),i=e.id;return c!==n._v$&&(t.className=n._v$=c),i!==n._v$2&&(t.id=n._v$2=i),n},{_v$:void 0,_v$2:void 0}),t}},N)};function C(){const[e,t]=Object(i.j)(window.location.hash.slice(1)||"home"),n=()=>{let e=window.location.hash.slice(1);""===e&&(e="home"),t(e)};return window.addEventListener("hashchange",n),Object(i.m)(()=>window.removeEventListener("hashchange",n)),t=>t===e()}Object(c.a)(["click"]);const y=["children"],S=C(),x=Object(i.f)([{visible:!S("home")},{}]),L=e=>{const[t,n]=Object(i.k)({visible:e.visible||!S("home")}),c=[t,{show(){n("visible",e=>!0)},hide(){n("visible",e=>!1)},toggle(){n("visible",e=>!e)}}];return Object(i.e)(x.Provider,{value:c,children:()=>e.children},y)};function D(){return Object(i.o)(x)}const B=Object(c.f)('<div class="row"><div class="col-sm-12"></div></div>',4),A=()=>{const[,{show:e}]=D(),t=[{title:"Aan de slag",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-1.png",content:"Installatie, richtlijnen en layout.",href:"#aan-de-slag",onclick:e},{title:"Basis",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-2.png",content:"Kleuren, iconen en typografie.",href:"#basis",onclick:e},{title:"Componenten",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-3.png",content:"Kant-en-klare onderdelen.",href:"#componenten",onclick:e}],n=[{title:"Patronen",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-3.png",content:"Validatie en forumlieropbouw.",href:"#patronen",onclick:e},{title:"Voorbeelden",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-2.png",content:"Kant-en-klare pagina's.",href:"#voorbeelden",onclick:e}];return[(()=>{const e=B.cloneNode(!0),n=e.firstChild;return Object(c.b)(n,Object(i.e)($,{type:"warning",title:"NL Design System in pilotfase",description:"Het NL Design System bevindt \n                        zich momenteel nog in de pilotfase. \n                        Hierdoor is het nu nog niet volwassen genoeg om volledig gebruikt \n                        te worden. Houdt hier dus rekening mee voor je aan de slag gaat. We \n                        zouden het op prijs stellen als je wilt bijdragen om het NLDS tot een \n                        succes te maken. Dit kan in onze gitlab of met een \n                        mailtje aan: NLDesignSystem@gebruikercentraal.nl"}),null),Object(c.b)(n,Object(i.e)(_,{cards:t}),null),e})(),(()=>{const e=B.cloneNode(!0),t=e.firstChild;return Object(c.b)(t,Object(i.e)(_,{cards:n})),e})()]};n(3);const T=Object(c.f)("<li><a></a></li>",4),z=e=>(()=>{const t=T.cloneNode(!0),n=t.firstChild;return t.__click=e.onclick,Object(c.b)(n,()=>e.title),Object(i.g)(c=>{const i="sidenav__item ".concat(e.active?"sidenav__item--active":""),o=e.href;return i!==c._v$&&(t.className=c._v$=i),o!==c._v$2&&n.setAttribute("href",c._v$2=o),c},{_v$:void 0,_v$2:void 0}),t})();Object(c.a)(["click"]);const H=Object(c.f)('<aside class="col-xl-3 col-lg-4 col-md-3 col-sm-modal"><nav class="sidenav"><ul></ul></nav></aside>',6),F=Object(c.f)('<li class="sidenav__item"></li>',2),I=["each","fallback"],P=["children","when"],V=e=>Object(i.e)(i.c,{when:()=>e.show,children:()=>{const t=H.cloneNode(!0),n=t.firstChild.firstChild;return Object(c.b)(n,Object(i.e)(i.a,{each:()=>e.items,fallback:()=>F.cloneNode(!0),children:e=>Object(i.e)(z,Object.assign(Object.keys(e).reduce((t,n)=>(t[n]=()=>e[n],t),{}),{}),Object.keys(e))},I)),t}},P),E=Object(c.f)('<div class="row"><div class="col-xl-9 col-lg-8 col-md-9"><div class="content-background"><div class="skiplink-target content" id="main-content"><p>De componenten zijn optionele onderdelen van de <span lang="en-US">library</span>. Probeer alleende componenten in te laden die ook daadwerkelijk gebruikt worden.</p></div></div></div></div>',12),G=()=>{const e=e=>{console.log(e.currentTarget.textContent)},t=[{title:"Introductie",active:!0,onclick:e},{title:"Backlink",onclick:e},{title:"Bottom bar",onclick:e},{title:"Button",onclick:e},{title:"Card",onclick:e},{title:"Chart",onclick:e},{title:"Checkbox",onclick:e},{title:"Collapse",onclick:e},{title:"Combobox",onclick:e},{title:"Definition list",onclick:e},{title:"Footer",onclick:e},{title:"File",onclick:e},{title:"Filter",onclick:e},{title:"Form",onclick:e},{title:"Header",onclick:e},{title:"Hint",onclick:e},{title:"Images",onclick:e},{title:"Labels & badges",onclick:e},{title:"Lists",onclick:e},{title:"Modal",onclick:e},{title:"Meta",onclick:e},{title:"Navigation",onclick:e},{title:"Notification",onclick:e},{title:"Pagination",onclick:e},{title:"Quote",onclick:e},{title:"Radiobutton",onclick:e},{title:"Section",onclick:e},{title:"Skiplink",onclick:e},{title:"Spinner",onclick:e},{title:"Switch",onclick:e},{title:"Table",onclick:e},{title:"Tabs",onclick:e},{title:"Timeline",onclick:e},{title:"Tooltip",onclick:e},{title:"Video",onclick:e}];return(()=>{const e=E.cloneNode(!0),n=e.firstChild;return Object(c.b)(e,Object(i.e)(V,{items:t,show:!0}),n),e})()},J=Object(c.f)('<div class="row"><div class="col-sm-12"></div></div>',4),K=()=>(()=>{const e=J.cloneNode(!0),t=e.firstChild;return Object(c.b)(t,Object(i.e)($,{type:"error",title:"Niet gevonden",description:"De pagina die je hebt aangeroepen kon niet worden gevonden"})),e})();n(9);n(10);const W=Object(c.f)("<i></i>",2),M=e=>(()=>{const t=W.cloneNode(!0);return Object(i.g)(n=>{const c="icon icon-".concat(e.icon),i=e.role;return c!==n._v$&&(t.className=n._v$=c),i!==n._v$2&&(t.role=n._v$2=i),n},{_v$:void 0,_v$2:void 0}),t})(),U=Object(c.f)('<li class="nav__item"><a class="nav__link"></a></li>',4),Q=["icon"],R=["children","when"],q=e=>(()=>{const t=U.cloneNode(!0),n=t.firstChild;return t.__click=e.onclick,Object(c.b)(n,Object(i.e)(i.c,{when:()=>e.icon,children:()=>Object(i.e)(M,{icon:()=>e.icon,role:"presentation"},Q)},R),null),Object(c.b)(n,()=>e.title,null),Object(i.g)(()=>n.setAttribute("href",e.href)),t})();Object(c.a)(["click"]);const X=Object(c.f)('<nav><div class="container"><div><ul class="nav"></ul></div></div></nav>',8),Y=Object(c.f)('<li class="nav__item"></li>',2),Z=["each","fallback"],ee=["children","when"];const te=e=>Object(i.e)(i.c,{when:()=>e.show,children:()=>{const t=X.cloneNode(!0),n=t.firstChild.firstChild,o=n.firstChild;return Object(c.b)(o,Object(i.e)(i.a,{each:()=>e.items,fallback:()=>Y.cloneNode(!0),children:e=>Object(i.e)(q,Object.assign(Object.keys(e).reduce((t,n)=>(t[n]=()=>e[n],t),{}),{}),Object.keys(e))},Z)),Object(i.g)(c=>{const i="top-nav".concat(e.color?" top-nav--"+e.color:""),o="top-nav-autoresize".concat(e.block?" top-nav__block":"");return i!==c._v$&&(t.className=c._v$=i),o!==c._v$2&&(n.className=c._v$2=o),c},{_v$:void 0,_v$2:void 0}),t}},ee),ne=Object(c.f)('<section class="row"><div class="col-xs-12 col-sm-11 col-md-10 col-lg-9 col-xl-8"><div class="content"><header class="content__header"></header></div></div></section>',8),ce=e=>(()=>{const t=ne.cloneNode(!0),n=t.firstChild.firstChild.firstChild;return Object(c.b)(n,()=>e.children),t})(),ie=Object(c.f)('<h1 class="content__header-title">NL Design System - implementatie in <a href="https://solidjs.com">SolidJs</a></h1>',4),oe=Object(c.f)('<p>broncode: <a href="https://github.com/codefornl/nl-design-system-solid/">github</a></p>',4),le=Object(c.f)('<main class="skiplink-target main" id="content" tabindex="-1"><div class="container"><article></article></div></main>',6),se=Object(c.f)('<div class="col-xs-4"><span class="footer__header">NL Design System 0.1.2-Solid</span><ul class="list list--links footer__nav"><li><a href="upgrade/index.html">Upgraden</a></li></ul></div>',10),ae=Object(c.f)('<div class="col-xs-4"><span class="footer__header">Bijdragen</span><ul class="list list--links footer__nav"><li><a rel="external" href="https://gitlab.com/nl-design-system/nl-design-system">GitLab</a></li></ul></div>',10),re=Object(c.f)('<div class="col-xs-4"><span class="footer__header">Contact</span><ul class="list list--links footer__nav"><li><a href="">Stuur een e-mail</a></li></ul></div>',10),de=["show"],be=["children"],he=["children","when"],ve=["children","fallback"],je=()=>{const[e,{hide:t}]=D(),n=[{title:"NL Design System",href:"#home",icon:"home",onclick:t},{title:"Aan de slag",href:"#aan-de-slag"},{title:"Basis",href:"#basis"},{title:"Componenten",href:"#componenten"},{title:"Voorbeelden",href:"#voorbeelden"}];return Object(i.e)(te,{items:n,show:()=>e.visible},de)};var fe=function(){const e=C();return Object(i.e)(L,{visible:!1,children:()=>[Object(c.c)(Object(i.e)(r,{id:"content",title:"Ga direct naar inhoud"})),Object(c.c)(Object(i.e)(s,{hide:!0,transparent:!0})),Object(c.c)(Object(i.e)(je,{})),(()=>{const t=le.cloneNode(!0),n=t.firstChild,o=n.firstChild;return Object(c.b)(n,Object(i.e)(ce,{children:()=>[ie.cloneNode(!0),oe.cloneNode(!0)]},be),o),Object(c.b)(o,Object(i.e)(i.d,{fallback:()=>Object(i.e)(K,{}),children:()=>[Object(c.c)(Object(i.e)(i.b,{when:()=>e("home"),children:()=>Object(i.e)(A,{})},he)),Object(c.c)(Object(i.e)(i.b,{when:()=>e("componenten"),children:()=>Object(i.e)(G,{})},he))]},ve)),t})(),Object(c.c)(Object(i.e)(v,{children:()=>[se.cloneNode(!0),ae.cloneNode(!0),re.cloneNode(!0)]},be))]},be)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(11),n(12),n(13);Object(c.d)(fe,document.getElementById("wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[14,1,2]]]);