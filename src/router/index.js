import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/tasks/TasksView.vue'
import TaskView from '@/views/tasks/TaskView.vue'
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
      path: '/tasks/:id',
      name: 'task-view',
      component: TaskView,
      props: true
    }
  ]
})

export default router
