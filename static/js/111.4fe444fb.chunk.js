"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[111],{111:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r,o,i=t(168),c=t(439),a=t(791),s=t(390),u=t(689),h=t(87),l=t(184),d=function(n){var e=n.movieDet;return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,l.jsx)("h2",{children:e.title||e.name}),(0,l.jsx)("p",{children:e.overview}),(0,l.jsxs)("p",{children:["Vote average: ",e.vote_average]}),(0,l.jsxs)("p",{children:["Release date: ",e.release_date]})]})},f=t(924),p=function(){var n,e,t=(0,u.UO)().movieId,r=(0,a.useState)({}),o=(0,c.Z)(r,2),i=o[0],h=o[1],f=(0,u.TH)();(0,a.useEffect)((function(){(0,s.xV)(t).then((function(n){return h(n)}))}),[t]);var p=null!==(n=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,l.jsxs)("div",{children:[(0,l.jsx)(g,{to:p,children:"\u27f5Go back"}),(0,l.jsx)(d,{movieDet:i}),(0,l.jsx)("h2",{children:"Additional Information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(v,{to:"cast",state:f.state,children:"Cast..."})}),(0,l.jsx)("li",{children:(0,l.jsx)(v,{to:"reviews",state:f.state,children:"Reviews..."})})]}),(0,l.jsx)(u.j3,{})]})},v=(0,f.ZP)(h.OL)(r||(r=(0,i.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: none;\n  color: #e64293a1;\n  &.active {\n    color: black;\n  }\n  &:hover {\n    color: #62687c;\n  }\n"]))),g=(0,f.ZP)(h.rU)(o||(o=(0,i.Z)(["\n  display: block;\n  margin: 10px 5px;\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: none;\n  color: #e64293a1;\n  &.active {\n    color: #62687c;\n  }\n"])))},390:function(n,e,t){t.d(e,{L6:function(){return o},fm:function(){return c},iP:function(){return s},t1:function(){return a},xV:function(){return i}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjg1MDU2YTcwYjZhYzVhODZlM2FkNzY2NDdlOTQ0ZiIsInN1YiI6IjY1YThmZGNkMmM2YjdiMDEzNGExZmI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPWgBG5Fg9u7VMxLBAJydcFE5Hz_3vgqy4FiOrzgEz8"}},o=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",r).then((function(n){return n.json()})).catch((function(n){return console.error("error:"+n)}))},i=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),r).then((function(n){return n.json()})).catch((function(n){return console.error("error:"+n)}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},s=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))}}}]);
//# sourceMappingURL=111.4fe444fb.chunk.js.map