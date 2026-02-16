// d. Usuarios con preferencias de color "azul" y que tienen entre 1000 y 2000 amigos 

//--Ejecutar primero solo este código--
// Ver quiénes son
db.usuarios.find(
    { 
        "preferencias.color": "azul", 
        cantidad_amigos: { $gte: 1000, $lte: 2000 } 
    },
    { nombre: 1, "preferencias.color": 1, cantidad_amigos: 1 }
).limit(3)

//--Ejecutar después solo este código--
// Ver cuántos son en total
db.usuarios.countDocuments({ 
    "preferencias.color": "azul", 
    cantidad_amigos: { $gte: 1000, $lte: 2000 } 
})