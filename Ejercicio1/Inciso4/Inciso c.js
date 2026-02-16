// índice compuesto sobre los campos de tags y visitas
db.usuarios.createIndex({ tags: 1, visitas: 1 })