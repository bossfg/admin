import vueRouter from "vue-router"
import Vue from 'vue'
Vue.use(vueRouter)
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