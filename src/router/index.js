import vueRouter from "vue-router"
import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.use(vueRouter)
ViewUI.LoadingBar.config({
  height: 3
});
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new vueRouter({
  routes: [{
      path: '/login',
      meta: {
        title: '登录',
        anonymous: true
      },
      component: () => import("@/view/login/index.vue")
    },
    {
      path: '/',
      meta: {
        title: '后台管理系统'
      },
      component: () => import("@/view/main.vue"),
      children: [
        {
          path: '',
          meta: {
            title: '后台管理系统'
          },
          component: () => import("@/view/user/userlist"),
        },
        {
          path: '/adduser',
          meta: {
            title: '后台管理系统'
          },
          component: () => import("@/view/user/adduser")
        },
        {
          path: '/detail/:id',
          meta: {
            title: '后台管理系统'
          },
          props: true,
          component: () => import("@/view/user/detail")
        },
      ]
    },

    {
      path: '*',
      meta: {
        title: '未找到页面'
      },
      component: () => import("../view/error")
    }
  ]
})
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.finish();
if(!to.meta.anonymous && !sessionStorage.getItem('login'))
{
 next('./login')
}
 else 
 next()
})
router.afterEach((to) => {
  document.title = to.meta.title
})
export default router