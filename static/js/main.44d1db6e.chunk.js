(this.webpackJsonpchuck=this.webpackJsonpchuck||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),i=c(15),r=c.n(i),o=(c(27),c(28),c(29),c(16)),j=c(17),l=c(21),h=c(19),d=c(9),u=c(2),b=c(20);var O=function(){var e=this,t=Object(u.f)().category,c=Object(n.useState)({}),a=Object(b.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/random?category=".concat(t)).then((function(e){return e.json()})).then((function(e){r(e)}),(function(t){e.setState({})}))}),[t]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("p",{className:"title",children:i.value}),Object(s.jsx)("p",{className:"subtitle",children:"Jeff Atwood"})]}),Object(s.jsxs)("footer",{className:"card-footer",children:[Object(s.jsx)("p",{className:"card-footer-item",children:Object(s.jsxs)("span",{children:["View on ",Object(s.jsx)("a",{href:"https://twitter.com/codinghorror/status/506010907021828096",children:"Twitter"})]})}),Object(s.jsx)("p",{className:"card-footer-item",children:Object(s.jsxs)("span",{children:["Share on ",Object(s.jsx)("a",{href:"https://facebook.com",children:"Facebook"})]})})]})]})})},f=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={categories:[]},s}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(t){e.setState({categories:t})}),(function(t){e.setState({})}))}},{key:"render",value:function(){var e=this.state.categories;return Object(s.jsx)(d.a,{children:Object(s.jsxs)("div",{className:"columns",children:[Object(s.jsx)("div",{className:"column is-2",children:Object(s.jsxs)("aside",{className:"menu",children:[Object(s.jsx)("p",{className:"menu-label",children:"Categories"}),Object(s.jsxs)("ul",{className:"menu-list",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Dashboard"})}),e.map((function(e){return Object(s.jsx)(d.b,{to:"/movies/".concat(e),children:e},e)}))]})]})}),Object(s.jsx)("div",{className:"column is-10",children:Object(s.jsx)(u.c,{children:Object(s.jsx)(u.a,{path:"/movies/:category",children:Object(s.jsx)(O,{})})})})]})})}}]),c}(a.a.Component);var m=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("section",{className:"hero is-fullheight",children:Object(s.jsx)("div",{className:"hero-body",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(f,{})})})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(35);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.44d1db6e.chunk.js.map