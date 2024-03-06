import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import VwWhatsapp from '../views/vw-whatsapp/vw-whatsapp.vue';
//Agregar routes
const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'whatsapp',
    component: VwWhatsapp,
    meta: {
      title: 'WhatsApp'
    }
  },
  { 
    path: "/:pathMatch(.*)*", 
    component: VwWhatsapp,
    meta: {
      title: 'WhatsApp'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
