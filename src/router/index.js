import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home.vue'
import Film from '../components/film.vue'
import Cinema from '../components/cinema.vue'
import Login from '../components/login.vue'
import Card from '../components/card.vue'
import Detail from '../components/detail.vue'

import nowPlaying from '../components/nowPlaying'
import comingSoon from '../components/comingSoon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
	  path:"/film",
	  component:Film,
    children:[
      {
        path:'now-playing',
        component:nowPlaying
      },
      {
        path:'coming-soon',
        component:comingSoon
      },
      {
        path:"/",
        redirect:"now-playing"
      }
    ]
    },
    {
      path:"/cinema",
      component:Cinema
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/card",
      component:Card
    },
    {
      path:"/detail/:id",
      component:Detail
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
