import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ancho: window.innerWidth,
	  },
	  mutations: {
		cambiarAncho (state) {
			state.ancho = window.innerWidth
		},
	  },
	  actions: {
	  },
	  modules: {
	  }
})
