// índice compuesto sobre historial_compras.producto y historial_compras.fecha
db.usuarios.createIndex({ "historial_compras.producto": 1, "historial_compras.fecha": 1 })