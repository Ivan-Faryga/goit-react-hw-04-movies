(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{91:function(t,e,c){"use strict";c.r(e);var i=c(12),s=c(0),n=c(29),a=c(92),r=c.n(a),o=c(2);e.default=function(t){var e=t.movieId,c=Object(s.useState)([]),a=Object(i.a)(c,2),p=a[0],h=a[1];return Object(s.useEffect)((function(){Object(n.c)(e).then((function(t){return h(t.cast)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("ul",{className:r.a.list,children:p.map((function(t){return Object(o.jsxs)("li",{children:[!t.profile_path&&Object(o.jsx)("img",{src:"http://p17-spb.ru.images.1c-bitrix-cdn.ru/upload/no-photo.jpg?147384517418059",alt:t.name,width:"100"}),t.profile_path&&Object(o.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.profile_path),alt:t.name,width:"100"}),Object(o.jsx)("p",{children:t.name})]},t.id)}))})," "]})}},92:function(t,e,c){t.exports={list:"MovieCast_list__OlEOJ"}}}]);
//# sourceMappingURL=cast.d8f35d35.chunk.js.map