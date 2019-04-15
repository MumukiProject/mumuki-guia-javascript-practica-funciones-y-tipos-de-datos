Cuando se juega al truco, los equipos oponentes alternativamente pueden subir la apuesta. Por ejemplo, si un jugador canta _truco_, otro jugador puede cantarle _retruco_. Obviamente, los puntos que están en juego son cada vez mayores: 

<table class="table table-striped" align="center">
   <tr><th>Canto</th><th>Puntos en juego</th></tr>
   <tr><td>truco</td><td>2</td></tr>
   <tr><td>retruco</td><td>3</td></tr>
   <tr><td>vale cuatro</td><td>4</td></tr>
</table>

> Escribí la función `valorCantoTruco`, que tome el canto y devuelva cuántos puntos vale. 
> 
> ```javascript
> ム valorCantoTruco("retruco")
> 3
> ```
>
> :warning: Asumí que sólo te van a pasar como argumento un string que represente un canto de truco. Por ejemplo, no vamos a probar la función para el caso `valorCantoTruco("zaraza")`