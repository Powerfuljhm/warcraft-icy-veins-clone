(this.webpackJsonpwc1=this.webpackJsonpwc1||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),r=s(3),i=s.n(r),l=(s(13),s(4)),h=s(5),o=s(7),j=s(6),d=function(e){var t=e.name,s=e.email,n=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-5",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{alt:"classes",src:"https://robohash.org/".concat(n,"?200x200")})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:s})]})]})},b=function(e){var t=e.classes;return Object(c.jsx)("div",{children:t.map((function(e,s){return Object(c.jsx)(d,{id:t[s].id,name:t[s].name,email:t[s].email},s)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search classes",onChange:t})})},f=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},p=(s(14),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={playableClasses:[],searchfield:""},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({playableClasses:t})}))}},{key:"render",value:function(){var e=this.state,t=e.playableClasses,s=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"Playable Classes"}),Object(c.jsx)(u,{searchChange:this.onSearchChange}),Object(c.jsx)(f,{children:Object(c.jsx)(b,{classes:n})})]}):Object(c.jsx)("h1",{children:"Loading..."})}}]),s}(n.Component));s(15);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.668a8a77.chunk.js.map