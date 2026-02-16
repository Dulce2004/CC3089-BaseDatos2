// a. Usuarios activos con más de 500 puntos. 

//--Ejecutar primero solo este código--
// Mostrar solo nombre, email, puntos y activo. Limitar a 3 resultados.
db.usuarios.find(
    { activo: true, puntos: { $gt: 500 } }, 
    { nombre: 1, email: 1, puntos: 1, activo: 1 }
).limit(3)

//--Ejecutar después solo este código--
// Contar cuántos usuarios cumplen esta condición
db.usuarios.countDocuments({ activo: true, puntos: { $gt: 500 } })