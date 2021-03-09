(this["webpackJsonpedu-app-redux"]=this["webpackJsonpedu-app-redux"]||[]).push([[0],{58:function(e,t,a){e.exports=a(74)},63:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(63),a(76)),u=a(27),i=a(6),s=a(10),d=a(79),m=a(81),E=a(80),b=a(16),p=a(57),h=a(45),f=a(25),v=a(30),g=Object(v.b)({name:"user",initialState:{name:"",educations:[]},reducers:{updateName:function(e,t){var a=t.payload;return Object(f.a)(Object(f.a)({},e),{},{name:a})},updateEducation:function(e,t){var a=e.educations,n=Object(h.a)(e,["educations"]),r=t.payload;return Object(f.a)(Object(f.a)({},n),{},{educations:[r].concat(Object(p.a)(a))})}}}),O=g.actions,j=O.updateName,y=O.updateEducation,k=function(e){return e.user.name},x=function(e){return e.user.educations},S=g.reducer,w=a(77),C=a(78),N=a(52),I=a(38),F=a.n(I),L=a(46),T=a(55),q=function(){var e=Object(L.a)(F.a.mark((function e(t,a){var n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=18;break}return e.next=3,fetch("http://universities.hipolabs.com/search?name=".concat(t,"&country=United States"));case 3:if(!(n=e.sent).ok){e.next=14;break}return e.next=7,n.json();case 7:return r=e.sent,e.next=10,r.map((function(e){var t=e.name;return{label:t,value:t}}));case 10:r=e.sent,a(r),e.next=16;break;case 14:alert("HTTP-Error: "+n.status),a([]);case 16:e.next=19;break;case 18:a([]);case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),D=function(e){var t=e.onChange;e.value;return r.a.createElement(T.a,{cacheOptions:!0,loadOptions:q,defaultOptions:!0,onInputChange:function(e){return e.replace(/\W/g,"")},onChange:function(e){var a=e.value;return t(a)}})},H=w.a.Header,Y=w.a.Title,B=w.a.Body,W=w.a.Footer,A=C.a.Row,G=C.a.Group,P=C.a.Label,V=C.a.Control,R=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),u=Object(s.a)(o,2),i=u[0],d=u[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),h=p[0],f=p[1],v=Object(n.useState)(""),g=Object(s.a)(v,2),O=g[0],j=g[1],k=Object(n.useState)(null),x=Object(s.a)(k,2),S=x[0],I=x[1],F=Object(n.useState)(null),L=Object(s.a)(F,2),T=L[0],q=L[1],R=Object(n.useState)(null),_=Object(s.a)(R,2),J=_[0],U=_[1],z=Object(n.useState)(""),$=Object(s.a)(z,2),K=$[0],M=$[1],Q=Object(b.b)(),X=function(t){if(t.preventDefault(),!1===t.currentTarget.checkValidity())return t.preventDefault(),t.stopPropagation(),!1;Q(y({school:i,degree:h,fieldOfStudy:O,startYear:S,endYear:T,grade:J,description:K})),l(!0),e.onHide()};return Object(n.useEffect)((function(){e.show||(l(!1),d(null),f(""),j(""),I(null),q(null),U(null),M(""))}),[e.show]),r.a.createElement(w.a,Object.assign({},e,{size:"lg","aria-labelledby":"education-form",centered:!0,backdrop:"static",keyboard:!1}),r.a.createElement(H,{closeButton:!0},r.a.createElement(Y,{id:"education-form"},"Add Education")),r.a.createElement(B,null,r.a.createElement(C.a,{noValidate:!0,validated:c,onSubmit:X},r.a.createElement(A,null,r.a.createElement(G,{as:N.a,md:"12",controlId:"school"},r.a.createElement(P,null,"Name of School"),r.a.createElement(D,{value:i,onChange:d})),r.a.createElement(G,{as:N.a,md:"6",controlId:"school"},r.a.createElement(P,null,"Degree"),r.a.createElement(V,{required:!0,type:"text",placeholder:"Enter you degree",value:h,onChange:function(e){return f(e.target.value)}}),r.a.createElement(V.Feedback,null,"Looks good!")),r.a.createElement(G,{as:N.a,md:"6",controlId:"school"},r.a.createElement(P,null,"Field of study"),r.a.createElement(V,{required:!0,type:"text",placeholder:"Enter you field of study",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement(V.Feedback,null,"Looks good!")),r.a.createElement(G,{as:N.a,md:"4",controlId:"school"},r.a.createElement(P,null,"Start Year"),r.a.createElement(V,{required:!0,type:"number",placeholder:"Enter start year",value:S,onChange:function(e){return I(e.target.value)}}),r.a.createElement(V.Feedback,null,"Looks good!")),r.a.createElement(G,{as:N.a,md:"4",controlId:"school"},r.a.createElement(P,null,"End Year"),r.a.createElement(V,{required:!0,type:"number",placeholder:"Enter end year",value:T,onChange:function(e){return q(e.target.value)}}),r.a.createElement(V.Feedback,null,"Looks good!")),r.a.createElement(G,{as:N.a,md:"4",controlId:"school"},r.a.createElement(P,null,"Grade"),r.a.createElement(V,{required:!0,type:"number",placeholder:"Enter your grade",value:J,onChange:function(e){return U(e.target.value)}}),r.a.createElement(V.Feedback,null,"Looks good!")),r.a.createElement(G,{as:N.a,md:"12",controlId:"school"},r.a.createElement(P,null,"Description"),r.a.createElement(V,{type:"text",placeholder:"Enter your experience",value:K,onChange:function(e){return M(e.target.value)},as:"textarea",rows:4}),r.a.createElement(V.Feedback,null,"Looks good!"))))),r.a.createElement(W,null,r.a.createElement(E.a,{variant:"secondary",onClick:e.onHide},"Close"),r.a.createElement(E.a,{variant:"primary",onClick:X},"Save changes")))},_=(a(70),d.a.Item),J=m.a.Body,U=m.a.Title,z=m.a.Subtitle,$=m.a.Text,K=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(b.c)(k),o=Object(i.g)(),u=Object(b.c)(x),p=new URLSearchParams(o.search).get("name");return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to ",l||p,"'s education page"),r.a.createElement(E.a,{variant:"primary",onClick:function(){return c(!0)}},"Add New Education"),r.a.createElement("div",{className:"content-box "},r.a.createElement(d.a,{className:"bookmarks"},null===u||void 0===u?void 0:u.map((function(e,t){var a=e.school,n=e.degree;return r.a.createElement(_,{key:t},r.a.createElement("h6",null,a),r.a.createElement("p",null,n))}))),r.a.createElement(d.a,{className:"educations-list"},null===u||void 0===u?void 0:u.map((function(e,t){var a=e.school,n=e.degree,c=e.fieldOfStudy,l=e.startYear,o=e.endYear,u=e.grade,i=e.description;return r.a.createElement(_,{key:t},r.a.createElement(m.a,null,r.a.createElement(J,null,r.a.createElement(U,null,a," - ",n,"(",c,")"),r.a.createElement(z,{className:"mb-2 text-muted"},l," - ",o,", Grade: ",u),i&&r.a.createElement($,null,i))))})))),r.a.createElement(R,{show:a,onHide:function(){return c(!1)}}))},M={home:"/",educations:"/educations"},Q=(a(72),C.a.Row),X=C.a.Group,Z=C.a.Label,ee=C.a.Control,te=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],m=u[1],p=Object(b.b)(),h=Object(i.f)();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"home_title"},"Hi there! Welcome to your education showcase."),r.a.createElement(C.a,{noValidate:!0,validated:c,onSubmit:function(e){if(e.preventDefault(),!1===e.currentTarget.checkValidity())return e.preventDefault(),e.stopPropagation(),!1;p(j(d)),l(!0),h.push("".concat(M.educations,"?name=").concat(d))}},r.a.createElement(Q,null,r.a.createElement(X,{controlId:"validationCustom01",className:"home_label"},r.a.createElement(Z,{className:"label"},'Type your name and "Enter" below to begin!'),r.a.createElement(ee,{required:!0,type:"text",placeholder:"First name",value:d,onChange:function(e){return m(e.target.value)}}),r.a.createElement(ee.Feedback,null,"Looks good!"))),r.a.createElement("div",{class:"text-center"},r.a.createElement(E.a,{className:"home_button btn-primary",type:"submit"},"Enter"))))};function ae(){return r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:M.educations},r.a.createElement(K,null)),r.a.createElement(i.a,{path:M.home},r.a.createElement(te,null)))))}var ne=Object(v.a)({reducer:{user:S}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);l.a.render(r.a.createElement(b.a,{store:ne},r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.9fd65df3.chunk.js.map