(this["webpackJsonpproject-frontend"]=this["webpackJsonpproject-frontend"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),c=a.n(r),o=(a(84),a(37)),i=a(3),l=a(7),u=a(122),j=a(42),d=a(43),b=a(67),h=a(66),m=a(69),O=(a(85),a(1)),p=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(O.jsx)(m.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(m.a.Heading,{children:a}),Object(O.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(s.a.Component),x=a(12),v=a(120),f=a(121),g=a(118),w=a(123),y=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.c,{to:"/myposts",className:"nav-link",children:"My Posts"}),Object(O.jsx)(x.c,{to:"/posts/create",className:"nav-link",children:"Make a Post"}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(x.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(O.jsx)(x.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]})]}),S=Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)(x.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(O.jsx)(x.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]})}),k=Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.c,{to:"/",className:"nav-link",children:"Home"})}),N=function(e){var t=e.user;return Object(O.jsx)(f.a,{bg:"info",expand:"md",variant:"dark",children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(f.a.Brand,{children:Object(O.jsx)(x.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"MessageBoard"})}),Object(O.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(w.a,{className:"ms-auto",children:[t&&Object(O.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),k,t?y:S]})})]})})},C=a(8),P=a.n(C),A=a(13),E="https://aqueous-atoll-85096.herokuapp.com",F="http://localhost:4741",I="localhost"===window.location.hostname?F:E,L=a(25),U=a.n(L),T=function(e,t,a){return U.a.post(I+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},B=function(e,t){return U()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e,password:t}}})},D=function(e){return U()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})},G=function(e,t,a){return U.a.patch(I+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},_=a(11),q=a(35),z=function(e){var t=e.setUser,a=e.msgAlert,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(n.useState)(""),m=Object(i.a)(h,2),p=m[0],x=m[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),g=f[0],w=f[1],y=function(){var e=Object(A.a)(P.a.mark((function e(n){var s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,T(c,d,p);case 4:return e.next=6,B(c,d);case 6:s=e.sent,t(s.data.user),a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),w(!0),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(1),a({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"}),console.error(e.t0),o(""),b(""),x("");case 19:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return g?Object(O.jsx)(l.a,{to:"/"}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Sign Up"}),Object(O.jsxs)(_.a,{onSubmit:y,children:[Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"email",children:[Object(O.jsx)(_.a.Label,{children:"Email address"}),Object(O.jsx)(_.a.Control,{required:!0,type:"email",value:c,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"password",children:[Object(O.jsx)(_.a.Label,{children:"Password"}),Object(O.jsx)(_.a.Control,{required:!0,value:d,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"passwordConfirmation",children:[Object(O.jsx)(_.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(_.a.Control,{required:!0,value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),d!==p&&Object(O.jsx)("h3",{children:"Passwords dont match"}),Object(O.jsx)(q.a,{className:"text-white",variant:"primary",type:"submit",children:"Submit"})]})]})})},M=function(e){var t=e.setUser,a=e.msgAlert,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),p=m[0],x=m[1],v=function(){var e=Object(A.a)(P.a.mark((function e(n){var s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,B(c,d);case 4:s=e.sent,t(s.data.user),console.log("res is",s),a({heading:"Sign Up Success",message:"Welcome!",variant:"success"}),x(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),a({heading:"Sign Up Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"}),console.error(e.t0),o(""),b("");case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(O.jsx)(l.a,{to:"/"}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Sign In"}),Object(O.jsxs)(_.a,{onSubmit:v,children:[Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"email",children:[Object(O.jsx)(_.a.Label,{children:"Email address"}),Object(O.jsx)(_.a.Control,{required:!0,type:"email",value:c,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"password",children:[Object(O.jsx)(_.a.Label,{children:"Password"}),Object(O.jsx)(_.a.Control,{required:!0,value:d,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsx)(q.a,{variant:"primary",type:"submit",className:"text-white",children:"Submit"})]})]})})},W=function(e){var t=e.user,a=e.clearUser,s=e.msgAlert,r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:s({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!t||o?Object(O.jsx)(l.a,{to:"/"}):""},H=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),p=m[0],x=m[1],v=function(){var e=Object(A.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,G(c,d,t);case 4:a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),x(!0),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),a({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"}),console.error(e.t0),o(""),b("");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!t||p?Object(O.jsx)(l.a,{to:"/"}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Change Password"}),Object(O.jsxs)(_.a,{onSubmit:v,children:[Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"oldPassword",children:[Object(O.jsx)(_.a.Label,{children:"Old Password"}),Object(O.jsx)(_.a.Control,{required:!0,type:"password",value:c,placeholder:"Enter password",onChange:function(e){o(e.target.value),console.log(e.target.value)}})]}),Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"newPassword",children:[Object(O.jsx)(_.a.Label,{children:"New Password"}),Object(O.jsx)(_.a.Control,{required:!0,value:d,type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsx)(q.a,{className:"text-white",variant:"secondary",type:"submit",children:"Submit"})]})]})})},J=a(119),Y=function(e,t,a){return U.a.post("".concat(I,"/posts"),{post:{title:e,content:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},R=function(){return U.a.get("".concat(I,"/posts"))},K=function(e){return U.a.get("".concat(I,"/myposts"),{headers:{Authorization:"Bearer ".concat(e.token)}})},Q=function(e){return U.a.get("".concat(I,"/posts/").concat(e,"/"),{})},V=function(e,t){return U.a.delete("".concat(I,"/posts/").concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}})},X=function(e,t,a,n){return U.a.patch("".concat(I,"/posts/").concat(e),{post:{title:t,content:a}},{headers:{Authorization:"Bearer ".concat(n.token)}})},Z=function(e){var t=e.msgAlert,a=Object(n.useState)(null),s=Object(i.a)(a,2),r=s[0],c=s[1];if(Object(n.useEffect)((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:a=e.sent,c(a.data.posts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({heading:"Posts failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),!r)return Object(O.jsx)(J.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})});var o=r.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/posts/".concat(e._id),children:e.title})},e._id)}));return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Posts"}),Object(O.jsx)("ul",{children:o})]})})},$=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(null),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(n.useState)(!1),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(l.h)().id;Object(n.useEffect)((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(h);case 3:t=e.sent,o(t.data.post),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Post failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(A.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(h,t);case 3:b(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({heading:"Failed to delete the post",message:e.t0.message,variant:"danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return c?d?Object(O.jsx)(l.a,{to:"/posts"}):t?t._id!==c.owner?Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:c.title}),Object(O.jsx)("p",{children:c.content})]})}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:c.title}),Object(O.jsx)("p",{children:c.content}),Object(O.jsx)(q.a,{variant:"danger",onClick:m,children:"Delete Post"}),Object(O.jsx)(x.b,{to:"/posts/".concat(h,"/edit"),children:Object(O.jsx)(q.a,{variant:"primary",type:"submit",children:"Update Post"})})]})}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:c.title}),Object(O.jsx)("p",{children:c.content})]})}):Object(O.jsx)(J.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},ee=function(e){var t=e.handleSubmit,a=e.title,n=e.content,s=e.setTitle,r=e.setContent;return Object(O.jsxs)(_.a,{onSubmit:t,children:[Object(O.jsxs)(_.a.Group,{controlId:"title",children:[Object(O.jsx)(_.a.Label,{children:"Title"}),Object(O.jsx)(_.a.Control,{placeholder:"Post...",name:"title",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(O.jsxs)(_.a.Group,{controlId:"content",children:[Object(O.jsx)(_.a.Label,{children:"Content"}),Object(O.jsx)(_.a.Control,{placeholder:"Post Content",name:"content",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(O.jsx)(q.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})},te=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(n.useState)(null),m=Object(i.a)(h,2),p=m[0],x=m[1],v=function(){var e=Object(A.a)(P.a.mark((function e(n){var s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,Y(c,d,t);case 4:s=e.sent,x(s.data.post._id),a({heading:"Post Created",message:"Created ".concat(c," successfully."),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a({heading:"Failed to make post",message:e.t0.message,variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return t?p?Object(O.jsx)(l.a,{to:"/posts/".concat(p)}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Create Post"}),Object(O.jsx)(ee,{handleSubmit:v,title:c,content:d,setTitle:o,setContent:b})]})}):Object(O.jsx)(l.a,{to:"/"})},ae=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(""),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),p=m[0],x=m[1],v=Object(l.h)().id;if(!t)return Object(O.jsx)(l.a,{to:"/"});Object(n.useEffect)((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(v);case 3:t=e.sent,o(t.data.post.title),b(t.data.post.content),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({heading:"Failed to load post",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(A.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,X(v,c,d,t);case 4:x(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({heading:"Failed to update post",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(O.jsx)(l.a,{to:"/posts/".concat(v)}):Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Edit Post"}),Object(O.jsx)(ee,{handleSubmit:f,title:c,content:d,setTitle:o,setContent:b})]})})},ne=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(null),r=Object(i.a)(s,2),c=r[0],o=r[1];if(!t)return Object(O.jsx)(l.a,{to:"/"});if(Object(n.useEffect)((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:t=e.sent,o(t.data.posts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Posts failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),!c)return Object(O.jsx)(J.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})});var u=c.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/posts/".concat(e._id),children:e.title})},e._id)}));return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Posts"}),Object(O.jsx)("ul",{children:u})]})})},se=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(null),r=Object(i.a)(s,2),c=r[0],o=r[1];if(!t)return Object(O.jsx)(l.a,{to:"/"});if(Object(n.useEffect)((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(t);case 3:n=e.sent,o(n.data.posts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Posts failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),!c)return Object(O.jsx)(J.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})});var u=c.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/posts/".concat(e._id),children:e.title})},e._id)}));return Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(O.jsx)("h3",{children:"Your Posts"}),Object(O.jsx)("ul",{children:u})]})})},re=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),c=Object(i.a)(r,2),j=c[0],d=c[1],b=function(e){var t=e.heading,a=e.message,n=e.variant,s=Object(u.a)();d((function(e){return[].concat(Object(o.a)(e),[{heading:t,message:a,variant:n,id:s}])}))},h=function(e){d((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{user:a}),j.map((function(e){return Object(O.jsx)(p,{heading:e.heading,variant:e.variant,message:e.message,id:e.id,deleteAlert:h},e.id)})),Object(O.jsx)("main",{className:"container",children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{path:"/sign-up",element:Object(O.jsx)(z,{msgAlert:b,setUser:s})}),Object(O.jsx)(l.b,{path:"/sign-in",element:Object(O.jsx)(M,{msgAlert:b,setUser:s})}),Object(O.jsx)(l.b,{path:"/sign-out",element:Object(O.jsx)(W,{msgAlert:b,clearUser:function(){return s(null)},user:a})}),Object(O.jsx)(l.b,{path:"/change-password",element:Object(O.jsx)(H,{msgAlert:b,user:a})}),Object(O.jsx)(l.b,{path:"/",element:Object(O.jsx)(Z,{})}),Object(O.jsx)(l.b,{path:"/posts",element:Object(O.jsx)(ne,{msgAlert:b,user:a})}),Object(O.jsx)(l.b,{path:"/posts",element:Object(O.jsx)(ne,{msgAlert:b,user:a})}),Object(O.jsx)(l.b,{path:"/myposts",element:Object(O.jsx)(se,{msgAlert:b,user:a})}),Object(O.jsx)(l.b,{path:"/posts/:id",element:Object(O.jsx)($,{msgAlert:b,user:a})}),Object(O.jsx)(l.b,{path:"/posts/create",element:Object(O.jsx)(te,{msgAlert:b,user:a})}),Object(O.jsx)(l.b,{path:"/posts/:id/edit",element:Object(O.jsx)(ae,{msgAlert:b,user:a})})]})})]})},ce=Object(O.jsx)(x.a,{basename:"/project-frontend",children:Object(O.jsx)(re,{})});c.a.render(ce,document.getElementById("root"))},84:function(e,t,a){},85:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.42317b3b.chunk.js.map