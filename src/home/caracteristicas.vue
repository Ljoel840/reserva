<template>
	<section id="caracteristicas">
		<h1>Características</h1>
		<div class="separador"></div>
		<div class="texto">
			<h3>La mejor experiencia para manejar los turnos en tus establecimientos preferidos. <strong>ReserVA</strong>, te ofrece una solución simple para planificar tu tiempo.</h3>
			<h3>Excelente para gimnasios, boxes,  médicos, nutricionistas, laboratorios, peluquerías, spa y todo negocio en general que requiera programación de citas.</h3>
		</div>
		<div class="contenedor">
			<div class="div1">
				<img class='iconos' src="@/assets/i_facil.png" alt="Icono fácil">
				<span>
					<h2>Fácil y Simple</h2>
					<p>Con un diseño sencillo e intuitivo, harás más rápido tus reservas</p>
				</span>
			</div>
			<div class="div2">
				<img class='iconos' src="@/assets/i_tiempo.png" alt="Icono tiempo">
				<span>
					<h2>Ahorra tiempo</h2>
					<p>Sin perder tiempo en colas ni en llamadas</p>
				</span>
			</div>
			<div class="div3">
				<img src="@/assets/pantallas.jpg" alt="">
			</div>
			<div class="div4">
				<img class='iconos' src="@/assets/i_seguridad.png" alt="Icono seguro">
				<span>
					<h2>Seguro</h2>
					<p>Tus datos estarán seguros en servidores con integridad y confiabilidad</p>
				</span>
			</div>
			<div class="div5">
				<img class='iconos' src="@/assets/i_tienda.png" alt="Icono tienda">
				<span>
					<h2>Negocios</h2>
					<p>Con más establecimientos y tiendas cada día</p>
				</span>

			</div>
		</div>
	</section>
</template>
<script>
export default {
	name:'caracteristicas'
}
</script>
<style scoped>

	section{
		width: 70%;
		margin: 30px auto
	}
	h1{
		font-size:3em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #32363f
	}
	h2{
		font-size:1.5em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #FF6600
	}
	h3{
		font-size:1.5em;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #9b9b9b
	}
	p{
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		color: #7c7c7c
	}
	strong{
		font-family: sans-serif;
		font-weight: bold;
		font-size:1.1em;

	}
	/* .texto	{
		max-width: 500px;
		margin-left: 0;
		margin-right: 0;
		margin: auto;
	} */
	.contenedor{
		margin-top: 30px;
		margin-bottom: 30px;
		display: grid;
		grid-template-columns: 200px 1fr 200px;
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.div1 { grid-area: 1 / 1 / 2 / 2; }
	.div2 { grid-area: 2 / 1 / 3 / 2; }
	.div3 { grid-area: 1 / 2 / 3 / 3; }
	.div4 { grid-area: 1 / 3 / 2 / 4; }
	.div5 { grid-area: 2 / 3 / 3 / 4; }

	.div1, .div2 {
		justify-self: right;
	}


	.div3 img {
		max-width: 600px;
		min-width: 200px;
		width: 100%;
	}
	.iconos {
		width: 100px;
	}

	.separador{
		width: 80px;
		height: 4px;
		background-color: #FF6600;
		margin: 10px auto;
	}

	@media only screen and (max-width: 700px) {
		section{
			width: 100%;
		}
		.contenedor{
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 200px .5fr 200px;
		}
		.div1 { grid-area: 1 / 1 / 2 / 2; }
		.div2 { grid-area: 1 / 2 / 2 / 3; }
		.div3 { grid-area: 2 / 1 / 3 / 3; }
		.div4 { grid-area: 3 / 1 / 4 / 2; }
		.div5 { grid-area: 3 / 2 / 4 / 3; }

		.div3 img {
		width: 100%;
	}
	}

</style>