// Consulta para encontrar usuarios activos con más de 500 puntos, al menos 100 visitas y exactamente 3 etiquetas
db.usuarios.find({
    activo: true,
    puntos: { $gt: 500 },
    visitas: { $gte: 100 },
    tags: { $size: 3 } // Exactamente 3 etiquetas
}).explain("executionStats")