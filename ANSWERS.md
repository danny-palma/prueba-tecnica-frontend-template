# Análisis Técnico - Respuestas

## Pregunta A: Sincronización de Estado entre Pestañas

El equipo de producto requiere una nueva funcionalidad: si un usuario tiene el dashboard abierto en dos pestañas del navegador y actualiza un filtro en una, la otra pestaña debe reflejar este cambio automáticamente sin recargar la página.

### ¿Qué enfoque técnico propondrías para implementar esto?

 Investigando un pogo descubri existe una Api llamada BroadcastChannel, parece ser la mejor opcion y mas eficiente para este caso,ya que la sincronizacion es entre diferentes pestañas del mismo navegador y segun vi esta Api permite que diferentes pestañas, ventanas de un mismo origen se comuniquen entre sí en tiempo real.

 Enfoque para implementarla :

 1- Crear un custom hook para encapsular la logica de Broadcast Channel, en este hook creamos un new BroadcastChannel() que escuche.

 2- Agregamos el custom hook al dashboard y cuando el usuario actualize un filtro en una pestaña del navegador , la otra pestaña que esta suscrita al mismo canal recibe el evento y actualiza el estado.

### ¿Qué implicaciones tiene tu solución a nivel de cliente y servidor?

- BroadcastChannel funciona en la mayoría de navegadores modernos.
- respuestas inmediatas entre pestañas.
- todo se maneja en el cliente no cambia nada en el servidor.
- mas ligero y rapido que cualquier otra solucion

### Compara brevemente dos estrategias posibles y justifica tu elección final (Costo vs. Beneficio).

 Broadcast Channel API:
  - Se ve una implementacion sencilla, es una api nativa.
  - No tiene costo en el servidor
  - muy rapida 
  
WebSockets :
  - Mas compleja de implementar , haria falta un backend 
  - Costo alto en el servidor porque mantiene conexiones activas y consume recursos
  - mucho mas potente que Broadcast Channel API, pero inecesaria en este caso , su caso de uso es mas como chat en tiempo real y esas cosas.

Broadcast Channel API es la mejor opcion para este caso, solo hace falta sincronizar UI no hay necesidad de implementar WebSockets y consumir recursos del servidor para algo que se puede hacer desde el cliente con pocas lineas de codigo

## Pregunta B: Comportamiento del Ciclo de Vida

Durante las pruebas en el entorno de desarrollo, se observó que el `useEffect` encargado de la carga inicial de datos se ejecuta dos veces consecutivas. Se ha sugerido utilizar un `useRef` para bloquear la segunda ejecución y evitar "peticiones duplicadas".

### ¿Implementarías esta solución en el código? Justifica tu respuesta técnica.

 Este comportamiento de un useEffect que se ejecuta 2 veces en desarrollo es normal , se debe al Stric Mode de React , no es un bug, eso solo pasa en desarrollo no ocurre en produccion, no hay necesidad de utilizar ningun useRef para bloquear la segunda ejecucion , de hecho esto puede traer incluso problemas que no se verian en desarrollo pero si en produccion.

### ¿Qué nos indica este comportamiento sobre el entorno de ejecución de React moderno?

Indica que la app se esta ejecutando en el Stric Mode de React lo cual es bueno, se monta , desmonta y se vuelven a montar los componentes para detectar posibles errores.