<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];
$id_usuario = $_GET['id_usuario'];

ejecutar("SELECT puntuado from info_usuario_juego where id_juego = $id_juego and id_usuario = $id_usuario;");

?>