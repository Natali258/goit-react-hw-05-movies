"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(n,e,t){t.r(e);var r=t(439),c=t(791),o=t(390),i=t(689),u=t(184);e.default=function(){var n=(0,i.UO)().movieId,e=(0,c.useState)([]),t=(0,r.Z)(e,2),a=t[0],h=t[1];return(0,c.useEffect)((function(){(0,o.fm)(n).then((function(n){return h(n.cast)}))}),[n]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:a.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:n.name}),(0,u.jsx)("h3",{children:n.name}),(0,u.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}},390:function(n,e,t){t.d(e,{L6:function(){return c},fm:function(){return i},iP:function(){return a},t1:function(){return u},xV:function(){return o}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjg1MDU2YTcwYjZhYzVhODZlM2FkNzY2NDdlOTQ0ZiIsInN1YiI6IjY1YThmZGNkMmM2YjdiMDEzNGExZmI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPWgBG5Fg9u7VMxLBAJydcFE5Hz_3vgqy4FiOrzgEz8"}},c=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",r).then((function(n){return n.json()})).catch((function(n){return console.error("error:"+n)}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),r).then((function(n){return n.json()})).catch((function(n){return console.error("error:"+n)}))},i=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},a=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),r).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))}}}]);
//# sourceMappingURL=247.50df8488.chunk.js.map