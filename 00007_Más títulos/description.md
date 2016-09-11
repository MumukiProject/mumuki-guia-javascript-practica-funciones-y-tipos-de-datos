Ah, ¡pero no tan rápido! Hay veces en que queremos sólo el título y el apellido, sin el nombre.   

Por eso ahora nos toca mejorar nuestra función de forma que reciba 4 párámetros: 

* El título
* El nombre y el apellido, como hasta ahora
* Un booleano que nos indique si queremos un cartelito corto con sólo título y apellido, o uno largo, como hasta ahora. 


> Modificá la función `generarCartel`, de forma que se comporte como se describe arriba. Ejemplo: 
> 
> ```javascript
> ム generarCartel("Lic.", "Tomás", "Peralta", true)
> "Lic. Peralta"
> ム generarCartel("Ing.", "Dana", "Velázquez", false)
> "Ing. Dana Velázquez"
> ```