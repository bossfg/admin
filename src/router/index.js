import vueRouter from "vue-router"
import Vue from 'vue'
Vue.use(vueRouter)
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new vueRouter(
  {
    routes : [
      {
        path: '/',
        meta: {
          title: '后台管理系统'
        },
        component: () => import("../view/user/userlist")
      },
      {
        path: '/adduser',
        meta: {
          title: '后台管理系统'
        },
        component: () => import("../view/user/adduser")
      },
      {
        path: '/detail/:id',
        meta: {
          title: '后台管理系统'
        },
        props: true,
        component: () => import("../view/user/detail")
      },
      {
        path: '*',
        meta: {
          title: '未找到页面'
        },
        component: () => import("../view/error")
      }
    ]
  }
)
router.beforeEach((to,from,next)=> {
  console.log(from)
  document.title = to.meta.title
  next()
})
export default router