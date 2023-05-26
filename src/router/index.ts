import {createRouter, createWebHistory,RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import Tasks from '../views/TasksPage.vue'
import Users from '../views/UsersPage.vue'
import EditUser from '../views/EditUser.vue'
import InsertUser from '../views/InsertUser.vue'
import Login from '../views/Login.vue'

const auth = (_to: RouteLocationNormalized, _ : RouteLocationNormalized, next : NavigationGuardNext) => {
  const token = localStorage.getItem('token')
  if(token){
    next()
  }else{
    next('/listUsers')
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path:"/listUsers",
    component: Users,
    name: 'listUsers',
  },
  {
    path:"/listUsers/:id",
    component: EditUser,
    name: 'usersEdit',
    beforeEnter: [auth]
  },
  {
    path:"/insert",
    component: InsertUser,
    name: 'insertUser',
    beforeEnter: [auth]
  },
  {
    path: "/listTasks",
    component: Tasks,
    name: 'listTasks'
  },
  {
    path: "/login",
    component: Login,
    name: 'login'
  },
  {
    path: "/",
    component: Users,
    name: 'home'
  },
]

const router = createRouter({
  history : createWebHistory(),
  routes
})

export default router;