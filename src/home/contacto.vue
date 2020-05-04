<template>
	<section id="contacto">

		<!-- <label>
            <span>A través de WhatsApp</span>
            <a href="https://api.whatsapp.com/send?phone=59896414738" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/whatsapp.png" alt="Logo de WhatsApp">
                <span>Has clic aquí para enviarnos un WhatsApp</span>
            </a>
        </label> -->

		<h1>Contáctanos</h1>
		<div class="separador"></div>

        <p>
            Si eres propietario de un negocio o un local escríbenos y te contactaremos 
        </p>
		<label v-for="c in campos" :key="c.idEnc" v-show="!enviado">
			<span>{{c.titulo}} <strong>*</strong></span>
			<input v-if="c.tipo === 'e'" v-model="c.valor" type="email" placeholder="Correo Electrónico" spellcheck="false">
			<textarea v-if="c.tipo === 't'" v-model="c.valor" rows="3" :placeholder="c.titulo"></textarea>
			<input v-if="c.tipo === 'p'" v-model="c.valor" type="phone" placeholder="Teléfono" spellcheck="false">
			<input v-if="c.tipo === 'n'" v-model="c.valor" type="number" placeholder="0">
			<input v-if="c.tipo === 'f'" v-model="c.valor" type="date">
			<input v-if="c.tipo === 'h'" v-model="c.valor" type="time">
		</label>
		<!-- <spinner-circular v-if="cargando"/> -->
		<span v-if="!cargando && !enviando && !enviado" class="obl">Los campos con (<strong>*</strong>) son obligatorios</span>
		<span v-if="error" class="error">{{error}}</span>
		<spinner-circular v-if="enviando" class="spinner"/>
		<button v-else-if="!cargando && !enviado" @click="enviar()" aria-label="Enviar" class="accion">ENVIAR</button>
		<span v-if="enviado" class="mensaje">Muchas gracias por contactarse</span>
		<!-- <button v-if="enviado" class="accion" @click="volver()">Volver</button> -->
	</section>
</template>
<script>
import extraer_contacto from './extraer_contacto'

export default {
	name:'contacto',
	data: () => ({
        cargando: true,
        proyectoEnc: 'reserva',
        contactoEnc: null,
        campos: [],
        version: 0,
        error: null,
        enviando: false,
        enviado: false
    }),
    async created () {
        try {
            const formulario = await extraer_contacto (this.proyectoEnc)
            this.contactoEnc = formulario.contactoEnc
            this.campos = formulario.campos
        }
        catch (error) {
            this.error = error
        }
        this.cargando = false
	},
	methods: {
        async enviar () {
            try {
                this.error = null
                this.enviando = true
                await enviar ({
                    proyectoEnc: this.proyectoEnc,
                    contactoEnc: this.contactoEnc,
                    campos: this.campos
                })
                this.enviado = true
            }
            catch (error) {
                this.error = error
            }
            this.enviando = false
        },
        volver () {
            this.$router.go(-1)
        }
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
        color: #9b9b9b;
        justify-content: center;
    }

    label {
        display: flex;
        flex-direction: column;
        animation: bajar .3s ease;
        margin: .5em auto;
        align-items: flex-start;
    }

    a {
        text-decoration: none;
        display: grid;
        grid-template-columns: 60px auto;
        grid-gap: 1em;
        padding: 0 2em 0 0;
        transition: all .3s ease;
        outline: 1px solid transparent;
    }

    a span {
        margin: auto;
    }

    a:hover,
    a:focus {
        outline: 1px solid rgb(102, 86, 51);
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

    .error {
        color: red;
    }

    input,
    textarea {
        font-size: 1em;
        width: 100%;
        padding: .5em;
		background-color: #fff;
		border-top: 2px solid rgba(46,50,59,1);
		/* border-radius: 5px; */
		color: rgb(54, 54, 54)
    }
	::placeholder {
		font-size: 16px;
		font-family: 'Raleway', sans-serif;
	}

    .obl {
        color: #FF6600;
        font-size: 1em;
        margin: 1em auto;
        text-align: left;
    }

    .accion {
        display: block;
        width: 150px;
        margin: 2em auto;
        border: 2px solid #FF6600;
        /* background-color:#000; */
		border-radius: 30px;
        color: #FF6600;
        padding: 10px;
    }
	.separador{
		width: 80px;
		height: 4px;
		background-color: #FF6600;
		margin: 10px auto;
	}


    .accion:hover {
        background-color: #000;
    }

    .spinner {
        margin: 2em auto;
    }

    .mensaje {
        margin: 5em auto;
    }

    @keyframes bajar {
        from {
            opacity: 0;
            transform: translateY(-1em);
        }
    }

    @media (max-width: 900px) {
        article > * {
            width: 80%;
        }
		article{
		width: 100%;
		margin: 1em auto;
		}

    }

	@media only screen and (max-width: 700px) {
		section {
			width: 100%;
			max-width: 300px;
			margin: auto;
		}

	}

</style>