function escribirCartelito(titulo, nombre, apellido, quiereCartelCorto) /*<elipsis-for-student@*/ {
  if(quiereCartelCorto) {
    return titulo + " " + apellido;
  }
  else {
    return titulo + " " + nombre + " " + apellido;
  }
} /*@elipsis-for-student>*/
// Nos retorna el texto de un cartelito. El último parámetro determina si va a ser corto o largo
//
// Por ejemplo:
//
//  ム escribirCartelito("Prof.", "Elena", "Chaldú", true)
//  "Prof. Chaldú"
//  ム escribirCartelito("Dra.", "Zelika", "Vera", false)
//  "Dra. Zelika Vera"
