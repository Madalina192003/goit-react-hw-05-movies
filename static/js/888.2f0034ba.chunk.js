"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(861),a=r(439),c=r(757),i=r.n(c),o=r(791),s=r(74),u=r(390),l=r(184),p=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)(null),r=(0,a.Z)(t,2),c=r[0],p=r[1],h=(0,o.useState)(null),v=(0,a.Z)(h,2),d=v[0],f=v[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("",e);case 3:r=t.sent,p(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f("A ap\u0103rut o eroare la \xeenc\u0103rcarea detaliilor filmului");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),d?(0,l.jsx)("p",{children:d}):c?(0,l.jsxs)("div",{className:"movieDetails",children:[(0,l.jsx)("h1",{children:c.title}),c.poster_path?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title}):(0,l.jsx)("p",{children:"Poster indisponibil"}),(0,l.jsx)("p",{children:c.overview}),(0,l.jsx)(s.rU,{to:"cast",children:"Distribu\u021bie"}),(0,l.jsx)(s.rU,{to:"reviews",children:"Recenzii"}),(0,l.jsx)(s.j3,{})]}):(0,l.jsx)("p",{children:"Loading..."})}},390:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),i="48b9c272a5afb0debc8843cdd7638bc2",o="https://api.themoviedb.org/3",s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n,a,s,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"",r=u.length>1&&void 0!==u[1]?u[1]:null,e.prev=2,n=r?"".concat(o,"/movie/").concat(r,"?api_key=").concat(i,"&language=en-US"):t?"".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"):"".concat(o,"/trending/movie/day?api_key=").concat(i),e.next=6,fetch(n);case 6:return a=e.sent,e.next=9,a.json();case 9:if(s=e.sent,a.ok){e.next=12;break}throw new Error(s.status_message||"A ap\u0103rut o eroare");case 12:return e.abrupt("return",r?s:s.results);case 15:throw e.prev=15,e.t0=e.catch(2),console.error("Error fetching movies:",e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();t.Z=s}}]);
//# sourceMappingURL=888.2f0034ba.chunk.js.map