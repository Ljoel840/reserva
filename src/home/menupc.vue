<template>
	<header>
		<img class='logoArriba' src="@/assets/logo_reserva.png" alt="logo ReserVa">
			<button href="" class="iconMenu" @click="menucel=!menucel" v-show="ancho<=max">&#9776;</button>
			<nav>
				<span class="barraMenu" v-if="!menucel" >
					<a href="#caracteristicas" @click="cerrarMenu()">Características</a>	
					<a href="#funcionamiento" @click="cerrarMenu()">Funcionamiento</a>	
					<a href="#descargar" @click="cerrarMenu()">Descargar</a>
					<a href="#contacto" @click="cerrarMenu()">Contáctanos</a>
				</span>
			</nav>
	</header>
</template>
<script>
export default {
	name:'menupc',
	props: {
		menuTipo: Boolean
	},

	data() {
		return {
			max:850,
			menucel:false
			
			}
	},
	created() {
		this.menucel=this.menuTipo

	},
	computed:{
		ancho(){
			return this.$store.state.ancho
		},
	},
	methods:{
		cerrarMenu(){
			if (this.ancho<=this.max) {
				this.menucel=!this.menucel
			}
		}

	}
}

</script>
<style scoped>
	header {
	position: absolute;
	top: 40px;
	width: 100%;
	text-align: left;
}
nav {
	display: flex;
	justify-content: center;
	width: 100%;

}
.barraMenu{
	overflow: hidden;
	/* margin-top: 25px; */
	margin-left: 5vw;
	
}

.barraMenu a{
	float: left;
  	display: block;
	padding: 10px 20px;
	text-decoration: none;
	color: #fff;
}

.barraMenu a:hover{
	background-color: #FF6600;
}


.logoArriba{
	width: 200px;
	margin-left: 20vw;
	
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
@media only screen and (max-width: 1020px) {
	nav{
		width: 100%;
	}
	nav img{
		margin-left: 20px;
	
	}
}
@media only screen and (max-width: 850px) {

	nav {
		display:block;

	}
	nav img{
		float: left;
	
	}
	.barraMenu{
		position: absolute;
		width: 100%;
		background-color: rgba(0,0,0,.8);
		z-index: 10;
		margin: 0;
		height: auto;
		padding: 20px 0;
	}
	.barraMenu a{
	    float: none;
	    display: block;
    	text-align: center;
		right: 0;
	}


}

</style>