// Análisis de consulta b, con índices: Usuarios que han comprado "Producto 1" en la última semana
var haceUnaSemana = new Date();
haceUnaSemana.setDate(haceUnaSemana.getDate() - 7);

db.usuarios.find({
    historial_compras: {
        $elemMatch: {
            producto: "Producto 1",
            fecha: { $gte: haceUnaSemana }
        }
    }
}).explain("executionStats")