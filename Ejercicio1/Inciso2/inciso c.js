// c. Usuarios con la etiqueta "tag2" y que tienen más de 100 visitas

//--Ejecutar primero solo este código--
// Ver quiénes son
db.usuarios.find(
    { tags: "tag2", visitas: { $gt: 100 } },
    { nombre: 1, tags: 1, visitas: 1 }
).limit(3)

//--Ejecutar después solo este código--
// Ver cuántos son en total
db.usuarios.countDocuments({ tags: "tag2", visitas: { $gt: 100 } })