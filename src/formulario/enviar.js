

import axios from 'axios'

export default (entrada) => new Promise ((resolve, reject) => {
    // Validaciones correspondientes
    let error = null

    entrada.campos.forEach(campo => {
        if (!campo.valor || campo.valor === null || campo.valor === undefined || campo.valor === '') {
            error = `${campo.titulo} está vacío`
        }
    })

    if (!error) {
        const reg = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)|(\s*))$/
        entrada.campos.forEach(campo => {
            if (campo.tipo === 'e') {
                if (!reg.test(campo.valor)) {
                    error = 'Formato de email no válido'
                }
            }
            if (campo.tipo === 'p') {
                const num = campo.valor.split('').filter(digito => {
                    return '0123456789.-()+*'.split('').includes(digito)
                }).join('')
                if (num.length === 0 || parseInt(num) < 1000000 ) {
                    error = 'Teléfono no válido'
                }
            }
        })
    }

    if (error) {
        reject(error)
    } else {
		entrada.campos.forEach(campo => {
			if (campo.titulo==='Mensaje') {
				campo.valor='<Video> ' + campo.valor
			}
		})
        axios
        .post(`${process.env.API_CONTACT_URL}dfs60012`, entrada)
        .then(response => {
			if ('error: '+response.data.ErrorSDT.ErrorCode)
            if (!response.data) {
                reject('No hay retorno de login')
            } else if (!response.data.ErrorSDT) {
                reject('No hay retorno del error')
            } else if (response.data.ErrorSDT.ErrorCode === 0) {
                resolve()            
            } else {
                reject(response.data.ErrorSDT.ErrorDescription)
            }
        })
        .catch(error => {
			reject(error)
        })
    }
})