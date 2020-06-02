import axios from 'axios'

export default (componente) => {

    axios.post(`${process.env.API_CONTACT_URL}dfs60024`,{
        proyectoEnc: 'reserva',
        pagina: componente.pag
    })
    .then(response => {
        componente.cargando = false
        if (!response.data) {
            componente.error = 'No hay retorno de login'
        } else if (!response.data.ErrorSDT) {
            componente.error = 'No hay retorno del error'
        } else {
			componente.datos = response.data.frontBlogs
			for (let c in componente.datos) {
				if ((componente.datos[c].titulo.toUpperCase()!='ANDROID')&&(componente.datos[c].titulo.toUpperCase()!='IOS')&&(componente.datos[c].titulo.toUpperCase()!='WEB')){
					componente.datosRedes.push(componente.datos[c].boton)
				}
			}
        }

    })
    .catch(error => {
        componente.cargando = false
        componente.error = error
    })
}
