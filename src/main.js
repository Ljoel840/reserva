import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import estilos from './assets/estilos.css'
 
Vue.use(VueAxios, axios, estilos)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	mounted () {
		window.addEventListener('resize', () => {
			this.$store.commit('cambiarAncho')
		}, true)
	}
}).$mount('#app')
