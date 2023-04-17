import {useMainStore}  from '../stores/main'

export const checkAuth = (to:any, from:any, next:any) => {
  const store = useMainStore()
  if (to.matched.some((page: { meta: { requiresAuth: any } })  => page.meta.requiresAuth) && (store.authorized == false)) {
    next('/login')
  } else {
    next()
  }
}