import {createRouter, createWebHistory,RouteRecordRaw} from 'vue-router'

import Tasks from '../views/TasksPage.vue'
import Users from '../views/UsersPage.vue'
import Details from '../views/Details.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/listUsers",
    component: Users,
    name: 'listUsers'
  },
  {
    path:"/listUsers/:id",
    component: Details,
    name: 'usersDetails'
  },
  {
    path: "/listTasks",
    component: Tasks,
    name: 'listTasks'
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