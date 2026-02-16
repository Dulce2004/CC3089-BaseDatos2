// Análisis de consulta c, con índices: Usuarios con la etiqueta "tag2" y que tienen más de 100 visitas
db.usuarios.find({
    tags: "tag2",
    visitas: { $gt: 100 }
}).explain("executionStats")