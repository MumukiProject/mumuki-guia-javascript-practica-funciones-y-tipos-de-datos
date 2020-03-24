Ahora que ya podemos escribir nuestros cartelitos identificatorios grandes y chicos, queremos una **nueva** función que nos dé el cartelito de tamaño óptimo: 

* si nombre y apellido tienen, en total, más de 15 letras, queremos un cartelito corto;
* de lo contrario, queremos un cartelito largo.

> Escrbí la función `escribirCartelitoOptimo` que tome un título, un nombre y un apellido, y utilizando `escribirCartelito` genere un cartelito corto o largo, según las reglas anteriores. Ejemplo: 
> 
> ```javascript
> ム escribirCartelitoOptimo("Ing.", "Carla", "Toledo")
> "Ing. Carla Toledo"
> ム escribirCartelitoOptimo("Dr.", "Estanislao", "Schwarzschild")
> "Dr. Schwarzschild"
> ```
>
> :memo: Te dejamos en la biblioteca la función  `escribirCartelito` que hiciste antes. ¡Usala cuando necesites!