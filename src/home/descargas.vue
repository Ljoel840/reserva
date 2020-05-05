<template>
	<section id="descargar">
		<div class="contenedor">
		<h1>Descarga ReserVA</h1>
		<div class="separador"></div>
		<h3>Disponible para Android y iOS</h3>
		<h2 v-if="!android && !ios">MUY PRONTO</h2>
		<span class="botones" v-else>
			<a :href="android" v-if="android" target="_blank">
				<i class="fa fa-android" aria-hidden="true"></i>
				<span class="contenedorBoton">
					<font class="texto1">(Google Play)</font>
					<br>
					<font class="texto2">Android</font>
				</span>
			</a>
			<h3 class="pronto" v-else>Pronto para Android</h3>
			<a :href="ios" v-if="ios" target="_blank">
				<i class="fa fa-apple" aria-hidden="true"></i>
				<span class="contenedorBoton">
					<font class="texto1">(Apple Store)</font>
					<br>
					<font class="texto2">iOS</font>
				</span>
			</a>
			<h3 class="pronto" v-else>Pronto para iOS</h3>
		</span>
		</div>
	</section>
</template>
<script>
export default {
	name:'descargas',
	props:{
		android: String,
		ios: String,
	}
}
</script>
<style scoped>

	h1{
		font-size:3em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #fff;
	}

	h2{
		font-size:3em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #fff;
		margin-top: 30px
	}
	h3{
		font-size:1.5em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #fff;
	}
	strong{
		font-family: sans-serif;
		font-weight: bold;
		font-size:1.1em;

	}
	i{
		color: #fff;
		font-size: 2.5em;
	}

	font{
		vertical-align: inherit;
	}
	/* .texto	{
		max-width: 500px;
		margin-left: 0;
		margin-right: 0;
		margin: auto;
	} */
	a {
		display: flex;
		text-decoration: none;
		padding: 5px 15px;
		width: 150px;
		color: #fff;
		border: 2px solid #ffffff;
		border-radius: 30px;
		margin: 10px;
		
	}
	a:hover{
		background-color: #000;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	a:active {
		transform: translate(2px, 2px);
    }

	.botones{
		display: flex;
		margin-top: 20px;
		justify-content: center;
		flex-wrap: wrap;
	}
	.contenedorBoton{
		font-size: 14px;
		padding: 0 10px;
	}
	.texto1{
		font-size: 14px;
	}
	.texto2{
		font-size: 24px;
	}
	.contenedor{
		background-image: url("../assets/f_naranja.png");
		width: 100%;
		min-height: 300px;
		background-attachment: fixed;
		background-position: right bottom;
		background-repeat: no-repeat;
		background-size: cover;
		padding: 80px 0 30px 0;
	}

	.pronto {
		margin-top: 20px
	}
	.separador{
		width: 80px;
		height: 4px;
		background-color: #fff;
		margin: 10px auto;
	}

	@media only screen and (max-width: 700px) {
		.contenedor{
			/* background-attachment: initial; */
			background-size: cover;
		}

	}
</style>