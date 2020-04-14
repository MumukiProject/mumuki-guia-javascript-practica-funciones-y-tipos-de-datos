function cuantoCuesta(pulgadas, memoria) {
  if (typeof(pulgadas) !== 'number') {
    throw "el primer argumento de cuantoCuesta debe ser un número"
  }
  if (typeof(memoria) !== 'number') {
    throw "el segundo argumento de cuantoCuesta debe ser un número"
  }
  
  return 60 * pulgadas + 200 * memoria + 1000
}