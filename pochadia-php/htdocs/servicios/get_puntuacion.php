<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];

ejecutar("SELECT puntuacion_1_S, puntuacion_2_S, puntuacion_3_S, puntuacion_4_S, puntuacion_5_S from juego where id_juego = '$id_juego'");

?>