import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beats-list',
    name: 'BeatsList',
    component: () => import('../views/BeatsList.vue')
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: () => import('../views/TopList.vue')
  },
  {
    path: '/subadministrators',
    name: 'Subadministrators',
    component: () => import('../views/Subadministrators.vue')
  },
  {
    path: '/artist-account',
    name: 'ArtistAccount',
    component: () => import('../views/ArtistAccount.vue')
  },
  {
    path: '/artist-account-edit',
    name: 'ArtistAccountEdit',
    component: () => import('../views/ArtistAccountEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
