<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];
$id_usuario = $_GET['id_usuario'];
ejecutar("SELECT r.id_respuesta, r.id_usuario, r.id_comentario, r.id_juego, r.votos_positivos, r.hora_fecha, r.texto, u.imagen, u.nombre FROM respuesta r, usuario u WHERE r.id_usuario = u.id_usuario and r.id_juego = $id_juego");

?>