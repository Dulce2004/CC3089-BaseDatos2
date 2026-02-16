// Análisis de consulta d, con índices: Usuarios con preferencias de color "azul" y que tienen entre 1000 y 2000 amigos  
db.usuarios.find({
    "preferencias.color": "azul",
    cantidad_amigos: {
        $gte: 1000,
        $lte: 2000
    }
}).explain("executionStats")