<?php
include "conexion.php";

$id_usuario = $_GET['id_usuario'];
ejecutar("select j.id_juego, j.imagen_index from juego j, info_usuario_juego i where i.id_usuario='$id_usuario' and j.id_juego = i.id_juego and i.favorito = 1");

?>