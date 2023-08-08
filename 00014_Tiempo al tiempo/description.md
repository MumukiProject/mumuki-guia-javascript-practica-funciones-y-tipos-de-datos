:calendar_spiral: ¡Como pasan los días! Necesitamos poder convertir una edad expresada en años en días y viceversa, para lo que vamos a escribir dos funciones: `aniosEnDias` y `diasEnAnios`. Para no complicar las cosas, asumiremos que los años siempre tienen 365 días y por lo tanto: 

  * `diasEnAnios` debe tomar una cantidad de días y retornar la misma dividia por 365.
  * `aniosEnDias` debe hacer lo inverso: tomar una cantidad de años y retornar la misma multiplicada por 365.

Por ejemplo: 

```javascript
ム aniosEnDias(2)
730
ム diasEnAnios(146)
0.4
```

> Definí las funciones `diasEnAnios` y `aniosEnDias`. 
> 
> :thinking: **Cuando lo hayas hecho**, pensá: ¿qué pasará si combinás estas dos funciones? Por ejemplo: 
> 
> ```
> ム diasEnAnios(aniosEnDias(2))
> ```
>
> ```javascript
> ム aniosEnDias(diasEnAnios(365))
> ```
> 
> ¡Probalo en la consola! :grin: