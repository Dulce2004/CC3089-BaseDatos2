// índice compuesto sobre los campos de tags y visitas
db.usuarios.createIndex({ "preferencias.color": 1, cantidad_amigos: 1 })