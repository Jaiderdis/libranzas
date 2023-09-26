export const tipoIncoporacion = {
  Incorporado: '1',
  NoIncorporado: '2'
}

export const validarCriterios = (lista) => {
  const gestion = {
    aprobadas: [],
    rechazadas: []
  }

  lista.forEach(item => {
    let flug = true
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
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

  return gestion
}
