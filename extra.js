/*<hidden-for-student@*/
// Ver https://github.com/MumukiProject/mumuki-apendice-imperativa-javascript/blob/master/biblioteca.js

// =============
// Lección 1 y 2
// =============
/*@hidden-for-student>*/

// Nos dice cuan largo es un string
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4
function longitud(unString) /*<elipsis-for-student@*/ {
  return unString.length;
} /*@elipsis-for-student>*/

// Convierte una palabra en mayúsculas
//
// Por ejemplo:
//
//  ム convertirEnMayuscula("hola")
//  "HOLA"
function convertirEnMayuscula(unString) /*<elipsis-for-student@*/ {
  return unString.toUpperCase()
} /*@elipsis-for-student>*/

// Nos dice si unString empieza con otroString
//
// Por ejemplo:
//
//  ム comienzaCon("hola todo el mundo", "hola todo")
//  true
function comienzaCon(unString, otroString) /*<elipsis-for-student@*/ {
  return unString.startsWith(otroString);
} /*@elipsis-for-student>*/