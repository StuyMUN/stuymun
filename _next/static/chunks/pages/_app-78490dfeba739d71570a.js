(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var i,c=(i=t(7294))&&i.__esModule?i:{default:i},o=t(1063),a=t(4651),s=t(7426);var u={};function l(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=a.useRouter(),f=c.default.useMemo((function(){var n=o.resolveHref(i,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?o.resolveHref(i,e.as):a||c}}),[i,e.href,e.as]),d=f.href,h=f.as,v=e.children,m=e.replace,p=e.shallow,j=e.scroll,x=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=(n=c.default.Children.only(v))&&"object"===typeof n&&n.ref,g=s.useIntersection({rootMargin:"200px"}),y=r(g,2),w=y[0],k=y[1],O=c.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);c.default.useEffect((function(){var e=k&&t&&o.isLocalURL(d),n="undefined"!==typeof x?x:i&&i.locale,r=u[d+"%"+h+(n?"%"+n:"")];e&&!r&&l(i,d,h,{locale:n})}),[h,d,k,x,t,i]);var N={ref:O,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[i?"replace":"push"](t,r,{shallow:c,locale:s,scroll:a}))}(e,i,d,h,m,p,j,x)},onMouseEnter:function(e){o.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(i,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof x?x:i&&i.locale,S=i&&i.isLocaleDomain&&o.getDomainLocale(h,M,i&&i.locales,i&&i.domainLocales);N.href=S||o.addBasePath(o.addLocale(h,M,i&&i.defaultLocale))}return c.default.cloneElement(n,N)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,s=i.useRef(),u=i.useState(!1),l=r(u,2),f=l[0],d=l[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,c=r.observer,o=r.elements;return o.set(e,n),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!o&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[h,f]};var i=t(7294),c=t(3447),o="undefined"!==typeof IntersectionObserver;var a=new Map},1191:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1664),i=t(5893);function c(e){var n=e.children,t=e.href,c=e.passHref,o=void 0!==c&&c;return(0,i.jsx)(r.default,{href:t,passHref:o,children:(0,i.jsx)("a",{children:n})})}},7378:function(e,n,t){"use strict";t.d(n,{b2:function(){return I},FL:function(){return P},IT:function(){return L},Ar:function(){return f},rU:function(){return o.Z},h0:function(){return w},ub:function(){return M},at:function(){return S},DR:function(){return _},SO:function(){return b},Pf:function(){return d},Fo:function(){return N},tO:function(){return C}});var r=t(9008);function i(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var c=t(7294),o=t(1191),a=t(2642),s=t(5893);function u(e){i(e),function(){var e=(0,c.useState)(0),n=e[0],t=e[1];(0,c.useEffect)((function(){function e(){var e=window.pageYOffset;n>e?(document.getElementById("main-nav").style.top="0px",document.getElementsByClassName("nav-container")[0].style.top="0px"):(document.getElementById("main-nav").style.top="-84.63px",document.getElementsByClassName("nav-container")[0].style.top="-84.63px"),t(e)}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}))}();var n=(0,c.useState)(!1),t=n[0],r=n[1],u=function(e){return r(!1)},l=(0,s.jsx)("img",{alt:"MUNLOGO",src:(0,a.Z)("/img/munlogo-transparent.png"),width:"80px",height:"70px"});return(0,s.jsxs)("div",{id:"nav",children:[(0,s.jsx)("div",{className:"nav-container",children:(0,s.jsxs)("nav",{id:"main-nav",children:[(0,s.jsx)(o.Z,{href:"/",children:(0,s.jsxs)("div",{className:"nav-title",children:[l,(0,s.jsx)("div",{className:"link-txt",id:"special",children:"StuyMUN"})]})}),(0,s.jsx)(o.Z,{href:"/resources",children:(0,s.jsx)("div",{className:"link-txt",children:"Resources"})}),(0,s.jsx)(o.Z,{href:"/conferences",children:(0,s.jsx)("div",{className:"link-txt",children:"Conferences"})}),(0,s.jsx)(o.Z,{href:"/secretariat",children:(0,s.jsx)("div",{className:"link-txt",children:"Secretariat"})}),(0,s.jsx)(o.Z,{href:"/about",children:(0,s.jsx)("div",{className:"link-txt",children:"About"})})]})}),(0,s.jsx)("div",{className:"mobile-nav-container",children:(0,s.jsxs)("nav",{className:"mobile-nav",role:"navigation",children:[(0,s.jsxs)("div",{id:"menuToggle",children:[(0,s.jsx)("input",{type:"checkbox",onChange:function(e){return r(!t)},checked:t}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsxs)("ul",{id:"menu",children:[(0,s.jsx)(o.Z,{href:"/",children:(0,s.jsx)("li",{onClick:u,children:"Home"})}),(0,s.jsx)(o.Z,{href:"/resources",children:(0,s.jsx)("li",{onClick:u,children:"Resources"})}),(0,s.jsx)(o.Z,{href:"/conferences",children:(0,s.jsx)("li",{onClick:u,children:"Conferences"})}),(0,s.jsx)(o.Z,{href:"/secretariat",children:(0,s.jsx)("li",{onClick:u,children:"Secretariat"})}),(0,s.jsx)(o.Z,{href:"/about",children:(0,s.jsx)("li",{onClick:u,children:"About"})})]})]}),(0,s.jsxs)("div",{className:"nav-title-m",id:"nav-m",children:[(0,s.jsx)(o.Z,{href:"/",children:(0,s.jsx)("div",{className:"link-txt",id:"special",children:"StuyMUN"})}),(0,s.jsx)(o.Z,{href:"/",children:l})]})]})})]})}function l(){var e=(new Date).getFullYear(),n=(0,s.jsx)("img",{className:"fbimg",src:(0,a.Z)("/img/facebook.png"),alt:"Facebook",width:"30px",height:"30px"}),t=(0,s.jsx)("img",{className:"stuyactimg",src:(0,a.Z)("/img/stuyactivities.png"),alt:"Stuyactivities",width:"36px",height:"36px"});return(0,s.jsxs)("footer",{className:"text-center",children:["\xa9 ",e,"\xa0",(0,s.jsx)("a",{href:"https://github.com/pserb",rel:"noreferrer",target:"_blank",children:"Paul Serbanescu"})," & ",(0,s.jsx)("a",{href:"https://github.com/selym3",rel:"noreferrer",target:"_blank",children:"Myles Pasetsky"}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"https://www.facebook.com/groups/229090407136486",rel:"noreferrer",target:"_blank",children:n}),"\xa0",(0,s.jsx)("a",{href:"https://stuyactivities.org/mun",rel:"noreferrer",target:"_blank",children:t})]})}function f(e){var n=e.children;return(0,s.jsxs)("div",{className:"proot",style:{backgroundImage:"url(".concat((0,a.Z)("/img/UN-blur-01.png"),")")},children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("link",{rel:"shortcut icon",href:(0,a.Z)("/img/munlogo-transparent.png")}),(0,s.jsx)("title",{children:"StuyMUN"})]}),(0,s.jsx)(u,{}),n,(0,s.jsx)(l,{})]})}function d(e){return i(e),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"h2-title post-title",children:"Schedule"}),(0,s.jsx)("b",{children:"8:45 AM - 9:15 AM"})," Check-in",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"9:15 AM - 9:50 AM"})," Opening Ceremonies",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"9:50 AM - 11:15 PM"})," Workshops",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"11:20 AM - 1:10 PM"})," Committee Session I",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"1:15 PM - 2:15 PM"})," Lunch Break Outdoors",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"2:15 PM - 5:15 PM"})," Committee Session II",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"5:20 PM - 5:45 PM"})," Closing Ceremonies"]})}t(1664);var h=t(4942);function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,c=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return c}}(e,n)||function(e,n){if(e){if("string"===typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=t(894);function j(e){var n=e.content;return(0,s.jsx)("div",{className:"__markdown",dangerouslySetInnerHTML:{__html:n}})}function x(e){var n=e.date,t=n.year,r=n.month,i=n.day,c=null,o=(0,p.Iz)(),a=864e5,u=(0,p.FU)(n,o);return c=0==u?"":u>0?" | ".concat(Math.floor(u/a),"d until"):" | ".concat(Math.floor(Math.abs(u)/a),"d ago"),(0,s.jsxs)("div",{className:"date",children:[t,"-",r,"-",i,c]})}function b(e){var n=e.title,t=e.content,r=e.date,i=e.url,c=null;if(i){var a=n?(0,s.jsx)(s.Fragment,{children:n}):(0,s.jsx)(s.Fragment,{children:"See More"});c=(i.startsWith("http")?function(e){return(0,s.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:e})}:function(e){return(0,s.jsx)(o.Z,{href:i,children:e})})(a)}else c=(0,s.jsx)(s.Fragment,{children:n});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{className:"h2-title post-title",children:c}),r&&(0,s.jsx)(x,{date:r}),t&&(0,s.jsx)(j,{content:t})]})}t(2087);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e){var n=e.children,t=e.posts;return(0,s.jsxs)("section",{className:"news",children:[(0,s.jsx)("h2",{className:"text-center",children:"News"}),t.map((function(e,n){var t=m(e,2),r=t[0],i=t[1],c={title:i.title,date:i.date,url:"/news/post/".concat(r),content:i.content};return(0,s.jsx)("div",{children:(0,s.jsx)(b,y({},c))},n)})),n]})}t(7757);function k(e){return void 0!==e&&e.startsWith("http")}function O(e){var n=e.name,t=e.slug,r=e.committee,i=r.content.substring(0,1024);1024==i.length&&(i+="...");var c="/conference/".concat(n,"/").concat(t);return(0,s.jsxs)("div",{className:"committee-preview",children:[(0,s.jsx)("h3",{children:(0,s.jsx)(o.Z,{href:c,children:r.title})}),(0,s.jsx)(j,{content:i})]})}function N(e){var n=e.name,t=e.conference,r=e.hideCommittees;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{title:n,content:t.details.content,url:"/conference/".concat(n),date:t.details.date}),!r&&function(e){var n=e.committees.map((function(e,n){var t=m(e,2);return[t[0],t[1]]}));return n.sort((function(e,n){return e[1].ordering-n[1].ordering})),n}(t).map((function(e,t){var r=m(e,2),i=r[0],c=r[1];return(0,s.jsx)("div",{children:(0,s.jsx)(O,{name:n,slug:i,committee:c})},t)}))]})}function M(e){var n=e.name,t=e.conference;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{title:n,content:t.content,date:t.date,url:t["website-link"]||"/conference/".concat(n)}),function(e){var n=e["signup-link"];return k(n)?(0,s.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:"Signup to the Conference!"}):(0,s.jsx)("p",{children:"Signups opening soon!"})}(t)]})}var S=function(e,n){return"other"==n.type?(0,s.jsx)(M,{name:e,conference:n}):null},C=function(e,n){return"stuy"==n.type?(0,s.jsx)(N,{name:e,conference:n,hideCommittees:!0}):null};function P(e){var n=e.children,t=e.conferences,r=e.title,i=e.feed;return(0,s.jsxs)("section",{className:"upcoming",children:[(0,s.jsx)("h2",{className:"text-center conference-h2",id:r?"conference-h2":"upcoming-h2",children:r||"Upcoming"}),t.map((function(e,n){var t=m(e,2),r=t[0],c=t[1];return(0,s.jsx)("div",{children:i(r,c)},n)})),n]})}function _(e){var n=e.children;return(0,s.jsx)("div",{className:"container",id:"special",children:n})}function E(e){var n=e.content;return(0,s.jsx)("div",{className:"__markdown",dangerouslySetInnerHTML:{__html:n}})}function I(e){var n=e.committee;var t=n.title,r=n.chair,i=n.codirector,c=n.content,a=n.bglink;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"h2-title",children:t}),(0,s.jsxs)("i",{className:"chairs",children:["Chair: ",r]}),(0,s.jsx)("br",{}),(0,s.jsxs)("i",{className:"chairs",children:["Co-Director: ",i]}),(0,s.jsx)("br",{}),c&&(0,s.jsx)(E,{content:c}),function(e){return k(e)?(0,s.jsx)(o.Z,{href:e,target:"_blank",children:"Background Guide"}):(0,s.jsx)("p",{children:"Background Guide coming soon!"})}(a),(0,s.jsx)("br",{}),(0,s.jsx)("hr",{className:"line"}),(0,s.jsx)("br",{})]})}function Z(e){var n=((0,p.vo)(e).getTime()-Date.now())/1e3,t=n/60,r=t/60,i=r/24;return{seconds:Math.floor(n)%60,minutes:Math.floor(t)%60,hours:Math.floor(r)%24,days:Math.floor(i)}}function A(e,n){return 1!==n&&(e+="s"),"".concat(n," ").concat(e," ")}function L(e){var n=function(e){var n=(0,c.useState)(Z(e)),t=n[0],r=n[1];return(0,c.useEffect)((function(){var n=setInterval((function(){r(Z(e))}),1e3);return function(){return clearInterval(n)}}),[t,e]),t}(e.date),t=n.days,r=n.hours,i=n.minutes,o=n.seconds;return(0,s.jsxs)("p",{className:"timer",children:[A("day",t),A("hour",r),A("minute",i),A("second",o)]})}},2642:function(e,n,t){"use strict";function r(e){return e}t.d(n,{Z:function(){return r}})},894:function(e,n,t){"use strict";function r(e){return new Date(e.year,e.month-1,e.day)}function i(){return{year:(e=new Date).getFullYear(),month:e.getMonth()+1,day:e.getDate()};var e}function c(e,n){return r(e).getTime()-r(n).getTime()}function o(e){return c(e,i())>0}t.d(n,{vo:function(){return r},Iz:function(){return i},FU:function(){return c},S3:function(){return o}})},2087:function(e,n,t){var r=t(3038),i=t(7757),c=t(4575),o=t(3913);function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){a=!0,c=e},f:function(){try{o||null==t.return||t.return()}finally{if(a)throw c}}}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u=function(e){"use strict";function n(e,t){c(this,n),this.object=e,this.callback=t}return o(n,[{key:e,value:i.mark((function(){var e,n,t;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e=0,r.t0=i.keys(this.object);case 2:if((r.t1=r.t0()).done){r.next=10;break}if(n=r.t1.value,!this.object.hasOwnProperty(n)){r.next=8;break}return t=this.object[n],r.next=8,this.callback([n,t],e++);case 8:r.next=2;break;case 10:case"end":return r.stop()}}),t,this)}))},{key:"collect",value:function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=a(this);try{for(t.s();!(e=t.n()).done;){var r=e.value;n.push(r)}}catch(i){t.e(i)}finally{t.f()}return n}}]),n}(Symbol.iterator),l={map:function(e){return new u(this,e).collect()},entries:function(){return new u(this,(function(e,n){return e}))},keys:function(){return new u(this,(function(e,n){var t=r(e,2),i=t[0];t[1];return i}))},values:function(){return new u(this,(function(e,n){var t=r(e,2);t[0];return t[1]}))}};for(var f in l){var d=l[f];Object.defineProperty(Object.prototype,f,{value:d,writable:!0,enumerable:!1})}},9144:function(e,n,t){"use strict";t.r(n);var r=t(4942),i=t(7378),c=(t(647),t(5893));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return(0,c.jsx)(i.Ar,{children:(0,c.jsx)(n,a({},t))})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9144)}])},647:function(){},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},4942:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);