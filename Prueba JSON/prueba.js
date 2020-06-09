
$(document).ready(function () {

    $.getJSON("prueba.json", function (result) {
        console.log(JSON.stringify(result));
        
        console.log(result.juegos.length); //Longuitud del array

        for (i = 0; i < 1; i++) {

            $("#Table").append('<thead><tr><th>' + result.juegos[i].titulo + '</th>'+
            '<th>' + result.juegos[i].autor + '</th></tr>' +
            '<tr><td>Fecha de Lanzamiento</td><td>' + result.juegos[i].anyo_lanzamiento + '</td></tr></thead>' +     
            '<tbody><tr><td>Desarrolladora</td><td>' + result.juegos[i].franquicia + '</td></tr>'+
            '<tr><td>Idiomas</td><td>' + result.juegos[i].idiomas + '</td></tr>' +
            '<tr><td>Genero</td><td>Aventura, Rol</td></tr>' +
            '<tr><td>Modos de Juego</td><td>' + result.juegos[i].multijugador + '</td></tr>' +
            '<tr><td>Entradas compatibles</td><td>Teclado y ratón, Mando</td></tr></tbody>')
        }
    });

});
