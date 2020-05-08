import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
	name: 'Home',
    component: () => import('../home')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import('../formulario')
  },
  {
    path: '/descargar',
    name: 'Descargar',
    component: () => import('../descargar')
  },

  {
    path: '/:ruta',
    redirect: { name: 'Home' }
  },

]

const router = new VueRouter({
  routes
})

export default router
