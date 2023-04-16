import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //ページ数が多くなった場合を考慮してレイジーロードでページを読み込む
      // component: HomeView
      component: () => import('../views/HomeView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../views/Login.vue')
    // }
  ]
})

// router.beforeEach()

export default router
