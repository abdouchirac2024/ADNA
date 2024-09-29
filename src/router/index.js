// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Adhere from '../views/Adhere.vue'
import MemberAccess from '../views/MemberAccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adhere',
    name: 'Adhere',
    component: Adhere
  },
  {
    path: '/member-access',
    name: 'MemberAccess',
    component: MemberAccess
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router