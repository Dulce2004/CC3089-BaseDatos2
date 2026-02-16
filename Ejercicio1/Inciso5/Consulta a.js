// Análisis de consulta a, con índices: Usuarios activos con más de 500 puntos
db.usuarios.find({
    activo: true,
    puntos: { $gt: 500 }
}).explain("executionStats")