# Análisis Técnico - Respuestas

# Análisis Técnico - Respuestas

## Pregunta A: Sincronización de Estado entre Pestañas

El equipo de producto requiere una nueva funcionalidad: si un usuario tiene el dashboard abierto en dos pestañas del navegador y actualiza un filtro en una, la otra pestaña debe reflejar este cambio automáticamente sin recargar la página.

### ¿Qué enfoque técnico propondrías para implementar esto?

**Broadcast Channel API**.

Es la forma más sencilla. Básicamente, abres un canal de comunicación directo entre las pestañas. Cuando una cambia el filtro, "grita" el cambio por ese canal y las demás lo escuchan y se actualizan. Es nativo del navegador, así que no hay que instalar nada extra.



### ¿Qué implicaciones tiene tu solución a nivel de cliente y servidor?

*   **Cliente**: Todo pasa en el navegador del usuario. Solo hay que añadir un poco de código para "escuchar" los cambios de las otras pestañas.
*   **Servidor**: **Nada**. El servidor ni se entera. Esto es bueno porque no gastamos recursos del servidor para algo que es puramente visual entre pestañas del mismo usuario.



### Compara brevemente dos estrategias posibles y justifica tu elección final (Costo vs. Beneficio).

1.  **Broadcast Channel (Mi elección)**:
    *   *Por qué*: Es gratis (viene con el navegador), rápido y fácil de usar. Es como usar un walkie-talkie entre habitaciones de la misma casa.
2.  **WebSockets**:
    *   *Por qué no*: Es demasiado complejo para esto. Sería como llamar por teléfono a una centralita en otro país para hablar con alguien que está en la habitación de al lado. Solo vale la pena si quieres sincronizar el móvil con el ordenador.

**Resumen**: Me quedo con Broadcast Channel porque es la herramienta justa para el trabajo: simple y efectiva.


---

## Pregunta B: Comportamiento del Ciclo de Vida

Durante las pruebas en el entorno de desarrollo, se observó que el `useEffect` encargado de la carga inicial de datos se ejecuta dos veces consecutivas. Se ha sugerido utilizar un `useRef` para bloquear la segunda ejecución y evitar "peticiones duplicadas".

### ¿Implementarías esta solución en el código? Justifica tu respuesta técnica.

**No, no lo haría.**

Que se ejecute dos veces es algo que React hace a propósito cuando estás desarrollando (en modo estricto). Es como si React hiciera un "simulacro" de montar y desmontar el componente para ver si dejaste algo sucio (como una conexión abierta).

Intentar bloquearlo con un `useRef` es pelear contra la herramienta. En producción (cuando la app esté publicada) esto no pasa, así que no hay de qué preocuparse.



### ¿Qué nos indica este comportamiento sobre el entorno de ejecución de React moderno?

Nos dice que React se está volviendo más robusto.

Básicamente, React quiere asegurarse de que nuestros componentes sean "resistentes". Si un componente puede sobrevivir a ser montado y desmontado rápidamente sin romperse, significa que está bien hecho y listo para funciones modernas (como que la interfaz no se congele mientras carga datos). Es un test de calidad automático.