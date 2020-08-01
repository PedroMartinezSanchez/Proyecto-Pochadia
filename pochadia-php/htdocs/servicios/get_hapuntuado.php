<?php
$bd = new mysqli('localhost', 'root', '', 'pochadia2');

$id_juego = $_GET['id_juego'];
$id_usuario = $_GET['id_usuario'];
$puntos = $_GET['puntos'];

if ($puntos == "1") {
    $columna = "puntuacion_1_S";
}
if ($puntos == "2") {
    $columna = "puntuacion_2_S";
}
if ($puntos == "3") {
    $columna = "puntuacion_3_S";
}
if ($puntos == "4") {
    $columna = "puntuacion_4_S";
}
if ($puntos == "5") {
    $columna = "puntuacion_5_S";
}

$bd->query("SELECT i.puntuado, j.$columna as anterior from info_usuario_juego i, juego j, usuario u where i.id_juego = j.id_juego and i.id_usuario = u.id_usuario and j.id_juego = '$id_juego' and u.id_usuario= '$id_usuario' limit 1");

?>