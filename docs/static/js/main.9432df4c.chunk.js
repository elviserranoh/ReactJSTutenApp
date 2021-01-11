(this["webpackJsonptuten-app"]=this["webpackJsonptuten-app"]||[]).push([[0],{198:function(e,t,n){},199:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(40),i=n.n(r),s=n(7),o=n(21),l=n(3),d=n(5),b=n(90),j=n(31),u=n(26),m=n.n(u),h=n(46),p=n(88),O=n.n(p),x="[Auth] Login",f="[Auth] Logout",g="[Auth] Error",v={isAuthenticated:!1},k=function(e){return{type:x,payload:e}},N=function(e){return{type:g,payload:e}},y=function(){return function(e){localStorage.clear(),e({type:f})}},w=function(){var e=Object(s.c)((function(e){return e.auth})).errorAuth,t=Object(s.b)(),n=Object(b.a)({initialValues:{email:"testapis@tuten.cl",password:"1234",app:"APP_BCK"},validationSchema:j.a().shape({email:j.b().email("Invalid email").required("Required"),password:j.b().min(4,"Password is to short - should be 4 chars minimun.").required("Required"),app:j.b().required("Required")}),onSubmit:function(e){t(function(e){var t=e.email,n=e.password,c=e.app;return function(){var e=Object(h.a)(m.a.mark((function e(a){var r,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dev.tuten.cl/TutenREST/rest/user/".concat(t),{method:"PUT",headers:{accept:"application/json","content-type":"application/json",app:c,password:n},body:JSON.stringify({email:t})}).catch((function(e){console.log("err",e.response)}));case 3:if(!(r=e.sent).ok){e.next=13;break}return e.next=7,r.json();case 7:i=e.sent,s={token:i.sessionTokenBck,firstName:i.firstName,lastName:i.lastName,email:i.email,app:c},localStorage.setItem("user",JSON.stringify(s)),a(k(s)),e.next=15;break;case 13:a(N(!0)),O.a.fire({icon:"error",title:"Authentication Error",text:"Email or Password are Wrong"});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("error pendejo mont",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()}(Object(d.a)({},e)))}}),r=n.values,i=n.handleChange,o=n.handleSubmit,l=n.errors,u=n.isValid,p=n.isSubmitting,x=n.setSubmitting;return Object(a.useEffect)((function(){x(!1),t(N(!1))}),[t,x,e]),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",style:{height:"100vh"},children:[Object(c.jsx)("div",{className:"col-md-6 d-flex justify-content-center align-items-center",children:Object(c.jsxs)("form",{onSubmit:o,className:"w-75",children:[Object(c.jsx)("h2",{className:"text-black-50",children:"Sign in."}),Object(c.jsx)("p",{className:"mt-3 text-muted",children:"Give us some of your information to get free access to fieldly"}),Object(c.jsxs)("div",{className:"mt-4 mb-3",children:[Object(c.jsx)("label",{htmlFor:"email",className:"fw-bold  text-black-50",children:"Your e-mail"}),Object(c.jsxs)("div",{className:"mt-2",children:[Object(c.jsx)("input",{type:"email",placeholder:"elviserranoh@gmail.com",className:"form-control",name:"email",id:"email",value:r.email,onChange:i}),l.email?Object(c.jsx)("div",{className:"mt-1 text-danger",children:l.email}):null]})]}),Object(c.jsxs)("div",{className:"mt-3 mb-3",children:[Object(c.jsx)("label",{htmlFor:"password",className:"fw-bold text-black-50",children:"Password"}),Object(c.jsxs)("div",{className:"mt-2",children:[Object(c.jsx)("input",{type:"password",className:"form-control",name:"password",id:"password",value:r.password,onChange:i}),l.password&&Object(c.jsx)("div",{className:"mt-1 text-danger",children:l.password})]})]}),Object(c.jsxs)("div",{className:"mt-3 mb-3",children:[Object(c.jsx)("label",{htmlFor:"app",className:"fw-bold text-black-50",children:"App"}),Object(c.jsxs)("div",{className:"mt-2",children:[Object(c.jsx)("input",{type:"text",className:"form-control",name:"app",id:"app",value:r.app,onChange:i}),l.app&&Object(c.jsx)("div",{className:"mt-1 text-danger",children:l.app})]})]}),Object(c.jsx)("button",{className:"mt-3 btn btn-primary w-100",disabled:!u||p,children:"Log In"})]})}),Object(c.jsx)("div",{className:"col-md-6 d-none d-md-flex justify-content-center align-items-end",style:{backgroundColor:"#5923B7"},children:Object(c.jsx)("p",{className:"text-white fw-bold",style:{fontSize:12},children:"@dev.tuten.cl"})})]})})},A=n(13),F=n(9),I="[Booking] Load",S="[Booking] Filter Booking By Id",C="[Booking] Filter Booking By Price",E=n(42),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),c=n[0],r=n[1],i=function(e){var t=e.target,n=t.name,a=t.value;r(Object(d.a)(Object(d.a)({},c),{},Object(E.a)({},n,a)))},s=function(){r(e)};return[c,i,s]};n(198);function T(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.booking})),n=P({email:"contacto@tuten.cl"}),r=Object(A.a)(n,2),i=r[0],o=r[1],l=P({bookingFilter:"bookingId",bookingFilterValue:""}),d=Object(A.a)(l,2),b=d[0],j=d[1];Object(a.useEffect)((function(){var t;e((t=i.email,function(){var e=Object(h.a)(m.a.mark((function e(n,c){var a,r,i,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c(),r=a.auth,e.next=3,fetch("https://dev.tuten.cl/TutenREST/rest/user/".concat(t,"/bookings?current=").concat(r.current),{method:"GET",headers:{Accept:"Application/json","Content-Type":"Application/json",App:r.app,adminemail:r.email,token:r.token}});case 3:if(!(i=e.sent).ok){e.next=10;break}return e.next=7,i.json();case 7:s=e.sent,o=s.map((function(e){return{bookingId:e.bookingId,firstName:e.tutenUserClient.firstName,lastName:e.tutenUserClient.lastName,bookingTime:e.bookingTime,streetAddress:e.locationId.streetAddress,bookingPrice:e.bookingPrice}})),n({type:I,payload:o});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))}),[e,i]);return Object(c.jsxs)("div",{className:"container-fluid  mt-4",children:[Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"emailClient",className:"form-label",children:"Email"}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"email",id:"emailClient",onChange:o,value:i.email,placeholder:"elvis@dev.tuten.cl"})]}),Object(c.jsxs)("div",{className:"mr-2",children:[Object(c.jsx)("label",{htmlFor:"bookingFilterValue",className:"form-label",children:"Filtrar"}),Object(c.jsxs)("div",{className:"d-flex flex-row",children:[Object(c.jsxs)("select",{name:"bookingFilter",onChange:j,value:b.bookingFilter,children:[Object(c.jsx)("option",{value:"bookingId",children:"ID"}),Object(c.jsx)("option",{value:"bookingPrice",children:"Price"})]}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"bookingFilterValue",value:b.bookingFilterValue,onChange:j,id:"bookingFilterValue",placeholder:" Ej. 233"}),Object(c.jsx)("button",{onClick:function(){var t,n;"bookingId"===b.bookingFilter?e((n=b.bookingFilterValue,{type:S,payload:n})):"bookingPrice"===b.bookingFilter&&e((t=b.bookingFilterValue,{type:C,payload:t}))},className:"btn btn-primary btn-sm ml-1",children:"Filtrar"})]})]})]}),Object(c.jsxs)("table",{className:"table table-hover mt-3",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"BookingId"}),Object(c.jsx)("th",{scope:"col",children:"Cliente"}),Object(c.jsx)("th",{scope:"col",children:"Fecha de Creaci\xf3n"}),Object(c.jsx)("th",{scope:"col",children:"Direcci\xf3n"}),Object(c.jsx)("th",{scope:"col",children:"Precio"})]})}),Object(c.jsxs)("tbody",{className:"bg-white",children:[t.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e.bookingId}),Object(c.jsx)("td",{children:"".concat(e.firstName," ").concat(e.lastName)}),Object(c.jsx)("td",{children:(t=e.bookingTime,new Date(t).toLocaleDateString())}),Object(c.jsx)("td",{children:e.streetAddress}),Object(c.jsx)("td",{children:e.bookingPrice})]},e.bookingId);var t})),0==t.length&&Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"5",children:Object(c.jsx)("p",{className:"text-center",children:"No Hay registros para el cliente"})})})]})]})]})}n(199);var B=function(){var e=Object(s.c)((function(e){return e.auth})),t=Object(s.b)();return Object(c.jsxs)("nav",{className:"navbar px-4 align-items-center flex-row bg-white",children:[Object(c.jsx)(o.b,{to:"/",className:"navbar-brand text-black-50 fw-bold",children:"TutenApp"}),Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-center",children:[Object(c.jsx)("i",{className:"icon-account"}),Object(c.jsx)("p",{className:"mx-2",style:{margin:0},children:"".concat(e.firstName," ").concat(e.lastName)}),Object(c.jsx)("i",{onClick:function(){t(y())},className:"fas fa-sign-out-alt d-flex align-items-center ml-1 cursor-pointer"})]})]})},V=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B,{}),Object(c.jsx)(l.d,{children:Object(c.jsx)(l.b,{path:"/",component:T})})]})},_=n(47),q=function(e){var t=e.isAuthenticated,n=e.component,a=Object(_.a)(e,["isAuthenticated","component"]);return Object(c.jsx)("div",{className:"bg-w",children:Object(c.jsx)(l.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return t?Object(c.jsx)(n,Object(d.a)({},e)):Object(c.jsx)(l.a,{to:{pathname:"/login"}})}}))})},D=function(e){var t=e.isAuthenticated,n=e.component,a=Object(_.a)(e,["isAuthenticated","component"]);return Object(c.jsx)(l.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return t?Object(c.jsx)(l.a,{to:{pathname:"/"}}):Object(c.jsx)(n,Object(d.a)({},e))}}))},L=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).isAuthenticated;return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t&&e(k(t))}),[e]),Object(c.jsx)(o.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(D,{exact:!0,path:"/login",component:w,isAuthenticated:t}),Object(c.jsx)(q,{exact:!0,path:"/",component:V,isAuthenticated:t})]})})})},R=n(23),J=n(89),U=Object(R.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},t.payload),{},{isAuthenticated:!0,current:!0,errorAuth:!1});case f:return{isAuthenticated:!1};case g:return console.log("error",t),Object(d.a)(Object(d.a)({},e),{},{errorAuth:t.payload});default:return e}},booking:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(F.a)(t.payload);case S:return e.filter((function(e){return parseInt(e.bookingId)===parseInt(t.payload)}));case C:return e.filter((function(e){return parseInt(e.bookingPrice)===parseInt(t.payload)}));default:return e}}}),G="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,X=Object(R.e)(U,G(Object(R.a)(J.a))),z=(n(201),function(){return Object(c.jsx)(s.a,{store:X,children:Object(c.jsx)(L,{})})});i.a.render(Object(c.jsx)(z,{}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.9432df4c.chunk.js.map