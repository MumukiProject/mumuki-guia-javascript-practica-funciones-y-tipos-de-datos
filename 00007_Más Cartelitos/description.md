Ah, ¡pero no tan rápido! Algunas veces en nuestro cartelito :name_badge: sólo queremos el título y el apellido, sin el nombre.   

Por eso ahora nos toca mejorar nuestra función de forma que reciba 4 párámetros: 

* El título
* El nombre y el apellido, como hasta ahora
* Un booleano que nos indique si queremos un cartelito corto con sólo título y apellido, o uno largo, como hasta ahora. 


> Modificá la función `escribirCartelito`, de forma que se comporte como se describe arriba. Ejemplo: 
> 
> ```javascript
> ム escribirCartelito("Lic.", "Tomás", "Peralta", true)
> "Lic. Peralta"
> ム escribirCartelito("Ing.", "Dana", "Velázquez", false)
> "Ing. Dana Velázquez"
> ```