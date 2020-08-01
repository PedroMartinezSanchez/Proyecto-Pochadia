<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];
ejecutar("SELECT c.id_comentario, u.nombre, c.id_juego, c.votos_positivos, c.hora_fecha, c.cabecera, c.texto, u.imagen, c.recomendado from comentario c, usuario u where id_juego = $id_juego and c.id_usuario = u.id_usuario");

?>