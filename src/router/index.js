import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/layouts/HomeView.vue'
import Profile from '../views/layouts/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/room',
    name: 'room',
    component: () => import('../views/layouts/RoomView.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/layouts/InfoView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/layouts/FAQView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Auth/Signup.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/layouts/Booking/Booking.vue')
  },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/layouts/Profile.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
