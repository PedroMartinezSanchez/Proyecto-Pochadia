<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];
ejecutar("SELECT titulo, autor, anyo_lanzamiento, tipo_suscriptor, franquicia, idiomas, descripcion_short, descripcion_long, imagen_index, fecha_subida, disponible, multijugador, num_jugadores, id_juego from juego where id_juego = $id_juego");
?>