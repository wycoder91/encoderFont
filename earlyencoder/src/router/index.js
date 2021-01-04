import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import productCode from '@/components/productCode.vue'

Vue.use(Router)

const router = new Router({
  routes: [
   /* {
      path: '/',
      redirect:'/login'
    }, */
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect:'/productCode',
      children:[{path:'/productCode',component:productCode}]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  //to 将要访问的地址
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  if (to.path === '/login') return next('/')
  /* const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/') */
  next()
})

export default router
