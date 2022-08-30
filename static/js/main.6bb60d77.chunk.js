(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{236:function(e,t,n){},248:function(e,t){},251:function(e,t){},262:function(e,t){},264:function(e,t){},275:function(e,t){},277:function(e,t){},305:function(e,t){},307:function(e,t){},308:function(e,t){},313:function(e,t){},315:function(e,t){},334:function(e,t){},346:function(e,t){},349:function(e,t){},367:function(e,t,n){},368:function(e,t,n){},387:function(e,t,n){},388:function(e,t,n){},389:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(160),i=n.n(s),r=(n(236),n(161)),o=n(162),l=n(163),u=n(170),j=n(58),d=n(10),b=n(57),O=n(88),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.useState)({}),a=Object(d.a)(n,2),s=a[0],i=a[1],r=function(t){t.preventDefault(),e(s),t.target.reset()},o=function(e){e.persist();var t=e.target,n=t.name,c=t.value;parseInt(c)&&(c=parseInt(c)),i((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n,c))}))};return Object(c.useEffect)((function(){i(t)}),[t]),{handleChange:o,handleSubmit:r,values:s}},p=n(30),h=n(89),f=n(164),x=n(17),g=n.n(x),v=n(165),N=n.n(v),C=n(166),S=n.n(C),y=n(167),I=n.n(y),P=n(1),k=a.a.createContext();function D(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({username:g.a.load("username")||"",actions:g.a.load("actions")||[]}),r=Object(d.a)(i,2),o=r[0],l=r[1];Object(c.useEffect)((function(){g.a.load("token")?(s(!0),l(o)):(s(!1),l({}))}),[]);var u=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t,n){var c;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("".concat("https://hiservice.herokuapp.com","/users/login")).set("authorization","Basic ".concat(I.a.encode("".concat(t,":").concat(n))));case 2:c=e.sent,console.log(c.body),j(c.body);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(e){if(e.token){var t=S.a.decode(e.token);console.log("username >>>> ",t),s(!0),l(e),g.a.save("token",e.token),g.a.save("username",e.username),g.a.save("actions",e.actions),console.log({loggedIn:a})}else s(!1),l({})},b={loggedIn:a,user:o,can:function(e){var t;return null===o||void 0===o||null===(t=o.actions)||void 0===t?void 0:t.includes(e)},login:u,logout:function(){s(!1),l({}),g.a.remove("token"),g.a.remove("actions"),g.a.remove("username")}};return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(k.Provider,{value:b,children:e.children})})}function w(e){var t=Object(c.useContext)(k);return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(p.a,{condition:t.loggedIn&&t.can(e.actions),children:e.children})})}var F=n(396),J=Object(c.createContext)(),E=function(e){var t=e.children,n=Object(c.useState)(1),a=Object(d.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(3),o=Object(d.a)(r,2),l=o[0],u=o[1],j=Object(c.useState)(!0),b=Object(d.a)(j,2),O={currentPage:s,setCurrentPage:i,postsPerPage:l,showComplete:b[0],setShowComplete:b[1],setPostsPerPage:u};return Object(P.jsx)(J.Provider,{value:O,children:t})},T=function(e){for(var t=e.postsPerPage,n=e.totalPosts,c=e.paginate,a=[],s=1;s<=Math.ceil(n/t);s++)a.push(s);return Object(P.jsx)("nav",{"aria-label":"Page navigation example",children:Object(P.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(P.jsx)("li",{className:"page-item",children:Object(P.jsx)("button",{onClick:function(){return c(e)},className:"page-link",children:e})},e)}))})})},A=(n(367),"localStorage"),L=function(){var e=Object(c.useContext)(J),t=e.currentPage,n=e.setCurrentPage,a=e.postsPerPage,s=e.setPostsPerPage,i=e.showComplete,r=e.setShowComplete,o=Object(c.useContext)(k),l=Object(c.useState)([]),u=Object(d.a)(l,2),b=u[0],O=u[1],h=Object(c.useState)({difficulty:3}),f=Object(d.a)(h,1)[0],x=Object(c.useState)([]),g=Object(d.a)(x,2),v=g[0],N=g[1],C=Object(c.useState)([]),S=Object(d.a)(C,2),y=S[0],I=S[1],D=Object(c.useState)([]),E=Object(d.a)(D,2),L=E[0],B=E[1],q=m((function(e){e.id=Object(F.a)(),e.complete=!1,N([].concat(Object(j.a)(v),[e])),O([].concat(Object(j.a)(b),[e])),B([].concat(Object(j.a)(L),[e]))}),f),H=q.handleChange,M=q.handleSubmit;function z(e){var t=b.map((function(t){return t.id===e&&(t.complete=!t.complete),!0===t.complete&&L.filter((function(t){return t.id!==e})),t}));O(t),N(t),B(t)}Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(A));e&&e.length>0&&O(e);var t=JSON.parse(localStorage.getItem("status"));t&&t.length>0&&r(t);var n=JSON.parse(localStorage.getItem("number"));n&&n.length>0&&s(n);var c=JSON.parse(localStorage.getItem("incomplete"));c&&c.length>0&&B(c)}),[]),Object(c.useEffect)((function(){localStorage.setItem(A,JSON.stringify(b)),localStorage.setItem("status",JSON.stringify(i)),localStorage.setItem("number",JSON.stringify(a)),localStorage.setItem("incomplete",JSON.stringify(L))}),[b,i,a,L]);var G=t*a,R=G-a,U=b.slice(R,G),V=L.slice(R,G);return Object(c.useEffect)((function(){var e=b.filter((function(e){return!e.complete})).length;I(e),document.title="To Do List: ".concat(y)}),[b,y]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(p.a,{condition:o.loggedIn,children:[Object(P.jsx)("button",{onClick:o.logout,children:"Log Out"}),Object(P.jsx)(w,{actions:"read",children:Object(P.jsx)("header",{"data-testid":"header",children:Object(P.jsxs)("h1",{children:["To Do List: ",y," items pending"]})})}),Object(P.jsxs)(w,{actions:"delete",children:[Object(P.jsxs)("form",{onSubmit:M,children:[Object(P.jsx)("h2",{className:"text-head",children:"Add To Do Item"}),Object(P.jsxs)("label",{children:[Object(P.jsx)("span",{children:"To Do Item"}),Object(P.jsx)("input",{"data-testid":"input",className:"form-input",onChange:H,name:"text",type:"text",placeholder:"Item Details"})]}),Object(P.jsxs)("label",{children:[Object(P.jsx)("span",{children:"Assigned To"}),Object(P.jsx)("input",{onChange:H,className:"form-input",name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(P.jsxs)("label",{children:[Object(P.jsx)("span",{children:"Difficulty"}),Object(P.jsx)("input",{onChange:H,className:"form-input",defaultValue:f.difficulty,type:"range",min:1,max:5,name:"difficulty"})]}),Object(P.jsx)("input",{type:"number",className:"per-page",name:"postsPerPage",placeholder:"Number of posts per page",onChange:function(e){s(parseInt(e.target.value))}}),Object(P.jsx)("label",{children:Object(P.jsx)("button",{"data-testid":"button",type:"submit",children:"Add Item"})})]}),Object(P.jsx)("button",{className:"show",onClick:function(){r(!i)},children:i?"Hide Completed Items":"Show Completed Items"}),i?U.map((function(e){return Object(P.jsx)("div",{className:"list-continuer",children:Object(P.jsxs)("div",{className:"items",children:[Object(P.jsx)("div",{className:"btn-list",children:Object(P.jsx)("button",{onClick:function(){return function(e){var t=b.filter((function(t){return t.id!==e}));O(t)}(e.id)},children:"x"})}),Object(P.jsx)("p",{className:"p-text",children:e.text}),Object(P.jsxs)("div",{className:"p-holder",children:[Object(P.jsx)("span",{className:"p-assigned",children:Object(P.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(P.jsx)("span",{className:"p-difficulty",children:Object(P.jsxs)("small",{children:["Difficulty: ",e.difficulty]})})]}),Object(P.jsx)("div",{className:"checkbox",children:e.complete?Object(P.jsxs)("div",{children:[Object(P.jsx)("input",{type:"checkbox",name:"completed",onClick:function(){return z(e.id)},defaultChecked:!0}),Object(P.jsx)("label",{htmlFor:"completed",children:"Completed"})]}):Object(P.jsxs)("div",{children:[Object(P.jsx)("input",{type:"checkbox",name:"Incomplete-item",onClick:function(){return z(e.id)}}),Object(P.jsx)("label",{htmlFor:"Incomplete-item",children:"Complete"})]})}),Object(P.jsx)("hr",{})]},e.id)})})):V.map((function(e){return Object(P.jsx)("div",{children:e.complete?null:Object(P.jsx)("div",{className:"list-continuer",children:Object(P.jsxs)("div",{className:"items",children:[Object(P.jsx)("div",{className:"btn-list",children:Object(P.jsx)("button",{onClick:function(){return function(e){var t=L.filter((function(t){return t.id!==e}));B(t)}(e.id)},children:"x"})}),Object(P.jsx)("p",{className:"p-text",children:e.text}),Object(P.jsxs)("div",{className:"p-holder",children:[Object(P.jsx)("span",{className:"p-assigned",children:Object(P.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(P.jsx)("span",{className:"p-difficulty",children:Object(P.jsxs)("small",{children:["Difficulty: ",e.difficulty]})})]}),Object(P.jsx)("div",{className:"checkbox",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("input",{type:"checkbox",name:"Incomplete",onClick:function(){return function(e){var t=L.map((function(t){return t.id===e&&(t.complete=!t.complete),!0===t.complete&&L.filter((function(t){return t.id!==e})),t}));O(t)}(e.id)}}),Object(P.jsx)("label",{htmlFor:"Incomplete",children:"Complete"})]})}),Object(P.jsx)("hr",{})]},e.id)})})})),Object(P.jsx)("div",{className:"page",children:Object(P.jsx)(T,{postsPerPage:a,totalPosts:b.length,paginate:function(e){return n(e)}})})]})]})})},B=n(395),q=n(40),H=(n(368),function(){return Object(P.jsx)(B.a,{children:Object(P.jsxs)(B.a.Group,{align:q.a.LEFT,children:[Object(P.jsx)(B.a.Heading,{children:"ToDo App"}),Object(P.jsx)(B.a.Divider,{})]})})});n(387);function M(e){var t=Object(c.useContext)(k),n=Object(c.useState)(""),a=Object(d.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(),o=Object(d.a)(r,2),l=o[0],u=o[1];return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(p.a,{condition:!t.loggedIn,children:Object(P.jsx)("div",{className:"card-form","data-testid":"header",children:Object(P.jsxs)("form",{className:"form-login",children:[Object(P.jsxs)("div",{className:"input",children:[Object(P.jsx)("label",{className:"username",children:"Username "}),Object(P.jsx)("input",{"data-testid":"input",type:"text",placeholder:"Enter your username",name:"uname",required:!0,onChange:function(e){e.preventDefault(),i(e.target.value)}})]}),Object(P.jsxs)("div",{className:"input",children:[Object(P.jsx)("label",{className:"password",children:"Password "}),Object(P.jsx)("input",{type:"password",placeholder:"Enter your password",name:"pass",required:!0,onChange:function(e){e.preventDefault(),u(e.target.value)}})]}),Object(P.jsx)("div",{className:"button",children:Object(P.jsx)("button",{"data-testid":"button",type:"submit",onClick:function(e){e.preventDefault(),t.login(s,l)},children:"Log In"})})]})})})})}n(388);var z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(P.jsx)("div",{className:"todo-app",children:Object(P.jsxs)(D,{children:[Object(P.jsx)(H,{}),Object(P.jsx)(M,{}),Object(P.jsx)(E,{children:Object(P.jsx)(L,{})})]})})}}]),n}(c.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(z,{})})),G()}},[[389,1,2]]]);
//# sourceMappingURL=main.6bb60d77.chunk.js.map