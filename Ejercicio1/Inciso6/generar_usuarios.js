// Definimos la cantidad de usuarios a crear
var totalUsuarios = 50000;
var lote = []; // Array temporal para guardar grupos de usuarios
var tamanoLote = 5000; // Insertaremos de 5000 en 5000 para ser eficientes

print("Iniciando la generación de 50,000 usuarios mas");

for (var i = 0; i < totalUsuarios; i++) {
        
    // Historial de compras: Asegurar suficiente "Producto 1" 
    var historial = [];
    var numCompras = Math.floor(Math.random() * 5) + 1; // Entre 1 y 5 compras
    for (var j = 0; j < numCompras; j++) {
        // 30% de probabilidad de que sea "Producto 1", si no, otro producto aleatorio
        var nombreProducto = Math.random() < 0.3 ? "Producto 1" : "Producto " + Math.floor(Math.random() * 100);
        historial.push({
            producto: nombreProducto,
            fecha: new Date(new Date() - Math.random() * 10000000000) // Fecha aleatoria reciente
        });
    }

    // Tags: Asegurar suficiente "tag2" 
    var misTags = ["tag1", "generico"];
    if (Math.random() < 0.4) { // 40% de probabilidad de tener tag2
        misTags.push("tag2");
    }

    // Amigos: Algunos con más de 1000 
    // 10% de probabilidad de tener muchos amigos (entre 1000 y 2000), si no, pocos (0 a 100)
    var numAmigos = Math.random() < 0.1 ? Math.floor(Math.random() * 1000) + 1000 : Math.floor(Math.random() * 100);

    // --- Construcción del Documento ---
    var usuario = {
        nombre: "Usuario " + i,
        email: "usuario" + i + "@ejemplo.com", 
        fecha_registro: new Date(), 
        puntos: Math.floor(Math.random() * 1000), // Aleatorio entre 0 y 1000
        historial_compras: historial, 
        direccion: { 
            calle: "Calle " + Math.floor(Math.random() * 100),
            ciudad: "Ciudad " + Math.floor(Math.random() * 10),
            codigo_postal: Math.floor(Math.random() * 90000) + 10000
        },
        tags: misTags, 
        activo: Math.random() < 0.8, // 80% activos, 20% inactivos (boolean)
        notas: "Nota generada automáticamente para usuario " + i, 
        visitas: Math.floor(Math.random() * 200), 
        cantidad_amigos: numAmigos, 
        preferencias: { 
            color: Math.random() < 0.3 ? "azul" : "rojo", // Probabilidad alta de azul para pruebas futuras
            idioma: "es",
            tema: "oscuro"
        }
    };

    // Agregar al lote
    lote.push(usuario);

    // Si el lote llega a 5000, insertamos en la BD y limpiamos el array
    if (lote.length === tamanoLote) {
        db.usuarios.insertMany(lote);
        lote = [];
        print("Insertados " + (i + 1) + " documentos...");
    }
}

// Insertar los restantes si sobró alguno
if (lote.length > 0) {
    db.usuarios.insertMany(lote);
}

print("¡Proceso finalizado! Se creó la colección 'usuarios' con 50,000 documentos.");