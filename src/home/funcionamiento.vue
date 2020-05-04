<template>
	<section id="funcionamiento">
		<h1>Cómo Funciona</h1>
		<div class="separador"></div>
		<div class="contenedor">
			<div class="div1">
				<img src="@/assets/paso1.png" alt="Paso1 Reserva">
				<h3><span class="color">1</span>Regístrate</h3>
			</div>
			<div class="div2">
				<img src="@/assets/paso2.png" alt="Paso2 Reserva">
				<h3><span class="color">2</span>Sigue el/los lugar/es</h3>
			</div>
			<div class="div3">
				<img src="@/assets/paso3.png" alt="Paso3 Reserva">
				<h3><span class="color">3</span>Selecciona el lugar a reservar</h3>
			</div>
			<div class="div4">
				<img src="@/assets/paso4.png" alt="Paso4 Reserva">
				<h3><span class="color">4</span>Reserva tu turno</h3>
			</div>

		</div>
	</section>
</template>
<script>
export default {
	name:'funcionamiento'
}
</script>
<style scoped>
	section{
		padding: 30px 0;
	}
	h1{
		font-size:3em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #32363f
	}
	h3{
		width: 100%;
		text-align: center;
		padding: 5px ;
		font-size: 1.5em;
		color: #9b9b9b
	}
	strong{
		font-family: sans-serif;
		font-weight: bold;
		font-size:1.1em;

	}
	img {
		width: 100%;
	}
	.contenedor{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.div1, .div2, .div3, .div4{
		max-width: 300px;
		margin: 20px;
	}



	.separador{
		width: 80px;
		height: 4px;
		background-color: #FF6600;
		margin: 10px auto;
	}

	span.color {
		background: #FF6600;
		border-radius: 0.8em;
		-moz-border-radius: 0.8em;
		-webkit-border-radius: 0.8em;
		color: #ffffff;
		display: inline-block;
		font-weight: bold;
		line-height: 1.6em;
		margin-right: 15px;
		text-align: center;
		width: 1.6em; 
	}
</style>