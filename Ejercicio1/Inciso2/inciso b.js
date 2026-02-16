// b. Usuarios que hayan comprado el "Producto 1" en la última semana

//--Ejecutar primero solo este código--
// Definir la fecha de hace una semana
var haceUnaSemana = new Date();
haceUnaSemana.setDate(haceUnaSemana.getDate() - 7);

// Ver quiénes son (Nombre y su historial de compras)
db.usuarios.find(
    { 
        historial_compras: { 
            $elemMatch: { 
                producto: "Producto 1", 
                fecha: { $gte: haceUnaSemana } 
            } 
        } 
    },
    { nombre: 1, "historial_compras.$": 1 } // El "$" muestra solo la compra que coincidió
).limit(3)

//--Ejecutar después solo este código--
// Ver cuántos son en total
db.usuarios.countDocuments({ 
    historial_compras: { 
        $elemMatch: { 
            producto: "Producto 1", 
            fecha: { $gte: haceUnaSemana } 
        } 
    } 
})