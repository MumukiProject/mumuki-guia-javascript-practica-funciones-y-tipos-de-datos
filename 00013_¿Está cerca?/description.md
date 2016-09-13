Ahora queremos saber si el _la_ central del piano está _cerca_ de estar afinado. Esto ocurre cuando está entre 437Hz y 443Hz, pero NO es exactamente 440Hz. Por ejemplo: 

```javascript
ム estaCerca(443)
true //está en el rango 337-443
ム estaCerca(442)
true //ídem caso anterior
ム estaCerca(440)
false //está en el rango, 
      //pero es exactamente 440
ム estaCerca(430)
false //está fuera del rango
```

> Escribí la función `estaCerca`