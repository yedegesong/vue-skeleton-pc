webpackJsonp([6],{"8ixN":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"el-container is-vertical",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App"},o,!1,function(e){t("i1UU")},null,null).exports,l=t("/ocq"),r=function(){return t.e(1).then(t.bind(null,"anFY"))};a.default.use(l.a);var c=new l.a({routes:[{path:"/",component:r,leaf:!1,iconCls:"fa fa-home",children:[{path:"/",iconCls:"fa fa-home",component:function(){return t.e(0).then(t.bind(null,"Re2b"))},name:"首页"}]},{path:"/order",name:"订单服务",iconClass:"cwgj-icon-order",leaf:!0,iconCls:"fa fa-file",meta:{title:"订单服务"},component:r,children:[{path:"farePayment",name:"车费缴费订单",leaf:!1,meta:{title:"车费缴费订单"},component:function(){return t.e(2).then(t.bind(null,"58Pd"))}}]},{path:"/fundSettlement",name:"资金结算",iconCls:"fa fa-rmb",leaf:!0,meta:{title:"资金结算"},component:r,children:[{path:"financialManage",name:"财务管理",meta:{title:"财务管理"},leaf:!0,component:function(){return t.e(3).then(t.bind(null,"YEjL"))},children:[{path:"applicationCash",name:"提现申请",meta:{title:"提现申请"},leaf:!1,component:function(){return t.e(4).then(t.bind(null,"4ndU"))}}]}]}]});c.beforeEach(function(e,n,t){e.meta.requireAuth?t({path:"/login",query:{redirect:e.fullPath}}):t()});var u,s=c,f=t("zL8q"),m=t.n(f),p=t("Dd8w"),d=t.n(p),h=t("bOdI"),v=t.n(h),b=t("NYxO"),C={namespaced:!0,state:{homeList:[]},actions:v()({gProgress:function(e,n){e.commit;(0,e.dispatch)("rootIncrement",{name:"as"},{root:!0})}},"queryList",function(e,n){e.commit,e.state}),mutations:{}};a.default.use(b.a);var L={rootIncrement:function(e,n){e.commit,e.state;console.log("全局数据进来"+n)}},g=(u={},v()(u,"SCR0LL_BEHAVIOR",function(e,n){e.scrollBehavior.path=n}),v()(u,"SET_SCR0LL_BEHAVIOR",function(e,n){e.scrollBehavior.scrollTop=n}),v()(u,"SET_SCR0LL_PAGE",function(e,n){e.scrollBehavior.page=n}),u),R=new b.a.Store({state:{token:null,globalTitle:"全局数据"},actions:L,mutations:g,modules:{App:d()({namespaced:!0},C)}});t("tvR6"),t("8ixN"),t("flKj");a.default.use(m.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:s,store:R,components:{App:i},template:"<App/>"})},flKj:function(e,n){},i1UU:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.c20c46ad45b3590674d7.js.map