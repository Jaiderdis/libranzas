export const tipoIncoporacion = {
    Incorporado: '1',
    NoIncorporado: '2'
  }


  export const validarCriterios = (lista) => {
    const gestion = {
        aprobadas: [],
        rechazadas: []
    }

    lista.map(item => {
        let flug = true;
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                if (item[key] === 'NO CUMPLE') {
                    flug = false
                }

            }
        }
        if (flug) {
            gestion.aprobadas.push(item.libranza)
        } else {
            gestion.rechazadas.push(item.libranza)
        }
    })


    return gestion;



}