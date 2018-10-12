import Vue from 'vue'
import Router from 'vue-router'
const AppController = () => import('@/controller/AppController.vue');
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppController,
      leaf: false,
      iconCls: 'fa fa-home',//图标样式class
      children: [
        {
           path: '/',
           iconCls: 'fa fa-home',
          component: () => import('@/controller/home/HomeController'),
          name: '首页' 
        }
      ]
    },
    {
      path: '/order',
      name: '订单服务',
      iconClass: 'cwgj-icon-order',
      leaf: true,
      iconCls: 'fa fa-file',//图标样式class
      meta: {
        title: '订单服务'
      },
      component: AppController,

      // 需要进行用户登录验证
      children: [
        {
          path: 'farePayment',
          name: '车费缴费订单',
          leaf: false,
          meta: {
            title: '车费缴费订单'
          },
          component: () => import('@/controller/order/FarePaymentController'),
        }
      ]
    },
    {
      path: '/fundSettlement',
      name: '资金结算',
      iconCls: 'fa fa-rmb',//图标样式class
      leaf: true,
      meta: {
        title: '资金结算'
      },
      component: AppController,
      children: [
        {
          path: 'financialManage',
          name: '财务管理',
          meta: {
            title: '财务管理'
          },
          leaf: true,
          component: () => import('@/controller/fund/SubViewCashController'),
          children: [
            {
              path: 'applicationCash',
              name: '提现申请',
              meta: {
                title: '提现申请'
              },
              leaf: false,
              component: () => import('@/controller/fund/ApplicationCashController'),
            }
          ]
        }

      ]
    },
  ]
})

let auth = false;
/**跳转拦截**/
router.beforeEach((to, from, next) => {
   
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (auth) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

export default router