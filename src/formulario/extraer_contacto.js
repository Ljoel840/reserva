/*
    Trae los campos de delfawebs
    para formulario de contacto
*/

import axios from 'axios'

export default (proyectoEnc) => new Promise ((resolve, reject) => {
    axios
    .post(`${process.env.API_CONTACT_URL}dfs60010`,{proyectoEnc})
    .then(response => {
        if (!response.data) {
            reject('No hay retorno de login')
        } else if (!response.data.ErrorSDT) {
            reject('No hay retorno del error')
        } else if (response.data.ErrorSDT.ErrorCode === 0) {
            if (!response.data.FrontDisForm || !response.data.FrontDisForm.campos) {
                reject('No hay campos configurados')
            } else {
                resolve ({
                    contactoEnc: response.data.FrontDisForm.idEnc,
                    campos: response.data.FrontDisForm.campos
                })
            }
        } else {
            reject(response.data.ErrorSDT.ErrorDescription)
        }
    })
    .catch(error => {
        reject(error)
    })
})
