(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[6],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(59),r=n(60),c=n(62),i=n(61),o=n(0),u=n.n(o),s=n(57),l=n(64),f=function(e){var t=e.items;return u.a.createElement("ul",null,t.map((function(e){var t=e.id,n=e.author,a=e.content;return u.a.createElement("li",{key:t},u.a.createElement("h3",null,n),u.a.createElement("p",null,a))})))},m=n(58),h=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={items:[],error:null},e.fetchReviews=function(){var t=Object(l.a)(e.props);s.c(t).then((function(t){var n=t.data;return e.setState({items:n.results})})).catch((function(t){e.setState({error:t})}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetchReviews()}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.error;return u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(m.a,{text:n}),t.length>0?u.a.createElement(f,{items:t}):u.a.createElement("h3",null,"We don't have any reviews for this movie"))}}]),n}(o.Component)},57:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var a=n(63),r=n.n(a),c="155381e5ea55326648abc3faf6598daf",i=function(){return r.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))},o=function(e){return r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e))},u=function(e){return r.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"))},s=function(e){return r.a.get(" https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c))},l=function(e){return r.a.get(" https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}},58:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("h1",null,"Oops some ",e)}},64:function(e,t,n){"use strict";t.a=function(e){return e.match.params.id}}}]);
//# sourceMappingURL=reviews-page.55e0fe9a.chunk.js.map