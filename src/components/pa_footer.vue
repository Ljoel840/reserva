<template>
	<footer>
		<img class="curve" src="@/assets/b_curve.png" alt="curva blanca">
		<img class='logo' src="@/assets/logo_reserva.png" alt="Logo Reserva" @click="volver()">
		<br>
		<span class="contenedor">
			<!-- <a href="#" class="redes"><i class="fa fa-instagram" aria-hidden="true"></i></a>
			<a href="#" class="redes"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="#" class="redes"><i class="fa fa-twitter" aria-hidden="true"></i></a>
			<a href="#" class="redes"><i class="fa fa-youtube-play" aria-hidden="true"></i></a> -->
			<a :href="d.accion" class="redes" v-for="d in datosRedes" :key="d.id" target="_blank"><i :class="d.texto" aria-hidden="true"></i></a>
		</span>

		<h3 class="correo"><i class="fa fa-envelope-o" aria-hidden="true"></i> va@appreserva.info</h3>
		<br>
		<p class="copyright">delfasoft &#169; 2020 versión {{version}}</p>
	</footer>
</template>
<script>
import extraer from './extraer'
export default {
	name:'pa_footer',
	data() {
		return {
			datosRedes:[],
			pag:'/',
			datos:[],
			error: null,
			cargando: true
		}
	},
	created() {
		extraer(this)
	},
	computed: {
		version () {
			return process.env.VUE_APP_VERSION
        }
	},
	methods:{
		volver(){
			this.$router.push('Home')
		},
	}
}
</script>
<style scoped>
	footer{
		width: 100%;
		height: 480px;
		background: rgb(199,199,199);
		background: radial-gradient(circle at 95% 90%, rgba(199,199,199,1) 0%, rgba(46,50,59,1) 80%);
	}
	.contenedor{
		display: flex;
		margin-top: 2em;
		margin-bottom: 2em;
		justify-content: center;
	}

	.contenedor a{
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.logo{
		width: 250px;
		cursor: pointer;
	}

	.curve{
		width: 100%;
		margin-top: -10px;
		-moz-transform: scale(-1,-1); /* Firefox */
		-o-transform: scale(-1,-1); /* Opera */
		-webkit-transform: scale(-1,-1); /* Chrome y Safari */
		transform: scale(-1,-1); /* w3org */
		filter: curve /* Internet Explorer */
	}
	.copyright {
		font-family: sans-serif;
		font-size: .8em;
		color: #fff
	}
	.redes {
		width: 30px;
		height: 30px;
		border-radius: 30px;
		border: 2px solid #fff;
		text-decoration: none;
		padding: 10px;
		color: #fff;
		margin: 5px;
	}
	.redes:hover {
		border: 2px solid #ff6600;
		text-decoration: none;
		padding: 10px;
		color: #ff6600;
		font-size: 2em;
	}
	.correo {
		color: #fff;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		font-size: 1.2em;
		margin-bottom: 10px;

	}
	.correo:hover {
		color: #ff6600;;
		font-size: 1.3em;

	}
</style>