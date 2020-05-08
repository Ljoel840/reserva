<template>
	<article>
		<section class="principal">
			<button class="arriba" v-show="aparecer" @click="irArriba()"><i class="fa fa-caret-up" aria-hidden="true"></i></button>
			<div class="imagen"></div>
			<menupc :menuTipo=true v-show="ancho<=max"/>
			<menupc :menuTipo=false v-show="ancho>max"/>
	
			<div class="textoHeader">
				<h1>El tiempo en tus manos</h1>
				<p>Tu propia aplicación para gestionar las reservas de turnos de tus sitios favoritos</p>
					<a href="#caracteristicas" class="boton">Leer Más</a>
					<a href="#descargar" class="boton">Descargar</a>
			</div>
			<img class="curve" src="@/assets/b_curve.png" alt="curva blanca">
			<caracteristicas/>
			<div class="imagenSeparador"></div>
			<funcionamiento/>
			<div id="prueba">
				<descargas :android="android" :ios="ios" />
			</div>
			<contacto/>
			
			<p_footer :datos="datosRedes" v-if="datos.length>0" />
		</section>
	</article>
</template>
<script>
import caracteristicas from './caracteristicas.vue'
import funcionamiento from './funcionamiento.vue'
import descargas from './descargas.vue'
import contacto from './contacto.vue'
import p_footer from './p_footer.vue'
import menupc from './menupc.vue'
import extraer from './extraer'

export default {
	name: 'Home',
	components:{
		caracteristicas,
		funcionamiento,
		descargas,
		contacto,
		p_footer,
		menupc,
	
	},
	data() {
		return {
			datosRedes:[],
			menuTipo:false,
			aparecer:true,
			max: 850,
			pag:'/',
			datos:[],
			descargas:[],
			android:'',
			ios:'',
			error: null,
			cargando: true
		}
	},
	created() {
		extraer(this)
		
		// if (this.$route.redirectedFrom==='/descargar'){
		// 	// var e = document.getElementById("prueba");
		// 	// var y = e.scrollTop;
		// 	// console.log('valor de y:'+y)
		// 	var tope=0
		// 	if (screen.width < 700){
		// 		tope=5400
		// 	}else if (screen.width < 845){
		// 		tope=3800
		// 	}else if (screen.width < 1375){
		// 		tope=3500
		// 	}else {
		// 		tope=3000
		// 	}

		this.irArriba()
		// }
	},
	computed:{
		ancho(){
			return this.$store.state.ancho
		},
	},
	methods:{
		irArriba(){
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
			
		}
	}
}
</script>
<style scoped>
article{
	margin: 0;
	padding: 0;
	width: 100%;
}

.principal{
	/* top: 0;
	position: absolute; */
	width: 100%;
	height: 900px;
	background: rgb(199,199,199);
	background: radial-gradient(circle at 95% 90%, rgba(199,199,199,1) 0%, rgba(46,50,59,1) 80%);
}

.imagen{
	height: 100%;
	background-image: url("../assets/p_home.png");
	min-height: 500px;
	background-attachment: fixed;
	background-position: right bottom;
	background-repeat: no-repeat;
	background-size: 55%;
}
.textoHeader{
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	top: 300px;
	left: 10vw;
	max-width: 500px;
}

.textoHeader h1{
	color: #fff;
	font-size: 2.5em;
	font-family: 'Raleway', sans-serif;
	font-weight: 300;
}


.textoHeader p{
	color: #fff;
	font-size: 1.3em;
	margin-bottom: 2em;
	font-family: 'Raleway', sans-serif;
	font-weight: 300;

}

.boton {
	width: 100px;
	padding: 10px 30px;
	margin: 10px;
	text-decoration: none;
	border-radius: 30px;
	background-color: #FF6600;
	color: #FFf;
}

.boton:hover {
	background-color: #000;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.boton:active {
	transform: translate(2px, 2px);
}

.curve {
	width: 100%;
	margin-top: -250px
}

.imagenSeparador{
	background-image: url("../assets/f_separador.jpg");
	width: 100%;
	min-height: 500px;
	background-attachment: fixed;
	background-position: right bottom;
	background-repeat: no-repeat;
	background-size: 100% auto;

}
.iconMenu {
	border: none;
	background: transparent;
	text-decoration: none;
	color: #fff;
	outline:none;
	font-size: 1.5em;
	position: absolute;
	right: 10px;
}

.arriba{
	padding:10px 15px;
	background: #ff6600;
	opacity: .8;
	font-size:20px;
	color:#fff;
	cursor:pointer;
	position: fixed;
	bottom:20px;
	right:20px;
	border-radius: 30px;
	border-color: #fff;
	outline:none;
	z-index: 1;
}

@media only screen and (max-width: 850px) {
	.principal{
		height: 600px;
	}
	.textoHeader{
		top: 200px;
		left: 0vw;
		padding: 0 10px;
		max-width: 500px;
	}
	.imagen{
		height: 600px;
		min-height: 500px;
		background-size: 80%;
		background-position: center 150px;

	}
	.imagenSeparador{
		background-size: 700px;
		background-position: center;
	}
	.curve{
		display: none;
	}
}
</style>