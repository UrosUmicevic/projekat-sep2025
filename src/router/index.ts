import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import ListView from '@/views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:'Pocetna'
      }
    },
    {
      path:'/:catchAll(.*)',
      redirect:'/'
    },
    {
      path: '/movie/:link',
      name: 'movie',
      component: MovieView,
      meta:{
        title:'Film'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: ListView,
      meta:{
        title:'Lista'
      }
    },
  ],
})

router.beforeEach((to, from, next)=>{
  if(to.meta){
    document.title = `$(to.meta.title) :: PSEP2025`
  }

  next()
})

export default router
