$(document).ready(function () {

    $.getJSON("cabecera.json", function (data) {
        console.log(JSON.stringify(data));
        
        console.log(data.usuarios.length); //Longuitud del array
        $("#img_desplegable").attr("src",data.usuarios[1].img_perfil);
        $("#img_card").attr("src",data.usuarios[1].img_perfil);
        $("#nombre_usu").text(data.usuarios[1].nombre);
        
    });

});
