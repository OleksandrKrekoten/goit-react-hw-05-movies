"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{842:function(t,n,e){e.r(n);var r=e(982),c=e(885),u=e(791),a=e(87),i=e(390),s=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,c.Z)(t,2),e=n[0],o=n[1];return(0,u.useEffect)((function(){(0,i.Df)().then((function(t){o((0,r.Z)(t.data.results))}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending today"}),e.length>0&&(0,s.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title,r=t.release_date;return(0,s.jsx)("li",{children:(0,s.jsx)(a.OL,{to:"/movies/".concat(n),children:(0,s.jsxs)("h2",{children:[e," (",r.slice(0,4),")"]})})},n)}))})]})}},390:function(t,n,e){e.d(n,{$A:function(){return h},Df:function(){return s},IQ:function(){return p},Pg:function(){return f},Pt:function(){return o}});var r=e(861),c=e(757),u=e.n(c),a=e(44),i="ba12bbb2efd4020faab2c5dd14dc19c0";a.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.ZP.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=842.60d0363d.chunk.js.map