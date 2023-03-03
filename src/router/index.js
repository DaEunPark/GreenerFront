// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomepageComp.vue'
import CScustomer from '../views/CScustomer'
import PaymentsPage from '../views/PaymentsPage.vue'

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { path: '/login', name: 'Login', component: () => import('../views/LoginPage.vue') },
  { path: '/MyPage', name: 'Mypage', component: () => import('../views/MyPage.vue') },
  {
    path: '/cscustomer',
    name: 'CScustomer',
    component: CScustomer
   },
   {
    path: '/payments',
    name: 'PaymentPage',
    component: PaymentsPage
   },
   {
    path: '/paymentspagetest',
    name: 'PPtest',
    component: () => import('../views/PaymentsPageTest.vue')
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
