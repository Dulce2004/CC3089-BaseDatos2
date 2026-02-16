# Laboratorio 02 - Transformación de Datos e Índices en MongoDB

- **Curso:** CC3089 - Base de Datos 2
- **Integrantes:**
    - Dulce Ambrosio - 231143
    - Daniel Chet - 231177
    - Javier Linares - 231135

##

 El objetivo principal es familiarizarse con el entorno de MongoDB, el uso de la consola MongoDB Shell, y comprender profundamente el funcionamiento y el impacto de los índices en el rendimiento de las consultas.

El laboratorio se divide en dos ejercicios prácticos:
1.  **Rendimiento de Índices:** Análisis detallado de cómo MongoDB ejecuta consultas, comparando el rendimiento antes y después de aplicar índices estratégicos.
2.  **Carga y Transformación de Datos:** Uso de MongoDB Database Tools y comandos de consola para importar, transformar y exportar datos.

## Estructura del Repositorio

El código está organizado siguiendo la estructura del enunciado del laboratorio:

```
CC3089-BaseDatos2/
│
├── Ejercicio1/
│   ├── Inciso1/       # Generación de datos aleatorios (100k documentos)
│   │   └── generar_usuarios.js
│   │
│   ├── Inciso2/       # Consultas base solicitadas en el enunciado
│   │   ├── iniciso a.js  # Usuarios activos con > 500 puntos
│   │   ├── inciso b.js   # Compra de "Producto 1" en la última semana
│   │   ├── inciso c.js   # Con etiqueta "tag2" y > 100 visitas
│   │   └── inciso d.js   # Color azul y 1000-2000 amigos
│   │
│   ├── Inciso3/       # Análisis de rendimiento SIN índices 
│   │   ├── Consulta a.js
│   │   ├── Consulta b.js
│   │   ├── Consulta c.js
│   │   └── Consulta d.js
│   │
│   ├── Inciso4/       # Creación de índices compuestos
│   │   ├── Inciso a.js   # Índice sobre { activo: 1, puntos: 1 }
│   │   ├── Inciso b.js   # Índice sobre { "historial.producto": 1, "historial.fecha": 1 }
│   │   ├── Inciso c.js   # Índice sobre { tags: 1, visitas: 1 }
│   │   └── Inciso d.js   # Índice sobre { "preferencias.color": 1, cantidad_amigos: 1 }
│   │
│   ├── Inciso5/       # Análisis de rendimiento CON índices 
│   │   ├── Consulta a.js
│   │   ├── Consulta b.js
│   │   ├── Consulta c.js
│   │   └── Consulta d.js
│   │
│   ├── Inciso6/       # Prueba de escalabilidad (carga adicional y re-análisis)
│   │   ├── generar_usuarios.js # Script para añadir 50k documentos más
│   │   └── Consulta b.js       # Re-evaluación de una consulta clave
│   │
│   └── Inciso7/       # Consulta avanzada multi-criterio y su análisis
│       └── Inciso 7.js
│
├── Ejercicio2/       # Carga y Transformación de Datos
│   ├── peliculas.json            # Datos de películas para importar/transformar
│   ├── vehiculos.json            # Datos de vehículos en formato JSON
│   ├── vehiculos_brand_stats.json # Estadísticas por marca de vehículos
│   └── vehiculos_top_models.csv  # Top modelos de vehículos en formato CSV
│
└── README.md
```

## Instrucciones de Ejecución (Ejercicio 1)

Para reproducir los resultados de este laboratorio, se recomienda utilizar MongoDB Shell (mongosh) o la consola integrada en MongoDB Compass, conectándose a la base de datos `Lab2`.

**Pasos sugeridos:**

1.  **Generar la data (Inciso 1.1):**
    Ejecuta el script `Ejercicio1/Inciso1/generar_usuarios.js` en la consola para poblar la colección `usuarios` con 100,000 documentos iniciales.

2.  **Ejecutar consultas y análisis (Incisos 1.2 - 1.5):**
    Navega por las carpetas y copia/pega el contenido de los archivos `.js` en la consola `mongosh` en el orden secuencial (primero las consultas base, luego el análisis sin índices, la creación de índices y finalmente el análisis con índices).

3.  **Prueba de escalabilidad (Inciso 1.6):**
    Ejecuta el script `Ejercicio1/Inciso6/generar_usuarios.js` para añadir datos y luego corre la consulta de re-evaluación.

## Herramientas Utilizadas

* **MongoDB Atlas:** Clúster de base de datos en la nube.
* **MongoDB Compass:** Interfaz gráfica para gestionar la base de datos y ejecutar scripts en la consola integrada `mongosh`.
* **MongoDB Shell (mongosh):** Intérprete de comandos para interactuar con la base de datos.
* **JavaScript:** Lenguaje utilizado para los scripts de generación de datos y las consultas.

---
