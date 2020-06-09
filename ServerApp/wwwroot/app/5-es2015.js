(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",(function(){return F}));var r=n("ofXK"),c=n("tyNb"),o=n("3Pt+"),b=n("fXoL"),i=n("qdT6"),l=n("LRne"),s=n("lJxs"),a=n("JIr8");let u=(()=>{class t{constructor(t,e){this.repo=t,this.router=e,this.authenticated=!1}login(){return this.authenticated=!1,this.repo.login(this.name,this.password).pipe(Object(s.a)(t=>(t&&(this.authenticated=!0,this.password=null,this.router.navigateByUrl(this.callbackUrl||"/admin/overview")),this.authenticated)),Object(a.a)(t=>(this.authenticated=!1,Object(l.a)(!1))))}logout(){this.authenticated=!1,this.repo.logout(),this.router.navigateByUrl("/admin/login")}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(i.a),b.Rb(c.d))},t.\u0275prov=b.Gb({token:t,factory:t.\u0275fac}),t})();const d=function(){return{exact:!0}};let p=(()=>{class t{constructor(t,e){this.repo=t,this.authService=e,t.filter.reset(),t.filter.related=!0,this.repo.getProducts(),this.repo.getSuppliers(),this.repo.getOrders()}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(i.a),b.Kb(u))},t.\u0275cmp=b.Eb({type:t,selectors:[["ng-component"]],decls:19,vars:2,consts:[[1,"navbar","bg-info","mb-1"],[1,"navbar-brand","text-white"],[1,"float-right","navbar-text"],[1,"btn","btn-sm","btn-warning",3,"click"],[1,"col-3","fixed-bottom","mb-1"],["routerLink","/store",1,"btn","btn-block","btn-secondary"],[1,"row","no-gutters"],[1,"col-3"],["routerLink","/admin","routerLinkActive","active",1,"btn","btn-block","btn-outline-info","m-1",3,"routerLinkActiveOptions"],["routerLink","/admin/products","routerLinkActive","active",1,"btn","btn-block","btn-outline-info","m-1"],["routerLink","/admin/orders","routerLinkActive","active",1,"btn","btn-block","btn-outline-info","m-1"],[1,"col","p-2"]],template:function(t,e){1&t&&(b.Nb(0,"div",0),b.Nb(1,"a",1),b.lc(2,"SPORTS STORE Admin"),b.Mb(),b.Nb(3,"div",2),b.Nb(4,"button",3),b.Vb("click",(function(){return e.authService.logout()})),b.lc(5,"Log Out"),b.Mb(),b.Mb(),b.Mb(),b.Nb(6,"div",4),b.Nb(7,"a",5),b.lc(8,"Store"),b.Mb(),b.Mb(),b.Nb(9,"div",6),b.Nb(10,"div",7),b.Nb(11,"button",8),b.lc(12,"Overview"),b.Mb(),b.Nb(13,"button",9),b.lc(14,"Products"),b.Mb(),b.Nb(15,"button",10),b.lc(16,"Orders"),b.Mb(),b.Mb(),b.Nb(17,"div",11),b.Lb(18,"router-outlet"),b.Mb(),b.Mb()),2&t&&(b.zb(11),b.bc("routerLinkActiveOptions",b.cc(1,d)))},directives:[c.g,c.e,c.f,c.i],encapsulation:2}),t})();class h{constructor(t,e,n,r,c,o,b){this.productId=t,this.name=e,this.category=n,this.description=r,this.price=c,this.supplier=o,this.ratings=b}}function f(t,e){if(1&t&&(b.Nb(0,"option",5),b.lc(1),b.Mb()),2&t){const t=e.$implicit;b.bc("ngValue",t),b.zb(1),b.mc(t.name)}}let g=(()=>{class t{constructor(t){this.repo=t}get product(){return this.repo.product}get suppliers(){return this.repo.suppliers}compareSuppliers(t,e){return t&&e&&t.name==e.name}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(i.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["admin-product-editor"]],decls:21,vars:7,consts:[[1,"form-group"],[1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",3,"ngModel","compareWith","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue"]],template:function(t,e){1&t&&(b.Nb(0,"div",0),b.Nb(1,"label"),b.lc(2,"Name"),b.Mb(),b.Nb(3,"input",1),b.Vb("ngModelChange",(function(t){return e.product.name=t})),b.Mb(),b.Mb(),b.Nb(4,"div",0),b.Nb(5,"label"),b.lc(6,"Category"),b.Mb(),b.Nb(7,"input",1),b.Vb("ngModelChange",(function(t){return e.product.category=t})),b.Mb(),b.Mb(),b.Nb(8,"div",0),b.Nb(9,"label"),b.lc(10,"Supplier"),b.Mb(),b.Nb(11,"select",2),b.Vb("ngModelChange",(function(t){return e.product.supplier=t})),b.jc(12,f,2,2,"option",3),b.Mb(),b.Mb(),b.Nb(13,"div",0),b.Nb(14,"label"),b.lc(15,"Description"),b.Mb(),b.Nb(16,"textarea",1),b.Vb("ngModelChange",(function(t){return e.product.description=t})),b.Mb(),b.Mb(),b.Nb(17,"div",0),b.Nb(18,"label"),b.lc(19,"Price"),b.Mb(),b.Nb(20,"input",4),b.Vb("ngModelChange",(function(t){return e.product.price=t})),b.Mb(),b.Mb()),2&t&&(b.zb(3),b.bc("ngModel",e.product.name),b.zb(4),b.bc("ngModel",e.product.category),b.zb(4),b.bc("ngModel",e.product.supplier)("compareWith",e.compareSuppliers),b.zb(1),b.bc("ngForOf",e.suppliers),b.zb(4),b.bc("ngModel",e.product.description),b.zb(4),b.bc("ngModel",e.product.price))},directives:[o.a,o.c,o.f,o.j,r.i,o.h,o.g,o.k],encapsulation:2}),t})();function m(t,e){if(1&t){const t=b.Ob();b.Nb(0,"td"),b.lc(1),b.Mb(),b.Nb(2,"td"),b.lc(3),b.Mb(),b.Nb(4,"td"),b.lc(5),b.Mb(),b.Nb(6,"td"),b.lc(7),b.Mb(),b.Nb(8,"td"),b.lc(9),b.Yb(10,"currency"),b.Mb(),b.Nb(11,"td"),b.Nb(12,"button",8),b.Vb("click",(function(){b.fc(t);const e=b.Xb().$implicit;return b.Xb(2).selectProduct(e.productId)})),b.lc(13,"Edit"),b.Mb(),b.Nb(14,"button",9),b.Vb("click",(function(){b.fc(t);const e=b.Xb().$implicit;return b.Xb(2).deleteProduct(e.productId)})),b.lc(15,"Delete"),b.Mb(),b.Mb()}if(2&t){const t=b.Xb().$implicit;b.zb(1),b.mc(t.productId),b.zb(2),b.mc(t.name),b.zb(2),b.mc(t.category),b.zb(2),b.mc((null==t.supplier?null:t.supplier.name)||"(None)"),b.zb(2),b.mc(b.Zb(10,5,t.price,"USD","symbol"))}}function M(t,e){if(1&t&&(b.Nb(0,"tr"),b.jc(1,m,16,9,"ng-template",7),b.Mb()),2&t){const t=e.$implicit,n=b.Xb(2),r=b.ec(2);b.zb(1),b.bc("ngIf",(null==n.product?null:n.product.productId)!=t.productId)("ngIfElse",r)}}function N(t,e){if(1&t){const t=b.Ob();b.Nb(0,"table",3),b.Nb(1,"tbody"),b.Nb(2,"tr"),b.Nb(3,"th"),b.lc(4,"ID"),b.Mb(),b.Nb(5,"th"),b.lc(6,"Name"),b.Mb(),b.Nb(7,"th"),b.lc(8,"Category"),b.Mb(),b.Nb(9,"th"),b.lc(10,"Supplier"),b.Mb(),b.Nb(11,"th"),b.lc(12,"Price"),b.Mb(),b.Lb(13,"th"),b.Mb(),b.jc(14,M,2,2,"tr",4),b.Mb(),b.Nb(15,"tfoot"),b.Nb(16,"tr"),b.Nb(17,"td",5),b.Nb(18,"button",6),b.Vb("click",(function(){b.fc(t);const e=b.Xb();return e.clearProduct(),e.tableMode=!1})),b.lc(19,"Create"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&t){const t=b.Xb();b.zb(14),b.bc("ngForOf",t.products)}}function v(t,e){if(1&t){const t=b.Ob();b.Nb(0,"td",10),b.Lb(1,"admin-product-editor"),b.Nb(2,"div",11),b.Nb(3,"button",8),b.Vb("click",(function(){return b.fc(t),b.Xb().saveProduct()})),b.lc(4,"Save"),b.Mb(),b.Nb(5,"button",12),b.Vb("click",(function(){return b.fc(t),b.Xb().clearProduct()})),b.lc(6,"Cancel"),b.Mb(),b.Mb(),b.Mb()}}function k(t,e){if(1&t){const t=b.Ob();b.Nb(0,"div",13),b.Lb(1,"admin-product-editor"),b.Nb(2,"button",6),b.Vb("click",(function(){return b.fc(t),b.Xb().saveProduct()})),b.lc(3,"Save"),b.Mb(),b.Nb(4,"button",14),b.Vb("click",(function(){return b.fc(t),b.Xb().clearProduct()})),b.lc(5,"Cancel"),b.Mb(),b.Mb()}}let w=(()=>{class t{constructor(t){this.repo=t,this.tableMode=!0}get product(){return this.repo.product}selectProduct(t){this.repo.getProduct(t)}saveProduct(){null==this.repo.product.productId?this.repo.createProduct(this.repo.product):this.repo.replaceProduct(this.repo.product),this.clearProduct(),this.tableMode=!0}deleteProduct(t){this.repo.deleteProduct(t)}clearProduct(){this.repo.product=new h,this.tableMode=!0}get products(){return this.repo.products}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(i.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["ng-component"]],decls:5,vars:2,consts:[["class","table table-sm table-striped",4,"ngIf","ngIfElse"],["edit",""],["create",""],[1,"table","table-sm","table-striped"],[4,"ngFor","ngForOf"],["colspan","6",1,"text-center"],[1,"btn","btn-primary",3,"click"],[3,"ngIf","ngIfElse"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"btn","btn-sm","btn-danger","ml-1",3,"click"],["colspan","6",1,"bg-light","border","p-3"],[1,"text-center"],[1,"btn","btn-sm","btn-info","ml-1",3,"click"],[1,"m-2"],[1,"btn","btn-info","ml-1",3,"click"]],template:function(t,e){if(1&t&&(b.jc(0,N,20,1,"table",0),b.jc(1,v,7,0,"ng-template",null,1,b.kc),b.jc(3,k,6,0,"ng-template",null,2,b.kc)),2&t){const t=b.ec(4);b.bc("ngIf",e.tableMode)("ngIfElse",t)}},directives:[r.j,r.i,g],pipes:[r.c],encapsulation:2}),t})();function y(t,e){if(1&t){const t=b.Ob();b.Nb(0,"td"),b.Nb(1,"button",6),b.Vb("click",(function(){b.fc(t);const e=b.Xb().$implicit;return b.Xb(2).markShipped(e)})),b.lc(2,"Ship"),b.Mb(),b.Mb()}}function I(t,e){if(1&t&&(b.Nb(0,"tr"),b.Nb(1,"td"),b.lc(2),b.Mb(),b.Nb(3,"td"),b.lc(4),b.Mb(),b.Nb(5,"td"),b.lc(6),b.Mb(),b.Nb(7,"td"),b.lc(8),b.Yb(9,"currency"),b.Mb(),b.jc(10,y,3,0,"td",5),b.Mb()),2&t){const t=e.$implicit;b.Xb(2);const n=b.ec(2);b.zb(2),b.mc(t.name),b.zb(2),b.mc(t.address),b.zb(2),b.mc(t.products.length),b.zb(2),b.mc(b.Zb(9,6,t.payment.total,"USD","symbol")),b.zb(2),b.bc("ngIf",!t.shipped)("ngIfElse",n)}}function S(t,e){if(1&t&&(b.Nb(0,"table",3),b.Nb(1,"tbody"),b.Nb(2,"tr"),b.Nb(3,"th"),b.lc(4,"Customer"),b.Mb(),b.Nb(5,"th"),b.lc(6,"Address"),b.Mb(),b.Nb(7,"th"),b.lc(8,"Products"),b.Mb(),b.Nb(9,"th"),b.lc(10,"Total"),b.Mb(),b.Lb(11,"th"),b.Mb(),b.jc(12,I,11,10,"tr",4),b.Mb(),b.Mb()),2&t){const t=b.Xb();b.zb(12),b.bc("ngForOf",t.orders)}}function z(t,e){1&t&&(b.Nb(0,"td"),b.lc(1,"Shipped"),b.Mb())}function P(t,e){1&t&&(b.Nb(0,"h3",7),b.lc(1,"There are no orders"),b.Mb())}let O=(()=>{class t{constructor(t){this.repo=t}get orders(){return this.repo.orders}markShipped(t){this.repo.shipOrder(t)}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(i.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["ng-component"]],decls:5,vars:2,consts:[["class","table table-striped",4,"ngIf","ngIfElse"],["shipped",""],["nodata",""],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"text-center"]],template:function(t,e){if(1&t&&(b.jc(0,S,13,1,"table",0),b.jc(1,z,2,0,"ng-template",null,1,b.kc),b.jc(3,P,2,0,"ng-template",null,2,b.kc)),2&t){const t=b.ec(4);b.bc("ngIf",(null==e.orders?null:e.orders.length)>0)("ngIfElse",t)}},directives:[r.j,r.i],pipes:[r.c],encapsulation:2}),t})(),j=(()=>{class t{constructor(t){this.repo=t}get products(){return this.repo.products}get orders(){return this.repo.orders}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(i.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["ng-component"]],decls:13,vars:2,consts:[[1,"table","m-1"],["routerLink","/admin/products",1,"btn","btn-sm","btn-info","btn-block"],["routerLink","/admin/orders",1,"btn","btn-sm","btn-info","btn-block"]],template:function(t,e){1&t&&(b.Nb(0,"table",0),b.Nb(1,"tr"),b.Nb(2,"td"),b.lc(3),b.Mb(),b.Nb(4,"td"),b.Nb(5,"button",1),b.lc(6,"Manage Products"),b.Mb(),b.Mb(),b.Mb(),b.Nb(7,"tr"),b.Nb(8,"td"),b.lc(9),b.Mb(),b.Nb(10,"td"),b.Nb(11,"button",2),b.lc(12,"Manage Orders"),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&t&&(b.zb(3),b.nc("There are ",(null==e.products?null:e.products.length)||0," products for sale"),b.zb(6),b.nc("There are ",(null==e.orders?null:e.orders.length)||0," orders"))},directives:[c.e],encapsulation:2}),t})();function C(t,e){1&t&&(b.Nb(0,"h4",13),b.lc(1," Invalid username or password\n"),b.Mb())}function E(t,e){1&t&&(b.Nb(0,"div",14),b.lc(1,"Please enter your user name"),b.Mb())}function L(t,e){1&t&&(b.Nb(0,"div",14),b.lc(1,"Please enter your password"),b.Mb())}let V=(()=>{class t{constructor(t){this.authService=t,this.showError=!1}login(){this.showError=!1,this.authService.login().subscribe(t=>{this.showError=!t})}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(u))},t.\u0275cmp=b.Eb({type:t,selectors:[["ng-component"]],decls:21,vars:6,consts:[[1,"navbar","bg-info","mb-1"],[1,"navbar-brand","text-white"],["class","p-2 bg-danger text-white",4,"ngIf"],["novalidate","",1,"m-3"],["authForm","ngForm"],[1,"form-group"],["name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["class","text-danger",4,"ngIf"],["type","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],[1,"text-center","pt-2"],[1,"btn","btn-primary",3,"disabled","click"],[1,"p-2","bg-danger","text-white"],[1,"text-danger"]],template:function(t,e){if(1&t&&(b.Nb(0,"div",0),b.Nb(1,"a",1),b.lc(2,"SPORTS STORE Admin"),b.Mb(),b.Mb(),b.jc(3,C,2,0,"h4",2),b.Nb(4,"form",3,4),b.Nb(6,"div",5),b.Nb(7,"label"),b.lc(8,"Name:"),b.Mb(),b.Nb(9,"input",6,7),b.Vb("ngModelChange",(function(t){return e.authService.name=t})),b.Mb(),b.jc(11,E,2,0,"div",8),b.Mb(),b.Nb(12,"div",5),b.Nb(13,"label"),b.lc(14,"Password:"),b.Mb(),b.Nb(15,"input",9,10),b.Vb("ngModelChange",(function(t){return e.authService.password=t})),b.Mb(),b.jc(17,L,2,0,"div",8),b.Mb(),b.Nb(18,"div",11),b.Nb(19,"button",12),b.Vb("click",(function(){return e.login()})),b.lc(20,"Login"),b.Mb(),b.Mb(),b.Mb()),2&t){const t=b.ec(5),n=b.ec(10),r=b.ec(16);b.zb(3),b.bc("ngIf",e.showError),b.zb(6),b.bc("ngModel",e.authService.name),b.zb(2),b.bc("ngIf",n.invalid),b.zb(4),b.bc("ngModel",e.authService.password),b.zb(2),b.bc("ngIf",r.invalid),b.zb(2),b.bc("disabled",t.invalid)}},directives:[r.j,o.l,o.d,o.e,o.a,o.i,o.c,o.f],encapsulation:2}),t})(),X=(()=>{class t{constructor(t,e){this.router=t,this.authService=e}canActivateChild(t,e){return!!this.authService.authenticated||(this.authService.callbackUrl=t.url.toString(),this.router.navigateByUrl("/admin/login"),!1)}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(c.d),b.Rb(u))},t.\u0275prov=b.Gb({token:t,factory:t.\u0275fac}),t})(),x=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},providers:[u,X],imports:[[c.h,o.b,r.b]]}),t})();const A=[{path:"login",component:V},{path:"",component:p,canActivateChild:[X],children:[{path:"products",component:w},{path:"orders",component:O},{path:"overview",component:j},{path:"",component:j}]}];let F=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},imports:[[c.h,o.b,c.h.forChild(A),r.b,x]]}),t})()}}]);