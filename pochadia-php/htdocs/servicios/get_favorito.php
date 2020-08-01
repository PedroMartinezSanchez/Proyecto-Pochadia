<?php
include "conexion.php";

$id_usuario = $_GET['id_usuario'];
$id_juego = $_GET['id_juego'];

ejecutar("SELECT favorito from info_usuario_juego where id_usuario = '$id_usuario' and id_juego = $id_juego");

?>