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
        component: () => import("../view/user/userlist")
      },
      {
        path: '/adduser',
        component: () => import("../view/user/adduser")
      },
      {
        path: '*',
        component: () => import("../view/error")
      }
    ]
  }
)
export default router