import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth } from './guard'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //ページ数が多くなった場合を考慮してレイジーロードでページを読み込む
      // component: HomeView
      component: () => import('../views/HomeView.vue'),
      //認証済の確認
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/test_request',
      name: 'test_request',
      //ページ数が多くなった場合を考慮してレイジーロードでページを読み込む
      // component: HomeView
      component: () => import('../views/TestRequest.vue'),
      //認証済の確認
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(checkAuth)

export default router
