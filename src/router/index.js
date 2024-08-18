import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/tasks/TasksView.vue'
import TaskView from '@/views/tasks/TaskView.vue'
import TaskCreate from '@/views/tasks/TaskCreate.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/task/:id',
      name: 'task-view',
      component: TaskView,
      props: true
    },
    {
      path: '/task/create',
      name: 'task-create',
      component: TaskCreate
    }
  ]
})

export default router
