(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1);n(3);const l=Object(i.f)('<header role="banner"></header>',2),o=Object(i.f)('<div><a><span class="screenreader-only"></span></a></div>',6),s=e=>(()=>{const t=l.cloneNode(!0);return Object(i.b)(t,(()=>{const t=Object(i.c)(()=>e.hide,!0);return()=>t()?"":(()=>{const t=o.cloneNode(!0),n=t.firstChild,l=n.firstChild;return Object(i.b)(l,()=>e.screenreader),Object(c.g)(i=>{const c="header-logo\n                ".concat(e.logo?" header-logo--"+e.logo:"","\n                ").concat(e.white?" header-logo--white":"","\n            "),l=e.link?e.link:"/",o=e.title;return c!==i._v$&&(t.className=i._v$=c),l!==i._v$2&&n.setAttribute("href",i._v$2=l),o!==i._v$3&&(n.title=i._v$3=o),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()})()),Object(c.g)(()=>t.className="header".concat(e.transparent?" header--transparent":"")),t})();n(4);const a=Object(i.f)('<a class="skiplink"></a>',2),r=e=>(()=>{const t=a.cloneNode(!0);return Object(i.b)(t,()=>e.title),Object(c.g)(()=>t.setAttribute("href","#".concat(e.id))),t})();n(5);const d=Object(i.f)('<div class="col-xs-12 col-md-10 col-md-offset-1"><span class="footer__header footer__header--title"></span></div>',4),h=Object(i.f)('<footer class="footer"><div><div class="container"><div class="row"></div></div></div></footer>',8),b=["children","when"],f=e=>(()=>{const t=h.cloneNode(!0),n=t.firstChild,l=n.firstChild.firstChild;return Object(i.b)(l,Object(c.e)(c.c,{when:()=>e.title,children:()=>{const t=d.cloneNode(!0),n=t.firstChild;return Object(i.b)(n,()=>e.title),t}},b),null),Object(i.b)(l,Object(c.e)(c.c,{when:()=>e.children,children:()=>e.children},b),null),Object(c.g)(()=>n.className="footer__content ".concat(e.color?"background--"+e.color:"background--transparent")),t})();n(6),n(7);const v=Object(i.f)("<p></p>",2),m=Object(i.f)('<li class="card"><a class="card__content"><div class="card__thumb"></div><div class="card__body"><span class="card__title"></span></div></a></li>',10),j=["children","when"],g=e=>(()=>{const t=m.cloneNode(!0),n=t.firstChild,l=n.firstChild,o=l.nextSibling,s=o.firstChild;return n.__click=e.onclick,Object(i.b)(s,()=>e.title),Object(i.b)(o,Object(c.e)(c.c,{when:()=>e.content,children:()=>{const t=v.cloneNode(!0);return Object(i.b)(t,()=>e.content),t}},j),null),Object(c.g)(t=>{const c="".concat(e.href?e.href:"#"),o="background-image: url('".concat(e.image,"')");return c!==t._v$&&n.setAttribute("href",t._v$=c),t._v$2=Object(i.e)(l,o,t._v$2),t},{_v$:void 0,_v$2:void 0}),t})();Object(i.a)(["click"]);const u=Object(i.f)('<ul class="list list--card"></ul>',2),O=Object(i.f)('<li class="Card">No Cards</li>',2),_=["each","fallback"],p=e=>(()=>{const t=u.cloneNode(!0);return Object(i.b)(t,Object(c.e)(c.a,{each:()=>e.cards,fallback:()=>O.cloneNode(!0),children:e=>Object(c.e)(g,Object.assign(Object.keys(e).reduce((t,n)=>(t[n]=()=>e[n],t),{}),{}),Object.keys(e))},_)),t})();n(8);const k=Object(i.f)('<button class="notification__close-button"><i class="icon icon-cross"></i>Sluit</button>',4),w=Object(i.f)('<div><div class="notification__content"><div class="notification__type"></div><h2 class="notification__title"></h2><span></span></div></div>',10),x=["children","when"],N=e=>{const[t,n]=Object(c.k)({notification:!0});let l;switch(e.type){case"success":l="Gelukt";break;case"info":l="Ter informatie";break;case"warning":l="Let op";break;case"error":l="Storing"}const o=()=>{n({notification:!1})};return Object(c.e)(c.c,{when:()=>t.notification,children:()=>{const t=w.cloneNode(!0),n=t.firstChild.firstChild,s=n.nextSibling,a=s.nextSibling;return Object(i.b)(n,l),Object(i.b)(s,()=>e.title),Object(i.b)(a,()=>e.description),Object(i.b)(t,Object(c.e)(c.c,{when:()=>e.canClose,children:()=>{const e=k.cloneNode(!0);return e.__click=o,e}},x),null),Object(c.g)(n=>{const i="notification notification--".concat(e.type),c=e.id;return i!==n._v$&&(t.className=n._v$=i),c!==n._v$2&&(t.id=n._v$2=c),n},{_v$:void 0,_v$2:void 0}),t}},x)};Object(i.a)(["click"]);const $=["children"],y=Object(c.f)([{visible:!1},{}]),C=e=>{const[t,n]=Object(c.k)({visible:e.visible||!1}),i=[t,{show(){console.log("Show"),n("visible",e=>!0)},hide(){console.log("Hide"),n("visible",e=>!1)},toggle(){console.log("Toggle"),n("visible",e=>!e)}}];return Object(c.e)(y.Provider,{value:i,children:()=>e.children},$)};function S(){return Object(c.o)(y)}const L=Object(i.f)('<div class="row"><div class="col-sm-12"></div></div>',4),D=()=>{const[,{show:e}]=S(),t=[{title:"Aan de slag",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-1.png",content:"Installatie, richtlijnen en layout.",href:"#aan-de-slag",onclick:e},{title:"Basis",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-2.png",content:"Kleuren, iconen en typografie.",href:"#basis",onclick:e},{title:"Componenten",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-3.png",content:"Kant-en-klare onderdelen.",href:"#componenten",onclick:e}],n=[{title:"Patronen",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-3.png",content:"Validatie en forumlieropbouw.",href:"#patronen",onclick:e},{title:"Voorbeelden",image:"https://nl-design-system.gitlab.io/nl-design-system/images/img-2.png",content:"Kant-en-klare pagina's.",href:"#voorbeelden",onclick:e}];return[(()=>{const e=L.cloneNode(!0),n=e.firstChild;return Object(i.b)(n,Object(c.e)(N,{type:"warning",title:"NL Design System in pilotfase",description:"Het NL Design System bevindt \n                        zich momenteel nog in de pilotfase. \n                        Hierdoor is het nu nog niet volwassen genoeg om volledig gebruikt \n                        te worden. Houdt hier dus rekening mee voor je aan de slag gaat. We \n                        zouden het op prijs stellen als je wilt bijdragen om het NLDS tot een \n                        succes te maken. Dit kan in onze gitlab of met een \n                        mailtje aan: NLDesignSystem@gebruikercentraal.nl"}),null),Object(i.b)(n,Object(c.e)(p,{cards:t}),null),e})(),(()=>{const e=L.cloneNode(!0),t=e.firstChild;return Object(i.b)(t,Object(c.e)(p,{cards:n})),e})()]};n(2);const B=Object(i.f)("<li><a></a></li>",4),A=e=>(()=>{const t=B.cloneNode(!0),n=t.firstChild;return t.__click=e.onclick,Object(i.b)(n,()=>e.title),Object(c.g)(i=>{const c="sidenav__item ".concat(e.active?"sidenav__item--active":""),l=e.href;return c!==i._v$&&(t.className=i._v$=c),l!==i._v$2&&n.setAttribute("href",i._v$2=l),i},{_v$:void 0,_v$2:void 0}),t})();Object(i.a)(["click"]);const H=Object(i.f)('<aside class="col-xl-3 col-lg-4 col-md-3 col-sm-modal"><nav class="sidenav"><ul></ul></nav></aside>',6),T=Object(i.f)('<li class="sidenav__item"></li>',2),z=["each","fallback"],F=["children","when"],I=e=>Object(c.e)(c.c,{when:()=>e.show,children:()=>{const t=H.cloneNode(!0),n=t.firstChild.firstChild;return Object(i.b)(n,Object(c.e)(c.a,{each:()=>e.items,fallback:()=>T.cloneNode(!0),children:e=>Object(c.e)(A,Object.assign(Object.keys(e).reduce((t,n)=>(t[n]=()=>e[n],t),{}),{}),Object.keys(e))},z)),t}},F),P=Object(i.f)('<div class="row"><div class="col-xl-9 col-lg-8 col-md-9"><div class="content-background"><div class="skiplink-target content" id="main-content"><p>De componenten zijn optionele onderdelen van de <span lang="en-US">library</span>. Probeer alleende componenten in te laden die ook daadwerkelijk gebruikt worden.</p></div></div></div></div>',12),V=()=>{const e=[{href:"../componenten/index.html",title:"Introductie",active:!0},{href:"backlink/index.html",title:"Backlink"},{href:"bottom-bar/index.html",title:"Bottom bar"},{href:"button/index.html",title:"Button"},{href:"card/index.html",title:"Card"},{href:"donutchart/index.html",title:"Chart"},{href:"checkbox/index.html",title:"Checkbox"},{href:"collapse/index.html",title:"Collapse"},{href:"combobox/index.html",title:"Combobox"},{href:"definition-list/index.html",title:"Definition list"},{href:"footer/index.html",title:"Footer"},{href:"file/index.html",title:"File"},{href:"filter/index.html",title:"Filter"},{href:"form/index.html",title:"Form"},{href:"header/index.html",title:"Header"},{href:"hint/index.html",title:"Hint"},{href:"images/index.html",title:"Images"},{href:"label/index.html",title:"Labels & badges"},{href:"lists/index.html",title:"Lists"},{href:"modal/index.html",title:"Modal"},{href:"meta/index.html",title:"Meta"},{href:"navigation/index.html",title:"Navigation"},{href:"notification/index.html",title:"Notification"},{href:"pagination/index.html",title:"Pagination"},{href:"quote/index.html",title:"Quote"},{href:"radio/index.html",title:"Radiobutton"},{href:"sections/index.html",title:"Section"},{href:"skiplink/index.html",title:"Skiplink"},{href:"spinner/index.html",title:"Spinner"},{href:"switch/index.html",title:"Switch"},{href:"table/index.html",title:"Table"},{href:"tabs/index.html",title:"Tabs"},{href:"timeline/index.html",title:"Timeline"},{href:"tooltip/index.html",title:"Tooltip"},{href:"videos/index.html",title:"Video"}];return(()=>{const t=P.cloneNode(!0),n=t.firstChild;return Object(i.b)(t,Object(c.e)(I,{items:e,show:!0}),n),t})()};const E=Object(i.f)('<div class="row"><div class="col-sm-12"></div></div>',4),G=()=>(()=>{const e=E.cloneNode(!0),t=e.firstChild;return Object(i.b)(t,Object(c.e)(N,{type:"error",title:"Niet gevonden",description:"De pagina die je hebt aangeroepen kon niet worden gevonden"})),e})();n(9);n(10);const J=Object(i.f)("<i></i>",2),K=e=>(()=>{const t=J.cloneNode(!0);return Object(c.g)(n=>{const i="icon icon-".concat(e.icon),c=e.role;return i!==n._v$&&(t.className=n._v$=i),c!==n._v$2&&(t.role=n._v$2=c),n},{_v$:void 0,_v$2:void 0}),t})(),W=Object(i.f)('<li class="nav__item"><a class="nav__link"></a></li>',4),M=["icon"],U=["children","when"],q=e=>(()=>{const t=W.cloneNode(!0),n=t.firstChild;return t.__click=e.onclick,Object(i.b)(n,Object(c.e)(c.c,{when:()=>e.icon,children:()=>Object(c.e)(K,{icon:()=>e.icon,role:"presentation"},M)},U),null),Object(i.b)(n,()=>e.title,null),Object(c.g)(()=>n.setAttribute("href",e.href)),t})();Object(i.a)(["click"]);const Q=Object(i.f)('<nav><div class="container"><div><ul class="nav"></ul></div></div></nav>',8),R=Object(i.f)('<li class="nav__item"></li>',2),X=["each","fallback"],Y=["children","when"];const Z=e=>Object(c.e)(c.c,{when:()=>e.show,children:()=>{const t=Q.cloneNode(!0),n=t.firstChild.firstChild,l=n.firstChild;return Object(i.b)(l,Object(c.e)(c.a,{each:()=>e.items,fallback:()=>R.cloneNode(!0),children:e=>Object(c.e)(q,Object.assign(Object.keys(e).reduce((t,n)=>(t[n]=()=>e[n],t),{}),{}),Object.keys(e))},X)),Object(c.g)(i=>{const c="top-nav".concat(e.color?" top-nav--"+e.color:""),l="top-nav-autoresize".concat(e.block?" top-nav__block":"");return c!==i._v$&&(t.className=i._v$=c),l!==i._v$2&&(n.className=i._v$2=l),i},{_v$:void 0,_v$2:void 0}),t}},Y),ee=Object(i.f)('<main class="skiplink-target main" id="content" tabindex="-1"><div class="container"><section class="row"><div class="col-xs-12 col-sm-11 col-md-10 col-lg-9 col-xl-8"><div class="content"><header class="content__header"><h1 class="content__header-title">NL Design System - implementatie in <a href="https://solidjs.com">SolidJs</a></h1><p>broncode: <a href="https://github.com/codefornl/nl-design-system-solid/">github</a></p></header></div></div></section><article></article></div></main>',22),te=Object(i.f)('<div class="col-xs-4"><span class="footer__header">NL Design System 0.1.2-Solid</span><ul class="list list--links footer__nav"><li><a href="upgrade/index.html">Upgraden</a></li></ul></div>',10),ne=Object(i.f)('<div class="col-xs-4"><span class="footer__header">Bijdragen</span><ul class="list list--links footer__nav"><li><a rel="external" href="https://gitlab.com/nl-design-system/nl-design-system">GitLab</a></li></ul></div>',10),ie=Object(i.f)('<div class="col-xs-4"><span class="footer__header">Contact</span><ul class="list list--links footer__nav"><li><a href="">Stuur een e-mail</a></li></ul></div>',10),ce=["show"],le=["children","when"],oe=["children","fallback"],se=["children"],ae=()=>{const[e,{hide:t}]=S(),n=[{title:"NL Design System",href:"#home",icon:"home",onclick:t},{title:"Aan de slag",href:"#aan-de-slag"},{title:"Basis",href:"#basis"},{title:"Componenten",href:"#componenten"},{title:"Voorbeelden",href:"#voorbeelden"}];return Object(c.e)(Z,{items:n,show:()=>e.visible},ce)};var re=function(){const e=function(){const[e,{show:t,hide:n}]=S(),[i,l]=Object(c.j)(window.location.hash.slice(1)||"home"),o=()=>{let t=window.location.hash.slice(1);""===t&&(t="home"),l(t),e.visible=!0};return window.addEventListener("hashchange",o),Object(c.m)(()=>window.removeEventListener("hashchange",o)),e=>e===i()}();return Object(c.e)(C,{visible:!1,children:()=>[Object(i.c)(Object(c.e)(r,{id:"content",title:"Ga direct naar inhoud"})),Object(i.c)(Object(c.e)(s,{hide:!0,transparent:!0})),Object(i.c)(Object(c.e)(ae,{})),(()=>{const t=ee.cloneNode(!0),n=t.firstChild.firstChild.nextSibling;return Object(i.b)(n,Object(c.e)(c.d,{fallback:()=>Object(c.e)(G,{}),children:()=>[Object(i.c)(Object(c.e)(c.b,{when:()=>e("home"),children:()=>Object(c.e)(D,{})},le)),Object(i.c)(Object(c.e)(c.b,{when:()=>e("componenten"),children:()=>Object(c.e)(V,{})},le))]},oe)),t})(),Object(i.c)(Object(c.e)(f,{children:()=>[te.cloneNode(!0),ne.cloneNode(!0),ie.cloneNode(!0)]},se))]},se)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(11),n(12),n(13);Object(i.d)(re,document.getElementById("wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[14,1,2]]]);