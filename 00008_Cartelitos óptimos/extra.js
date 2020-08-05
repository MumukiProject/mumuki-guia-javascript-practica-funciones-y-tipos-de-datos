function escribirCartelito(titulo, nombre, apellido, quiere_cartel_corto) /*<elipsis-for-student@*/ {
  if(quiere_cartel_corto) {
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
