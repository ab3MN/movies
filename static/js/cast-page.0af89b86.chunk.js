(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[1],{54:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var a=n(59),r=n(60),c=n(62),i=n(61),o=n(0),u=n.n(o),s=n(57),l=n(64),p=function(t){var e=t.items;return u.a.createElement("ul",null,e.map((function(t){var e=t.id,n=t.profile_path,a=t.name,r=t.character;return u.a.createElement("li",{key:e},n&&u.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+n,alt:a}),u.a.createElement("h4",null,a),u.a.createElement("p",null,r))})))},f=n(58),m=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={cast:null,error:null},t.fetchCast=function(){var e=Object(l.a)(t.props);s.a(e).then((function(e){var n=e.data;return t.setState({cast:n.cast})})).catch((function(e){t.setState({error:e})}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetchCast()}},{key:"render",value:function(){var t=this.state,e=t.cast,n=t.error;return u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(f.a,{text:n.message}),e&&u.a.createElement(p,{items:e}))}}]),n}(o.Component)},57:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l}));var a=n(63),r=n.n(a),c="155381e5ea55326648abc3faf6598daf",i=function(){return r.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))},o=function(t){return r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t))},u=function(t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"))},s=function(t){return r.a.get(" https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c))},l=function(t){return r.a.get(" https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}},58:function(t,e,n){"use strict";var a=n(0),r=n.n(a);e.a=function(t){return r.a.createElement("h1",null,"Oops some ",t)}},64:function(t,e,n){"use strict";e.a=function(t){return t.match.params.id}}}]);
//# sourceMappingURL=cast-page.0af89b86.chunk.js.map