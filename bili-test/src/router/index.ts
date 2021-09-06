import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/user/:id',
    name:'User',
    component:() => import('../views/User.vue'),
    children:[
      {path:'zhuye',name:'Zhuye',component:()=>import('../components/user/zhuye.vue')},
      {path:'dongtai',name:'Dongtai',component:()=>import('../components/user/dongtai.vue')},
      {path:'tougao',name:'Tougao',component:()=>import('../components/user/tougao.vue')},
      {path:'pindao',name:'Pindao',component:()=>import('../components/user/pindao.vue')},

    ]
  },
  {
    path:'/video/:id/',
    name:'Video',
    component:() => import('../views/Video.vue'),
  },
  {
    path:'/upload',
    name:'Upload',
    component:() => import('../views/Upload.vue'),
    meta:{
      title:"创作中心 - 哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~"
    }
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/Login.vue'),
    meta:{
      title:'哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili'
    }
  },
  {
    path:'/register',
    name:'Register',
    component:() => import('../views/Register.vue'),
    meta:{
      title:'哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili'
    }
  },
  {
    path:'/search',
    name:'Search',
    component:()=>import('../views/Search.vue')
  },
  {
    path:'/404',
    component:() => import('../views/404.vue'),
    name:'404',
    meta:{
      title:'出错啦! - bilibili.com'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,form,next) => {
  console.log(to);
  if(to.matched.length === 0){
    next('/404');
  }
  document.title = to.matched[0].meta.title + '';
  
  next();
})

export default router
