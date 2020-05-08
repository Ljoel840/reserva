<template>
	<article>
		<span class="encabezado">
			<div class="imagen"></div>
			<img class='logoArriba' src="@/assets/logo_reserva.png" alt="logo ReserVa" @click="volver()">
		</span>
	
			<h1>Descarga ReserVA</h1>
			<div class="separador"></div>
			<h3>Disponible para Android y iOS</h3>


			<span class="contenedor">
				<a :ref="android" class="android" v-if="android" target="_blank">
					<h2>Clickea en la imagen para ir a la Tienda </h2>
				</a>
				<div class="android" v-else><h2>Próximamente en GooglePlay </h2></div>
				<a :ref="ios" class="ios" v-if="ios" target="_blank">
					<h2>Clickea en la imagen para ir a la Tienda </h2>
				</a>
				<div class="ios" v-else><h2>Próximamente en Apple Store </h2></div>
				<img  class="phone" src="@/assets/smartphone.png" alt="smartphone Reserva">
			</span>
		<h2 style="color: #9b9b9b; padding-bottom:0">¿Quieres ver un video de su funcionamiento?</h2>
		<button class="boton" @click="ir('Formulario')">PRESIONA AQUÍ</button>


	</article>
</template>
<script>
import extraer from './extraer'

export default {
	name:'descargar',
	data() {
		return {
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
	},
	methods:{
		volver(){
			this.$router.push('Home')
		},
		ir (pag) {
			// e.preventDefault()
			this.$router.push({
				name: pag, 
			}).catch(() => {})
		},

	}
}
</script>
<style scoped>
    
	section {
		max-width: 400px;
		margin: 5em auto;
		/* background-color: #000; */
		/* border: 5px solid #CC9933; */
		/* background-image: url('../assets/img/logo_awc_transparente.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 60%; */
	}

	h1{
		font-size:3em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #32363f
	}

	h2 {
        font-size: 1.5em;
        font-weight: normal;
        padding: 1em 0;
        color: #fff;
        justify-content: center;
    }
	h3{
		font-size:1.5em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #9b9b9b;
		margin: 0
	}



    span {
        color: #000;
        display: block;
        margin: .5em 0;
    }

    p {
        color: #9b9b9b;
        text-align:center;
        margin: 2em auto;
    }

    strong {
        color: red;
        font-weight: normal;
        font-size: 1em;
    }


	.encabezado{
		width: 100%;
		height: 200px;
		background: rgb(199,199,199);
		background: radial-gradient(circle at 95% 90%, rgba(199,199,199,1) 0%, rgba(46,50,59,1) 80%);
		text-align: left;
		margin: 0;
	}
	.imagen{
		height: 200px;
		top: 0;
		background-image: url("../assets/p_home.png");
		min-height: 200px;
		background-attachment: fixed;
		background-position: right top;
		background-repeat: no-repeat;
		background-size: 30%;
	}
	.logoArriba{
		position: absolute;
		top: 10px;
		width: 200px;
		margin-left: 20vw;
		margin-top: 20px;
		cursor: pointer;
		
	}

	.contenedor{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		
	}

	a{
		width: 500px;
		height: 500px;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}
	div{
		width: 500px;
		height: 500px;
		display: flex;
		justify-content: center;
	}

	.android{
		background-color: #fff;
		background-image: url("../assets/i_android_verde.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 30%;
		border: 2px solid #a4c538;
	}

	.ios{
		background-color: #999;
		background-image: url("../assets/i_ios_blanco.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 30%;
		align-items: flex-end;
		border: 2px solid #999;

	}
	.ios:hover h2{
		color: #999;
	}
	.android:hover h2{
		color: #fff;
	}
	.android h2{
		color: #a4c538;
	}
	.android:hover{
		background-image: url("../assets/i_android_blanco.png");
		background-color: #a4c538;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

	}

	.ios:hover{
		background-color: #fff;
		background-image: url("../assets/i_ios_gris.png");
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		
	}



	.phone{
		min-height: 250px;
		max-height: 350px;
		position:absolute;
		margin-top: 75px;

	}

	.separador{
		width: 80px;
		height: 4px;
		background-color: #FF6600;
		margin: 10px auto;
	}
    .spinner {
        margin: 2em auto;
    }

    .mensaje {
        margin: 5em auto;
    }

    .boton {
        display: block;
        width: 150px;
        margin: 2em auto;
        border: 2px solid #FF6600;
        /* background-color:#000; */
		border-radius: 30px;
        color: #FF6600;
		padding: 10px;
		outline:none;
		cursor: pointer;
    }
    .boton:hover {
        background-color: #000;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.boton:active {
		transform: translate(2px, 2px);
    }


    @media (max-width: 900px) {
		article{
		width: 100%;
		margin: 0 auto;
		}

    }

	@media only screen and (max-width: 700px) {
		section {
			width: 100%;
			max-width: 300px;
			margin: auto;
		}
		.imagen{
			background-position: right 50px;
			background-repeat: no-repeat;
			background-size: 50%;
		}

	}

	@media (max-width: 1000px) {
		.phone{
		height: 140px;
		margin-top: 380px;
	}

    }

</style>