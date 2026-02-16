// Análisis de consulta a: Usuarios activos con más de 500 puntos
db.usuarios.find({
    activo: true,
    puntos: { $gt: 500 }
}).explain("executionStats")